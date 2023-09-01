import React, { useContext, useState } from "react";
import { ReorderThree } from "react-ionicons";
import { UserContext } from "../App";
import { ReactComponent as SpainFlag } from "../assets/SpainFlag.svg";
import { ReactComponent as UsaFlag } from "../assets/UsaFlag.svg";

const links = [
  {
    title: (lan: any) => {
      return lan === 0 ? "Inicio" : "Home";
    },
    subLinks: (lan: any) => [],
    href: "#top",
  },
  {
    title: (lan: any) => {
      return lan === 0 ? "Nosotros" : "Us";
    },
    subLinks: (lan: any) => [
      { title: lan === 0 ? "Nosotros" : "Us", href: "#us" },
      { title: lan === 0 ? "Staff" : "Staff", href: "#staff" },
    ],
    href: "#us",
  },
  {
    title: (lan: any) => {
      return lan === 0 ? "Servicios" : "Services";
    },
    subLinks: (lan: any) => [
      {
        title:
          lan === 0
            ? "Asesoría y Auditoría Tributaria"
            : "Tax Advice and Audit",
        href: "#services",
        onClick: (setShowModal: any, showModal: any) => {
          setShowModal(!showModal);
        },
        idx: 0,
      },
      {
        title:
          lan === 0
            ? "Servicios Contables Y De Planillas"
            : "Accounting And Payroll Services",
        href: "#services",
        onClick: (setShowModal: any, showModal: any) => {
          setShowModal(!showModal);
        },
        idx: 5,
      },
      {
        title: lan === 0 ? "Asesoría Legal" : "Legal Advice",

        href: "#services",
        onClick: (setShowModal: any, showModal: any) => {
          setShowModal(!showModal);
        },
        idx: 4,
      },
      {
        title: lan === 0 ? "Auditoría Financiera" : "Financial Audit",
        href: "#services",
        onClick: (setShowModal: any, showModal: any) => {
          setShowModal(!showModal);
        },
        idx: 5,
      },
      {
        title: lan === 0 ? "Consultoría En NIIF​" : "NIIF Consulting",

        href: "#services",
        onClick: (setShowModal: any, showModal: any) => {
          setShowModal(!showModal);
        },
        idx: 3,
      },
      {
        title: lan === 0 ? "Capacitaciones" : "Training",
        href: "#services",
        onClick: (setShowModal: any, showModal: any) => {
          setShowModal(!showModal);
        },
        idx: null,
      },
      {
        title: lan === 0 ? "Otros Servicios" : "Other Services",
        href: "#services",
        onClick: (setShowModal: any, showModal: any) => {
          setShowModal(!showModal);
        },
        idx: null,
      },
    ],
    href: "#services",
  },
  {
    title: (lan: any) => {
      return lan === 0 ? "Clientes" : "Clients";
    },
    subLinks: (lan: any) => [
      { title: lan === 0 ? "Aliados" : "Allies", href: "#allies" },
    ],
    href: "#allies",
  },
  {
    title: (lan: any) => {
      return lan === 0 ? "Contacto" : "Contact";
    },
    subLinks: (lan: any) => [
      {
        title: lan === 0 ? "Información" : "Information",
        href: "#information",
      },
      { title: lan === 0 ? "Contáctanos" : "Contact Us", href: "#contact" },
      { title: lan === 0 ? "Visítanos" : "Visit Us", href: "#news_start" },
    ],
    href: "#contact",
  },
];

const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

function Navbar() {
  const [showDropdown, setShowDropdown] = useState({
    inicio: false,
    nosotros: false,
  });
  const [showMenu, setShowMenu] = useState(false);

  const { setShowModal, setContentIdx, showModal, language, setLanguage } =
    useContext(UserContext);

  const renderLinks = () => {
    let linkComponents: any = [];

    links.forEach((obj: any, index) => {
      linkComponents.push(
        <a
          className="relative text-base text-gray-700"
          href={obj.href}
          onMouseEnter={() => {
            setShowDropdown((prev) => ({
              ...prev,
              [obj.title(language).toLowerCase()]: true,
            }));
          }}
          onMouseLeave={() => {
            setShowDropdown((prev) => ({
              ...prev,
              [obj.title(language).toLowerCase()]: false,
            }));
          }}
        >
          {obj.title(language)}
          {showDropdown[
            obj.title(language).toLowerCase() as keyof {
              inicio: string;
              nosotros: string;
            }
          ] ? (
            <div
              onMouseEnter={() => {
                setShowDropdown((prev) => ({
                  ...prev,
                  [obj.title(language).toLowerCase()]: true,
                }));
              }}
              onMouseLeave={() => {
                setShowDropdown((prev) => ({
                  ...prev,
                  [obj.title(language).toLowerCase()]: false,
                }));
              }}
              className="shadow-lg absolute w-max rounded overflow-hidden left-1/2 transform -translate-x-1/2 "
            >
              {obj.subLinks(language).map((sub: any, idx: number) => (
                <a
                  onClick={() => {
                    sub.idx && sub.onClick(setShowModal, showModal);
                    sub.idx && setContentIdx(sub.idx);
                  }}
                  href={sub.href}
                  className={`text-sm font-light text-white bg-orange-400 hover:bg-orange-500 block px-3 py-1 ${
                    idx + 1 !== obj.subLinks(language).length
                      ? "border-b border-white"
                      : ""
                  }`}
                >
                  {/* {capitalize(sub.title)} */}
                  {sub.title}
                </a>
              ))}
            </div>
          ) : null}
        </a>
      );
    });

    return linkComponents;
  };
  return (
    <div
      style={{ zIndex: 998 }}
      className="fixed top-0 left-0 w-full bg-white shadow-sm"
    >
      <div
        style={{ background: "rgb(0,37,83)" }}
        className="hidden  w-full text-xs lg:text-sm md:flex h-5 justify-between px-10 "
      >
        <div className="flex space-x-10">
          <a href="tel:+5117026125" className="text-white">
            +511 -7026125
          </a>
          <a href="mailto:info@montaltoasociados.com" className="text-white">
            Info@montaltoasociados.com
          </a>
        </div>
        <p
          onClick={() => {
            setLanguage(language === 0 ? 1 : 0);
          }}
          className="cursor-pointer text-white flex items-center"
        >
          {language === 0 ? "ES" : "EN"}
          {language === 0 ? (
            <SpainFlag className="w-3 h-3 ml-2 " />
          ) : (
            <UsaFlag className="w-3 h-3 ml-2 " />
          )}
        </p>
      </div>
      <div
        style={{ background: "rgb(0,37,83)" }}
        className="flex  w-full text-xs lg:text-sm md:hidden h-5 justify-between px-2 "
      >
        <div className="flex space-x-10">
          <p className="text-white">+511 -7026125</p>
          <p className="text-white">Info@montaltoasociados.com</p>
        </div>
        <p
          onClick={() => {
            setLanguage(language === 0 ? 1 : 0);
          }}
          className="text-white flex items-center"
        >
          {language === 0 ? "SPA" : "USA"}
          {language === 0 ? (
            <SpainFlag className="w-3 h-3 ml-2 " />
          ) : (
            <UsaFlag className="w-3 h-3 ml-2 " />
          )}
        </p>
      </div>
      <div
        style={{ background: "transparent" }}
        className="mx-auto max-w-full 2xl:max-w-7xl lg:flex  items-center md:px-20 hidden justify-between w-full h-14  "
      >
        <a href="#top" className=" flex items-center justify-center">
          <img
            src="https://i.ibb.co/44NpMQc/image.png"
            className="mr-3 h-10"
            alt="Logo"
          />
        </a>
        <div className="flex space-x-10 text-xl items-center ">
          {renderLinks()}
        </div>

        <button
          style={{ background: "rgb(0,37,83)" }}
          className="hidden lg:block text-white rounded px-3 py-1 h-fit"
        >
          Trabaja con nosotros
        </button>
      </div>
      <div
        className="flex relative justify-between lg:hidden w-full h-14 items-center  px-10 max-w-full
      shadow-sm"
      >
        <a
          href="#top"
          className="w-auto h-10 bg-white flex justify-center items-center "
        >
          <img
            src="https://i.ibb.co/44NpMQc/image.png"
            className="mr-3 h-10 "
            alt=" Logo"
          />
        </a>
        <div className="h-full flex items-center ">
          <ReorderThree
            onClick={() => {
              console.log("adsfdafs");
              setShowMenu(!showMenu);
            }}
            color={"grey"}
            cssClasses={"cursor-pointer"}
            width={"30px"}
            height={"30px"}
          />
        </div>
        {/* MENU  */}
        {showMenu ? (
          <div
            style={{ background: "rgba(0,0,0,0.5)" }}
            className="absolute left-0 top-14 h-screen w-full "
          >
            <div className=" bg-white w-full ">
              <a
                onClick={() => {
                  setShowMenu(false);
                }}
                href="#us"
                className="text-gray-700 h-10 w-full border-b flex items-center justify-center cursor-pointer hover:bg-slate-100"
              >
                {language === 0 ? "Nosotros" : "Us"}
              </a>
              <a
                onClick={() => {
                  setShowMenu(false);
                }}
                href="#services"
                className="text-gray-700 h-10 w-full border-b flex items-center justify-center cursor-pointer hover:bg-slate-100"
              >
                {language === 0 ? "Servicios" : "Services"}
              </a>
              <a
                onClick={() => {
                  setShowMenu(false);
                }}
                href="#allies"
                className="text-gray-700 h-10 w-full border-b flex items-center justify-center cursor-pointer hover:bg-slate-100"
              >
                {language === 0 ? "Clientes" : "Clientes"}
              </a>
              <a
                onClick={() => {
                  setShowMenu(false);
                }}
                href="#contact"
                className="text-gray-700 h-10 w-full border-b flex items-center justify-center cursor-pointer hover:bg-slate-100"
              >
                {language === 0 ? "Contacto" : "Contact"}
              </a>
              <a
                onClick={() => {
                  setShowMenu(false);
                }}
                href="#contact"
                className="text-gray-700 h-10 w-full border-b flex items-center justify-center cursor-pointer hover:bg-slate-100"
              >
                {language === 0 ? "Trabaja Con Nosotros" : "Work With Us"}
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Navbar;
