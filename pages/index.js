import Head from 'next/head';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '../components/About';
import SelectWork from '../components/SelectWork';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jason Sims</title>
        <meta
          name="description"
          content="Jason Sims is a product manager and developer living in London, UK."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <SelectWork />
      <Footer />
    </div>
  );
}
