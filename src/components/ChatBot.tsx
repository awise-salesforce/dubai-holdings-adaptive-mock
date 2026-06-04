import { useState, useEffect, useRef } from 'react';
import type { ConversationEntry, StaticContentMessageTextPayload } from '../mockController';
import './ChatBot.css';

const ChatBot: React.FC<{ show: boolean }> = ({ show }) => {
  const AGENT_NAME = 'Dubai Holdings Concierge';
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [entries, setEntries] = useState<ConversationEntry[]>([]);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const Events = window.AdaptiveWebsite.Events;

    const onTypingStart = () => setIsTyping(true);
    const onTypingStop = () => setIsTyping(false);
    const onMessage = (e: CustomEvent) => {
      const entry = window.AdaptiveWebsite.util.parseEntryPayload(e.detail.conversationEntry);
      setEntries(prev => [...prev, entry]);
    };

    window.addEventListener(Events.ON_EMBEDDED_MESSAGING_TYPING_INDICATOR_STARTED, onTypingStart);
    window.addEventListener(Events.ON_EMBEDDED_MESSAGING_TYPING_INDICATOR_STOPPED, onTypingStop);
    window.addEventListener(Events.ON_EMBEDDED_MESSAGE_SENT, onMessage as EventListener);
    return () => {
      window.removeEventListener(Events.ON_EMBEDDED_MESSAGING_TYPING_INDICATOR_STARTED, onTypingStart);
      window.removeEventListener(Events.ON_EMBEDDED_MESSAGING_TYPING_INDICATOR_STOPPED, onTypingStop);
      window.removeEventListener(Events.ON_EMBEDDED_MESSAGE_SENT, onMessage as EventListener);
    };
  }, []);

  useEffect(() => {
    messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight, behavior: 'smooth' });
  }, [entries, show]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    window.AdaptiveWebsite.sendTextMessage(inputText);
    setInputText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const getPayload = (entry: ConversationEntry): StaticContentMessageTextPayload | null => {
    try {
      const text = entry.entryPayload.abstractMessage.staticContent.text;
      const parsed = JSON.parse(text);
      return parsed;
    } catch {
      return { text: entry.entryPayload.abstractMessage.staticContent.text };
    }
  };

  const formatTime = (ts: number) => {
    if (!ts) return '';
    return new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleOptionClick = (e: React.MouseEvent<HTMLButtonElement>, option: { name: string }) => {
    window.AdaptiveWebsite.sendTextMessage(option.name);
    e.currentTarget.classList.add('selected');
  };

  if (!show) return null;

  return (
    <div className="chatbot-container">
      <div className="messages-container" ref={messagesRef}>
        {entries.filter(e => window.AdaptiveWebsite.util.isTextMessage(e)).map(entry => {
          const isUser = window.AdaptiveWebsite.util.isMessageFromEndUser(entry);
          const payload = getPayload(entry);
          if (!payload) return null;

          return (
            <div key={entry.identifier} className={`message ${isUser ? 'message-user' : 'message-bot'}`}>
              {!isUser && (
                <div className="chat-avatar">
                  <div className="chat-avatar-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <span className="chat-avatar-label">{AGENT_NAME}</span>
                </div>
              )}
              <div className="message-wrapper">
                <div className="message-content">
                  <div className="message-text">{payload.text}</div>
                </div>
                {payload.options && payload.options.length > 0 && (
                  <div className="message-choices">
                    {payload.options.map(opt => (
                      <button
                        key={opt.name}
                        className="choice-button"
                        onClick={(e) => handleOptionClick(e, opt)}
                      >
                        {opt.name}
                      </button>
                    ))}
                  </div>
                )}
                {entry.transcriptedTimestamp && (
                  <div className="message-timestamp">
                    {!isUser ? `${AGENT_NAME} · ` : "Sent · "}
                    {formatTime(entry.transcriptedTimestamp)}
                  </div>
                )}
              </div>
            </div>
          );
        })}
        {isTyping && (
          <div className="message message-bot">
            <div className="chat-avatar">
              <div className="chat-avatar-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="chat-avatar-label">{AGENT_NAME}</span>
            </div>
            <div className="message-wrapper">
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="message-input-form">
        <div className="message-input-container">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
            className="message-input"
            rows={1}
          />
        </div>
      </form>
    </div>
  );
};

export default ChatBot;
