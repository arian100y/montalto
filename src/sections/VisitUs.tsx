import React, { useContext } from "react";
import { UserContext } from "../App";

export const VisitUs = () => {
  const { language } = useContext(UserContext);

  return (
    <>
      <div
        id="news_start"
        className="flex justify-center items-center space-x-3 pb-0"
      >
        <div style={{ borderColor: "orange" }} className="border-b-2  w-10" />
        <p className="text-4xl lg:text-5xl family-jost text-gray-700 uppercase">
          {language === 0 ? "Encuéntranos" : "Visit Us"}
        </p>
        <div style={{ borderColor: "orange" }} className="border-b-2  w-10" />
      </div>
      <div className="  bg-gray-900">
        <div className="w-full bg-white  lg:rounded-news  py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto flex justify-center px-3">
            <div
              style={{ borderColor: "rgb(0,37,83)" }}
              className="hidden md:block relative border-2 rounded-lg overflow-hidden "
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.632488838197!2d-77.03082701758622!3d-12.09191287565659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c866ba40bb4b%3A0xf2bf72e3f816930b!2sPiso%20%207%2C%20Av.%20Javier%20Prado%20Este%20488%2C%20San%20Isidro%2015046!5e0!3m2!1ses-419!2spe!4v1706825526108!5m2!1ses-419!2spe"
                width="600"
                height="450"
                title="maps"
                style={{ border: 0, width: 900, zIndex: 0 }}
                allowFullScreen={false}
                loading="lazy"
                className="mx-auto "
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div
                style={{ background: "rgb(0,37,83)" }}
                className="hidden lg:flex flex-col items-center absolute top-5 right-5 rounded-lg p-3 space-y-2 shadow-lg"
              >
                <p className="text-white">
                  {language === 0
                    ? "Encuéntranos en Google"
                    : "Find us on Google"}{" "}
                  <br />
                  Maps.​
                </p>
                <button
                  onClick={() => {
                    window.open(
                      "https://goo.gl/maps/Jh2jd2E4NuoKRMTu9",
                      "_blank"
                    );
                  }}
                  className="mx-auto cursor-pointer bg-white px-4 py-2 text-orange-400 font-bold rounded-lg "
                >
                  {language === 0 ? "Haz click aquí" : "Click here"}
                </button>
              </div>
            </div>

            <div
              onClick={() => {
                window.open("https://goo.gl/maps/Jh2jd2E4NuoKRMTu9", "_blank");
              }}
              style={{ borderColor: "rgb(0,37,83)" }}
              className="block md:hidden relative border-2 rounded-lg overflow-hidden "
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.2920990592233!2d-77.0281674!3d-12.0921446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c866a4359165%3A0xd6fd3a83f46c5097!2sC.%20Las%20Orqu%C3%ADdeas%20444%2C%20San%20Isidro%2015046!5e0!3m2!1sen!2spe!4v1672421884382!5m2!1sen!2spe"
                width="600"
                height="450"
                title="maps"
                style={{
                  border: 0,
                  width: 900,
                  zIndex: 0,
                  pointerEvents: "none",
                }}
                allowFullScreen={false}
                loading="lazy"
                className="mx-auto "
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div
                style={{ background: "rgb(0,37,83)" }}
                className=" flex-col items-center flex lg:hidden absolute bottom-2 right-2 rounded-lg p-2 space-y-2 shadow-lg"
              >
                <p className="text-white">
                  {language === 0
                    ? "Encuéntranos en Google"
                    : "Find us on Google"}{" "}
                  <br />
                  Maps.​
                </p>
                <button
                  onClick={() => {
                    window.open(
                      "https://goo.gl/maps/Jh2jd2E4NuoKRMTu9",
                      "_blank"
                    );
                  }}
                  className=" cursor-pointer bg-white px-4 py-2 text-orange-400 font-bold rounded-lg "
                >
                  {language === 0 ? "Haz click aquí" : "Click here"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
