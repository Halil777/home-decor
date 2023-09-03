import { useState } from "react";
import { Menu, MenuItem, Paper, Typography } from "@mui/material";

const CategoryMenu = ({ category }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  let closeTimeout;

  const handleMenuOpen = (event) => {
    clearTimeout(closeTimeout);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setAnchorEl(null);
    }, 2000);
  };

  return (
    <div>
      <Typography
        sx={{ fontSize: "16px" }}
        variant="h6"
        onMouseEnter={handleMenuOpen}
        onMouseLeave={handleMouseLeave}
      >
        {category.catalogTitle}
      </Typography>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperComponent={Paper}
      >
        {category.subCatalogsName.map((subCategory, j) => (
          <MenuItem key={`subcategory_key${j}`}>
            {subCategory.subcatalogTitle}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CategoryMenu;
