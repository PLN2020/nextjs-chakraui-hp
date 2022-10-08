import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { FaLaptopCode } from 'react-icons/fa'

const Logo = () => {
    return (
        <Link href="/" scroll={true}>
            <Box
                fontWeight="bold"
                fontSize= {{ base: '0.8em', md: '28px' }}
                display="inline-flex"
                alignItems="center"
                h="30px"
                lineHeight="20px"
                p="10px"
                transition="all 0.2s ease-out"
                _hover={{
                    cursor: "pointer",
                    textColor: "purple.700",
                    transform: 'scale(1.04)'
                }}
                _active={{
                    transform: 'scale(1.04) translateY(0.2rem)'
                }}
            >
                <FaLaptopCode />
                <Text
                    fontWeight="bold"
                    ml={2}
                >
                    plnguyen
                </Text>
            </Box>
        </Link>
    )
}

export default Logo