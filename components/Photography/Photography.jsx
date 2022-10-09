import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import Carousel from './_carousel'
import { PhotoData } from '../../data/photo-data'

const Photography = () => {
    return (
        <Box as='section'>
            <Heading
                as="h3"
                variant="section-title"
                id="photography"
                align='center'
            >
                Photography
            </Heading>

            <Box display='flex' justifyContent='center'>
                <Carousel images={PhotoData} />
            </Box>
        </Box>
    )
}

export default Photography