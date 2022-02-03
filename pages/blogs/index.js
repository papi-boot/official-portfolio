/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react";
import { Heading } from "@chakra-ui/react";
import BlogList from "component/blog/BlogList";
import Head from "next/head";
import BlogMetaTags from "component/meta-tags/BlogMetaTags";
import Footer from "component/global/Footer";
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
  return (
    <Fragment>
      <Head>
        <BlogMetaTags />
        <title>Jason Evangelista | Blogs</title>
        <link rel="shortcut icon" href="/jason-evangelista.png" type="image/x-icon" />
      </Head>
      <Heading as="h1" size="lg">
        Blogs
      </Heading>
      <div>
        {blogs.blogs.length > 0 ? (
          <Fragment>
            <BlogList blogs={blogs} />
          </Fragment>
        ) : (
          <Fragment>
            <Heading textAlign="center" my="3rem" as="h3" size="small" color="gray.400">
              Making a good content 😀 , Please come back.
            </Heading>
          </Fragment>
        )}
      </div>
      <Footer/>
    </Fragment>
  );
};

export default BlogHomePage;
