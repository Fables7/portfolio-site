"use client";
import { useState } from "react";
import { CustomButton, SkeletonImg } from "..";
import Image from "next/image";
import { projects } from "@/constants";

const ProjectsBox = () => {
  const [imageIsLoading, setImageIsLoading] = useState(true);

  const onLoad = () => {
    setImageIsLoading(false);
  };

  return (
    <div className="w-full mb-10 lg:mt-28">
      <div className="flex justify-between mb-14">
        <h2 className="lg:hidden">Projects</h2>
        <h1 className="hidden lg:inline">Projects</h1>
        <CustomButton />
      </div>
      <ul className="grid grid-flow-row grid-cols-1 md:grid-cols-2 md:gap-8">
        {projects.map((project, index) => {
          return (
            <li className="mb-10" key={index}>
              <div>
                <div className="relative flex group  mb-4  h-[253px] lg:h-[400px]">
                  {project.image && project.image !== "" && (
                    <>
                      {imageIsLoading && <SkeletonImg />}
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        onLoad={onLoad}
                        style={{
                          objectFit: "cover",
                          display: imageIsLoading ? "none" : "",
                        }}
                        unoptimized
                        priority
                      />

                      <div className="absolute hidden lg:flex  flex-col items-center justify-center bg-black bg-opacity-70  w-full h-full transition ease-in-out duration-300 opacity-0 group-hover:opacity-100">
                        {project.link && (
                          <CustomButton
                            href={project.link}
                            className="mb-10 "
                            label="VIEW PROJECT"
                          />
                        )}
                        {project.code && (
                          <CustomButton href={project.code} label="VIEW CODE" />
                        )}
                      </div>
                    </>
                  )}
                </div>
                <h3 className="mb-2">{project.title.toUpperCase()}</h3>
                <ul className="flex  flex-wrap">
                  {project.tools.map((tool, index) => {
                    return (
                      <li className=" mr-4  " key={index}>
                        <p>{tool}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex mt-6 lg:hidden">
                {project.link && (
                  <CustomButton
                    href={project.link}
                    className="mr-8"
                    label="VIEW PROJECT"
                  />
                )}
                {project.code && (
                  <CustomButton href={project.code} label="VIEW CODE" />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectsBox;
