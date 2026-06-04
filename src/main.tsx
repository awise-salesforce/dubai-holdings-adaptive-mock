import { createRoot } from 'react-dom/client'
import { flushSync } from 'react-dom'
import App from './App'

// If #root exists (standalone dev mode), use it
const existingRoot = document.getElementById('root');
if (existingRoot) {
  createRoot(existingRoot).render(<App />);
} else {
  // Injected via Tampermonkey / sdk-output.js — create overlay container
  const root = document.createElement('div');
  root.id = 'dh-adaptive-agent-root';
  flushSync(() => {
    createRoot(root).render(<App />);
  });

  function appendToBody() {
    if (document.body) {
      document.body.appendChild(root);
      return true;
    }
    return false;
  }

  if (!appendToBody()) {
    const observer = new MutationObserver((_mutations, obs) => {
      if (document.body) {
        obs.disconnect();
        appendToBody();
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }
}
