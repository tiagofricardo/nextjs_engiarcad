import React from "react";
import Image from "next/image";
import Link from "next/link";

const AllProjects = ({ data }) => {
  return (
    <div className="">
      {data?.map((project) => (
        <Link className="card" key={ev.id} href={`/events/${ev.id}`} passHref>
          <h2>{TESTE} </h2>
        </Link>
      ))}
    </div>
  );
};

export default AllProjects;
