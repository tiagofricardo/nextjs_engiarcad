import { getListPage } from "../../lib/contentParser";
import Base from "@layouts/Baseof";
import Gallery from "@layouts/components/Gallery";
import { markdownify } from "@lib/utils/textConverter";

const Portfolio = ({ frontmatter }) => {
  const { title, filtercategories, categories } = frontmatter;

  return (
    <Base title={title}>
      <section className="section ">
        <div className="container ">
          {markdownify(title, "h1", "text-center font-normal")}
          <Gallery
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
