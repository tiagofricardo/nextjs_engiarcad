import Base from "@layouts/Baseof";
import PortfolioGallery from "@layouts/components/PortfolioGallery";
import { getListPage } from "../../lib/contentParser";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Portfolio = ({ frontmatter }) => {
  const { title, description, filtercategories, categories } = frontmatter;
  const router = useRouter();
  const initial = {
    opacity: 0,
    translateX: -50,
  };
  const animate = { opacity: 1, translateX: 0, translateY: 0 };

  return (
    <Base title={title}>
      <section className="section ">
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
              <h1 className="my-auto md:text-center">{title}</h1>
            </div>
          </motion.div>

          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="mt-10 mb-5 text-justify	 "> {description}</p>
          </motion.div>

          <PortfolioGallery
            filterCategories={filtercategories}
            categories={categories}
          />
        </div>
      </section>
    </Base>
  );
};

export default Portfolio;

// for regular page data
export const getStaticProps = async () => {
  const homePage = await getListPage("content/portfolio/_index.md");
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};
