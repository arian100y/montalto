import React, { useContext, useState } from "react";
import { CallOutline, CloseCircleOutline } from "react-ionicons";
import { UserContext } from "../App";
import ModalComponent from "../components/ModalComponent/ModalComponent";

const staff = [
  {
    title: (lan: any) => {
      return lan === 0 ? "Manager Partner" : "Manager Partner";
    },
    name: "Rossana Montalto Herrera",
    imgUrl: "https://i.ibb.co/PhKsTZL/tax.jpg",
    phoneNumber: "+51 1 7026125",
    email: "Info@montaltoasociados.com​",
    extra: (lan: any) => {
      return [
        lan === 0
          ? "Contadora Pública Colegiada y Certificada, de la Universidad de Lima, con mención en Contabilidad y Auditoría. Master en Dirección y Administración de Empresas de la Universidad Peruana de Ciencias Aplicadas con la Universidad Católica de Chile.  Especialización en NIIF y NIA en el Perú y en el extranjero."
          : "Chartered and Certified Public Accountant, from the University of Lima, with a major in Accounting and Auditing. Master in Business Management and Administration from the Peruvian University of Applied Sciences with the Catholic University of Chile. Specialization in IFRS and NIA in Peru and abroad.",
        lan === 0
          ? "Experiencia por más de 30 años en auditoría financiera y consultoría de negocios. Socia de Montalto León Asociados S.C. y directora de Consultoría en Quantum Consultores. En su trayectoria profesional trabajó como directora de auditoría en otras firmas en el Perú, asesorando empresas, participando en directorios, fue gerente de auditoría en PRICEWATERHOUSE COOPERS - PWC por más 16 años. Tiene amplia trayectoria en auditorías de empresas de diversos sectores económicos y revisiones de organizaciones sin fines de lucro y cooperación técnica internacional."
          : "Experience for more than 30 years in financial auditing and business consulting. Partner of Montalto León Asociados S.C. and Director of Consulting at Quantum Consultores. In her professional career she worked as audit director in other firms in Peru, advising companies, participating in boards of directors, she was audit manager at PRICEWATERHOUSE COOPERS-PWC for more than 16 years. She has extensive experience in audits of companies in various economic sectors and reviews of non-profit organizations and international technical cooperation.",
        lan === 0
          ? "Docente por más de 19 años de la Universidad de Lima y de la Universidad Peruana de Ciencias Aplicadas en el Pregrado y en el Postgrado, en temas relacionados con las Normas Internacionales de Información Financiera – IFRS, Auditoría, Contabilidad, Costos y Presupuestos. Expositora nacional e internacional en áreas de auditoría y aplicación de NIIF y panelista invitada."
          : "Teacher for more than 19 years at the University of Lima and the Peruvian University of Applied Sciences at Undergraduate and Postgraduate levels, on topics related to International Financial Reporting Standards – IFRS, Auditing, Accounting, Costs and Budgets. National and international speaker in areas of auditing and application of IFRS and invited panelist.",
        lan === 0
          ? "Actualmente es también miembro del Comité de Auditoría de la Asociación Interamericana de Contabilidad –AIC y fundadora de Women in Accounting - WIA."
          : "She is also currently a member of the Audit Committee of the Inter-American Accounting Association – AIC and founder of Women in Accounting – WIA.",
      ];
    },
  },
  {
    title: (lan: any) => {
      return lan === 0 ? "Manager Partner" : "Manager Partner";
    },
    name: "Rossana Montalto Herrera",
    imgUrl: "https://i.ibb.co/v16xXs8/manager.jpg",
    phoneNumber: "+51 1 7026125",
    email: "Info@montaltoasociados.com​",
    extra: (lan: any) => {
      return [
        lan === 0
          ? "Contadora Pública Colegiada y Certificada, de la Universidad de Lima, con mención en Contabilidad y Auditoría. Master en Dirección y Administración de Empresas de la Universidad Peruana de Ciencias Aplicadas con la Universidad Católica de Chile.  Especialización en NIIF y NIA en el Perú y en el extranjero."
          : "Chartered and Certified Public Accountant, from the University of Lima, with a major in Accounting and Auditing. Master in Business Management and Administration from the Peruvian University of Applied Sciences with the Catholic University of Chile. Specialization in IFRS and NIA in Peru and abroad.",
        lan === 0
          ? "Experiencia por más de 30 años en auditoría financiera y consultoría de negocios. Socia de Montalto León Asociados S.C. y directora de Consultoría en Quantum Consultores. En su trayectoria profesional trabajó como directora de auditoría en otras firmas en el Perú, asesorando empresas, participando en directorios, fue gerente de auditoría en PRICEWATERHOUSE COOPERS - PWC por más 16 años. Tiene amplia trayectoria en auditorías de empresas de diversos sectores económicos y revisiones de organizaciones sin fines de lucro y cooperación técnica internacional."
          : "Experience for more than 30 years in financial auditing and business consulting. Partner of Montalto León Asociados S.C. and Director of Consulting at Quantum Consultores. In her professional career she worked as audit director in other firms in Peru, advising companies, participating in boards of directors, she was audit manager at PRICEWATERHOUSE COOPERS-PWC for more than 16 years. She has extensive experience in audits of companies in various economic sectors and reviews of non-profit organizations and international technical cooperation.",
        lan === 0
          ? "Docente por más de 19 años de la Universidad de Lima y de la Universidad Peruana de Ciencias Aplicadas en el Pregrado y en el Postgrado, en temas relacionados con las Normas Internacionales de Información Financiera – IFRS, Auditoría, Contabilidad, Costos y Presupuestos. Expositora nacional e internacional en áreas de auditoría y aplicación de NIIF y panelista invitada."
          : "Teacher for more than 19 years at the University of Lima and the Peruvian University of Applied Sciences at Undergraduate and Postgraduate levels, on topics related to International Financial Reporting Standards – IFRS, Auditing, Accounting, Costs and Budgets. National and international speaker in areas of auditing and application of IFRS and invited panelist.",
        lan === 0
          ? "Actualmente es también miembro del Comité de Auditoría de la Asociación Interamericana de Contabilidad –AIC y fundadora de Women in Accounting - WIA."
          : "She is also currently a member of the Audit Committee of the Inter-American Accounting Association – AIC and founder of Women in Accounting – WIA.",
      ];
    },
  },
  {
    title: (lan: any) => {
      return lan === 0 ? "Gerente de auditoría​" : "Audit Manager";
    },
    name: "Jaime Villava Cataño",
    imgUrl: "https://i.ibb.co/47Q4Tfx/auditoria.jpg",
    phoneNumber: "+51 1 7026125",
    email: "Info@montaltoasociados.com​",
    extra: (lan: any) => {
      return [
        lan === 0
          ? "Contador Público Colegiado y Certificado de la Universidad San Martin de Porres, con especialización en NIIF y Certificación en Presentación de Información Financiera Internacional  de la Association of Chartered Certified Accountants – ACCA en setiembre de 2021. "
          : "Chartered and Certified Public Accountant from the San Martin de Porres University, with specialization in IFRS and Certification in Presentation of International Financial Information from the Association of Chartered Certified Accountants – ACCA in September 2021.",
        lan === 0
          ? "Gerente de auditoría en Montalto León Asociados SC, con más de 10 años de experiencia en auditoría de estados financieros, consolidación y reportes financieros. Ha participado en implementaciones de Normas Internacionales de Información Financiera – NIIF (IFRS) y asesorías técnicas; en encargos y proyectos de la gran y mediana empresa, en diferentes sectores, así como también mejora de procesos y control interno. "
          : "Audit manager at Montalto León Asociados SC, with more than 10 years of experience in auditing financial statements, consolidation and financial reports. She has participated in implementations of International Financial Reporting Standards – IFRS (IFRS) and technical advice; in assignments and projects of large and medium-sized companies, in different sectors, as well as process improvement and internal control.",
        lan === 0
          ? "Amplia trayectoria en diversos sectores, en la agroindustria, la industria manufactura y de servicios, liderando equipos y obteniendo reconocimientos de los clientes por su trabajo y responsabilidad."
          : "Extensive experience in various sectors, in agribusiness, manufacturing and service industries, leading teams and obtaining recognition from clients for their work and responsibility.",
      ];
    },
  },
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
      className="w-full bg-customBlue pb-20"
    >
      <div className="flex justify-center items-center space-x-3 py-10">
        <div className="border-b-2 border-[orange] w-10" />
        <p className="text-4xl lg:text-5xl family-jost text-white uppercase">
          {language === 0 ? "Nuestro Staff" : "Our Staff"}
        </p>
        <div className="border-b-2 border-[orange] w-10" />
      </div>
      <div className="max-w-7xl flex justify-center mx-auto ">
        {/* CARD  */}
        <div
          className="flex flex-col lg:flex-row px-5 md:px-10 lg:px-20 py-10 rounded-xl 
          space-y-7 lg:space-y-0 lg:space-x-14 xl:space-x-24 max-w-full"
        >
          {staff.map((obj) => (
            <div
              onClick={() => {
                setData(obj);
                setShowModal(true);
              }}
              className="p-4 cursor-pointer flex lg:flex-col flex-col-reverse items-center
              space-y-2"
            >
              <b
                className="text-xl mt-4 p-2 text-customBlue
              bg-customBlue lg:text-white lg:mt-0 hidden lg:block"
              >
                {obj.title(language)}
              </b>
              <b className="text-xl mt-4 p-2 bg-white text-customBlue lg:text-white lg:mt-0 block lg:hidden">
                {obj.title(language)}
              </b>
              {/* <p className="text-xl text-customBlue">{obj.name}​</p> */}
              <div
                className="w-60 h-72 border-4 border-white p-2 bg-orange-400
                bg-top bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${obj.imgUrl})` }}
              />
              {/* <div className="text-lg text-customBlue flex space-x-2 items-center justify-center">
                <CallOutline />
                <p className="m-0">{obj.phoneNumber}</p>
              </div>
              <a
                className="text-lg underline text-blue-500"
                href={`mailto:${obj.email}`}
              >
                {obj.email}
              </a> */}
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
            className="overflow-y-scroll lg:overflow-hidden lg:h-auto w-full max-w-4xl 
            flex flex-col-reverse lg:flex-row rounded-xl bg-customBlue"
          >
            <div
              onClick={() => {
                setShowModal(false);
              }}
              className="cursor-pointer absolute top-3 right-3 md:top-5 md:right-5 lg:top-2
              lg:right-2 bg-white w-7 h-7 rounded-full flex justify-center items-center"
            >
              <CloseCircleOutline color={"#00000"} height={"100%"} />
            </div>

            <div
              className="mb-0 p-7 h-full lg:h-[90vh] max-w-full
              lg:w-2/3 space-y-4 pt-10 md:pt-7 lg:overflow-y-auto"
            >
              <h3 className="bg-orange-400 text-xl lg:text-5xl lg:py-3 text-white text-center">
                {data.title(language)}
              </h3>
              {data.extra(language).map((text: any) => (
                <p
                  className="drop-shadow-lg text-white md:text-lg text-left
                  w-full text-base lg:w-auto"
                >
                  {text}
                </p>
              ))}
            </div>
            <div
              className="w-full max-w-full lg:w-1/3 flex flex-col justify-center
              items-center py-7 text-white px-2 space-y-3 md:space-y-0"
            >
              <div
                className="w-60 h-72 border-4 border-white p-2 bg-orange-400
                bg-top bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${data.imgUrl})` }}
              />
              <div className="text-lg text-white flex flex-col gap-2 items-center">
                <p>{data.name}</p>
                <div className="flex gap-2">
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
          </div>
        ) : null}
      </ModalComponent>
    </div>
  );
};

export default Staff;
