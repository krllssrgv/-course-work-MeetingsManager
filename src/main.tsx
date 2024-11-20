import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TrackJS } from 'trackjs';
import { App } from '@app';

TrackJS.install({
  token: '1db6195aaa4c4bfd89c6d2880533a821',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
