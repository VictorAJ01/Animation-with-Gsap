import React from 'react';
import { Container, Heading, Flex } from "@chakra-ui/react";
import Image1 from "./assests/images/img1.jpg";
import Image2 from "./assests/images/img2.jpg";
import Image3 from "./assests/images/img3.jpg";
import gsap from 'gsap';

const sharestyle = {
    width : "30%",
    height : "30%",
    fontSize : "3rem"
}

function Images() {

    const handleExpand = ( {currentTarget}) => {
        gsap.to(currentTarget, {width: "32%", height: "32%"})
    }

    const handleShrink = ( {currentTarget}) => {
        gsap.to(currentTarget, {width: "30%", height: "30%"})
    }

  return (
    <Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginLeft="8%"
        marginBottom="10%">
        <Heading fontSize={sharestyle.fontSize}>Game Wallpapers</Heading>
        <Flex gap="1%">
            <img src={Image1} alt="image1"  width={sharestyle.width} height={sharestyle.height} onMouseEnter={handleExpand} onMouseLeave={handleShrink} />
            <img src={Image2} alt="image2"  width={sharestyle.width} height={sharestyle.height} onMouseEnter={handleExpand} onMouseLeave={handleShrink} />
            <img src={Image3} alt="image3"  width={sharestyle.width} height={sharestyle.height} onMouseEnter={handleExpand} onMouseLeave={handleShrink} />
        </Flex>
    </Container>
  )
}

export default Images;