import React from 'react'
import { NavData } from '../../data/navbar-data'
import { Stack, Link } from '@chakra-ui/react'

const DesktopMenu = () => {
    return (
        <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            justifyContent="end"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
            spacing='18px'
        >
            {NavData.tabs.map((item) => {
                return (
                    <Link
                        key={item} 
                        href={"/#" + item.toLowerCase()}
                        scroll={true}
                        fontWeight="bold"
                        transition="all 0.2s ease-out"
                        _hover={{
                            cursor: "pointer",
                            textColor: 'purple.700',
                            transform: 'scale(1.05)',
                            textDecoration: 'underline',
                            textUnderlineOffset: '4px'
                        }}
                        _active={{
                            transform: 'scale(1.05) translateY(0.2rem)'
                        }}
                    >
                        {item}
                    </Link>
                )
            })}
        </Stack>
    )
}

export default DesktopMenu