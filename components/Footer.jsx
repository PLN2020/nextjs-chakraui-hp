import { Box } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Box
            as='footer' 
            display="flex"
            alignItems="center"
            justifyContent="center"
            // opacity={0.4} 
            fontSize="sm" 
            w="100%"
            h="50px"
            bgColor="purple.300"
            mt="4em"
        >
            &copy; {new Date().getFullYear()} Patrick-Lam Nguyen
        </Box>
    )
}

export default Footer