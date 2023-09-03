import { useState, useEffect } from "react";
import { Box, Container, Stack } from "@mui/material";
import axios from "axios";
import CategoryMenu from "./CategoryMenu";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://216.250.9.208:1498/api/catalogs"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mt={3}
        >
          {categories.map((category, i) => (
            <CategoryMenu key={`category_key${i}`} category={category} />
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default Header;
