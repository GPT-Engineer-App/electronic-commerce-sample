import { useState } from "react";
import { Box, Container, Heading, Select, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";

const sampleProducts = [
  {
    name: "Laptop",
    price: 999.99,
    image: "https://via.placeholder.com/150",
    category: "laptop",
  },
  {
    name: "Smartphone",
    price: 699.99,
    image: "https://via.placeholder.com/150",
    category: "smartphone",
  },
  {
    name: "Tablet",
    price: 499.99,
    image: "https://via.placeholder.com/150",
    category: "tablet",
  },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory
    ? sampleProducts.filter((product) => product.category === selectedCategory)
    : sampleProducts;

  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" mb={6}>
        Products
      </Heading>
      <Box mb={6}>
        <Select placeholder="Select category" onChange={handleCategoryChange}>
          <option value="laptop">Laptops</option>
          <option value="smartphone">Smartphones</option>
          <option value="tablet">Tablets</option>
        </Select>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Products;