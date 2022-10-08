import { Box, Heading, Text, Link } from '@chakra-ui/react'
import React from 'react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const AboutMe = () => {
    return (
        <Box maxW='lg'>
            <Heading 
                as="h3" 
                variant="section-title"
                id='profile'
            >
                Profile
            </Heading>
            
            <Box>
                <Heading as="h3" variant="skill-title" ml="1em">
                    About Me
                </Heading>
                <Text>
                    Web developer based in Montreal looking for opportunities in the industry. 
                    Curious and driven to learn, and eager to apply that knowledge. 
                    I enjoy photography and learning Japanese in my free time.
                </Text>

                <Heading as="h3" variant="skill-title" ml="1em">
                    JLPT
                </Heading>
                <Text>
                The JLPT is a test taken by non native Japanese speakers to measure their proficiency level. 
                I have acquired the JLPT N2 level certificate in 2017.
                <br/>
                <Link href="https://www.jlpt.jp/e/about/levelsummary.html" target="_blank" color="purple.300">
                    Learn more about the JLPT&nbsp;<ExternalLinkIcon />
                </Link>
                </Text>
            </Box>
        </Box>
    )
}

export default AboutMe