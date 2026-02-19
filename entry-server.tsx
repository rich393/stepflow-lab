import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Terms } from './components/Terms';

export function render(page: string): string {
  let element: React.ReactElement;

  switch (page) {
    case 'privacy':
      element = <PrivacyPolicy />;
      break;
    case 'terms':
      element = <Terms />;
      break;
    default:
      element = <App />;
      break;
  }

  return renderToString(element);
}
