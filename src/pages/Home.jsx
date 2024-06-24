import { Box, Container, HStack, Text, Icon } from "@chakra-ui/react";
import React from "react";
import FormContainer from "../components/FormContainer";

function Home() {
  return (
    <Box
      height="100vh"
      width="100vw"
      backgroundImage="url('/images/bg.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      css={{
        "@media (max-width: 768px)": {
          backgroundImage: "url('/images/bg_2.png')",
        },
      }}
    >
      <Container
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        maxW="container.xl"
        height="100%"
      >
        <HStack>
          <Text
            fontSize={"4xl"}
            fontFamily="Poppins, sans-serif"
            mb={5}
            color={'white'}
            fontWeight={"800"}
            textAlign={"center"}
          >
            Cek
          </Text>
          <Text
            fontSize={"4xl"}
            fontFamily="Poppins, sans-serif"
            color={"red"}
            fontWeight={"800"}
            textAlign={"center"}
          >
            Khodam
          </Text>
        </HStack>
       
        <FormContainer />

        <Text
          fontSize={"md"}
          fontFamily="Poppins, sans-serif"
          mt={5}
          mb={5}
          color={"white"}
          fontWeight={"400"}
          textAlign={"center"}
        >
          Made with &#128154; by
        </Text>
        <Text
          fontSize={"md"}
          fontFamily="Poppins, sans-serif"
          color={"white"}
          fontWeight={"400"}
          textAlign={"center"}
        >
          <i class="bi bi-twitter-x"></i> @damarendraa
        </Text>
      </Container>
    </Box>
  );
}

export default Home;
