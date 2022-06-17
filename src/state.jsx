import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const { useState } = React;

const sharestyle = {
    width: "15%",
    bgColor: "red",
    height: "50px"
}

function State() {
    const [ count, setCount ] = useState(0)

    function Increment() {
        setCount(count + 1)
    };

    function Decrement() {
        setCount(count - 1)
    };

  return (
    <Flex 
        gap="1%"
        justifyContent="center"
        alignItems="center">
        <Button 
            width={sharestyle.width} 
            height={sharestyle.height}
            bgColor={sharestyle.bgColor} 
            onClick={Decrement} 
            >Decrement</Button>
        <Text fontSize="2rem">{count}</Text>
        <Button 
            width={sharestyle.width} 
            height={sharestyle.height}
            bgColor="green" 
            onClick={Increment} 
            >Increment</Button>
    </Flex>
  )
}

export default State;