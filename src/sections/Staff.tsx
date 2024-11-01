import React, { useContext, useState } from "react";
import { CallOutline, CloseCircleOutline } from "react-ionicons";
import { UserContext } from "../App";
import ModalComponent from "../components/ModalComponent/ModalComponent";

const staff = [
  {
    title: (lan: any) => {
      return lan === 0 ? "Socia y Gerente" : "Manager Partner";
    },
    name: "Rossana Montalto Herrera",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/montaltoasociados.appspot.com/o/manager.jpeg?alt=media&token=de604346-6a76-4883-97c6-48dee77a6e4f",
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
      return lan === 0
        ? "Socia y Gerente General"
        : "Partner and General Manager";
    },
    name: "Marysol León Huayanca",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/montaltoasociados.appspot.com/o/tax.jpeg?alt=media&token=9acd431f-8016-47bb-b094-a350c2f5a570",
    phoneNumber: "+51 1 7026125",
    email: "Info@montaltoasociados.com​",
    extra: (lan: any) => {
      return [
        lan === 0
          ? "Fundadora de Quantum Consultores, empresa especializada en auditoría y consultoría tributaria contable-financiera y laboral. Es contadora pública colegiada con grado de Magister en Tributación y Política Fiscal por la Universidad de Lima. Especialista en Tributación Internacional por la Universidad Austral de Buenos Aires. Ha seguido el curso para Propietarios de Empresas en la Universidad de Piura así como el curso de Especializado para Ejecutivos: Fundamentos de Transformación Digital en la Universidad Pacífico. Ha seguido la Especialización de Normas Internacionales de Información Financiera Completas y Pymes en Quantum Escuela de Negocios y Arista Global Group, así como el Curso Postgrado 2020, Actualización en Derecho Tributario Internacional en Maastricht University de Holanda."
          : "Founder of Quantum Consultores, a company specialized in auditing and accounting-financial and labor tax consulting. She is a certified public accountant with a Master's degree in Taxation and Fiscal Policy from the University of Lima. She is a specialist in International Taxation from the Austral University of Buenos Aires. She has followed the course for Business Owners at the University of Piura as well as the Specialized course for Executives: Fundamentals of Digital Transformation at the Universidad Pacífico. She has followed the Specialization in Complete International Financial Reporting Standards and SMEs at Quantum Business School and Arista Global Group, as well as the 2020 Postgraduate Course, Update in International Tax Law at Maastricht University in the Netherlands.",
        lan === 0
          ? "Actualmente es miembro del Cómite Tributario de la Cámara de Comercio de Lima. Además, es asociada del Instituto Peruano de Investigación y Desarrollo Tributario (IPIDET) y miembro activo de la Asociación Fiscal Internacional (IFA) Grupo Peruano. Es miembro de la Comisión de Tributación y Fiscalidad de la Asociación Interamericana de Contabilidad AIC."
          : "He is currently a member of the Tax Committee of the Lima Chamber of Commerce. She is also an associate of the Peruvian Institute for Tax Research and Development (IPIDET) and an active member of the International Tax Association (IFA) Peruvian Group. She is a member of the Taxation and Taxation Commission of the Inter-American Accounting Association AIC.",
        lan === 0
          ? "En su trayectoria destaca además su posición como Vocal del Tribunal Fiscal y como DIrectora de Normas Legales y Tributarias del Colegio de Contadores Públicos de Lima (1997-1999). Autora del Libro Auditoría Tributaria Preventiva editado en el año 2018. Docente de la Universidad de Lima, Continental, ha sido docente en la UNMSM así como en la Universidad de Piura. Premiada en Turquía en noviembre de 2015 por la IWEC (The International Women's Entrepeneurial Challenge) como Mujer Empresaria jutno a 35 empresarias de todo el mundo. Nombrada como Mujer Empresaria Emprendedora en 2015 por la Cámara de Comercio de Lima."
          : "Her career also highlights her position as Member of the Tax Court and as Director of Legal and Tax Standards of the College of Public Accountants of Lima (1997-1999). She is the author of the Preventive Tax Audit Book published in 2018. She is a Professor at the University of Lima, Continental, she has been a professor at the UNMSM as well as at the University of Piura. She was awarded in Turkey in November 2015 by the IWEC (The International Women's Entrepreneurial Challenge) as a Business Woman along with 35 businesswomen from around the world. She was named as an Entrepreneurial Businesswoman in 2015 by the Lima Chamber of Commerce.",
      ];
    },
  },

  {
    title: (lan: any) => {
      return lan === 0 ? "Gerente de auditoría​" : "Audit Manager";
    },
    name: "Jaime Villava Cataño",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/montaltoasociados.appspot.com/o/auditoria.jpeg?alt=media&token=b5f8631f-1ddf-4ac2-b8d0-4406f6b30a36",
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
  {
    title: (lan: any) => {
      return lan === 0 ? "Contador público" : "Accountant";
    },
    name: "Luis Placido",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/montaltoasociados.appspot.com/o/Screen%20Shot%202024-02-14%20at%209.55.53%20PM.png?alt=media&token=43d72c5b-ee67-4adf-aa57-75f2b07b42ff",
    phoneNumber: "+51 1 7026125",
    email: "Info@montaltoasociados.com​",
    extra: (lan: any) => {
      return [
        lan === 0
          ? "Contador Público Colegiado con post-grado en la especialidad de Finanzas, especialista en las áreas de Administración y Finanzas, Tesorería y Crédito y Cobranzas en empresas nacionales y multinacionales líderes en consumo masivo en los rubros de alimentación, panificación, lácteos, eléctricos, mecánicos, entre otros. Experto como negociador con bancos, proveedores y clientes implementando políticas y procedimientos para reducir costos y gastos, obtener la liquidez necesaria y mejorar la rentabilidad de la empresa."
          : "Certified Public Accountant with a postgraduate degree specializing in Finance, experienced in the fields of Administration, Finance, Treasury, and Credit and Collections in leading national and multinational companies in the consumer goods sectors such as food, baking, dairy, electrical, mechanical, among others. Skilled negotiator with banks, suppliers, and customers, implementing policies and procedures to reduce costs and expenses, achieve necessary liquidity, and enhance company profitability.",
        lan === 0
          ? "Asesor de empresas con habilidad para el análisis, resolución de problemas y toma de decisiones orientada a una gerencia por objetivos y resultados.          "
          : "Business consultant with a strong ability for analysis, problem-solving, and decision-making oriented towards goal-oriented management and results.",
        lan === 0
          ? "Profesional pro-activo, con liderazgo, promotor de sinergia en equipo de trabajo y facilidad para interrelacionarse a todo nivel."
          : "Proactive professional with leadership skills, promoting synergy within the team and adept at building relationships at all levels.",
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
      <div className="max-w-7xl flex justify-center mx-auto  ">
        {/* CARD  */}
        <div
          className="flex flex-col lg:flex-row px-0 md:px-0 lg:px-0 py-10 rounded-xl 
          space-y-7 lg:space-y-0 lg:space-x-0 xl:space-x-0 max-w-full"
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
            flex flex-col lg:flex-row rounded-xl bg-customBlue"
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
              className="flex md:hidden w-full max-w-full lg:w-1/3  flex-col justify-center
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
              className="hidden md:flex w-full max-w-full lg:w-1/3  flex-col justify-center
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
