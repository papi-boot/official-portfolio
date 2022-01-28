/* eslint-disable @next/next/no-css-tags */
import React, { Fragment } from "react";
import {
  Box,
  Container,
  Divider,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Text,
  useMediaQuery,
  useColorModeValue,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import blogPageStyle from "styles/blog.page.module.scss";

// @TODO: get all blog info for each pages
export const getStaticPaths = async () => {
  const res = await fetch("https://je-cms-portfolio-api.herokuapp.com/blog", { method: "GET" });
  const blogs = await res.json();
  const paths = blogs.blogs.map((item) => ({
    params: { title: item.blog_title_link },
  }));
  return { paths, fallback: false };
};

// @TODO: get info for individual blog
export const getStaticProps = async ({ params }) => {
  const { title } = params;
  const res = await fetch(`https://je-cms-portfolio-api.herokuapp.com/blog/${title}`, {
    method: "GET",
  });
  const blog = await res.json();
  return { props: { blog } };
};

const BlogPage = ({ blog }) => {
  const [isMobile] = useMediaQuery("(max-width: 36rem)");
  const breadcrumbBg = useColorModeValue("#fff", "#1a202c");
  return (
    <Fragment>
      <Head>
        <title>{blog.blog[0].blog_title} | @JE</title>
        <meta name="description" content={blog.blog[0].blog_description} />
        <meta name="author" content={blog.blog[0].blog_author} />
        <meta name="keywords" content={blog.blog[0].blog_description} />
        <link
          rel="canonical"
          href={`https://www.jason-evangelista.me/blogs/${blog.blog[0].blog_title_link}`}
        />
        <link rel="stylesheet" href="/prismjs/themes/atom-dark.css" />
        <script defer src="/prismjs/prism.js"></script>
      </Head>
      <Container maxW="container.lg" p={0}>
        <Breadcrumb mb="3" className={blogPageStyle["blog-breadcrumbs"]} bg={breadcrumbBg}>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} href="/blogs">
              <a>
                <FontAwesomeIcon icon="home" width="16" />
              </a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} href={`/blogs/${blog.blog[0].blog_title_link}`}>
              <a>
                {blog.blog[0].blog_title_link}&nbsp;&nbsp;
                <span style={{ display: "inline-block" }}>
                  <FontAwesomeIcon icon="link" width="16" />
                </span>
              </a>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Divider mb="3" />
        <article className={blogPageStyle["blog-article-wrapper"]}>
          <section>
            <Box
              className={`${blogPageStyle["blog-title-thumbnail"]} ${
                isMobile ? blogPageStyle["mobile"] : ""
              }`}
            >
              <div
                className={blogPageStyle["blog-page-thumnail-wrapper"]}
                style={{ height: isMobile ? "100%" : "20rem" }}
              >
                <Image
                  width={400}
                  height={400}
                  layout={isMobile ? "responsive" : "fill"}
                  objectFit="scale-down"
                  alt={blog.blog[0].blog_id}
                  src={blog.blog[0].blog_thumbnail_link}
                  loading="lazy"
                />
              </div>
              <div style={{ padding: isMobile ? "1rem 0" : "0 .9rem" }}>
                <Heading as="h1" fontWeight={900} size={isMobile ? "lg" : "2xl"}>
                  {blog.blog[0].blog_title}
                </Heading>
                <Text mt="1rem" fontSize="smaller">
                  <span style={{ display: "inline-block" }}>
                    <FontAwesomeIcon icon="calendar" width="16" />
                  </span>
                  &nbsp;&nbsp;
                  {format(new Date(blog.blog[0].blog_created_at), "yyyy, MMM dd @ hh:mm a, EEE")}
                </Text>
                <Text mt="2" fontSize="smaller">
                  <span style={{ display: "inline-block" }}>
                    <FontAwesomeIcon icon="user-circle" width="16" />
                  </span>
                  &nbsp;&nbsp;
                  {blog.blog[0].blog_author}
                </Text>
                <Text fontWeight={700} mt="0.5rem">
                  <span style={{ display: "inline-block" }}>
                    <FontAwesomeIcon icon="quote-left" width="16" />
                  </span>
                  &nbsp;&nbsp;
                  {blog.blog[0].blog_description}
                </Text>
              </div>
            </Box>
            <Divider my="5" />
            <Box
              as="div"
              className={blogPageStyle["blog-body"]}
              dangerouslySetInnerHTML={{ __html: blog.blog[0].blog_body }}
            ></Box>
          </section>
        </article>
      </Container>
    </Fragment>
  );
};
export default BlogPage;
