import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <IconButton 
            aria-label="Toggle theme"
            colorScheme={useColorModeValue('purple', 'orange')}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
            transition="all 0.2s ease-out"
            _active={{
                transform: 'scale(1.05) translateY(0.2rem)'
            }}
        ></IconButton>
    )
}

export default ThemeToggleButton