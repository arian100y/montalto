import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { UserContext } from "../App";

function Allies() {
  const { language } = useContext(UserContext);
  return (
    <div id="allies" className="w-full py-20 ">
      <div
        className="w-full max-w-7xl flex  flex-col items-center justify-center mx-auto px-2
     "
      >
        <div className="flex justify-center items-center space-x-3 pb-20">
          <div style={{ borderColor: "orange" }} className="border-b-2  w-10" />
          <p className="text-4xl lg:text-5xl family-jost text-gray-700 uppercase">
            {language === 0 ? "Clientes" : "Clients"}
          </p>
          <div style={{ borderColor: "orange" }} className="border-b-2  w-10" />
        </div>
        <div
          style={{
            borderColor: "rgb(0,37,83)",
            borderBottomRightRadius: 60,
            borderTopLeftRadius: 60,
            boxShadow: "0 0 29px 0 rgba(68,88,144,.12)",
          }}
          className="hidden lg:block overflow-hidden shadow-sm border-2 bg-white "
        >
          <Carousel
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
            className=" relative"
          >
            <div className="bg-white flex flex-col justify-center p-7 overflow-hidden">
              <div className="flex justify-evenly w-full">
                <div className="transform transition duration-500 hover:scale-125 ">
                  <img
                    style={{ width: 180, height: 150 }}
                    alt="delfin"
                    src="https://i.ibb.co/rFndnpB/image.png"
                  />
                </div>
                <div className="transform transition duration-500 hover:scale-125 ">
                  <img
                    style={{ width: 180, height: 150 }}
                    alt="delfin"
                    src="https://firebasestorage.googleapis.com/v0/b/montaltoasociados.appspot.com/o/delfin.svg?alt=media&token=3d10ecf6-c550-406d-b56a-fb5dc6675310"
                  />
                </div>
                <div className="transform transition duration-500 hover:scale-125 ">
                  <img
                    style={{ width: 180, height: 150 }}
                    alt="delfin"
                    src="https://firebasestorage.googleapis.com/v0/b/montaltoasociados.appspot.com/o/continental.png?alt=media&token=e3fd2fd5-0bfd-4812-a954-0c8a3cd8aa86"
                  />
                </div>
              </div>
              <div className="flex justify-evenly w-full mt-10">
                <div className="transform transition duration-500 hover:scale-125 ">
                  <img
                    style={{ width: 180, height: 150 }}
                    alt="delfin"
                    src="https://firebasestorage.googleapis.com/v0/b/montaltoasociados.appspot.com/o/sni.png?alt=media&token=bb93b2ae-4ed0-45a0-9a36-82e4a33fb259"
                  />
                </div>
                <div className="transform transition duration-500 hover:scale-125 ">
                  <img
                    style={{ width: 220, height: 150 }}
                    alt="delfin"
                    src="https://firebasestorage.googleapis.com/v0/b/montaltoasociados.appspot.com/o/leon.jpeg?alt=media&token=75793740-c645-4ffb-a69f-9ca55def2738"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white flex flex-col justify-center p-7 overflow-hidden">
              <div className="flex justify-evenly w-full">
                <div className="transform transition duration-500 hover:scale-125 ">
                  <img
                    style={{ width: 180, height: 150 }}
                    alt="delfin"
                    src="https://www.delfinamazoncruises.com/wp-content/uploads/2021/02/Logo-DAC-01.png"
                  />
                </div>
                <div className="transform transition duration-500 hover:scale-125 ">
                  <img
                    style={{ width: 180, height: 150 }}
                    alt="delfin"
                    src="https://cdn.worldvectorlogo.com/logos/telefonica-moviles-4.svg"
                  />
                </div>
                <div className="transform transition duration-500 hover:scale-125 ">
                  <img
                    style={{ width: 180, height: 150 }}
                    alt="delfin"
                    src="https://ucontinental.edu.pe/www/wp-content/uploads/2022/09/logo-cominicado.png"
                  />
                </div>
              </div>
              <div className="flex justify-evenly w-full mt-10">
                <div className="transform transition duration-500 hover:scale-125 ">
                  <img
                    style={{ width: 180, height: 150 }}
                    alt="delfin"
                    src="https://www.sni.org.pe/wp-content/uploads/2017/12/snilogoc-2.png"
                  />
                </div>
                <div className="transform transition duration-500 hover:scale-125 ">
                  <img
                    style={{ width: 200, height: 150 }}
                    alt="delfin"
                    src="https://educacionalfuturo.com/wp-content/uploads/2017/12/12434.jpg"
                  />
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div
          style={{
            borderColor: "rgb(0,37,83)",
            borderBottomRightRadius: 60,
            borderTopLeftRadius: 60,
            boxShadow: "0 0 29px 0 rgba(68,88,144,.12)",
          }}
          className="block lg:hidden overflow-hidden"
        >
          <div
            style={{
              borderColor: "rgb(0,37,83)",
              borderBottomRightRadius: 60,
              borderTopLeftRadius: 60,
              boxShadow: "0 0 29px 0 rgba(68,88,144,.12)",
            }}
            className="block lg:hidden overflow-hidden shadow-sm border-2 bg-white "
          >
            <Carousel
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
              className=" relative"
            >
              <div className="w-full overflow-hidden">
                <img
                  style={{
                    borderBottomRightRadius: 60,
                    borderTopLeftRadius: 60,
                    overflow: "hidden",
                  }}
                  className="w-full h-60"
                  alt=""
                  src="https://www.delfinamazoncruises.com/wp-content/uploads/2021/02/Logo-DAC-01.png"
                />
              </div>
              <div className="w-full overflow-hidden">
                <img
                  style={{
                    borderBottomRightRadius: 60,
                    borderTopLeftRadius: 60,
                    overflow: "hidden",
                  }}
                  className="w-full h-60"
                  alt="delfin"
                  src="https://cdn.worldvectorlogo.com/logos/telefonica-moviles-4.svg"
                />
              </div>
              <div className="w-full overflow-hidden">
                <img
                  style={{
                    borderBottomRightRadius: 60,
                    borderTopLeftRadius: 60,
                    overflow: "hidden",
                  }}
                  className="w-full h-60"
                  alt="delfin"
                  src="https://ucontinental.edu.pe/www/wp-content/uploads/2022/09/logo-cominicado.png"
                />
              </div>
              <div className="w-full overflow-hidden">
                <img
                  style={{
                    borderBottomRightRadius: 60,
                    borderTopLeftRadius: 60,
                    overflow: "hidden",
                  }}
                  className="w-full h-60"
                  alt="delfin"
                  src="https://www.sni.org.pe/wp-content/uploads/2017/12/snilogoc-2.png"
                />
              </div>
              <div className="w-full overflow-hidden">
                <img
                  style={{
                    borderBottomRightRadius: 60,
                    borderTopLeftRadius: 60,
                    overflow: "hidden",
                  }}
                  className="w-full h-60"
                  alt="delfin"
                  src="https://educacionalfuturo.com/wp-content/uploads/2017/12/12434.jpg"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allies;
