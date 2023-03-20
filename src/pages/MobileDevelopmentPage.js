import React from "react";
import ProjectInfo from "../components/ProjectInfo";

const MobileDevelopmentPage = () => {
  return (
    <div className="mobile-development-page space-y-8">
      <div>
        <ProjectInfo
          title="Hiara-diha"
          year={2023}
          frontend="React Native"
          backend="Firebase"
          description="Going back home in the night is not easy for every person. This application is made for everyone who is stuck in the bus stop (Uber like)."
        />
      </div>
      <div>
        <ProjectInfo
          title="Varobarotra"
          year={2023}
          frontend="React Native"
          backend="Django"
          description="Sellers can sell, users can buy every object they need (Vinted like)."
        />
      </div>
      <div>
        <ProjectInfo
          title="Sakafo Androany"
          year={2022}
          frontend="Flutter"
          backend="Firebase"
          description="People may not know what to cook today. The application generates examples of foods to cook every single day."
        />
      </div>
      <div>
        <ProjectInfo
          title="IM Reader"
          year={2022}
          frontend="Flutter"
          backend="Flask"
          description="An electronic book library application where every user can buy and reader it inside (Kindle like)."
        />
      </div>
      <div>
        <ProjectInfo
          title="NyToetrandro"
          year={2022}
          frontend="Flutter"
          backend="Firebase"
          description="A weather application. (AccuWeather like)"
        />
      </div>
      <div>
        <ProjectInfo
          title="E'goute-za"
          year={2022}
          frontend="Flutter"
          backend="Firebase"
          description="This application facilitates buying and delivering foods. Every user can buy foods from many restaurants registered in the application and get delivered."
        />
      </div>
      <div>
        <ProjectInfo
          title="Image Encoding"
          year={2021}
          frontend="Flutter"
          backend="Flask"
          description="CDN is not the only way to store images. This project encodes every image and sends it directly to the database of the server."
        />
      </div>
      <div>
        <ProjectInfo
          title="Challenge Yourself"
          year={2021}
          frontend="Flutter"
          backend="Flask"
          description="An application to let users challenge themselves by every goal they want to achieve."
        />
      </div>
      <div>
        <ProjectInfo
          title="BMI Calculator"
          year={2020}
          frontend="Flutter"
          backend="None"
          description="A simple healthy application to calcul BMI and let the person know if it is normal or not."
        />
      </div>
    </div>
  );
};

export default MobileDevelopmentPage;
