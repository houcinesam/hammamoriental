import React from 'react'

function Footer() {
  return (
    <div className="container mx-auto text-center bg-gray-800 text-white py-8">
   
    <p className="mb-2">Adresse : 28 rue du bout de la rue hombourg-haut</p>
    <p className="mb-2">Téléphone : +33 123 456 789 | Email : contact@example.com</p>
    <div className="mb-2">
      Suivez-nous sur les réseaux sociaux :{" "}
      <a href="#" className="text-blue-400 hover:text-blue-600 mr-2">
        Facebook
      </a>{" "}
      |{" "}
      <a href="#" className="text-blue-400 hover:text-blue-600 mr-2">
        Twitter
      </a>{" "}
      |{" "}
      <a href="#" className="text-blue-400 hover:text-blue-600">
        Instagram
      </a>
    </div>
    <p className="">&copy; créé par: David Abruzzo Tous droits réservés.</p>
    <p> email: davidabruzzogames@gmail.com</p>
   
   
  </div>
  
  )
}

export default Footer