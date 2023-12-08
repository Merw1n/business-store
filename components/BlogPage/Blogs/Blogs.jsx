"use client"
import WebinarsCard from "@/components/WebinarsSection/WebinarsCard";
import styles from "./Blogs.module.scss";
import { blogs } from "@/blogs/blogs";
import { useMemo, useState } from "react";
import Pagination from "@/components/Pagination/Pagination";

let PageSize = 9;

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return blogs.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <div className={styles.container}>
      <div className={styles.blogsContainer}>
        {currentTableData.map((blog) => {
          return <WebinarsCard title={blog.title} key={blog.id} id={blog.id}/>;
        })}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={blogs.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Blogs;
