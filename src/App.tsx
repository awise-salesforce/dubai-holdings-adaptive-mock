import { useState, useEffect } from 'react';
import { initMockController, type ConversationEntry } from './mockController';
import ChatBot from './components/ChatBot';
import ContentZone from './components/ContentZone';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';

if (!window.AdaptiveWebsite) {
  initMockController();
}

function App() {
  const [conversationMessages, setConversationMessages] = useState<ConversationEntry[]>([]);
  const [showChatBot, setShowChatBot] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const handleMinimize = () => setShowChatBot(false);
  const handleMaximize = () => setShowChatBot(true);
  const handleConversationOpened = () => setShowChatBot(true);

  const handleConversationReady = () => {
    setIsReady(true);
  };

  const handleConversationClosed = () => {
    setShowChatBot(false);
    setConversationMessages([]);
  };

  const handleMessageReceived = (event: CustomEvent) => {
    const entry = window.AdaptiveWebsite.util.parseEntryPayload(event.detail.conversationEntry);
    setConversationMessages(prev => [...prev, entry]);
  };

  const handleInitialMessageFromUser = (textToSend: string) => {
    window.AdaptiveWebsite.initializeConversation().then(() => {
      setTimeout(() => {
        window.AdaptiveWebsite.sendTextMessage(textToSend);
      }, 800);
    });
  };

  useEffect(() => {
    const Events = window.AdaptiveWebsite.Events;
    window.addEventListener(Events.ON_EMBEDDED_MESSAGE_SENT, handleMessageReceived as EventListener);
    window.addEventListener(Events.ON_EMBEDDED_MESSAGING_CONVERSATION_READY, handleConversationReady);
    window.addEventListener(Events.ON_EMBEDDED_MESSAGING_CONVERSATION_OPENED, handleConversationOpened);
    window.addEventListener(Events.ON_EMBEDDED_MESSAGING_CONVERSATION_CLOSED, handleConversationClosed);
    window.addEventListener(Events.ON_EMBEDDED_MESSAGING_WINDOW_MINIMIZED, handleMinimize);
    window.addEventListener(Events.ON_EMBEDDED_MESSAGING_WINDOW_MAXIMIZED, handleMaximize);
    return () => {
      window.removeEventListener(Events.ON_EMBEDDED_MESSAGE_SENT, handleMessageReceived as EventListener);
      window.removeEventListener(Events.ON_EMBEDDED_MESSAGING_CONVERSATION_READY, handleConversationReady);
      window.removeEventListener(Events.ON_EMBEDDED_MESSAGING_CONVERSATION_OPENED, handleConversationOpened);
      window.removeEventListener(Events.ON_EMBEDDED_MESSAGING_CONVERSATION_CLOSED, handleConversationClosed);
      window.removeEventListener(Events.ON_EMBEDDED_MESSAGING_WINDOW_MINIMIZED, handleMinimize);
      window.removeEventListener(Events.ON_EMBEDDED_MESSAGING_WINDOW_MAXIMIZED, handleMaximize);
    };
  }, []);

  useEffect(() => {
    if (conversationMessages.length > 0) {
      setShowChatBot(true);
    } else {
      setShowChatBot(false);
    }
  }, [conversationMessages]);

  const isStandalone = !!document.getElementById('root');

  return (
    <>
      {isStandalone && (
        <div className="background-site">
          <div className="bg-hero">
            <div className="bg-hero-overlay">
              <h1>Dubai Holdings</h1>
              <p>Premium Real Estate Portfolio</p>
            </div>
          </div>
        </div>
      )}
      <div className="app">
        {isReady && (
          <>
            <SearchBar show={!showChatBot} onInitialMessage={handleInitialMessageFromUser} />
            <Header show={showChatBot} />
            <div className="conversation-container">
              <ChatBot show={showChatBot} />
              <ContentZone show={showChatBot} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
