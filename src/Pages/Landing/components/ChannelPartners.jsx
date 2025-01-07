import React from "react";
export default function ChannelPartners() {
  const partners = [
    {
      name: "TATA CAPITAL",
      logo: "/Tata_Capital_Logo.png",
    },
    {
      name: "BAJAJ FINSERV",
      logo: "/Bajaj_Finserve_Logo.jpg",
    },
    {
      name: "POONAWALLA FINCORP",
      logo: "/Poonawalla_Fincorp_Limited_Logo.jpg",
    },
    {
      name: "L&T Finance",
      logo: "/LT_Finance_Logo.png",
    },
    {
      name: "ADITYA BIRLA CAPITAL",
      logo: "/Aditya Birla_Logo.png",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Channel Partners
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full h-auto max-h-22 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
