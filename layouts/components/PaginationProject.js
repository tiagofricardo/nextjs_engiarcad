import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function PaginationProjects({ itemsPerPage, data }) {
  const [currentItems, setCurrentItems] = useState(data);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cards = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div variants={variants} initial="hidden" animate="show">
      {currentItems.map((project, index) => (
        <motion.div variants={cards}>
          <div
            className={`projectcard ${
              index % 2 > 0
                ? "grid-cols-[1fr_4fr] before:bg-gradient-to-l"
                : "grid-cols-[4fr_1fr] before:bg-gradient-to-r"
            }`}
          >
            <div
              className={`w-[96%] p-6 ${
                index % 2 > 0 ? "order-2 ml-5" : "order-1 mr-5"
              }`}
            >
              <h5 className>{project.title}</h5>
              <h6 className="mt-1">{project.subtitle}</h6>
              <div className={"projectcard-bar"} />
              <p className="hidden text-justify md:block">{project.content}</p>
            </div>

            <div
              className={`projectcard-img ${
                index % 2 > 0
                  ? "order-1 before:left-[90%]"
                  : "order-2 before:right-[95%]"
              }`}
            >
              <Image
                className={"max-w-fit"}
                src={project.image}
                height={100}
                width={250}
              />
            </div>
          </div>
        </motion.div>
      ))}

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        containerClassName={"pagination"}
        pageLinkClassName={"page-num"}
        previousLinkClassName={"page-num"}
        nextLinkClassName={"page-num"}
        activeClassName={"activelink"}
      />
    </motion.div>
  );
}

export default PaginationProjects;
