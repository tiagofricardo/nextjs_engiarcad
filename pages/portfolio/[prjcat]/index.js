import { getSinglePage } from "@lib/contentParser";
import { parseMDX } from "@lib/utils/mdxParser";
import Base from "@layouts/Baseof";
import ProjectCategories from "@layouts/ProjectsCategories";

// post single layout
const Article = ({ categorie, mdxContent, slug }) => {
  return (
    <ProjectCategories frontmatter={categorie.frontmatter}></ProjectCategories>
  );
};

export default Article;

// get post single slug
export const getStaticPaths = () => {
  const getAllSlug = getSinglePage(`content/portfolio`);
  const allPaths = getAllSlug.map((item) => {
    return {
      params: {
        prjcat: item.slug.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
};

// get post single content
export async function getStaticProps({ params }) {
  const { prjcat } = params;
  const projectCategories = getSinglePage(`content/portfolio`);
  const categorieData = projectCategories.find((p) => p.slug == prjcat);
  const mdxContent = await parseMDX(categorieData.content);

  return {
    props: {
      categorie: categorieData,
      mdxContent: mdxContent,
      slug: prjcat,
    },
  };
}
