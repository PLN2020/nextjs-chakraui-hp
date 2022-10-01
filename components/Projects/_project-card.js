import React from 'react'
import { Box, Badge, Text, Link, Tooltip, Icon, Image } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const ProjectCard = ({ imageUrl, imageAlt, name, year, desc, stack, sourceUrl, linkUrl}) => {
    return (
        <>
            <Box 
                maxW="lg"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
            >
                <Image src={imageUrl} alt={imageAlt} />

                <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                        <Box
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            noOfLines={1}
                        >
                            {name}&nbsp;
                        </Box>
                        <Badge borderRadius='full' px='2' colorScheme='purple'>
                            {year}
                        </Badge>
                    </Box>

                    <Text fontSize='sm' mt='1em'>
                        {desc}
                    </Text>

                    <Box display='flex' alignItems='center' mt='4'>
                        {stack.map((item) => {
                            return (
                                <Tooltip
                                    hasArrow
                                    label={item.label}
                                    colorScheme='purple'
                                    placement='top'
                                    key={item}
                                >
                                    <Box 
                                        as='span'
                                        fontSize="30px"
                                        mb="4"
                                        ml="1.5"
                                    >
                                        {item.icon}
                                    </Box>
                                </Tooltip>
                            )
                        })}
                    </Box>

                    <Link href={sourceUrl} target="_blank" fontSize='sm' color="purple.300">
                        View source <ExternalLinkIcon />
                    </Link>

                    <Box fontSize="sm">
                        {linkUrl}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ProjectCard