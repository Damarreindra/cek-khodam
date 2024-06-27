import { Box, Container, HStack, Text, Icon, Link } from "@chakra-ui/react";
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
        <HStack 
     
          justifyContent={"center"}  // Center items horizontally
          spacing={0}  // Adjust spacing between items as needed
          mb={6}
        >
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
        <Link
          fontSize={"md"}
          fontFamily="Poppins, sans-serif"
          color={"white"}
          fontWeight={"400"}
          textAlign={"center"}
          href="https://twitter.com/damarendraa"
          isExternal // This ensures it opens in a new tab

        >
         <i class="bi bi-twitter-x"></i> @damarendraa
        </Link>
      </Container>
    </Box>
  );
}

export default Home;
