import React, { useCallback, useState, useEffect } from "react";
import "../assets/carousel.css";

export default function Carousel({ delay, children, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // function to detect keyboard event and then change the index
  const changeChild = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") {
        // If supposed previous child is < 0 set it to last child
        setCurrentIndex((a) => (a - 1 < 0 ? children.length - 1 : a - 1));
        // console.log(activeChild)
      } else if (e.key === "ArrowRight") {
        // If supposed next child is > length -1 set it to first child
        setCurrentIndex((a) => (a + 1 > children.length - 1 ? 0 : a + 1));
        // console.log(activeChild)
      }
    },
    [children.length]
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % children.length);
    }, delay);
    return () => clearInterval(interval);
  }, [currentIndex, delay]);

  // handle Change function for the next button
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % children.length);
  };

  // handle change function for the previous button
  const handlePrevious = () => {
    setCurrentIndex((currentIndex + children.length - 1) % children.length);
  };

  // Set and cleanup the event listener
  useEffect(() => {
    document.addEventListener("keydown", changeChild);

    return function cleanup() {
      document.removeEventListener("keydown", changeChild);
    };
  });

  return (
    <div className="carousel">
      <div className="main_card">
        <div className="card">
          <div className="display">
            {images ? (
              <div style={{ display: "flex", gap: "2rem" }}>
                <img width={50} src={images[currentIndex]} alt="img" />
                <img width={50} src={images[currentIndex]} alt="img" />
              </div>
            ) : (
              children[currentIndex]
            )}
          </div>
        </div>
        <div className="btns">
          <button className="primary_btn" onClick={handlePrevious}>
            Previous
          </button>
          <button className="secondary_btn" danger onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
