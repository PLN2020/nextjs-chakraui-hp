import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import AboutMe from './_about-me'
import Education from './_education'

const Profile = () => {
    return (
        <>
            <SimpleGrid columns={[1, 2, 2]} spacingX="30px">
                <AboutMe />
                <Education />
            </SimpleGrid>
        </>
    )
}

export default Profile