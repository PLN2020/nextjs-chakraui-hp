import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Box, Image, Progress } from '@chakra-ui/react'
import { PhotoData } from '../../data/photo-data'

function Slider() {

    let sliderPosition = 0
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
                onDrag={
                    (event, info) => (
                            console.log(info.point.x)
                        )
                }
                display="flex" 
            >
                {PhotoData.map((image) => {
                    return (
                        <Box
                            key={image} 
                            as={motion.div}
                            minH="40rem"
                            minW={{ base: "100%", md: "30rem"}}
                            p="40px"
                        >
                            <Image 
                                src={image.url} 
                                alt={image.title} 
                                w="100%"
                                h="100%"
                                borderRadius="2xl"
                                objectFit="cover"
                                pointerEvents="none"
                                // boxShadow="0.3rem 0.4rem 0.4rem rgba(0,0,0,0.4)"
                                placeholder="blur"
                            />
                        </Box>
                    )
                })}
            </Box>
            <Progress 
                value={sliderPosition} 
                colorScheme="purple"
            />
        </Box>
    )
}

export default Slider