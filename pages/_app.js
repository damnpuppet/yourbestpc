import { ConfigProvider } from '../context/ConfigContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default MyApp;
