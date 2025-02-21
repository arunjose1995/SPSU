import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from './router';


// Ensure the "root" element exists in your index.html
const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error(
        "Root element not found. Ensure an element with id='root' exists in your index.html.",
    );
}

const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <Router />
    </StrictMode>,
);
