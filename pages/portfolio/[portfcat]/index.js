import { getSinglePage } from "@lib/contentParser";
import { parseMDX } from "@lib/utils/mdxParser";
import ProjectCategory from "@layouts/ProjectCategory";

// post single layout
const PortfolioCategory = ({ category }) => {
  return <ProjectCategory categoryData={category} />;
};

export default PortfolioCategory;

// get post single slug
export const getStaticPaths = () => {
  const getAllSlug = getSinglePage(`content/portfolio`);
  const allPaths = getAllSlug.map((item) => {
    return {
      params: {
        portfcat: item.slug.toString(),
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
  const { portfcat } = params;
  const projectCategories = getSinglePage(`content/portfolio`);
  const categorieData = projectCategories.find((p) => p.slug == portfcat);
  const mdxContent = await parseMDX(categorieData.content);

  return {
    props: {
      category: categorieData,
      mdxContent: mdxContent,
      slug: portfcat,
    },
  };
}
