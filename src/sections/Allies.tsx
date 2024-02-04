import React, { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel as CarouselReact } from "react-responsive-carousel";
import Carousel from "react-bootstrap/Carousel";
import { UserContext } from "../App";
import clients from "./ClientsImports";
import associations from "./AssociationsImports";

function Allies() {
  const { language } = useContext(UserContext);

  return (
    <div id="allies" className="w-full py-20 bg-customBlue">
      <div
        className="w-full max-w-7xl flex flex-col items-center justify-center mx-auto
        px-2"
      >
        <div className="flex justify-center items-center space-x-3 pb-20">
          <div className="border-b-2 border-[orange] w-10" />
          <p className="text-4xl lg:text-5xl family-jost text-white uppercase">
            {language === 0 ? "Clientes" : "Clients"}
          </p>
          <div className="border-b-2 border-[orange] w-10" />
        </div>
        <div
          style={{
            borderColor: "orange",
            borderBottomRightRadius: 60,
            borderTopLeftRadius: 60,
            boxShadow: "0 0 29px 0 rgba(68,88,144,.12)",
          }}
          className="overflow-hidden shadow-sm border-4 bg-white lg:w-full"
        >
          <Carousel fade className="relative">
            <Carousel.Item>
              <div
                className="flex lg:flex-col gap-7 items-center my-10 mx-5 lg:my-20
                lg:mx-auto lg:gap-20"
              >
                <div className="flex flex-col gap-3 w-full lg:justify-evenly lg:flex-row lg:gap-0">
                  {clients.slice(0, 4).map((client) => (
                    <div
                      key={client.name}
                      className="transform transition duration-500 hover:scale-125 "
                    >
                      <img
                        style={{
                          width: client.width,
                          height: client.height,
                        }}
                        alt={client.name}
                        src={client.image}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3 w-full lg:justify-evenly lg:flex-row lg:gap-0">
                  {clients.slice(4, 8).map((client) => (
                    <div
                      key={client.name}
                      className="transform transition duration-500 hover:scale-125 "
                    >
                      <img
                        style={{
                          width: client.width,
                          height: client.height,
                        }}
                        alt={client.name}
                        src={client.image}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                className="flex lg:flex-col gap-7 items-center my-10 mx-5 lg:my-20
                lg:mx-auto lg:gap-20"
              >
                <div className="flex flex-col gap-3 w-full lg:justify-evenly lg:flex-row lg:gap-0">
                  {clients.slice(8, 12).map((client) => (
                    <div
                      key={client.name}
                      className="transform transition duration-500 hover:scale-125 "
                    >
                      <img
                        style={{
                          width: client.width,
                          height: client.height,
                        }}
                        alt={client.name}
                        src={client.image}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3 w-full lg:justify-evenly lg:flex-row lg:gap-0">
                  {clients.slice(12, 16).map((client) => (
                    <div
                      key={client.name}
                      className="transform transition duration-500 hover:scale-125 "
                    >
                      <img
                        style={{
                          width: client.width,
                          height: client.height,
                        }}
                        alt={client.name}
                        src={client.image}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                className="flex lg:flex-col gap-7 items-center my-10 mx-5 lg:my-20
                lg:mx-auto lg:gap-20"
              >
                <div className="flex flex-col gap-3 w-full lg:justify-evenly lg:flex-row lg:gap-0">
                  {clients.slice(16, 20).map((client) => (
                    <div
                      key={client.name}
                      className="transform transition duration-500 hover:scale-125 "
                    >
                      <img
                        style={{
                          width: client.width,
                          height: client.height,
                        }}
                        alt={client.name}
                        src={client.image}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3 w-full lg:justify-evenly lg:flex-row lg:gap-0">
                  {clients.slice(20, 24).map((client) => (
                    <div
                      key={client.name}
                      className="transform transition duration-500 hover:scale-125 "
                    >
                      <img
                        style={{
                          width: client.width,
                          height: client.height,
                        }}
                        alt={client.name}
                        src={client.image}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                className="flex lg:flex-col gap-7 items-center my-10 mx-5 lg:my-20
                lg:mx-auto lg:gap-20"
              >
                <div className="flex flex-col gap-3 w-full lg:justify-evenly lg:flex-row lg:gap-0">
                  {clients.slice(24, 28).map((client) => (
                    <div
                      key={client.name}
                      className="transform transition duration-500 hover:scale-125 "
                    >
                      <img
                        style={{
                          width: client.width,
                          height: client.height,
                        }}
                        alt={client.name}
                        src={client.image}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3 w-full lg:justify-evenly lg:flex-row lg:gap-0">
                  {clients.slice(28, 32).map((client) => (
                    <div
                      key={client.name}
                      className="transform transition duration-500 hover:scale-125 "
                    >
                      <img
                        style={{
                          width: client.width,
                          height: client.height,
                        }}
                        alt={client.name}
                        src={client.image}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                className="flex lg:flex-col gap-7 items-center my-10 mx-5 lg:my-20
                lg:mx-auto lg:gap-20"
              >
                <div className="flex flex-col gap-3 w-full lg:justify-evenly lg:flex-row lg:gap-0">
                  {clients.slice(32, 36).map((client) => (
                    <div
                      key={client.name}
                      className="transform transition duration-500 hover:scale-125 "
                    >
                      <img
                        style={{
                          width: client.width,
                          height: client.height,
                        }}
                        alt={client.name}
                        src={client.image}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3 w-full lg:justify-evenly lg:flex-row lg:gap-0">
                  {clients.slice(36, 40).map((client) => (
                    <div
                      key={client.name}
                      className="transform transition duration-500 hover:scale-125 "
                    >
                      <img
                        style={{
                          width: client.width,
                          height: client.height,
                        }}
                        alt={client.name}
                        src={client.image}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        {/* <div
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
            className="block lg:hidden overflow-hidden shadow-sm border-2 bg-white py-16"
          >
            <CarouselReact
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
              className="relative"
            >
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="transform transition duration-500 hover:scale-125 w-full overflow-hidden"
                >
                  <img
                    style={{
                      width: client.width,
                      height: client.height,
                    }}
                    alt={client.name}
                    src={client.image}
                  />
                </div>
              ))}
            </CarouselReact>
          </div>
        </div> */}
        <div className="flex justify-center items-center space-x-3 py-20">
          <div className="border-b-2 border-[orange] w-10" />
          <p className="text-4xl lg:text-5xl family-jost text-white uppercase text-center">
            {language === 0
              ? "Asociaciones sin fines de lucro"
              : "Non-profit associations"}
          </p>
          <div className="border-b-2 border-[orange] w-10" />
        </div>
        <div
          style={{
            borderColor: "orange",
            borderBottomRightRadius: 60,
            borderTopLeftRadius: 60,
            boxShadow: "0 0 29px 0 rgba(68,88,144,.12)",
          }}
          className="overflow-hidden shadow-sm border-4 bg-white lg:w-full"
        >
          <Carousel fade className="relative">
            <Carousel.Item>
              <div
                className="flex lg:flex-col gap-7 items-center my-10 mx-5 lg:my-20
                lg:mx-auto lg:gap-20"
              >
                <div className="flex flex-col gap-3 w-full lg:justify-evenly lg:flex-row lg:gap-0">
                  {associations.slice(0, 4).map((association) => (
                    <div
                      key={association.name}
                      className="transform transition duration-500 hover:scale-125 "
                    >
                      <img
                        style={{
                          width: association.width,
                          height: association.height,
                        }}
                        alt={association.name}
                        src={association.image}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3 w-full lg:justify-evenly lg:flex-row lg:gap-0">
                  {associations.slice(4, 8).map((association) => (
                    <div
                      key={association.name}
                      className="transform transition duration-500 hover:scale-125 "
                    >
                      <img
                        style={{
                          width: association.width,
                          height: association.height,
                        }}
                        alt={association.name}
                        src={association.image}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                className="flex lg:flex-col gap-7 items-center my-10 mx-5 lg:my-20
                lg:mx-auto lg:gap-20"
              >
                <div className="flex flex-col gap-3 w-full lg:justify-evenly lg:flex-row lg:gap-0">
                  {associations.slice(8, 12).map((association) => (
                    <div
                      key={association.name}
                      className="transform transition duration-500 hover:scale-125 "
                    >
                      <img
                        style={{
                          width: association.width,
                          height: association.height,
                        }}
                        alt={association.name}
                        src={association.image}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3 w-full lg:justify-evenly lg:flex-row lg:gap-0">
                  {associations.slice(12, 16).map((association) => (
                    <div
                      key={association.name}
                      className="transform transition duration-500 hover:scale-125 "
                    >
                      <img
                        style={{
                          width: association.width,
                          height: association.height,
                        }}
                        alt={association.name}
                        src={association.image}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                className="flex lg:flex-col gap-7 items-center my-10 mx-5 lg:my-20
                lg:mx-auto lg:gap-20"
              >
                <div className="flex flex-col gap-3 w-full lg:justify-evenly lg:flex-row lg:gap-0">
                  {associations.slice(16, 18).map((association) => (
                    <div
                      key={association.name}
                      className="transform transition duration-500 hover:scale-125 "
                    >
                      <img
                        style={{
                          width: association.width,
                          height: association.height,
                        }}
                        alt={association.name}
                        src={association.image}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-5 w-full lg:justify-evenly lg:flex-row lg:gap-0">
                  {associations.slice(18, 20).map((association) => (
                    <div
                      key={association.name}
                      className="transform transition duration-500 hover:scale-125 "
                    >
                      <img
                        style={{
                          width: association.width,
                          height: association.height,
                        }}
                        alt={association.name}
                        src={association.image}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        {/* <div
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
            className="block lg:hidden overflow-hidden shadow-sm border-2 bg-white py-16"
          >
            <CarouselReact
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
              className="relative"
            >
              {associations.map((association) => (
                <div
                  key={association.name}
                  className="transform transition duration-500 hover:scale-125 w-full overflow-hidden"
                >
                  <img
                    style={{
                      width: association.width,
                      height: association.height,
                    }}
                    alt={association.name}
                    src={association.image}
                  />
                </div>
              ))}
            </CarouselReact>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Allies;
