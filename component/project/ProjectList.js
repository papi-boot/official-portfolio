import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Grid, GridItem, Heading, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { projectChange } from "feature/project/project";
import Image from "next/image";
import ProjectModal from "./ProjectModal";
import projectListStyle from "styles/project.list.module.scss";
const ProjectList = ({ projects }) => {
  const dispatch = useDispatch();
  const projectBorder = useColorModeValue("rgba(100, 100, 100, 0.2", "rgba(250, 200, 200, 0.1");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Fragment>
      <ProjectModal isOpen={isOpen} onClose={onClose} />
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={10} my={8}>
        {projects.projects.map((item) => (
          <GridItem key={item.project_id} w="100%">
            <div
              className={projectListStyle["project-card"]}
              style={{ border: `1px solid ${projectBorder}`, borderRadius: ".5rem" }}
              onClick={() => {
                dispatch(projectChange(item));
                onOpen();
              }}
              role="button"
            >
              <div className={projectListStyle["project-thumbnail-wrapper"]}>
                <Image
                  className={projectListStyle["project-thumbnail-src"]}
                  src={item.project_thumbnail}
                  alt={item.project_title}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <div className={projectListStyle["project-info-wrapper"]}>
                <Heading as="h1" size="md">
                  {item.project_title}
                </Heading>
                <Text as="p" fontSize="sm" mt="1">
                  <span style={{ display: "inline-flex" }}>
                    <FontAwesomeIcon icon="calendar" width="1rem" size="1x" />
                  </span>
                  &nbsp;&nbsp;
                  {format(new Date(item.project_date_created), "MMMM dd, yyyy")}
                </Text>
              </div>
            </div>
          </GridItem>
        ))}
      </Grid>
    </Fragment>
  );
};
export default ProjectList;
