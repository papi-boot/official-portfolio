import React, { Fragment } from "react";
import { Box, useColorMode, Heading, Text } from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import blogListStyle from "styles/blog.list.module.scss";

const BlogList = ({ blogs }) => {
  const { colorMode } = useColorMode();

  return (
    <Fragment>
      {blogs.blogs.map((item, index) => (
        <Box as="div" key={item.blog_id}>
          <Link href={`blogs/${item.blog_title_link}`} passHref>
            <div
              className={blogListStyle["blog-container"]}
              style={{
                flexDirection: index % 2 === 0 ? "unset" : "row-reverse",
                justifyContent: index % 2 === 0 ? "" : "space-between",
                backgroundImage:
                  colorMode === "light"
                    ? "linear-gradient(to right, rgb(106, 168, 226), rgb(26, 113, 194))"
                    : "linear-gradient(to right, rgb(49, 130, 206), rgb(106, 168, 226))",
              }}
            >
              <div className={blogListStyle["blog-thumbnail"]}>
                <Image
                  width={50}
                  height={50}
                  objectFit="cover"
                  layout="responsive"
                  alt={item.blog_id}
                  src={item.blog_thumbnail_link}
                  className={blogListStyle["blog-thumbnail-src"]}
                />
              </div>
              <div className={blogListStyle["blog-info-wrapper"]}>
                <Heading as="h1" size="2xl">
                  {item.blog_title}
                </Heading>
                <Text mt=".5rem" mb="1rem" fontSize="smaller">
                  <span style={{ display: "inline-block" }}>
                    <FontAwesomeIcon icon="clock" width="16" />
                  </span>
                  &nbsp;&nbsp;
                  {formatDistanceToNow(new Date(item.blog_created_at), { addSuffix: true })}
                </Text>
                <Text fontWeight="700" fontSize="md">
                  <span style={{ display: "inline-block" }}>
                    <FontAwesomeIcon icon="quote-left" width="16" />
                  </span>
                  &nbsp;&nbsp;
                  {item.blog_description}
                </Text>
              </div>
            </div>
          </Link>
        </Box>
      ))}
    </Fragment>
  );
};

export default BlogList;
