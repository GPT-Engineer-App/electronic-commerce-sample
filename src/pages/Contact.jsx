import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" mb={6}>
        Contact Us
      </Heading>
      <Box>
        <Text>If you have any questions, feel free to reach out to us at contact@eshop.com.</Text>
      </Box>
    </Container>
  );
};

export default Contact;