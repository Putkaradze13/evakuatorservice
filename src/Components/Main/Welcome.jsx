import React from "react";

import { BsTruckFlatbed } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { FaCheckDouble } from "react-icons/fa";

import "./main.css";

export default function Welcome() {
  return (
    <section id="welcome-section" className="welcome-section">
      <div className="bg-image"></div>

      <div className="bg-text">
        <section className="features">
          <h2 className="welcome-main-header">ჩვენ შემოთავაზებაა</h2>
          <div className="grid">
            <div className="icon">
              <BsTruckFlatbed />
            </div>
            <div className="desc">
              <h2 className="desc-header">მთელი საქართველოს მასშტაბით</h2>
              <p>
                ჩვენ გთავაზობთ ევაკუატორით სხვადასხვა სახის ავტომობილების
                გადაზიდვას როგორც აჭარაში, ასევე მთელი საქართველოს ტერიტორიაზე.
              </p>
            </div>
          </div>

          <div className="grid">
            <div className="icon">
              <FaHandshake />
            </div>
            <div className="desc">
              <h2 className="desc-header">პროფესიონალიზმი</h2>
              <p>
                ევაკუატორების მაღალკვალიფიციური და გამოცდილების მქონე
                ოპერატორები აჩვენებენ პროფესიონალიზმს მომხმარებლებთან
                ურთიერთობისას.
              </p>
            </div>
          </div>

          <div className="grid">
            <div className="icon">
              <FaCheckDouble />
            </div>
            <div className="desc">
              <h2 className="desc-header">ხარისხი და უსაფრთხოება</h2>
              <p>
                გამოცდილი და ყურადღებიანი მძღოლები ფრთხილად ამუშავებენ
                მანქანებს, რაც უზრუნველყოფს როგორც ავტომობილის, ასევე მისი
                მგზავრობის უსაფრთხოებას.
              </p>
            </div>
          </div>

          <div className="grid">
            <div className="icon">
              <GoClockFill />
            </div>
            <div className="desc">
              <h2 className="desc-header">24/7 ხელმისაწვდომობა</h2>
              <p>
                გადაუდებელი შემთხვევები შეიძლება მოხდეს ნებისმიერ დროს, ამიტომ
                ჩვენი სანდო სერვისი უზრუნველყოფს დახმარების ხელმისაწვდომობას
                დღე-ღამის განმავლობაში.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
