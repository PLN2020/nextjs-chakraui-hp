import { Box, Button, Heading, Link } from '@chakra-ui/react'
import Socials from './Socials'
import NextLink from 'next/link'

const Contact = () => {
    return (
        <Box>
            <Heading
                as="h3"
                variant="section-title"
                id="contact"
            >
                Contact
            </Heading>

            <Box>
                <NextLink href="mailto:patricklamnguyen@gmail.com" textDecoration="none" passHref>
                    <Button colorScheme="purple">Send me an email</Button>
                </NextLink>

                <Box mt="1em"><Socials /></Box>
            </Box>
        </Box>
    )
}

export default Contact