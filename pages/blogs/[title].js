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
  Image,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import Head from "next/head";
import Link from "next/link";
import blogPageStyle from "styles/blog.page.module.scss";
import Footer from "component/global/Footer";
import GoogleAdsMetaTag from "component/meta-tags/GoogleAdsMetaTag";

// @TODO: get all blog info for each pages
export const getStaticPaths = async () => {
  const res = await fetch("https://je-cms-portfolio-api.herokuapp.com/blog", {
    method: "GET",
  });
  const blogs = await res.json();
  const paths = blogs.blogs.map((item) => ({
    params: { title: item.blog_title_link },
  }));
  return { paths, fallback: false };
};

// @TODO: get info for individual blog
export const getStaticProps = async ({ params }) => {
  const { title } = params;
  const res = await fetch(
    `https://je-cms-portfolio-api.herokuapp.com/blog/${title}`,
    {
      method: "GET",
    }
  );
  const blog = await res.json();
  return { props: { blog }, revalidate: 10 };
};

const BlogPage = ({ blog }) => {
  const [isMobile] = useMediaQuery("(max-width: 36rem)");
  const [isTablet] = useMediaQuery("(max-width: 48rem)");
  const breadcrumbBg = useColorModeValue("#fff", "#1a202c");
  const themeColor = useColorModeValue("#fff", "#1a202c");
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="UTF-8" />
        {/* Facebook Property */}
        <meta property="og:image" content={blog.blog[0].blog_thumbnail_link} />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta
          property="og:url"
          content={`https://www.jason-evangelista.me/blogs/${blog.blog[0].blog_title_link}`}
        />
        <meta property="og:title" content={blog.blog[0].blog_title} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={blog.blog[0].blog_description}
        />
        {/* Facebook Property */}
        {/* Twitter Property */}
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:site"
          content={`https://www.jason-evangelista.me/blogs/${blog.blog[0].blog_title_link}`}
        />
        <meta property="twitter:creator" content={blog.blog[0].blog_author} />
        {/* Twitter Property */}
        <title>{blog.blog[0].blog_title} | @JE</title>
        <meta name="description" content={blog.blog[0].blog_description} />
        <meta name="author" content={blog.blog[0].blog_author} />
        <meta name="keywords" content={blog.blog[0].blog_description} />
        <meta name="theme-color" content={themeColor} />
        <link
          rel="canonical"
          href={`https://www.jason-evangelista.me/blogs/${blog.blog[0].blog_title_link}`}
        />
        <link rel="stylesheet" href="/prismjs/themes/atom-dark.css" />
        <script defer src="/prismjs/prism.js"></script>
        <GoogleAdsMetaTag />
      </Head>
      <Container maxW="container.lg" p={0}>
        <Breadcrumb
          mb="3"
          className={blogPageStyle["blog-breadcrumbs"]}
          bg={breadcrumbBg}
          p=".5rem 0"
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} href="/blogs">
              <a style={{ textDecoration: "underline" }}>Blogs</a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              href={`/blogs/${blog.blog[0].blog_title_link}`}
            >
              <a style={{ textDecoration: "underline" }}>
                {blog.blog[0].blog_title_link}&nbsp;&nbsp;
              </a>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Divider mb="3" />
        <article className={blogPageStyle["blog-article-wrapper"]}>
          <section>
            <Box
              className={`${blogPageStyle["blog-title-thumbnail"]} ${
                isTablet ? blogPageStyle["mobile"] : ""
              }`}
            >
              <div
                className={blogPageStyle["blog-page-thumnail-wrapper"]}
                style={{ height: isMobile ? "100%" : "20rem" }}
              >
                <Image
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  alt={blog.blog[0].blog_id}
                  src={blog.blog[0].blog_thumbnail_link}
                  loading="lazy"
                />
              </div>
              <div style={{ padding: isMobile ? "1rem 0" : "0 .9rem" }}>
                <Heading
                  as="h1"
                  fontWeight={900}
                  size={isMobile ? "lg" : "2xl"}
                >
                  {blog.blog[0].blog_title}
                </Heading>
                <Text mt="1rem">
                  <span style={{ display: "inline-block" }}>
                    <FontAwesomeIcon icon="calendar" width="16" />
                  </span>
                  &nbsp; &nbsp;&nbsp;
                  {format(
                    new Date(blog.blog[0].blog_created_at),
                    "yyyy, MMM dd @ hh:mm a, EEE"
                  )}
                </Text>
                <Text mt="2">
                  <span style={{ display: "inline-block" }}>
                    <FontAwesomeIcon icon="user-circle" width="16" />
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  {blog.blog[0].blog_author}
                </Text>
                <Text fontWeight={700} mt="0.5rem">
                  <span style={{ display: "inline-block" }}>
                    <FontAwesomeIcon icon="quote-left" width="16" />
                  </span>
                  &nbsp; &nbsp;&nbsp;
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
      <Divider />
      <Footer />
    </Fragment>
  );
};
export default BlogPage;
