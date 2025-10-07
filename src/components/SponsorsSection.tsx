import React from "react";
import sponsor1 from "../assets/sponsor1.jpg";
import sponsor2 from "../assets/sponsor2.jpg";
import sponsor3 from "../assets/sponsor3.jpg";
import sponsor4 from "../assets/sponsor4.jpg";
import sponsor5 from "../assets/sponsor5.jpg";
import sponsor6 from "../assets/sponsor6.jpg";
import sponsor7 from "../assets/sponsor7.jpg";
import sponsor9 from "../assets/sponsor9.jpg";
import sponsor10 from "../assets/sponsor10.jpg";
import sponsor11 from "../assets/sponsor11.jpg";
import sponsor12 from "../assets/sponsor12.jpg";
import sponsor13 from "../assets/sponsor13.jpg";
import sponsor14 from "../assets/sponsor14.jpg";




const sponsors = [
  { name: "CISOFT", logo: sponsor1, url: "https://www.cisoft.org.py/" },
   { name: "DIGIPAR", logo: sponsor2, url: "https://www.digipar.com/" },
   { name: "INTEGRADEVS", logo: sponsor3, url: "https://www.integradevs.com/" },
   { name: "WILLDOM", logo: sponsor4, url: "https://willdom.com/" },
   { name: "ITTI", logo: sponsor5, url: "https://www.itti.digital/" },
   { name: "SODEP", logo: sponsor6, url: "https://sodep.com.py/" },
  {  name: "NESTLE", logo: sponsor7, url: "https://www.nestle.com.py/" },
  {  name: "SMARTSOIL", logo: sponsor13, url: "https://smartsoilpy.com/" },
  {  name: "INGALCA", logo: sponsor9, url: "https://www.ingalca.com/" },
  {  name: "DATAPAR", logo: sponsor10, url: "https://datapar.com.py/" },
  {  name: "FREELANCERS", logo: sponsor11, url: "https://www.freelancer.com.py/" },
  {  name: "GDG ENCARNACION", logo: sponsor12, url: "https://gdg.community.dev/gdg-encarnacion/" },
   {  name: "KUROSU", logo: sponsor14, url: "https://www.kurosu.com.py/" },
];

export const SponsorsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Nuestros Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="mx-auto h-20 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
