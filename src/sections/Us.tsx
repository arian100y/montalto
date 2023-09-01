import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import "./styles.css";
import { UserContext } from "../App";

function Us() {
  const { language } = useContext(UserContext);
  return (
    <div id="us" data-aos="fade-in" className="w-full   py-20">
      <div className="flex justify-center items-center space-x-3 pb-20">
        <div style={{ borderColor: "orange" }} className="border-b-2  w-10" />
        <p className="text-4xl lg:text-5xl family-jost text-gray-700 uppercase">
          {language === 0 ? "Nosotros" : "Us"}
        </p>
        <div style={{ borderColor: "orange" }} className="border-b-2  w-10" />
      </div>
      <div
        className="space-y-6 lg:space-y-0  max-w-7xl w-full flex
       flex-col items-center lg:flex-row justify-between mx-auto lg:space-x-3 "
      >
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="0"
          style={{ minHeight: "364px" }}
          // className=" p-7 bg-white  max-w-sm btn-style508"
          className="click-btn btn-style508 border-2  max-w-sm  p-7"
        >
          <Icon className="w-14 h-14 mb-2" icon="mdi:people-check" />
          <p className="text-left">
            {" "}
            {language === 0
              ? `Somos una firma peruana que presta servicios de auditoría y
            consultoría financiera con un enfoque integral y multidisciplinario.
            Formamos parte de Morison Global Independent, red de firmas
            representantes con sede en Londres, con más de 30 años brindando
            servicios de auditoría y consultoría de negocios de alta calidad,
            con más de 141 miembros en 307 oficinas distribuidos en más de 74
            países.`
              : `We are a Peruvian firm that provides audit and
            financial consultancy with a comprehensive and multidisciplinary approach.
            We are part of Morison Global Independent, a network of firms
            representatives based in London, with over 30 years providing
            high-quality audit and business consulting services,
            with more than 141 members in 307 offices distributed in more than 74
            countries.`}
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="200"
          // style={{ boxShadow: "0 0 10px grey" }}
          // className=" p-7 bg-white  max-w-sm btn-style508"
          className="click-btn btn-style508 border-2  max-w-sm  p-7"
        >
          <Icon className="w-14 h-14 mb-2" icon="ri:building-2-fill" />
          <p className="text-left">
            {language === 0
              ? `Nuestra organización presta servicios a importantes empresas de
              diversos sectores económicos, lo cual nos da una ventaja de
              experiencia sobre nuestra competencia. Una gran parte de nuestra
              cartera de clientes comprende entidades que pertenecen al rango de
              la gran y mediana empresa y entidades sin fines de lucro. Estos
              grupos empresariales constantemente reciben, por medio de nuestros
              servicios integrados, un nivel consistentemente óptimo de servicio y
              experiencia.​`
              : `Our organization provides services to major companies in
              diverse economic sectors, which gives us an advantage of
              experience over our competition. A large part of our
              client portfolio includes entities that belong to the range of
              large and medium-sized companies and non-profit entities. These
              business groups constantly receive, through our
              integrated services, a consistently optimal level of service and
              experience.​`}
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="400"
          style={{ boxShadow: "0 0 10px grey" }}
          // className=" p-7 bg-white  max-w-sm btn-style508"
          className="click-btn btn-style508 border-2  max-w-sm  p-7"
        >
          <Icon
            className="w-14 h-14 mb-2"
            icon="icon-park-solid:thinking-problem"
          />
          <p className="text-left">
            {language === 0
              ? `Creemos en el talento de las personas y en la excelencia. Contamos
              con un equipo multidisciplinario de amplia experiencia adaptable a
              las distintas necesidades de nuestros clientes y el entorno. Gracias
              a nuestro conocimiento y formación constante, podemos brindar un
              servicio de alta calidad, seguridad y transparencia, que lo ayudará
              a tener el control de su información financiera y agregar valor a
              sus negocios.​`
              : `We believe in the talent of people and in excellence. we count
              with a multidisciplinary team with extensive experience adaptable to
              the different needs of our clients and the environment. Thanks
              to our knowledge and constant training, we can provide a
              high quality service, security and transparency, which will help you
              to have control of your financial information and add value to
              their business.​`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Us;
