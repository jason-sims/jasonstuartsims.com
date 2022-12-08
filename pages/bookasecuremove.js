import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GeoVans from "../public/assets/geoameyvans.jpg";
import Image from "next/image";

export default function BookaSecureMove() {
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
          <h1 className="uppercase pb-10">Book a Secure Move</h1>
          <div className=" h-auto m-auto">
            <Image src={GeoVans} alt="/" />
          </div>
            <h2 className="uppercase py-4">Background
            </h2>
            <p className="font-medium text-base text-justify leading-relaxed py-2">
            Since 1994, the Prisoner Escort and Custody Services  (PECS) contract has outsourced the secure transport of prisoners across England & Wales including: adults; children and young people to and from Police Stations; Courts; Prisons; Secure Training Centres (STCs); and Secure Children’s Schools (SCHs).
On average 622,000 moves occur over any given year across the country, covering around 10.5 million miles of distance. 
            </p>
            
            <h2 className="uppercase pb-4">Approach    
            </h2>
            <p className="font-medium text-base text-justify leading-relaxed py-2">
             
            </p>
            <h2 className="uppercase pb-4">Outcome
            </h2>
            <p className="font-medium text-base text-justify leading-relaxed py-2">
          
            </p>
          </div>
        
    </div>
        <Footer />
      </div>
    );
  }