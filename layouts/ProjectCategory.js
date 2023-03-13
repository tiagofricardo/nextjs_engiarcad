import Base from "@layouts/Baseof";
import ProjectCard from "./components/ProjectCard";
import ProjectNavigation from "./components/ProjectNavigation";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ProjectCategory = ({ categoryData }) => {
  const router = useRouter();
  const initial = {
    opacity: 0,
    translateX: -50,
  };
  const animate = { opacity: 1, translateX: 0, translateY: 0 };
  const { frontmatter } = categoryData;
  const [currentItems, setProjectCards] = useState([]);

  return (
    <Base title={frontmatter.title}>
      <section className="section ">
        <div className="container">
          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="pageHeader">
              <Link
                href={"#"}
                className=" pageHeader-button"
                onClick={() => router.back()}
              >
                <p className="pageHeader-tag">Voltar</p>
                <Image
                  className="pageHeader-arrow"
                  src="/images/arrow-right.svg"
                  width={18}
                  height={14}
                  alt="arrow"
                />
              </Link>
              <h1 className="my-auto md:text-center">{frontmatter.title}</h1>
            </div>
          </motion.div>

          <div className="mt-10 min-h-[700px]">
            {currentItems.map((project, i) => (
              <motion.div
                key={project.id}
                alt={project.id}
                initial={{
                  opacity: 0,
                  translateY: -50,
                }}
                animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.3, delay: i * 0.4 }}
                exit={{ duration: 0.1, opacity: 0 }}
              >
                <ProjectCard
                  project={project}
                  mapindex={i}
                  categoryId={frontmatter.categoryId}
                ></ProjectCard>
              </motion.div>
            ))}
          </div>

          <ProjectNavigation
            setProjectCards={setProjectCards}
            itemsPerPage={3}
            projectsData={frontmatter.projects}
          ></ProjectNavigation>
        </div>
      </section>
    </Base>
  );
};

export default ProjectCategory;
