/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react";
import { GlobalDataContext } from "context/GlobalData";
import { Heading } from "@chakra-ui/react";
import BlogList from "component/blog/BlogList";
import Head from "next/head";

export async function getStaticProps() {
  const res = await fetch("https://je-cms-portfolio-api.herokuapp.com/blog", { method: "GET" });
  const blogs = await res.json();

  return {
    props: {
      blogs,
    },
  };
}

const BlogHomePage = ({ blogs }) => {
  const { pageTitle, setPageTitle } = React.useContext(GlobalDataContext);
  // const { blogs } = useSelector((state) => state.blog.value);
  React.useEffect(() => {
    setPageTitle("@JE | Blogs");
  }, []);
  return (
    <Fragment>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Heading as="h1" size="lg">
        Blogs
      </Heading>
      <div>
        <BlogList blogs={blogs} />
      </div>
    </Fragment>
  );
};

export default BlogHomePage;
