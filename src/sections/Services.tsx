import React, { useContext } from "react";
import { UserContext } from "../App";
import ModalComponent from "../components/ModalComponent/ModalComponent";

const services = [
  {
    title: (lan: any) => {
      return lan === 0 ? "Auditoría​" : "Audit";
    },
    main: (lan: any) => {
      return lan === 0
        ? `
Emitimos una Opinión Sobre los Estados Financieros bajo normas de contabilidad.
Damos fé de la razonabilidad de los estados financieros teniendo en cuenta estándares internacionales de auditoría. Brindamos a los clientes la confiabilidad en la información financiera necesaria para la toma de decisiones.
 
Toma de Inventario de Existencias y Activo Fijo
Conozca y obtenga el control total sobre sus bienes a través del servicio de toma de inventario, valoración y conciliación entre el conteo físico y los registros contables bajo los criterios de la Norma Internacional de Contabilidad (NIC2 y NIC16).`
        : `We issue an Opinion on the Financial Statements under accounting standards.
  We attest to the reasonableness of the financial statements taking into account international auditing standards. We provide clients with the reliability of financial information necessary for decision making.
   
  Inventory Taking of Stocks and Fixed Assets
  Know and obtain full control over your assets through the inventory taking, valuation and reconciliation service between the physical count and the accounting records under the criteria of the International Accounting Standard (IAS2 and IAS16).`;
    },
    content: (lan: any) => {
      return lan === 0
        ? `
▪ Auditoría financiera
▪ Auditoría operativa
▪ Procedimientos previamente convenidos
▪ Certificación de asistencia técnica
▪ Due diligences
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
      return lan === 0 ? "Auditoría Interna​​" : "Internal Audit";
    },
    main: (lan: any) => {
      return lan === 0
        ? `
    Organizamos los procesos de su empresa a través de la implementación de sistemas de control interno o con la elaboración de manuales de políticas, procedimientos y funciones. La ejecucion de planes de auditoria basado en riesgos.`
        : `We organize the processes of your company through the implementation of internal control systems or with the elaboration of manuals of policies, procedures and functions. The execution of risk-based audit plans.`;
    },
    content: (lan: any) => {
      return lan === 0
        ? `
    ▪ Revisión de procesos
    ▪ Implementación del plan de auditoría interna basado en riesgos
    ▪ Planes anuales de auditoría interna y su ejecución
    ▪ Evaluaciones de calidad de la función de auditoría interna bajo el marco internacional para práctica profesional de auditoría interna
    ▪ Evaluación de la gestión de riesgo de fraude
    ▪ Implementación de la gestión de riesgos de lavado de activos y financiamiento al terrorismo
    ▪ Continuidad de negocios
    ▪ Seguridad de información y ciberseguridad
    
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
      return lan === 0 ? "Inventarios" : "Inventories";
    },
    main: null,
    content: (lan: any) => `

`,
  },
  {
    title: (lan: any) => {
      return lan === 0 ? "Asesoría En NIIF​​" : "Advice On IFRS";
    },
    main: (lan: any) => {
      return lan === 0
        ? `
    Contamos con profesionales Contadores, Tributaristas y Abogados para brindar servicios de diagnóstico, implementación y post implementación de las NIIF. Nuestros equipos multidisciplinarios incluyen a expertos en NIIF, en el manejo de Plan Contable General Empresarial (PCGE), recomendaciones en el adecuado manejo de códigos contables y de la dinámica correspondiente.
    Brindamos servicios de:
`
        : `We have professional Accountants, Tax Agents and Lawyers to provide diagnosis, implementation and post-implementation services of IFRS. Our multidisciplinary teams include experts in IFRS, in the management of the General Business Accounting Plan (PCGE), recommendations in the proper management of accounting codes and the corresponding dynamics.
We provide services of:`;
    },
    content: (lan: any) => {
      return lan === 0
        ? `
    ▪ Asesoría en la adopción de las NIIF
    ▪ Diagnóstico e implementación de NIIF
    ▪ Actualización de normas
    ▪ Asesoría personalizada de consultas en NIIF
    ▪ Elaboración de políticas contables
    ▪ Conversión de estados financieros
    ▪ Evaluación de moneda funcional
    ▪ Valorización de instrumentos financieros
      `
        : `▪ Advice on the adoption of IFRS
      ▪ Diagnosis and implementation of IFRS
      ▪ Standards update
      ▪ Personalized advice on IFRS queries
      ▪ Development of accounting policies
      ▪ Conversion of financial statements
      ▪ Functional currency assessment
      ▪ Valuation of financial instruments`;
    },
  },
  {
    title: (lan: any) => {
      return lan === 0 ? "Impuestos Y Legal​" : "Tax And Legal";
    },
    main: (lan: any) => ``,
    content: (lan: any) => {
      return lan === 0
        ? `
    ▪ Consultoría tributaria y legal
    ▪ Auditoria tributaria
    ▪ Planeamiento tributario
    ▪ Precios de transferencia
      `
        : `▪ Tax and legal consultancy
      ▪ Tax audit
      ▪ Tax planning
      ▪ Transfer prices`;
    },
  },
  {
    title: (lan: any) => {
      return lan === 0 ? "Asesoría De Negocios​" : "Business Consulting";
    },
    main: (lan: any) => ``,
    content: (lan: any) => {
      return lan === 0
        ? `
    ▪ Outsourcing contable
    ▪ Outsourcing de nóminas
    ▪ Compilacion de estados financieros
    ▪ Revsion contable de los planes contables y las dinámicas contables
    ▪ Estado de flujo de efectivo y presupuestos
    ▪ Administración y tesorería
    ▪ Cumplimiento de obligaciones tributarias
      `
        : `▪ Accounting outsourcing
      ▪ Payroll outsourcing
      ▪ Compilation of financial statements
      ▪ Accounting review of accounting plans and accounting dynamics
      ▪ Cash flow statement and budgets
      ▪ Administration and treasury
      ▪ Compliance with tax obligations`;
    },
  },
  {
    title: (lan: any) => {
      return lan === 0 ? "Capacitaciones In-House​" : "In-house training";
    },
    main: null,
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
        showCloseButton={false}
      >
        <div className="max-w-md p-10 text-sm">
          <p className="font-bold text-lg mb-3 text-customBlue">
            {language === 0 ? "Detalle de servicio " : ""}{" "}
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
            }}
            style={{ background: "rgb(0,37,83)" }}
            className="w-full text-white rounded py-2 mt-5"
          >
            Cerrar
          </button>
        </div>
      </ModalComponent>
    </>
  );
}

export default Services;
