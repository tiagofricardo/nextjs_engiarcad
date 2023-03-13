import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function ProjectNavigation({ setProjectCards, itemsPerPage, projectsData }) {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setProjectCards(projectsData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(projectsData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, projectsData]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % projectsData.length;
    setItemOffset(newOffset);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      containerClassName={"pagination"}
      pageLinkClassName={"page-num"}
      previousLinkClassName={"page-num"}
      nextLinkClassName={"page-num"}
      activeClassName={"activelink"}
    />
  );
}

export default ProjectNavigation;
