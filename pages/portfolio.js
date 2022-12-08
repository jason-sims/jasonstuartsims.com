import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GithubSocial from "../public/assets/ghsocial.png";
import Image from "next/image";

export default function Portfolio() {
    return (
      <div>
        <Head>
          <title>Jason Sims</title>
          <meta name="description" content="Jason Sims is a product manager and developer living in London, UK." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <div id="about" className="max-w-[1240px] h-auto pt-40 p-6 m-auto sm:w-9/12 md:w-7/12">
          <div>
          <h1 className="uppercase pb-10">Portfolio</h1>
          <div className="border border-white  h-auto m-auto ">
            <Image src={GithubSocial} alt="/" />
          </div>

            <h2 className="uppercase py-4">Background
            </h2>
            <p className="font-medium text-base text-justify leading-relaxed py-2">
             I wanted to create a personal portfolio site to showcase my work and also develop my Next.js & Tailwind skills.
             </p>
            <h2 className="uppercase pb-4">Approach    
            </h2>
            <p className="font-medium text-base text-justify leading-relaxed py-2">
             I developed an initial release and my intention is to iterate on the site seeking direct feedback on both the content and code base.
             </p>
            <h2 className="uppercase pb-4">Outcome
            </h2>
            <p className="font-medium text-base text-justify leading-relaxed py-2">
             Please reach out and let me know below what you think
             </p>
             
          </div>

        
    </div>
        <Footer />
      </div>
    );
  }