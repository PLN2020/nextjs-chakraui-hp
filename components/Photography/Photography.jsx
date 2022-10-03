import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Heading, Link } from '@chakra-ui/react'
import React from 'react'
import Slider from './_slider'

const Photography = () => {
    return (
        <Box>
            <Heading
                as="h3"
                variant="section-title"
                id="photography"
            >
                Photography
            </Heading>

            <Slider />
        </Box>
    )
}

export default Photography