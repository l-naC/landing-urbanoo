import React from "react";
import Slider from "./Carousel/Slider";

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
    // <Container fluid className="h-screen">
    //   <Row className="h-100 align-items-center">
    //     <Col sm={6}>
    //       <Col sm={8} className="m-auto text-center">
    //         <h2>Parcours</h2>
    //         <p>
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
    //           congue velit aliquet ullamcorper semper. Mi mi ullamcorper
    //           fermentum maecenas. Eleifend feugiat arcu volutpat sit vitae.
    //         </p>
    //         <ButtonL name="Download" />
    //       </Col>
    //     </Col>
    //     <Col sm={6}>

    //     </Col>
    //   </Row>
    // </Container>
    <Slider slides={images} />
  );
}

export default Features;
