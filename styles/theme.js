import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode ('white', '#202023')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#d7bcfa',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            },
            'skill-title': {
                textDecoration: 'underline',
                fontSize: 16,
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
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: "'Noto Sans'"
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