import React, { useState } from 'react';
import { Box, Input, Button, FormControl, FormLabel, HStack, Text, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function FormContainer() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    if (name) {
      navigate(`/result?name=${name}`);
    }
  };

  return (
    <Flex background='rgba(255, 255, 255, 0.1)'
      boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
      backdropFilter='blur(10px)'
      borderRadius={20}
      p={4}
      color='white'>
      <FormControl>
        <FormLabel>Masukan Nama</FormLabel>
        <HStack>
          <Input type='text' borderRadius={'20px'} colorScheme='red' maxW='200px' mr={2} onChange={handleNameChange} />
          <Button borderRadius={'20px'} colorScheme='red' variant='solid' onClick={handleSubmit}>
            <Text mr={1}><i className="bi bi-stars"></i></Text>
            Cek
          </Button>
        </HStack>
      </FormControl>
    </Flex>
  );
}

export default FormContainer;
