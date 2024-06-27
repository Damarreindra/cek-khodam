import React, { useEffect, useState } from 'react';
import { Box, Text, HStack, Container, Button, Link } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import ResultContainer from '../components/ResultContainer';



function ResultPage() {
 const navigate = useNavigate()
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
     
      <ResultContainer />
      <Button mt={4} colorScheme="red" borderRadius={"20px"} onClick={() => navigate("/")}>
              Coba Nama Lain
            </Button>
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
        href='https://x.com/damarendraa'
        isExternal
      >
        <i class="bi bi-twitter-x"></i> @damarendraa
      </Link>
    </Container>
  </Box>
  );
}

export default ResultPage;
