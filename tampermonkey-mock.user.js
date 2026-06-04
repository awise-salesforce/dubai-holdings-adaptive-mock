// ==UserScript==
// @name         Dubai Holdings - Adaptive Web Agent (MOCK)
// @namespace    https://dubaiholding.com/
// @version      1.0
// @description  Injects mock Adaptive Web Agent chat widget onto Dubai Holdings sites (no backend required)
// @match        https://www.dubaiholding.com/*
// @match        https://dubaiholding.com/*
// @match        https://meraas.com/*
// @match        https://www.meraas.com/*
// @match        https://www.nakheel.com/*
// @match        https://nakheel.com/*
// @match        https://dp.ae/*
// @match        https://www.dp.ae/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // ─── CONFIGURATION ────────────────────────────────────────────────────────────
  // Point sdkUrl to wherever you host mock-sdk-output.js:
  //   Option A: Local dev server (run `npm run dev` in the mock-app folder)
  //   Option B: Serve dist/mock-sdk-output.js from any static host / GitHub raw
  const CONFIG = {
    // GitHub Pages hosted version:
    sdkUrl: 'https://awise-salesforce.github.io/dubai-holdings-adaptive-mock/mock-sdk-output.js',

    // For local development: serve the file with a simple HTTP server
    // e.g. `npx serve dist` in the mock-app folder, then use:
    // sdkUrl: 'http://localhost:3000/mock-sdk-output.js',
  };
  // ──────────────────────────────────────────────────────────────────────────────

  function initializeWidget() {
    try {
      console.log('[DH Mock Agent] Checking for SDK functions...');

      if (typeof window.addControllerToPage !== 'function') {
        console.error('[DH Mock Agent] addControllerToPage not found');
        return false;
      }

      if (typeof window.addAppToPage !== 'function') {
        console.error('[DH Mock Agent] addAppToPage not found');
        return false;
      }

      console.log('[DH Mock Agent] Initializing mock controller...');
      window.addControllerToPage();

      console.log('[DH Mock Agent] Initializing app...');
      window.addAppToPage();

      // The mock controller auto-fires CONVERSATION_READY, no real config needed
      if (typeof window.AdaptiveWebsite !== 'undefined' && typeof window.AdaptiveWebsite.initialize === 'function') {
        window.AdaptiveWebsite.initialize({});
        console.log('[DH Mock Agent] Widget initialized (mock mode - no backend)');
      }

      return true;
    } catch (error) {
      console.error('[DH Mock Agent] Error:', error);
      return false;
    }
  }

  function loadSDK() {
    const script = document.createElement('script');
    script.src = CONFIG.sdkUrl;
    script.async = false;

    script.onload = () => {
      console.log('[DH Mock Agent] SDK loaded');
      if (!initializeWidget()) {
        setTimeout(() => {
          if (!initializeWidget()) {
            console.error('[DH Mock Agent] Failed to initialize after retry');
          }
        }, 500);
      }
    };

    script.onerror = () => {
      console.error('[DH Mock Agent] Failed to load SDK from', CONFIG.sdkUrl);
      console.log('[DH Mock Agent] Make sure to serve mock-sdk-output.js. Run: npx serve dist');
    };

    document.head.appendChild(script);
  }

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadSDK);
  } else {
    loadSDK();
  }
})();
