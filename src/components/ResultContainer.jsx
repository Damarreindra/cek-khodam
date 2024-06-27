import { Badge, Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LottieLoading from "./LottieLoading";
import { motion } from "framer-motion";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function ResultContainer() {
  const query = useQuery();
  const name = query.get("name");
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const fetchKhodam = async () => {
    try {
      const response = await fetch(
        `https://becekkhodam-production.up.railway.app/khodam?name=${name}`
      );
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error fetching khodam:", error);
    }
  };

  useEffect(() => {
    fetchKhodam();
  }, [name]);

  return (
    <>
      {result.khodam ? (
        <motion.div
        style={{
          background: 'rgba(0, 0, 0, 0.5)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(5px)',
          borderRadius: '20px',
          padding: '16px',
          color: 'white'
        }}

          initial={{ scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
          }}>
          <Box textAlign={"center"} display={'flex'} justifyContent={'center'} flexDir={'column'}>
            <Text fontSize={"2xl"} fontFamily="Patrick Hand, cursive">
              Khodam <Badge colorScheme="red">{result.name}</Badge> hari ini
              adalah ....
            </Text>
            <Text
              mt={4}
              fontFamily="Mochiy Pop One, sans-serif"
              fontSize={"2xl"}
              fontWeight={"600"}
              color={"red"}
            >
              &#127775; {result.khodam.name} &#127775;
            </Text>
            {result.khodam.img ? <Image src={result.khodam.img} /> : ""}
          </Box>
        </motion.div>
      ) : (
      
        <LottieLoading />
      
      )}
    </>
  );
}

export default ResultContainer;
