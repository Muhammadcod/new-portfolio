import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <div className="site-wrapper overflow-hidden position-relative">
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <footer className="gr-py-md-11 gr-pt-0 gr-pb-11">
        <div className="container">
          <div className="text-center">
            <p className="heading-small text-uppercase">
              © 2020 All RIght reseved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MyApp;
