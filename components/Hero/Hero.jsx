import { Box, Heading, Highlight, Text } from '@chakra-ui/react'
import React from 'react'
import { HeroData } from './hero-data'

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
                text="white"
                zIndex="2"
                p={5}
                mt="-10rem"
                ml={{ md: "-20rem" }}
            >
                <Heading size="2xl">{HeroData.heading}</Heading>
                <Text fontSize="lg">
                    <Highlight 
                        query="Web Developer" 
                        styles={{ px: "1", py: "1", fontWeight: "bold", bg: "purple.200"}}
                    >
                        {HeroData.subtext}
                    </Highlight>
                </Text>

                {/* Socials go here */}
            </Box>
        </Box>
    )
}

export default Hero