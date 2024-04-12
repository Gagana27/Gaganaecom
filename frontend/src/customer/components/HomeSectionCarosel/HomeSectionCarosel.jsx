import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
export const HomeSectionCarosel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);
  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative p-5">
        <AliceCarousel
          mouseTracking
          items={items}
          infinite
          responsive={responsive}
          disableButtonsControls
        />
        <Button
          variant="contained"
          className="z-50 "
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
          }}
          aria-label="next"
        >
          <ArrowForwardIosIcon sx={{ transform: "rotate(90deg)" }} />
        </Button>

        <Button
          variant="contained"
          className="z-50 "
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
          }}
          aria-label="next"
        >
          <ArrowForwardIosIcon sx={{ transform: "rotate(90deg)" }} />
        </Button>
      </div>
    </div>
  );
};
