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
                textAlign='center'
            >
                Projects
            </Heading>

            <SimpleGrid
                columns={[1, 1, 2]}
                spacing="40px"
                placeItems='start center'
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
        </>
    )
}

export default Projects