import React from "react";
import Slider from "./Slider";

function Features() {
  const images = [
    [
      "https://i.ibb.co/jzTWbG9/login.png",
      "Connexion",
      "En vous connectant à l'application, vous pourrez retrouver tous vos parcours qu'ils soient en cours ou bien terminé.",
    ],
    [
      "https://i.ibb.co/H2sMXDc/map.png",
      "Carte",
      "Notre carte vous permettra de visualiser votre parcours dans sa globalité avec les différentes étapes",
    ],
    [
      "https://i.ibb.co/rH3Nswk/step.png",
      "Etape",
      "A tous moment vous pourrez retrouver les étapes de votre balade avec notre menu de navigation",
    ],
    [
      "https://i.ibb.co/h1FvWvG/details.png",
      "Descriptions",
      "Pour chaque étape clé de votre parcours, vous aurez une description textuelle, ou bien vocale du lieu ou vous êtes accompagné d'une image.",
    ],
  ];

  return (
    // <Slider slides={images} />
    <Slider />
  );
}

export default Features;
