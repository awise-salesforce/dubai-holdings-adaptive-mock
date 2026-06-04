import { useState } from 'react';
import './SearchBar.css';

const SearchBar: React.FC<{ show: boolean; onInitialMessage: (text: string) => void }> = ({ show, onInitialMessage }) => {
  const [searchText, setSearchText] = useState('');
  const [hasSent, setHasSent] = useState(false);

  const searchActions = [
    { text: 'Explore Properties', value: 'Show me luxury villas' },
    { text: 'Waterfront Living', value: 'Waterfront apartments' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const buttonVal = (form.elements.namedItem('buttonText') as HTMLInputElement)?.value;
    const textVal = searchText;
    const textToSend = buttonVal || textVal;
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
            <svg viewBox="0 0 100 100" fill="none" width="24" height="24">
              <circle cx="50" cy="50" r="46" stroke="#C9A84C" strokeWidth="3"/>
              <path d="M50 10 L50 50 L85 70 M50 50 L15 70" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Ask about Dubai Holdings properties..."
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
