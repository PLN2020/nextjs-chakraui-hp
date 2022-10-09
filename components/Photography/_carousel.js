import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Heading, Highlight, Image } from "@chakra-ui/react"
import { useEffect, useState } from "react"

function Carousel({images}) {

    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    // let timeOut = null

    // useEffect(() => {
    //     timeOut = autoPlay &&
    //         setTimeout(() => {
    //         slideRight();
    //     }, 3000);
    // });

    const slideRight = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1)
    };

    const slideLeft = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1)
    };

    return (
        <Box
            display='flex'
            h='600px'
            w='100%'
            maxW='800px'
            // onMouseEnter={() => {
            //     setAutoPlay(false);
            //     clearTimeout(timeOut);
            // }}
            // onMouseLeave={() => {setAutoPlay(true)}}
        >
            <Box
                pos='relative'
                w='100%'
                h='100%'
            >
                {images.map((image, index) => {
                    return (
                        <Box
                            key={index}
                            display='flex'
                            flex='1'
                            pos='absolute'
                            w='100%'
                            h='100%'
                            overflow='hidden'
                            borderRadius='20px'
                            opacity={ index == current ? '1' : '0' }
                            pointerEvents={ index == current ? 'visible' : 'none' }
                            transform={ index == current ? 'scale(1)' : 'scale(0.9)' }
                            transition='0.5s ease-in-out'
                        >
                            <Image 
                                src={image.url}
                                w='100%'
                                objectFit='cover'
                                alt={image.title}
                            />

                            {/* Overlay */}
                            <Box
                                pos='absolute'
                                w='100%'
                                h='100%'
                                display='flex'
                                p='30px'
                                alignItems='flex-start'
                            >
                                <Heading 
                                    as="h2" 
                                    color='white'
                                    fontSize='30px'
                                >
                                    <Highlight 
                                        query={image.city}
                                        styles={{
                                            px: '2',
                                            py: '1',
                                            rounded: 'full',
                                            bg: 'rgba(255, 255, 255, 0.7)'
                                        }}
                                    >
                                        {image.city}
                                    </Highlight>
                                </Heading>
                            </Box>
                        </Box>
                    )
                })}
                <Box
                    position='absolute'
                    fontSize='60px'
                    top='50%'
                    left='15px'
                    transform='translate(0, -50%)'
                    bgColor='rgba(255, 255, 255, 0.7)'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    w='45px'
                    h='45px'
                    borderRadius='50%'
                    cursor='pointer'
                    onClick={slideLeft}
                >
                    <ChevronLeftIcon 
                        color='black' 
                        transition="all 0.2s ease-out"
                        _hover={{
                            color: 'purple.400',
                            transform: 'scale(1.1)'
                        }}
                    />
                </Box>            

                <Box
                    position='absolute'
                    fontSize='60px'
                    top='50%'
                    right='15px'
                    transform='translate(0, -50%)'
                    bgColor='rgba(255, 255, 255, 0.7)'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    w='45px'
                    h='45px'
                    borderRadius='50%'
                    cursor='pointer'
                    onClick={slideRight}
                >
                    <ChevronRightIcon 
                        color='black' 
                        transition="all 0.2s ease-out"
                        _hover={{
                            color: 'purple.400',
                            transform: 'scale(1.1)'
                        }}
                    />
                </Box>

                <Box
                    position='absolute'
                    bottom='5px'
                    left='50%'
                    transform='translate(-50%, 0)'
                    bgColor='rgba(255, 255, 255, 0.7)'
                    opacity={{ base: 0, md: 1 }}
                    borderRadius='full'
                >
                    {images.map((_, index) => {
                        return (
                            <Box
                                key={index}
                                h='10px'
                                w='10px'
                                bgColor={ index == current ? 'purple.400' : 'gray.800' }
                                borderRadius='50%'
                                display='inline-block'
                                m='10px 10px 5px 10px'
                                cursor='pointer'
                                _hover={{
                                    transform: 'scale(1.2)'
                                }}
                                onClick={() => setCurrent(index)}
                            />
                        )
                    })}
                </Box>
            </Box>
        </Box>
    )
}

export default Carousel