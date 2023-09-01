import React, { useContext, useState } from "react";
import { CallOutline, CloseCircleOutline } from "react-ionicons";
import { UserContext } from "../App";
import ModalComponent from "../components/ModalComponent/ModalComponent";

const staff = [
  {
    title: (lan: any) => {
      return lan === 0
        ? "Manager de Auditoría y Consultoría​"
        : "Audit and Consulting Manager";
    },
    name: "Rossana Montalto Herrera",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/montaltoasociados.appspot.com/o/rossana.jpeg?alt=media&token=b92c1208-c15c-41f1-b699-d211bcc0515f",
    phoneNumber: "+511 -7026125",
    email: "Info@montaltoasociados.com​",
    extra: (lan: any) => {
      return [
        lan === 0
          ? "Ejecutivo de exitosa trayectoria profesional en el campo industrial, comercial y de servicios con formación en Contabilidad y con Maestría en Administración de Negocios. Especialidad en contabilidad y auditoría, administración y auditoría financiera. "
          : "Executive with a successful professional career in the industrial, commercial and service fields with a background in Accounting and a Master's Degree in Business Administration. Specialty in accounting and auditing, administration and financial auditing.",
        lan === 0
          ? "Experiencia en Contraloría y auditoría interna, implementación de procesos orientados al control interno, impuestos, organización, gestión de créditos y cobranzas, tesorería, costos y legal. "
          : "Experience in Comptrollership and internal audit, implementation of processes oriented to internal control, taxes, organization, credit and collection management, treasury, costs and legal.",
        lan === 0
          ? "Resultados exitosos mediante liderazgo gerencial, adaptabilidad al cambio, motivación y fijación de objetivos. Habilidad para el análisis, toma de decisiones y manejo de personal trabajando en equipo."
          : "Successful results through managerial leadership, adaptability to change, motivation and goal setting. Ability to analyze, make decisions and manage staff working as a team.",
      ];
    },
  },

  // {
  //   title: (lan: any) => {
  //     return lan === 0
  //       ? "Socio Líder de Auditoría y Consultoría​"
  //       : "Audit and Consulting Lead Partner";
  //   },

  //   name: "Jaime Villalva",
  //   imgUrl: "https://i.ibb.co/VBczcnc/Foto-Jaime-Villalva.jpg",
  //   phoneNumber: "511 -7026125",
  //   email: "Info@montaltoasociados.com​",
  //   extra: (lan: any) => {
  //     return [
  //       lan === 0
  //         ? "Ejecutivo de exitosa trayectoria profesional en el campo industrial, comercial y de servicios con formación en Contabilidad y con Maestría en Administración de Negocios. Especialidad en contabilidad y auditoría, administración y auditoría financiera. "
  //         : "Executive with a successful professional career in the industrial, commercial and service fields with a background in Accounting and a Master's Degree in Business Administration. Specialty in accounting and auditing, administration and financial auditing.",
  //       lan === 0
  //         ? "Experiencia en Contraloría y auditoría interna, implementación de procesos orientados al control interno, impuestos, organización, gestión de créditos y cobranzas, tesorería, costos y legal. "
  //         : "Experience in Comptrollership and internal audit, implementation of processes oriented to internal control, taxes, organization, credit and collection management, treasury, costs and legal.",
  //       lan === 0
  //         ? "Resultados exitosos mediante liderazgo gerencial, adaptabilidad al cambio, motivación y fijación de objetivos. Habilidad para el análisis, toma de decisiones y manejo de personal trabajando en equipo."
  //         : "Successful results through managerial leadership, adaptability to change, motivation and goal setting. Ability to analyze, make decisions and manage staff working as a team.",
  //     ];
  //   },
  // },
];
const Staff = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState<any>(null);

  const { language } = useContext(UserContext);
  return (
    <div
      id="staff"
      data-aos="fade-up"
      data-aos-duration="1100"
      data-aos-delay="0"
      data-aos-offset="400"
      className="w-full  bg-gray-800 pb-20"
    >
      <div className="flex justify-center items-center space-x-3 py-10">
        <div style={{ borderColor: "orange" }} className="border-b-2  w-10" />
        <p className="text-4xl lg:text-5xl family-jost text-white uppercase">
          {language === 0 ? "Perfil Profesional" : "Professional Profile"}
        </p>
        <div style={{ borderColor: "orange" }} className="border-b-2  w-10" />
      </div>
      <div className=" max-w-7xl flex justify-center mx-auto ">
        {/* CARD  */}
        <div
          style={{ borderColor: "rgb(0,37,83)" }}
          className="border-2 shadow-lg flex flex-col lg:flex-row px-5 md:px-10 lg:px-20 py-10 rounded-xl 
          space-y-14 lg:space-y-0 lg:space-x-14 xl:space-x-24 bg-white max-w-full"
        >
          {staff.map((obj) => (
            <div
              onClick={() => {
                setData(obj);
                setShowModal(true);
              }}
              className="p-4 hover:bg-gray-100 cursor-pointer flex flex-col items-center space-y-2 "
            >
              <b style={{ color: "rgb(0,37,83)" }} className="text-xl italic">
                {obj.title(language)}
              </b>
              <p className="text-xl text-gray-700">{obj.name}​</p>
              <div
                className="w-60 h-60 border-2 border-orange-400 p-2 rounded bg-white
                bg-top bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${obj.imgUrl})` }}
              />
              <div className="text-lg text-gray-700 flex space-x-2 items-center justify-center">
                <CallOutline />
                <p className="m-0">{obj.phoneNumber}</p>
              </div>
              <a
                className="text-lg underline text-blue-500"
                href={`mailto:${obj.email}`}
              >
                {obj.email}
              </a>
            </div>
          ))}
        </div>
      </div>
      <ModalComponent
        showModal={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        showCloseButton={false}
      >
        {data !== null ? (
          <div
            style={{ maxHeight: "90vh" }}
            className="overflow-y-scroll lg:overflow-y-auto  lg:h-auto  w-full max-w-4xl 
              flex  flex-col-reverse lg:flex-row rounded-xl  "
          >
            <div
              onClick={() => {
                setShowModal(false);
              }}
              className="cursor-pointer absolute top-3 right-3 md:top-5 md:right-5 lg:top-2 lg:right-2 bg-white w-7 h-7 rounded-full flex justify-center items-center"
            >
              <CloseCircleOutline color={"#00000"} height={"100%"} />
            </div>

            <div
              style={{ background: "rgb(237, 168, 95)" }}
              className=" border-8 border-orange-400  h-full mb-0 p-7 w-full max-w-full lg:w-2/3 space-y-4 pt-10 md:pt-7"
            >
              {data.extra(language).map((text: any) => (
                <p className="drop-shadow-lg text-white md:text-lg text-left w-full text-base lg:w-auto">
                  {text}
                </p>
              ))}
            </div>
            <div
              style={{
                border: "6px solid rgb(0,37,83)",
                background: "rgb(0, 55, 121)",
              }}
              className=" w-full max-w-full lg:w-1/3  flex flex-col flex-1 justify-between
               items-center py-7 text-white px-2 space-y-3 md:space-y-0"
            >
              <i className="text-center">{data.title}</i>
              <p>{data.name}</p>
              <div
                className="w-60 h-60 border-2 border-orange-400 p-2 rounded bg-white
                bg-top bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${data.imgUrl})` }}
              />
              <div className="text-lg text-white flex space-x-2 items-center">
                <CallOutline color={"white"} />
                <p>{data.phoneNumber}</p>
              </div>
              <a
                className="text-sm underline text-white truncate"
                href={`mailto:${data.email}`}
              >
                {data.email}
              </a>
            </div>
          </div>
        ) : null}
      </ModalComponent>
    </div>
  );
};

export default Staff;
