import { useState } from 'react';
import './SearchBar.css';

const SearchBar: React.FC<{ show: boolean; onInitialMessage: (text: string) => void }> = ({ show, onInitialMessage }) => {
  const [searchText, setSearchText] = useState('');
  const [hasSent, setHasSent] = useState(false);

  const searchActions = [
    { text: 'Waterfront Living', value: 'Waterfront residences' },
    { text: 'Urban Apartments', value: 'Urban apartments' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const nativeEvent = e.nativeEvent as SubmitEvent;
    const submitter = nativeEvent.submitter as HTMLButtonElement | null;
    const buttonVal = submitter?.value || '';
    const textToSend = buttonVal || searchText;
    if (!textToSend) return;

    if (!hasSent) {
      onInitialMessage(textToSend);
      setHasSent(true);
    } else {
      window.AdaptiveWebsite.sendTextMessage(textToSend);
    }
    window.AdaptiveWebsite.maximize();
  };

  if (!show) return null;

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-bar">
          <div className="search-icon">
            <svg viewBox="0 0 24 24" fill="none" width="20" height="20" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
          </div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Ask about Meraas residences..."
            className="search-input"
          />
          <div className="search-actions">
            {searchActions.map((action, i) => (
              <button
                key={i}
                type="submit"
                name="buttonText"
                className="search-action-button"
                value={action.value}
              >
                {action.text}
              </button>
            ))}
          </div>
        </div>
      </form>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        className="expand-button"
        onClick={() => window.AdaptiveWebsite.maximize()}
      >
        <path d="M5 11L9 7L13 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

export default SearchBar;
