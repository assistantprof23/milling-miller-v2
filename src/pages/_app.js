import '../styles/theme.css'; // <-- new: global dark theme import
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // ensure theme class/attribute is present for any server/client mismatch
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
