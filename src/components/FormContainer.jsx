import React from 'react';
import { Box, Input, Button, FormControl, FormLabel, HStack, IconButton, Text, Flex } from '@chakra-ui/react';

function FormContainer() {
  return (
    <Flex bg='rgba(255, 255, 255, 0.15)' // Transparent white 
    backdropFilter='blur(10px)' // Blur effect for glass-like appearance
    borderRadius={20}
   
    p={4}
    color='white'>
      <FormControl>
        <FormLabel>Masukan Nama</FormLabel>
        <HStack>
          <Input type='text' borderRadius={'20px'}  maxW='200px' mr={2} />
         <Button borderRadius={'20px'} colorScheme='red' variant='solid'>
         <Text mr={1}>&#129535;</Text>
         Cek
          </Button>
        </HStack>
      </FormControl>
    </Flex>
  );
}

export default FormContainer;
