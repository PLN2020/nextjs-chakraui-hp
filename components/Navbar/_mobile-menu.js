import { Box, IconButton, Link, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from '@chakra-ui/icons'
import { NavData } from "../../data/navbar-data";
import NextLink from 'next/link'

const MobileMenu = () => {
    return (
        <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy>
                <MenuButton 
                    as={IconButton}
                    icon={<HamburgerIcon />}
                    variant="outline"
                    aria-label="Options"
                    color="black"
                    borderColor="black"
                />
                <MenuList bgColor="white">
                    {NavData.tabs.map((item) => {
                        return (
                            <NextLink href={"/#" + item.toLowerCase()} scroll={true} passHref>
                                <MenuItem as={Link}>{item}</MenuItem>
                            </NextLink>
                        )
                    })}
                </MenuList>
            </Menu>
        </Box>
    )
}

export default MobileMenu