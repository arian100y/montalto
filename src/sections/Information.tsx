import React, { useContext } from "react";
import { UserContext } from "../App";

const Information = () => {
  const { language } = useContext(UserContext);

  return (
    <div
      id="information"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-anchor-placement="top-center"
      className=" w-full py-20 "
    >
      <div className="max-w-7xl items-center text-center  mx-auto">
        <div className="flex justify-center items-center space-x-3 pb-20">
          <div style={{ borderColor: "orange" }} className="border-b-2  w-10" />
          <p className="text-4xl lg:text-5xl family-jost text-gray-700 uppercase">
            {language === 0 ? "Información" : "Information"}
          </p>
          <div style={{ borderColor: "orange" }} className="border-b-2  w-10" />
        </div>
        <div
          className="space-y-5 md:space-y-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:space-x-1 md:gap-x-10 md:gap-y-5
        lg:gap-0 xl:space-x-5 lg:w-full mx-auto "
        >
          <div
            style={{
              border: "6px solid rgb(0,37,83)",
              background: "rgb(0, 55, 121)",
              minHeight: 500,
              borderRadius: 45,
            }}
            className="lg:hidden xl:block mx-auto w-80 lg:w-72 px-3 py-10 text-xl"
          >
            <img
              className="w-60 mx-auto mb-10"
              src="https://firebasestorage.googleapis.com/v0/b/montaltoasociados.appspot.com/o/image-removebg-preview%20(5).png?alt=media&token=2db9e419-7055-4632-8775-06cb8f1580e7"
              alt="clock"
            />
            <b className="text-white">
              {language === 0 ? "Horario​" : "Schedule"}
              <br />
              {language === 0 ? "Atendemos de" : "We attend from"}
            </b>
            <p className="text-white">
              {language === 0 ? "Lunes a Viernes" : "Monday - Friday"} <br />
              {language === 0 ? "de 9:00 a 18:00." : "from 9:00 a 18:00."}
            </p>
          </div>

          <div
            style={{
              border: "6px solid rgb(0,37,83)",
              background: "rgb(0, 55, 121)",
              minHeight: 500,
              borderRadius: 45,
            }}
            className="mx-auto w-80 lg:w-72 px-3 py-10 text-xl"
          >
            <img
              className="w-60 mx-auto mb-10"
              src="https://firebasestorage.googleapis.com/v0/b/montaltoasociados.appspot.com/o/image-removebg-preview%20(4).png?alt=media&token=2019027e-8c53-4bb5-87e7-3e9c731a9fe3"
              alt="idk"
            />
            <b className="text-white">
              {language === 0 ? "Visítanos" : "Visit us"}
              <br />
            </b>
            <p className="text-white">
              Av. Javier Prado Este Nº 488 Piso 7 San Isidro Lima, Peru
            </p>
          </div>
          <div
            style={{
              border: "6px solid rgb(0,37,83)",
              background: "rgb(0, 55, 121)",
              minHeight: 500,
              borderRadius: 45,
            }}
            className="hidden md:block mx-auto w-80 lg:w-72 px-3 py-10 text-xl"
          >
            <img
              className="w-60 mx-auto mb-10"
              src="https://firebasestorage.googleapis.com/v0/b/montaltoasociados.appspot.com/o/image-removebg-preview%20(2).png?alt=media&token=b3ead124-0823-47ec-b501-092a2c9dfe09"
              alt="email"
            />
            <b className="text-white">
              {language === 0 ? "Envíanos un e-mail" : "Email us"}
              <br />​
            </b>
            <a
              href="mailto:info@montaltoasociados.com"
              className="underline text-blue-500"
            >
              Info@montalto
              <br />
              asociados.com
            </a>
          </div>
          <div
            style={{
              border: "6px solid rgb(0,37,83)",
              background: "rgb(0, 55, 121)",
              minHeight: 500,
              borderRadius: 45,
            }}
            className="hidden md:block mx-auto w-80 lg:w-72 px-3 py-10 text-xl"
          >
            <img
              className="w-60 mx-auto mb-10"
              src="https://firebasestorage.googleapis.com/v0/b/montaltoasociados.appspot.com/o/image-removebg-preview%20(3).png?alt=media&token=cf3cfc5e-26d7-4810-a13b-e31e206d61ea"
              alt="clock"
            />
            <b className="text-white">
              {language === 0 ? "Consultas en linea" : "Online advisory"}
              <br />
            </b>
            <p className="text-white">+511 -7026125​</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
