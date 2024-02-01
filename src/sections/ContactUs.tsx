import React, { useContext } from "react";
import { CallSharp, HomeSharp, MailSharp } from "react-ionicons";
import { UserContext } from "../App";

const Input = ({
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => (
  <input
    {...props}
    className="w-full lg:w-60 h-12 border border-orange-400 block rounded px-2 "
  />
);
function ContactUs() {
  const { language } = useContext(UserContext);
  return (
    <div id="contact" className="w-full   md:pb-20">
      <div className="max-w-7xl mx-auto flex justify-center flex-col items-center space-y-20">
        <div className="flex justify-center items-center space-x-3">
          <div style={{ borderColor: "orange" }} className="border-b-2  w-10" />
          <p className="text-4xl lg:text-5xl family-jost text-gray-700 uppercase">
            {language === 0 ? "Contáctanos" : "Contact Us"}
          </p>
          <div style={{ borderColor: "orange" }} className="border-b-2  w-10" />
        </div>

        <div
          style={{
            borderColor: "rgb(0,37,83)",
            borderBottomRightRadius: 60,
            borderTopLeftRadius: 60,
          }}
          className="lg:shadow-2xl lg:border-4 lg:py-10 w-full lg:w-auto px-10 lg:px-20 first-letter: bg-white  flex lg:space-x-20 bl 
          flex-col-reverse lg:flex-row"
        >
          <div
            className=" flex flex-col justify-between text-lg py-10 space-y-3 lg:space-y-0
          text-left"
          >
            <div>
              <div
                style={{ color: "rgb(0,37,83)" }}
                className="flex items-center  space-x-2"
              >
                <HomeSharp color={"rgb(0,37,83)"} />{" "}
                <b>{language === 0 ? "Dirección" : "Address"}</b>
              </div>
              <p
                onClick={() => {
                  window.open(
                    "https://goo.gl/maps/Jh2jd2E4NuoKRMTu9",
                    "_blank"
                  );
                }}
                className="text-gray-600 cursor-pointer"
              >
                Av. Javier Prado Este Nº 488 Piso 7
                <br />
                San Isidro, Lima – Perú​ ​
              </p>
            </div>

            <div>
              <div
                style={{ color: "rgb(0,37,83)" }}
                className="flex items-center  space-x-2"
              >
                <CallSharp color={"rgb(0,37,83)"} />
                <b>{language === 0 ? "Teléfono" : "Phone Number"}</b>
              </div>
              <a href="tel:+5117026125" className="text-gray-600 no-underline">
                +511 -7026125​​
              </a>
            </div>

            <div>
              <div
                style={{ color: "rgb(0,37,83)" }}
                className="flex items-center  space-x-2"
              >
                <MailSharp color={"rgb(0,37,83)"} />
                <b>{language === 0 ? "Correo Electrónico" : "Email Address"}</b>
              </div>
              <a
                href="mailto:info@montaltoasociados.com"
                className="text-gray-600"
              >
                Info@montaltoasociados.com​
              </a>
            </div>
          </div>
          {/* FORM  */}
          <form className="flex flex-col lg:flex-row lg:space-x-5">
            <div className="space-y-4 flex flex-col justify-center">
              <Input
                type={"text"}
                placeholder={
                  language === 0 ? "Nombres y apellidos" : "Name and last name"
                }
              />
              <Input
                type={"text"}
                placeholder={language === 0 ? "Empresa" : "Business"}
              />
              <Input
                type={"text"}
                placeholder={
                  language === 0 ? "Correo electrónico" : "Email address"
                }
              />
              <Input
                type={"text"}
                placeholder={language === 0 ? "Teléfono" : "Phone number"}
              />
              <button
                style={{ borderColor: "rgb(0,37,83)" }}
                className="hidden lg:block text-white border rounded-lg hover:opacity-90 text-lg font-bold bg-orange-400 w-full py-2"
              >
                <b>{language === 0 ? "Enviar" : "Send"}</b>
              </button>
            </div>
            <textarea
              placeholder={
                language === 0
                  ? "Escribe tu consulta aquí"
                  : "Write your query here"
              }
              className="mt-5 lg:pt-2 border-2 border-orange-400  w-full lg:w-72 h-96 p-2 rounded-lg"
            ></textarea>
            <button
              style={{ borderColor: "rgb(0,37,83)" }}
              className="block lg:hidden mt-5 text-white border rounded-lg hover:opacity-90 text-lg font-bold bg-orange-400 w-full py-2"
            >
              <b>{language === 0 ? "Enviar" : "Send"}</b>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
