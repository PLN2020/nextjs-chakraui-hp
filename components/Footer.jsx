import { Box } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Box align="center" opacity={0.4} fontSize="sm" mt="4em" mb="2em" bgColor="whiteAlpha.200">
            &copy; {new Date().getFullYear()} Patrick-Lam Nguyen
        </Box>
    )
}

export default Footer