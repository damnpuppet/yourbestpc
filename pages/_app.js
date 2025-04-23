// pages/_app.js
import '../styles/globals.css';
import { ConfigProvider } from '../context/ConfigContext';

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default MyApp;
