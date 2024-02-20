import React, { useEffect, useState } from "react";

import {
  SectionTitle,
  BtnPrimary,
  BtnSecondary,
  TechBadge,
} from "../components-index";

import icons from "../../data/icons";

const FeaturedProjectCard = (props) => {
  const [elementsPosition, setElementsPosition] = useState({});

  const isEven = () => {
    if (props.index % 2 == 0) return true;

    return false;
  };

  useEffect(() => {
    isEven()
      ? setElementsPosition({
          title: "text-left",
          img: "left-0",
          infoDiv: "right-0",
          infoDivContent: "md:justify-items-end",
          tags: "md:justify-end",
        })
      : setElementsPosition({
          title: "text-right",
          img: "right-0",
          infoDiv: "left-0",
          infoDivContent: "md:justify-items-start",
          tags: "md:justify-start",
        });
  }, []);

  return (
    <article className="md:h-[560px]">
      <header className={elementsPosition.title}>
        <h3 className="mb-1 opacity-65">_projeto-{props.index}</h3>
        <h4 className="text-2xl mb-7 text-primary">_{props.project.name}</h4>
      </header>
      <main className="sm:grid md:grid-cols-2 relative">
        <img
          className={`mb-7 rounded-md sm:justify-self-center md:absolute  ${elementsPosition.img}`}
          src={props.project.image}
          alt=""
        />
        <div
          className={`grid gap-12 md:absolute top-16 md:w-[50%] ${elementsPosition.infoDivContent} ${elementsPosition.infoDiv}`}>
          <p className="md:bg-neutral md:p-5 md:rounded-md md:bg-opacity-80 leading-relaxed text-opacity-65">
            {props.project.description}
          </p>
          <ul
            className={`inline-flex gap-4 flex-wrap 
          md:order-[-1] ${elementsPosition.tags}`}>
            {props.project.techUsed.map((item, index) => {
              return (
                <li
                  className="badge badge-neutral p-3 text-secondary bg-neutral md:bg-opacity-80"
                  key={index}>
                  {item.toUpperCase()}
                </li>
              );
            })}
          </ul>
          <div className="flex gap-5 justify-center">
            <BtnPrimary
              text="Visitar"
              url={props.project.deployLink}
              icon={<icons.outsideLink />}
            />
            <BtnSecondary
              text="Código"
              url={props.project.githubLink}
              icon={<icons.arrowRight />}
            />
          </div>
        </div>
      </main>
    </article>
  );
};

export default FeaturedProjectCard;
