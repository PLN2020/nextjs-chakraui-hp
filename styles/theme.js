import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode ('#FFFFFF', '#202023')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 36,
                textUnderlineOffset: 6,
                textDecorationColor: '#d7bcfa',
                textDecorationThickness: 4,
                marginTop: 90,
                marginBottom: 10,
                scrollMarginTop: 75,
            },
            'skill-title': {
                textDecoration: 'underline',
                fontSize: 18,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 3,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('black', 'purple.400')(props),
            textUnderlineOffset: 3
        })
    },
}

const fonts = {
    heading: `'Poppins', sans-serif`,
    body: `'Noto Sans', sans-serif`,
}

const colors = {
    glassTeal: '#88ccca',
    offWhite: '#faf8f4',
    lightPurple: '#d7bcfa'
}

const config = {
    initialColorMode: 'light',
    useSystemColorMode: true
}

const theme = extendTheme({
    styles,
    components,
    fonts,
    colors,
    config
})

export default theme