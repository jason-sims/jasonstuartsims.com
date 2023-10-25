import Head from 'next/head';
import Main from '../components/Main';
import About from '../components/About';
import SelectWork from '../components/SelectWork';

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
      <Main />
      <About />
      <SelectWork />
    </div>
  );
}
