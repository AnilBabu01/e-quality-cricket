import React from "react";
import AboutUs from "../../components/home/aboutUs";
import FeaturedProducts from "../../components/home/featuredProducts";
import TopSellers from "../../components/home/topSellers";
import "./style.scss";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import sliderImg from "../../assets/slider1.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Cricket accessories",
    imgPath: sliderImg,
  },
];

const Home = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <div className="home-container">
      <div className="home-inner-container">
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 475,
                    display: "block",
                    maxWidth: "100%",
                    overflow: "hidden",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <TopSellers />
        <FeaturedProducts />
        <AboutUs />
      </div>
    </div>
  );
};

export default Home;
