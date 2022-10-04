import { Box, HStack, Link } from "@chakra-ui/react"
import { SocialsData } from "../data/socials-data"

const Socials = () => {
    return (
        <HStack fontSize="40px" spacing="16px">
            {SocialsData.map((item) => {
                return (
                    <Link
                        key={item}
                        href={item.url}
                        target="_blank"
                        color="purple.200"
                        transition="all ease-in 200ms"
                        _hover={{
                            color: "purple.600"
                        }}
                    >
                        {item.icon}
                    </Link>
                )
            })}
        </HStack>
    )
}

export default Socials