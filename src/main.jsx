import React from 'react'
import { Box, Heading, Text } from "@chakra-ui/react"
import { gsap } from "gsap";

const { useRef, useEffect } = React;

function Page() {
    const el = useRef();
    const s = gsap.utils.selector(el);

    useEffect(()=> {
        gsap.to(s(".text"), {x:-110, duration: 10});
    }, [s]);

  return (
    <Box 
        ref={el} 
        >
        <Heading className='text' fontSize="3rem">This is Animation</Heading>
        <Text className='text' >Learning never stops</Text>
    </Box>
  )
}

export default Page;