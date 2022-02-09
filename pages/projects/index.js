/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from "react";
import { Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import ProjectMetaTags from "component/meta-tags/ProjectMetaTags";
import Footer from "component/global/Footer";
import ProjectList from "component/project/ProjectList";

export const getStaticProps = async () => {
  const res = await fetch("https://je-cms-portfolio-api.herokuapp.com/project", { method: "GET" });
  const projects = await res.json();

  return {
    props: {
      projects,
    },
    revalidate: 10,
  };
};

const ProjectHomePage = ({ projects }) => {
  return (
    <Fragment>
      <Head>
        <ProjectMetaTags />
        <title>Jason Evangelista | Projects</title>
        <link rel="shortcut icon" href="/jason-evangelista.png" type="image/x-icon" />
      </Head>
      <Heading as="h1" size="lg" fontWeight={900}>
        Projects
      </Heading>
      <Text>Highlight✨ - I love creating {"api's"} from scatch using ExpressJS Framework</Text>
      {projects.projects.length > 0 ? (
        <Fragment>
          <ProjectList projects={projects} />
        </Fragment>
      ) : (
        <Fragment>
          <Heading textAlign="center" my="3rem" as="h3" size="small" color="gray.400">
            Making an awesome projects 😀 , Please come back.
          </Heading>
        </Fragment>
      )}

      <Footer />
    </Fragment>
  );
};

export default ProjectHomePage;
