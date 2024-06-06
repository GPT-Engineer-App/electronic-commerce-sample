import { Box, Container, SimpleGrid, Heading } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";

const sampleProducts = [
  {
    name: "Laptop",
    price: 999.99,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Smartphone",
    price: 699.99,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Tablet",
    price: 499.99,
    image: "https://via.placeholder.com/150",
  },
];

const Home = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" mb={6}>
        Welcome to E-Shop
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {sampleProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Home;