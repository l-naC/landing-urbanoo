import React from "react";
import $ from "jquery";
import { Container, Col, Row } from "react-bootstrap";
import ButtonL from "./Button";
import { css } from "@emotion/react";

class SliderConntent extends React.Component {
  static defaultProps = {
    count: 1,
    timeToSlide: 5000,
    showDots: true,
    pauseOnMouseOver: true,
    responsive: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      count: props.count,
      lastIndex: Math.ceil(props.children.length / props.count) - 1,
      interval: null,
    };
    this.interval = false;
  }

  setSlide = (i) => {
    this.setState({
      index: i,
    });
  };

  getSlides = () => {
    const { children } = this.props;
    let slides = [];
    let i = 0;
    while (i < children.length) {
      let slideItems = [];
      for (var j = 0; j < this.state.count && i < children.length; j++) {
        let slideItem = (
          <div key={i} className="slider-item">
            {children[i]}
          </div>
        );
        slideItems.push(slideItem);
        i++;
      }
      let slide = (
        <div key={i} className="slider-slide">
          {slideItems}
        </div>
      );
      slides.push(slide);
    }
    return slides;
  };

  identifyCount = () => {
    const { responsive, count, children } = this.props;
    let width = $(window).width();
    let currentCount = count;
    responsive.forEach((media) => {
      if (media.min_width < width) {
        currentCount = media.count;
      }
    });
    if (currentCount !== this.state.count) {
      this.setState({
        index: 0,
        count: currentCount,
        lastIndex: Math.ceil(children.length / currentCount) - 1,
      });
    }
  };

  componentWillMount() {
    this.identifyCount();
    $(window).resize(this.identifyCount);
  }

  render() {
    const { index } = this.state;
    const { showDots } = this.props;
    let contentStyle = { left: index * -100 + "%" };
    const slides = this.getSlides();

    return (
      <div className="slider">
        <div className="slider-content" style={contentStyle}>
          {slides}
        </div>
        {showDots && slides.length > 1 && (
          <div className="slider-dots">
            {slides.map((slide, i) => {
              const onClick = i === index ? null : () => this.setSlide(i);
              return (
                <span
                  key={i}
                  className={`slider-dot ${i === index ? "selected" : ""}`}
                  onClick={onClick}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          title: "Connexion",
          text: "En vous connectant à l'application, vous pourrez retrouver tous vos parcours qu'ils soient en cours ou bien terminé.",
          image: "https://i.ibb.co/jzTWbG9/login.png",
        },
        {
          title: "Carte",
          text: "Notre carte vous permettra de visualiser votre parcours dans sa globalité avec les différentes étapes",
          image: "https://i.ibb.co/H2sMXDc/map.png",
        },
        {
          title: "Etape",
          text: "A tous moment vous pourrez retrouver les étapes de votre balade avec notre menu de navigation",
          image: "https://i.ibb.co/rH3Nswk/step.png",
        },
        {
          title: "Descriptions",
          text: "Pour chaque étape clé de votre parcours, vous aurez une description textuelle, ou bien vocale du lieu ou vous êtes accompagné d'une image.",
          image: "https://i.ibb.co/h1FvWvG/details.png",
        },
      ],
    };
  }

  render() {
    const SlideSettings = {
      count: 1,
      timeToSlide: 500,
      showDots: true,
      pauseOnMouseOver: true,
      responsive: [
        {
          min_width: 700,
          count: 2,
        },
        {
          min_width: 1000,
          count: 1,
        },
      ],
    };
    return (
      <SliderConntent {...SlideSettings}>
        {this.state.items.map((item, i) => {
          return (
            <Container key={i}>
              <Row className="h-100 align-items-center slider-responsive py-3">
                <Col sm={6} className="py-2">
                  <Col sm={8} className="m-auto text-center">
                    <h2>{item.title}</h2>
                    <p className="px-2">{item.text}</p>
                    <ButtonL name="Download" />
                  </Col>
                </Col>
                <Col sm={6}>
                  <div
                    className="bg-slides"
                    style={{ backgroundImage: `url(${item.image})`}}
                  />
                </Col>
              </Row>
            </Container>
          );
        })}
      </SliderConntent>
    );
  }
}

export default Slider;
