import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import classnames from "classnames";
import {Poppins} from '@next/font/google'


const roboto = Poppins({
  weight: '400',
  subsets: ['latin'],
})


function MyApp({Component, pageProps}) {
  return (
    <main className={classnames(roboto.className, 'min-vh-100')}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
