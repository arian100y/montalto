import React, { useContext } from "react";
import { UserContext } from "../App";
import ModalComponent from "../components/ModalComponent/ModalComponent";

const services = [
  {
    title: (lan: any) => {
      return lan === 0 ? "Auditoría externa" : "External Audit";
    },
    main: (lan: any) => {
      return lan === 0
        ? `
        Brindamos a los clientes la confiabilidad de su información financiera necesaria, que agregue valor al negocio para la toma de decisiones.

        Emitimos una opinión sobre los estados financieros de la Compañía, evaluamos riesgos y realizamos una estrategia de trabajo para cada entorno y damos fe de la razonabilidad de los estados financieros, teniendo en cuenta los estándares internacionales de auditoría - NIAs.`
        : `We issue an Opinion on the Financial Statements under accounting standards.
  We attest to the reasonableness of the financial statements taking into account international auditing standards. We provide clients with the reliability of financial information necessary for decision making.
   
  Inventory Taking of Stocks and Fixed Assets
  Know and obtain full control over your assets through the inventory taking, valuation and reconciliation service between the physical count and the accounting records under the criteria of the International Accounting Standard (IAS2 and IAS16).
  `;
    },
    content: (lan: any) => {
      return lan === 0
        ? `
        Nuestros servicios:
        •	Auditoría de estados financieros.
        •	Revisiones limitadas y procedimientos previamente convenidos.
        •	Asesoramos sobre aspectos contables (USGAAP, IFRS, Consolidación).
        •	Certificación de asistencia técnica.
        •	Due Diligences, al realizar una compra o venta de empresa, nosotros los ayudamos a que determinen el mejor valor de la operación a través de una revisión integral de la situación financiera, contable y tributaria.
  `
        : `▪ Financial audit
  ▪ Operational audit
  ▪ Previously agreed procedures
  ▪ Technical assistance certification
  ▪ Due diligence`;
    },
  },
  {
    title: (lan: any) => {
      return lan === 0 ? "Consultoría En NIIF​​" : "Advice On IFRS";
    },
    main: (lan: any) => {
      return lan === 0
        ? `
        Brindamos asesoría en la implementación de las normas internacionales de información financiera – NIIF y darle continuidad a lo implementado con la asesoría en la actualización de estas.

        Asesoramos en el tratamiento de operaciones complejas. Revisamos el tratamiento contable y de mejora.
`
        : `We have professional Accountants, Tax Agents and Lawyers to provide diagnosis, implementation and post-implementation services of IFRS. Our multidisciplinary teams include experts in IFRS, in the management of the General Business Accounting Plan (PCGE), recommendations in the proper management of accounting codes and the corresponding dynamics.
We provide services of:`;
    },
    content: (lan: any) => {
      return lan === 0
        ? `
        Brindamos los siguientes servicios:
        •	Asesoría en la adopción de las NIIF.
        •	Diagnóstico e implementación.
        •	Actualización de normas.
        •	Asesoría a los equipos en consultas.
        •	Elaboración y asesoría de políticas contables.
        •	Evaluación de moneda funcional.
        •	Valorización de instrumentos financieros.
      `
        : `▪ Advice on the adoption of IFRS
      ▪ Diagnosis and implementation of IFRS
      ▪ Standards update
      ▪ Personalized advice on IFRS queries
      ▪ Development of accounting policies
      ▪ Conversion of financial statements
      ▪ Functional currency assessment
      ▪ Valuation of financial instruments
      `;
    },
  },
  {
    title: (lan: any) => {
      return lan === 0 ? "Servicios de back office​" : "Advice On IFRS";
    },
    main: (lan: any) => {
      return lan === 0
        ? `
        A través de nuestro servicio de back office, los líderes de las empresas se pueden centrar en su negocio. La tercerización de servicios ayuda a las empresas a ordenarse y a mejorar sus procesos para el buen desempeño organizacional.

        Nuestra fortaleza es tener una visión amplia del negocio y actuar sobre todas las etapas de la cadena de valor para ordenar y lograr la máxima eficiencia en los procesos, creando una estandarización para mitigar errores y retrasos.
        `
        : `We have professional Accountants, Tax Agents and Lawyers to provide diagnosis, implementation and post-implementation services of IFRS. Our multidisciplinary teams include experts in IFRS, in the management of the General Business Accounting Plan (PCGE), recommendations in the proper management of accounting codes and the corresponding dynamics.
We provide services of:`;
    },
    content: (lan: any) => {
      return lan === 0
        ? `
        Nuestros servicios:
        •	Gestión de contabilidad y finanzas.
        •	Gestión de contraloría.
        •	Gestión de recursos humanos.
        •	Gestión de tecnologías de la información.
        •	Gestión en transformación digital.
      `
        : `▪ Advice on the adoption of IFRS
      ▪ Diagnosis and implementation of IFRS
      ▪ Standards update
      ▪ Personalized advice on IFRS queries
      ▪ Development of accounting policies
      ▪ Conversion of financial statements
      ▪ Functional currency assessment
      ▪ Valuation of financial instruments
      `;
    },
  },
  {
    title: (lan: any) => {
      return lan === 0 ? "Auditoría Interna​​" : "Internal Audit";
    },
    main: (lan: any) => {
      return lan === 0
        ? `
        Organizamos los procesos de su empresa a través de la implementación de sistemas de control interno o con la elaboración de manuales de políticas, procedimientos y funciones. La ejecución de planes de auditoría basada en riesgos.    `
        : `We organize the processes of your company through the implementation of internal control systems or with the elaboration of manuals of policies, procedures and functions. The execution of risk-based audit plans.`;
    },
    content: (lan: any) => {
      return lan === 0
        ? `
        Nuestros servicios:
        •	Revisión de procesos.
        •	Implementación del plan de auditoría interna basado en riesgos.
        •	Planes anuales de auditoría interna y su ejecución.
        •	Evaluaciones de calidad de la función de auditoría interna bajo el marco internacional para práctica profesional de auditoría interna.
        •	Evaluación de la gestión de riesgo de fraude.
        •	Implementación de la gestión de riesgos de lavado de activos y financiamiento al terrorismo.
        •	Continuidad de negocios.
        •	Seguridad de la información y ciberseguridad.
    
      `
        : `▪ Review of processes
      ▪ Implementation of the risk-based internal audit plan
      ▪ Annual internal audit plans and their execution
      ▪ Quality assessments of the internal audit function under the International Framework for the Professional Practice of Internal Audit
      ▪ Fraud risk management assessment
      ▪ Implementation of money laundering and terrorist financing risk management
      ▪ Business continuity
      ▪ Information security and cybersecurity`;
    },
  },
  {
    title: (lan: any) => {
      return lan === 0 ? "Inventarios y tasaciones" : "Inventories";
    },
    main: (lan: any) => {
      return lan === 0
        ? `
        Los inventarios físicos son actividad clave para una adecuada gestión empresarial. Permiten verificar la existencia del activo, el mantener un control total de los mismos y en el caso de los activos fijos, comprobar el estado de conservación, su ubicación y sus condiciones de uso. También ayudan a mantener al día sus registros contables, como sustento de los saldos presentados en los estados financieros y el cumplimiento tributario.

        Contamos con un equipo multidisciplinario de contadores e ingenieros tasadores, 100% capacitados y especializados que permiten adecuarnos a las normas con un trabajo de excelencia.
        
`
        : `We organize the processes of your company through the implementation of internal control systems or with the elaboration of manuals of policies, procedures and functions. The execution of risk-based audit plans.`;
    },
    content: (lan: any) => {
      return lan === 0
        ? `
        Nuestros servicios de inventarios físicos incluyen:
        •	Toma de inventarios físicos de existencias y activos fijos.
        •	Codificación y Rotulación de activos, mediante el uso de códigos de barra.
        •	Impresión de etiquetas y placas metálicas.
        •	Tasaciones bajo NIIF.
    
      `
        : ``;
    },
  },
  {
    title: (lan: any) => {
      return lan === 0 ? "Impuestos Y Legal​" : "Tax And Legal";
    },
    main: (lan: any) => {
      return lan === 0
        ? `
        Evitamos contingencias tributarias y optimizamos los recursos de la Compañía con una asesoría especializada y profesional.
    
`
        : `We organize the processes of your company through the implementation of internal control systems or with the elaboration of manuals of policies, procedures and functions. The execution of risk-based audit plans.`;
    },
    content: (lan: any) => {
      return lan === 0
        ? `
        Nuestros servicios:
        •	Consultoría tributaria y legal.
        •	Auditoría tributaria.
        •	Planeamiento tributario.
        •	Precios de transferencia.
      `
        : `▪ Tax and legal consultancy
      ▪ Tax audit
      ▪ Tax planning
      ▪ Transfer prices`;
    },
  },
  {
    title: (lan: any) => {
      return lan === 0
        ? "Valorización de empresas e intangibles"
        : "Business Consulting";
    },
    main: (lan: any) => {
      return lan === 0
        ? `
        La valorización empresarial es una herramienta que ayuda a determinar el precio de transferencia de una empresa en marcha, una marca o un proyecto empresarial.

        La valoración de empresas se realiza normalmente cuando una empresa quiere vender la totalidad o una parte de sus operaciones o quiere fusionarse con otra empresa o adquirirla. Contamos con especialistas en el proceso de determinar el valor actual de una empresa, utilizando medidas objetivas y evaluando todos los aspectos de la empresa.            
`
        : `We organize the processes of your company through the implementation of internal control systems or with the elaboration of manuals of policies, procedures and functions. The execution of risk-based audit plans.`;
    },
    content: (lan: any) => "",
  },
  {
    title: (lan: any) => {
      return lan === 0 ? "Capacitaciones In-House​" : "In-house training";
    },
    main: (lan: any) =>
      `En un mundo en constante cambio, el conocimiento es el mejor aliado para el desarrollo profesional y de los negocios. Por eso, ofrecemos capacitaciones internas personalizadas, diseñadas con las últimas tendencias y en función de las necesidades de nuestros clientes y así pueden desarrollar habilidades y afrontar nuevos retos en el mercado.
      `,
    content: (lan: any) => `

`,
  },
];

function Services() {
  // const [showModal, setShowModal] = useState(false);
  const { showModal, setShowModal, setContentIdx, contentIdx } =
    useContext(UserContext);

  const { language } = useContext(UserContext);

  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-duration="1100"
        data-aos-delay="0"
        data-aos-offset="400"
        id="services"
        className="w-full   py-20"
      >
        <div className="max-w-7xl mx-auto flex-col flex justify-center items-center ">
          <div className="flex justify-center items-center space-x-3 pb-20">
            <div className="border-b-2 border-[orange] w-10" />
            <p className="text-4xl lg:text-5xl family-jost text-customBlue uppercase">
              {language === 0 ? "Servicios" : "Services"}
            </p>
            <div className="border-b-2 border-[orange] w-10" />
          </div>
          <div
            style={{ borderColor: "rgb(0,37,83)" }}
            className="hidden md:block lg:border-4 px-5 py-5 md:p-5 space-y-5"
          >
            {services.map((obj, idc) => (
              <div
                onClick={(e) => {
                  if (obj.main !== null) {
                    e.preventDefault();
                    setContentIdx(idc);
                    setShowModal(true);
                  }
                }}
                className="text-center cursor-pointer py-2 hover:bg-orange-100 
                px-8 lg:px-20 border-2 border-orange-400"
              >
                <b className="text-lg text-customBlue">{obj.title(language)}</b>
              </div>
            ))}
          </div>
          <div
            style={{ borderColor: "rgb(0,37,83)" }}
            className="block md:hidden lg:border-4 px-5  md:p-5 space-y-5"
          >
            {services.map((obj, idc) => (
              <div
                onClick={(e) => {
                  if (obj.main !== null) {
                    e.preventDefault();
                    setContentIdx(idc);
                    setShowModal(true);
                  }
                }}
                className="text-center cursor-pointer py-2 hover:bg-orange-100 
                px-8 lg:px-20 border-2 border-orange-400"
              >
                <b style={{ color: "rgb(0,37,83)" }} className="text-lg">
                  {obj.title(language)}
                </b>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ModalComponent
        onClose={() => {
          setShowModal(false);
        }}
        showModal={showModal}
        showCloseButton={true}
      >
        <div className="max-w-md p-10 text-sm">
          <p className="font-bold text-lg md:text-base mb-3 text-customBlue">
            {/* {language === 0 ? "Detalle de servicio " : ""}{" "} */}
            {services[contentIdx].title(language)}{" "}
            {language === 0 ? "" : " service detail"}:{" "}
          </p>
          {/* <pre>{data.content}</pre> */}
          <div className="mb-3">
            {services[contentIdx].main &&
              services[contentIdx].main!(language)
                .split(/\r?\n|\r|\n/g)
                .map((text) => (
                  <p className="text-left text-customBlue mb-1">{text}</p>
                ))}
          </div>
          {services[contentIdx].content!(language)
            .split(/\r?\n|\r|\n/g)
            .map((text) => (
              <p className="text-left text-customBlue mb-1">{text}</p>
            ))}
          <button
            onClick={() => {
              setShowModal(false);
              window.open("https://wa.me/c/5117026125", "_blank");
            }}
            style={{ background: "rgb(0,37,83)" }}
            className="w-full text-white rounded py-2 mt-5"
          >
            Tienda virtual
          </button>
        </div>
      </ModalComponent>
    </>
  );
}

export default Services;
