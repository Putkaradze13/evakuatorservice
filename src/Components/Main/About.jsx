import React from "react";
import ImageSlider from "../ImageSlider/ImageSlider";

import "./main.css";

import truck1 from "../../Assets/fordTruck1.jpeg";
import truck2 from "../../Assets/fordTruck2.jpg";
import truck3 from "../../Assets/fordTruck3.jpeg";
import truck5 from "../../Assets/fordTruck5.jpeg";
import truck6 from "../../Assets/fordTruck6.jpeg";
import truck9 from "../../Assets/fordTruck9.jpeg";
import truck11 from "../../Assets/mercedesTruck2.jpeg";
import truck12 from "../../Assets/mercedesTruck3.jpeg";
import truck13 from "../../Assets/mercedesTruck4.jpeg";
import truck14 from "../../Assets/mercedesTruck5.jpeg";
import truck15 from "../../Assets/mercedesTruck6.jpeg";
import truck16 from "../../Assets/mercedesTruck7.jpeg";
import truck17 from "../../Assets/mercedesTruck8.jpeg";
import truck18 from "../../Assets/mercedesTruck9.jpeg";

const IMAGES = [
  { url: truck1, alt: "Car One" },
  { url: truck2, alt: "Car Two" },
  { url: truck3, alt: "Car Three" },
  { url: truck5, alt: "Car Five" },
  { url: truck6, alt: "Car Six" },
  { url: truck9, alt: "Car Nine" },
  { url: truck11, alt: "Car Eleven" },
  { url: truck12, alt: "Car Twelve" },
  { url: truck13, alt: "Car Thirteen" },
  { url: truck14, alt: "Car Fourteen" },
  { url: truck15, alt: "Car Fifteen" },
  { url: truck16, alt: "Car Sixteen" },
  { url: truck17, alt: "Car Seventeen" },
  { url: truck18, alt: "Car Eighteen" },
];

export default function About() {
  return (
    <div>
      <section id="about-section" className="about-section">
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            aspectRatio: "10 / 6",
            margin: "0 auto",
          }}
        >
          <ImageSlider images={IMAGES} />
        </div>
        <div className="about-description-container">
          <h1>ჩვენს შესახებ:</h1>
          <p>
            ჩვენ ძირითადი ბაზაა აჭარა, მაგრამ ვახორციელებთ გადაზიდვებს
            ნებისმიერი მიმართულებით.
          </p>
          <h2>ჩვენთან მოსვლით მიიღებთ:</h2>
          <ul className="about-list">
            <li>პროფესიონალურ მომსახურებას</li>
            <li>გამჭვირვალე და საუკეთესო ფასებს</li>
            <li>ავტომობილების უსაფრთხო ტრანსპორტირებას</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
