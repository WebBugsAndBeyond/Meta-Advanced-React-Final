import { Heading, Box, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return <VStack 
    align="left"
    spacing="8"
    style={{ 
        backgroundColor: "white",
        borderRadius: "10px",
    }}>
    <Image src={imageSrc} style={{
        borderRadius: "10px",
        objectFit: "contain",
     }}/>
    <Box style={{ padding: "10px"}}>
        <Heading size="sm" align="left" style={{ fontWeight: "bold", color: "black"}}>{title}</Heading>
        <Text align="left" style={{ color: "darkgrey", textAlign: "left" }}>{description}</Text>
        <Text align="left" style={{ color: "black" }}><a href="#">See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></a></Text>
    </Box>
  </VStack>
  
};

export default Card;
