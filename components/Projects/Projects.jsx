import React from 'react'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import ProjectCard from './_project-card'
import { ProjectData } from '../../data/project-data'

const Projects = () => {
    return (
        <>
            <Heading 
                as="h3" 
                variant="section-title"
                id='projects'
            >
                Projects
            </Heading>

            <Box display="flex" alignItems="center" justifyContent="center">
            <SimpleGrid
                columns={[1, 2, 2]}
                spacing="40px"
            >
                {ProjectData.map((item)=> {
                    return (
                        <ProjectCard 
                            imageUrl={item.imageUrl}
                            imageAlt={item.imageAlt}
                            name={item.name}
                            year={item.year} 
                            desc={item.desc} 
                            stack={item.stack} 
                            sourceUrl={item.sourceUrl}
                            linkUrl={item.linkUrl}
                            key={item}
                        />
                    )
                })}
            </SimpleGrid>
            </Box>
        </>
    )
}

export default Projects