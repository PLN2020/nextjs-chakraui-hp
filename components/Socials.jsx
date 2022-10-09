import { HStack, Link } from "@chakra-ui/react"
import { SocialsData } from "../data/socials-data"

const Socials = () => {
    return (
        <HStack fontSize="40px" spacing="16px">
            {SocialsData.map((social) => {
                return (
                    <Link
                        key={social}
                        href={social.url}
                        target="_blank"
                        color="purple.200"
                        transition="all ease-in 200ms"
                        _hover={{
                            color: "purple.600"
                        }}
                    >
                        {social.icon}
                    </Link>
                )
            })}
        </HStack>
    )
}

export default Socials