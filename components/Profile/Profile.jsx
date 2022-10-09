import { Box, Center, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import AboutMe from './_about-me'
import Education from './_education'

const Profile = () => {
    return (
        <Box as='section'>
            <SimpleGrid columns={[1, 2, 2]} spacing="40px" placeItems='start center'>
                <Box><AboutMe /></Box>
                <Box><Education /></Box>
            </SimpleGrid>
        </Box>
    )
}

export default Profile