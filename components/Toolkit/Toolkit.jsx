import React from 'react'
import { Box, SimpleGrid, UnorderedList, ListItem, Heading, Button, Container, Text } from '@chakra-ui/react'
import { ToolkitData } from '../../data/toolkit-data'

const Toolkit = () => {
    return (
        <>
            <Heading 
                as="h3" 
                variant="section-title"
                id='toolkit'
            >
                Toolkit
            </Heading>
            
            <SimpleGrid 
                columns={[1, 3, 3]}
                borderWidth='1px'
                borderColor='purple.300'
                borderRadius='lg'
                overflow='hidden'
            >
                {ToolkitData.map((item) => {
                    return(
                        // Toolkit container
                        <Box
                            key={item} 
                            pt={6}
                            pb={6}
                            borderBottom='1px'
                            borderColor='purple.300'
                            transition="all 0.2s ease-out"
                            _hover={{ 
                                boxShadow: '0 0 1em 0px rgba(0, 0, 0, 0.4)',
                                transform: 'scale(1.01)'
                            }}
                        >
                            <Box
                                display='flex'
                                justifyContent='center'
                                alignItems='center'
                                flexDirection='column'
                            >
                                <Box fontSize='60'>{item.icon}</Box>
                                <Heading as="h3" variant="skill-title">{item.type}</Heading>
                            </Box>

                            <Box display="block">
                                {item.list.map((skill) => {
                                    return (
                                        <Text textAlign="center" key={skill}>
                                            {skill.icon}&nbsp;{skill.name}
                                        </Text>
                                    )
                                })}
                            </Box>
                        </Box>
                    )
                })}
            </SimpleGrid>
        </>
    )
}

export default Toolkit