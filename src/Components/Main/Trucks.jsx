import React from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import "./main.css";

import truck1 from "../../Assets/fordTruck1.jpeg";
import truck2 from "../../Assets/fordTruck2.jpg";
import truck3 from "../../Assets/fordTruck3.jpeg";
import truck4 from "../../Assets/fordTruck4.jpeg";
import truck5 from "../../Assets/fordTruck5.jpeg";
import truck6 from "../../Assets/fordTruck6.jpeg";
import truck7 from "../../Assets/fordTruck7.jpeg";
import truck8 from "../../Assets/fordTruck8.jpeg";
import truck9 from "../../Assets/fordTruck9.jpeg";
import truck10 from "../../Assets/mercedesTruck1.jpeg";
import truck11 from "../../Assets/mercedesTruck2.jpeg";
import truck12 from "../../Assets/mercedesTruck3.jpeg";
import truck13 from "../../Assets/mercedesTruck4.jpeg";
import truck14 from "../../Assets/mercedesTruck5.jpeg";
import truck15 from "../../Assets/mercedesTruck6.jpeg";
import truck16 from "../../Assets/mercedesTruck7.jpeg";
import truck17 from "../../Assets/mercedesTruck8.jpeg";
import truck18 from "../../Assets/mercedesTruck9.jpeg";
import truck19 from "../../Assets/mercedesTruck10.jpeg";

const IMAGES1 = [
  { url: truck1, alt: "Car One" },
  { url: truck2, alt: "Car Two" },
  { url: truck3, alt: "Car Three" },
  { url: truck4, alt: "Car Four" },
  { url: truck5, alt: "Car Five" },
  { url: truck6, alt: "Car Six" },
  { url: truck7, alt: "Car Seven" },
  { url: truck8, alt: "Car Eight" },
  { url: truck9, alt: "Car Nine" },
];
const IMAGES2 = [
  { url: truck10, alt: "Car Ten" },
  { url: truck11, alt: "Car Eleven" },
  { url: truck12, alt: "Car Twelve" },
  { url: truck13, alt: "Car Thirteen" },
  { url: truck14, alt: "Car Fourteen" },
  { url: truck15, alt: "Car Fifteen" },
  { url: truck16, alt: "Car Sixteen" },
  { url: truck17, alt: "Car Seventeen" },
  { url: truck18, alt: "Car Eighteen" },
  { url: truck19, alt: "Car Nineteen" },
];

export default function Trucks(props) {
  return (
    <div>
      <section id="trucks-section" className="trucks-section">
        <TruckComponent
          images={IMAGES1}
          truckName="Ford Transit 2.5 2003"
          platform="4.90 მ"
          details={[
            { attribute: "პლატფორმა", value: "4.90 მ" },
            { attribute: "ჯალამბარი", value: "დიახ" },
            { attribute: "ხიდები", value: "დიახ" },
            { attribute: "ტევადობა", value: "1" },
          ]}
        />
        <TruckComponent
          images={IMAGES2}
          truckName="Mercedes Sprinter 2.2 2009"
          platform="5.70 მ"
          winch="დიახ"
          details={[
            { attribute: "პლატფორმა", value: "5.70 მ" },
            { attribute: "ჯალამბარი", value: "დიახ" },
            { attribute: "ხიდები", value: "დიახ" },
            { attribute: "მისაბმელი", value: "დიახ" },
            { attribute: "ტევადობა", value: "1+1" },
          ]}
        />
      </section>
    </div>
  );
}

function TruckComponent(props) {
  return (
    <div className="container">
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          aspectRatio: "10 / 6",
          margin: "0 auto",
        }}
      >
        <ImageSlider images={props.images} />
      </div>

      <h1 className="truck-name">{props.truckName}</h1>

      <h2 className="details-title">დეტალები</h2>

      <ul className="truck-details">
        {props.details.map((detail, index) => (
          <li key={index}>
            <span className="detail-attribute">{detail.attribute}:</span>
            <span className="detail-value">{detail.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
