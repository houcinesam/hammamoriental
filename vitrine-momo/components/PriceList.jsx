import React from "react";

const PriceList = () => {
  // Données des prix
  const prices = [
    { item: "une personne", price: "27€" },
    { item: "Gommage tout le corps", price: "10€" },
    { item: "Gommage dos", price: "5€" },
    { item: "A partir de 4 personnes", price: "25€" },
    { item: "Moins de 10 ans ", price: "15€" },
    { item: "Deux heures ", price: "50€" },
  ];

  return (
    <div className="  flex  flex-col text-3xl md:text-5xl text-gray-700  mt-10 md:pd-10 text-logoBackground">
      <h2 className="text-5xl mb-8 text-bold mt-10">Tarifs</h2>
      <table  className="table-auto divide-y divide-gray-200">
        <thead>
          <tr>
            <th></th>
            <th className="pb-10">Prix /heure</th>
          </tr>
        </thead>
        <tbody className="border-2 border-buttonColor">
          {prices.map((item, index) => (
            <tr className="border-2 border-buttonColor py-10" key={index} >
              <td>{item.item}</td>
              <td className="flex justify-end  justify-end">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceList;
