
import App from './_app';
import Home from './index.js/index.js.js';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <App Component={Component} pageProps={pageProps} />
    </div>
  );
}
