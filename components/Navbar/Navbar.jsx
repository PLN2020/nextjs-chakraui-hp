import { Box, Container, Flex, Heading, Menu, MenuButton, MenuItem, MenuList, IconButton } from '@chakra-ui/react'
import React from 'react'
import Logo from './_logo'
import DesktopMenu from './_desktop-menu'
import MobileMenu from './_mobile-menu'
import ThemeToggleButton from './_toggle-theme-button'

const Navbar = () => {
    return (
        <Box
            as="nav"
            w="100%"
            h="70px"
            zIndex="10"
            bgColor="white"
            boxShadow="md"
            pos="sticky"
            top="0"
            left="0"
            display="flex"
        >
            <Container 
                maxW="container.lg" 
                m="auto"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                p={4}
                color="black"
            >
                {/* Logo */}
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>
                
                <DesktopMenu />

                {/* Mobile Menu */}
                <Box flex={1} align="right">
                    {/* Other Buttons can go here */}
                    <ThemeToggleButton />

                    {/* Dropdown Menu for Mobile */}
                    <MobileMenu />
                </Box>
            </Container>

        </Box>
    )
}

export default Navbar