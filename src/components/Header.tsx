import './Header.css';

const Header: React.FC<{ show: boolean }> = ({ show }) => {
  const AGENT_NAME = 'Meraas Concierge';

  if (!show) return null;

  return (
    <div className="header-container">
      <div className="agent-name">
        <h3>{AGENT_NAME}</h3>
      </div>
      <button
        className="end-conversation-button"
        onClick={() => window.AdaptiveWebsite.endConversation()}
      >
        End Conversation
      </button>
      <button
        className="minimize-button"
        onClick={() => window.AdaptiveWebsite.minimize()}
        aria-label="Minimize"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 18 18" fill="none">
          <path d="M5 7L9 11L13 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default Header;
