import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Divider,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import projectModalStyle from "styles/project.modal.module.scss";
const ProjectModal = ({ isOpen, onClose }) => {
  const project = useSelector((state) => state.project.value);
  const [isMobile] = useMediaQuery("(max-width: 36rem)");
  return (
    <Fragment>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        scrollBehavior="inside"
        size={isMobile ? "xs" : "3xl"}
        motionPreset="scale"
        blockScrollOnMount={true}
        closeOnEsc
        preserveScrollBarGap
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{project.project_title}✨</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody p={0} className={projectModalStyle["project-body"]}>
            <div className={projectModalStyle["project-modal-img-wrapper"]}>
              <Image
                src={project.project_thumbnail}
                layout="responsive"
                width={200}
                height={200}
                alt={project.project_title}
                objectFit="cover"
              />
            </div>
            <div style={{ padding: "1rem" }}>
              <Divider />
            </div>
            <div className={projectModalStyle["project-modal-info-wrapper"]}>
              <Box mt={3}>
                <Heading size="sm" textDecoration="underline" mb={2}>
                  Date Creation
                </Heading>
                <Text>
                  {project.project_date_created
                    ? format(new Date(project.project_date_created), "MMMM dd, yyyy")
                    : ""}
                </Text>
              </Box>
              <Divider my={3}/>
              <Box mt={3}>
                <Heading size="sm" textDecoration="underline" mb={2}>
                  Description
                </Heading>
                <Text>{project.project_description}</Text>
              </Box>
              <Divider my={3}/>
              <Box mt={3}>
                <Heading size="sm" textDecoration="underline" mb={2}>
                  About the project
                </Heading>
                <div dangerouslySetInnerHTML={{ __html: project.project_body }}></div>
              </Box>
            </div>
          </ModalBody>
          <Divider />
          <ModalFooter px={3} py={2}>
            <Button onClick={onClose} size="sm">
              Close
            </Button>
            <div style={{ margin: "0 .3rem" }}></div>
            <Button
              as="a"
              href={project.project_website_link}
              target="_blank"
              rel="noreferrer"
              size="sm"
              colorScheme="green"
            >
              Visit Project&nbsp;
              <FontAwesomeIcon icon="link" width="1rem" />
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default ProjectModal;
