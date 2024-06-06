import { Box, Image, Text, VStack } from "@chakra-ui/react";

const ProductCard = ({ product }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} bg="white">
      <Image src={product.image} alt={product.name} />
      <VStack align="start" mt={4}>
        <Text fontWeight="bold" fontSize="lg">
          {product.name}
        </Text>
        <Text color="gray.500">${product.price}</Text>
      </VStack>
    </Box>
  );
};

export default ProductCard;