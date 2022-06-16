import React from 'react';
import { Box } from "@chakra-ui/react";
import gsap from 'gsap';

// const { useEffect, useState } = React;

const sharestyle = {
    width:"10rem",
    height:"120px",
    fontSize:"2rem",
    bgColor:"green",
    borderRadius:"10px",
    display:"flex",
    alignItems:"center",
    marginTop:"5%",
    justifyContent:"center",
    textAlign:"center"
  }

function Domain() {
    const onEnter = ({currentTarget}) => {
        gsap.to(currentTarget, {backgroundColor: "#e77614", scale: 1.2});
    };

    const onLeave = ({currentTarget}) => {
        gsap.to(currentTarget, {backgroundColor: "#28a92b", scale: 1});
    };



    return (
        <Box
            width={sharestyle.width}
            height={sharestyle.height}
            fontSize={sharestyle.fontSize}
            bgColor={sharestyle.bgColor}
            borderRadius={sharestyle.borderRadius}
            display={sharestyle.display}
            alignItems={sharestyle.alignItems}
            justifyContent={sharestyle.justifyContent}
            className="box2"
            onMouseEnter={onEnter}
            onMouseOut={onLeave}> 
            Hover Me</Box>
    )
}

export default Domain;