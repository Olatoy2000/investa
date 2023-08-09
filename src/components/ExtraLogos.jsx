import React from "react";
import logoBbc from "@/images/logos/bbc.svg";
import logoCbs from "@/images/logos/cbs.svg";
import logoCnn from "@/images/logos/cnn.svg";
import logoFastCompany from "@/images/logos/fast-company.svg";
import logoForbes from "@/images/logos/forbes.svg";
import logoHuffpost from "@/images/logos/huffpost.svg";
import logoTechcrunch from "@/images/logos/techcrunch.svg";
import logoWired from "@/images/logos/Wired.svg";

const ExtraLogos = () => {
  const logos = [
    {
      _id: 2001,
      title: "Forbes",
      logo: logoForbes,
    },
    {
      _id: 2002,
      title: "TechCrunch",
      logo: logoTechcrunch,
    },
    {
      _id: 2003,
      title: "Wired",
      logo: logoWired,
    },
    {
      _id: 2004,
      title: "CNN",
      logo: logoCnn,
    },
    {
      _id: 2005,
      title: "BBC",
      logo: logoBbc,
    },
    {
      _id: 2006,
      title: "CBS",
      logo: logoCbs,
    },
    {
      _id: 2007,
      title: "Fast Company",
      logo: logoFastCompany,
    },
    {
      _id: 2008,
      title: "HuffPost",
      logo: logoHuffpost,
    },
  ];
  return (
    <div className="relative -mt-">

    </div>
  ) ;
};

export default ExtraLogos;
