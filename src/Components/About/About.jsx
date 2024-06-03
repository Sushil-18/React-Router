import React from "react";

const About = () => {
  return (
    <div className="flex justify-between mt-40 gap-28 mx-auto mx-[5%] mb-56">
      <div className="min-w-[25rem]">
        <img
          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
          alt="StartUp_meeting"
        ></img>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-4xl font-bold text-center">
          React development is carried out by passinate developers
        </h2>
        <p className="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis
          voluptatem accusantium nemo perspiciatis delectus atque autem!
          Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur!
          Officiis id consequatur atque doloremque!
        </p>
        <p className="text-center">
          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
          expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur
          quam mollitia.
        </p>
      </div>
    </div>
  );
};

export default About;
