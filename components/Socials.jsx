import { Box, Icon, Link } from "@chakra-ui/react"
import { SocialsData } from "../data/socials-data"
import { IoLogoFlickr, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Socials = () => {
    return (
        <Box fontSize="40px" display="flex">
            {SocialsData.map((item) => {
                return (
                    <Link
                        key={item}
                        href={item.url}
                        target="_blank"
                        color="purple.200"
                        _hover={{
                            color: "purple.600"
                        }}
                        m={1}
                    >
                        {item.icon}
                    </Link>
                )
            })}
        </Box>
    )
}

export default Socials