import { Box, Button, Heading, Highlight, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { HeroData } from '../data/hero-data'
import Socials from './Socials'

const Hero = () => {
    return (
        <Box
            as="section"
            display="flex"
            alignItems="center"
            justifyContent="center"
            h="calc(100vh - 70px)"
            bgAttachment="fixed"
            bgPosition="center"
            bgSize="cover"
            bgImage="url('https://res.cloudinary.com/ditoikfqn/image/upload/v1663102401/NextJS-Portfolio/background_p0bazx.jpg')"
        >
            {/* Overlay */}
            <Box
                pos="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                zIndex="2"
                bgColor="blackAlpha.600"
                h="calc(100vh - 70px)"
            />

            <Box
                zIndex="2"
                p={5}
                mt="-10rem"
                ml={{ md: "-20rem" }}
            >
                <Box ml={1.5}>
                    <Heading color="white" size="2xl">{HeroData.heading}</Heading>
                    <Text color="white" fontSize="lg">
                        <Highlight 
                            query="Web Developer" 
                            styles={{ px: "0.5", py: "0.5", fontWeight: "bold", bg: "purple.200"}}
                        >
                            {HeroData.subtext}
                        </Highlight>
                    </Text>
                </Box>
                {/* Socials go here */}
                <Box mt="1em"><Socials /></Box>
                
            </Box>
        </Box>
    )
}

export default Hero