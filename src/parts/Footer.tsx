import React, { useContext } from "react";
import { UserContext } from "../App";
import { Icon } from "@iconify/react";

const Footer = () => {
  const { language } = useContext(UserContext);
  return (
    <footer className="p-4 shadow md:px-6 md:py-8 bg-customBlue">
      <div className="sm:flex sm:items-center sm:justify-between md:px-20 ">
        <a className="flex items-center sm:mb-0">
          <img
            src="https://i.ibb.co/CPPC9yh/image.png"
            className="mr-3 h-14"
            alt="Flowbite Logo"
          />
        </a>
        <div>
          <ul className="flex flex-wrap items-center mt-2 mb-2 text-sm sm:mb-0 text-customBlue pl-2">
            <li>
              <a href="#us" className="mr-4 hover:underline md:mr-6 ">
                {language === 0 ? "Nosotros" : "Us"}
              </a>
            </li>
            <li>
              <a href="#services" className="mr-4 hover:underline md:mr-6">
                {language === 0 ? "Servicios" : "Services"}
              </a>
            </li>
            <li>
              <a href="#allies" className="mr-4 hover:underline md:mr-6 ">
                {language === 0 ? "Clientes" : "Clients"}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                {language === 0 ? "Contacto" : "Contact"}
              </a>
            </li>
          </ul>

          <div className="flex space-x-3 lg:mt-3 pl-2">
            <a
              href="https://www.facebook.com/profile.php?id=100089549000772"
              target="_blank"
            >
              <Icon
                className="w-7 h-7 mb-2"
                color="white"
                icon={"mdi:facebook"}
              />
            </a>

            <a
              href="https://www.instagram.com/montaltoasociados/"
              target="_blank"
            >
              <Icon
                className="w-7 h-7 mb-2"
                color="white"
                icon={"mdi:instagram"}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/rossana-montalto-herrera-417482112/"
              target="_blank"
            >
              <Icon
                className="w-7 h-7 mb-2"
                color="white"
                icon={"mdi:linkedin"}
              />
            </a>

            <a href="https://wa.link/02xvlk" target="_blank">
              <Icon
                className="w-7 h-7 mb-2"
                color="white"
                icon={"ic:baseline-whatsapp"}
              />
            </a>
          </div>
        </div>
      </div>
      <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
      <span className="block text-sm sm:text-center text-gray-400">
        © 2024 <a className="hover:underline">Montalto Asociados™</a>. All
        Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
