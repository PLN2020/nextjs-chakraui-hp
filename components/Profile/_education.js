import { Box, Heading, Text } from '@chakra-ui/react'
import { EducationData } from '../../data/profile-data'
import React from 'react'

const Education = () => {
    return (
        <Box>
            <Heading 
                as="h3" 
                variant="section-title"
                id='profile'
            >
                Education
            </Heading>

            {EducationData.map((item) => {
                return (
                    <Box key={item}>
                        <Heading as="h3" variant="skill-title" ml="1em">
                            {item.name}&nbsp;/&nbsp;{item.year}
                        </Heading>

                        <Text>
                            {item.desc}
                        </Text>
                    </Box>
                )
            })}

        </Box>
    )
}

export default Education