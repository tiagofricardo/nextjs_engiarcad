import Base from "@layouts/Baseof";
import PhotoGallery from "@layouts/components/Gallery";
import NotFound from "@layouts/404";
import { getProjectImagePaths } from "@lib/contentParser";
import { getSinglePage, getRegularPage } from "@lib/contentParser";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Project = ({ data, images }) => {
  const router = useRouter();
  const initial = {
    opacity: 0,
    translateX: -50,
  };
  const animate = { opacity: 1, translateX: 0, translateY: 0 };

  return (
    <Base title={data.title}>
      <section className="section ">
        {images.frontmatter?.layout !== "404" ? (
          <div className="container ">
            <motion.div
              initial={initial}
              animate={animate}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="pageHeader ">
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
                <h1 className="my-auto md:text-center">{data.title}</h1>
              </div>
            </motion.div>
            <motion.div
              initial={initial}
              animate={animate}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="mt-10 mb-5 text-justify	 "> {data.content}</p>
            </motion.div>
            <motion.div
              initial={initial}
              animate={animate}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <PhotoGallery projectData={data} imagesData={images} />
            </motion.div>
          </div>
        ) : (
          <NotFound data={images} />
        )}
      </section>
    </Base>
  );
};

export default Project;

export const getStaticPaths = () => {
  let allPaths = [];
  const getAllSlug = getSinglePage(`content/portfolio`);
  getAllSlug.map((item) => {
    const projects = item.frontmatter.projects;
    const categoryId = item.frontmatter.categoryId
      ? item.frontmatter.categoryId
      : item.slug;

    projects
      ? projects.map((project) => {
          allPaths.push({
            params: {
              portfcat: categoryId.toString(),
              id: project.id.toString(),
            },
          });
        })
      : 0;
  });

  return {
    paths: allPaths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { portfcat, id } = params;
  const projectCategories = getSinglePage(`content/portfolio`);
  const categorieData = projectCategories.find((p) => p.slug == portfcat);
  const projectData = categorieData.frontmatter.projects.find(
    (p) => p.id == id
  );

  let imagesData = getProjectImagePaths(`${id}`);

  imagesData === "404"
    ? (imagesData = await getRegularPage("404"))
    : imagesData;

  return {
    props: {
      data: projectData,
      images: imagesData,
    },
  };
}
