import { Box, Container, Heading } from "@chakra-ui/react";

const Products = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" mb={6}>
        Products
      </Heading>
      <Box>
        {/* Product listing will go here */}
      </Box>
    </Container>
  );
};

export default Products;