import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Gym Website</title>
        <meta name="description" content="Professional Gym Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;