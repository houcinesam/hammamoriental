import React from "react";

const PriceList = () => {
  // Données des prix
  const prices = [
    { item: "une personne", price: "27€" },
    { item: "Gommage tout le corps", price: "10€" },
    { item: "Gommage dos", price: "5€" },
    { item: "A partr de 4 personnes", price: "25€" },
    { item: "Moins de 10 ans ", price: "15€" },
    { item: "Deux heures ", price: "50€" },
  ];

  return (
    <div className=" text-3xl text-gray-700 ml-[5%] mt-10 ">
      <h2 className="text-5xl mb-8 text-bold mt-10">Tarifs</h2>
      <table  className="table-auto divide-y divide-gray-200">
        <thead>
          <tr>
            <th></th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody className="border-2 border-buttonColor">
          {prices.map((item, index) => (
            <tr className="border-2 border-buttonColor py-10" key={index} >
              <td>{item.item}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceList;
