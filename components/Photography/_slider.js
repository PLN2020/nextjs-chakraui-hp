import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Box, Image } from '@chakra-ui/react'
import { PhotoData } from '../../data/photo-data'

function Slider() {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);


    return (
        // Carousel
        <Box
            as={motion.div}
            cursor="grab"
            overflow="hidden"
            ref={carousel}
            whileTap={{cursor: "grabbing"}}
        >
            {/* Inner Carousel */}
            <Box 
                as={motion.div} 
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                display="flex" 
            >
                {PhotoData.map((image) => {
                    return (
                        <Box
                            key={image} 
                            as={motion.div}
                            minH="40rem"
                            minW={{ base: "100%", md: "30rem"}}
                            p="20px"
                        >
                            <Image 
                                src={image.url} 
                                alt={image.title} 
                                w="100%"
                                h="100%"
                                borderRadius="lg"
                                objectFit="cover"
                                pointerEvents="none"
                            />
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}

export default Slider