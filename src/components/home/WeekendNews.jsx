import { Container, Grid, Typography } from "@mui/material";
import { homeFindTitle } from "../../style/home/homeStyle";
import { useEffect, useState } from "react";
import axios from "axios";

const WeekendNews = () => {
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://216.250.9.208:1498/api/paintings"
        );
        setPaintings(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Container>
        <Typography sx={homeFindTitle}>Новинки недели</Typography>
        <Grid container spacing={4}>
          {paintings.slice(4, 12).map((painting) => (
            <Grid item lg={3} md={3} xs={12} sm={6} key={painting._id}>
              <img
                style={{ width: "100%", height: "286px" }}
                src={`http://216.250.9.208:1498/uploads/paintings/${painting.coverImageName.filename}`}
                alt={
                  painting.coverImageName
                    ? painting.coverImageName.originalname
                    : ""
                }
              />
            </Grid>
          ))}
        </Grid>
        <Typography
          sx={{
            fontSize: "40px",
            textAlign: "center",
            fontWeight: 700,
            lineHeight: 5,
          }}
        >
          blaa blaa blaa
        </Typography>
        <Grid container spacing={4}>
          {paintings.slice(12, 20).map((painting) => (
            <Grid item lg={3} md={3} xs={12} sm={6} key={painting._id}>
              <img
                style={{ width: "100%", height: "286px" }}
                src={`http://216.250.9.208:1498/uploads/paintings/${painting.coverImageName.filename}`}
                alt={
                  painting.coverImageName
                    ? painting.coverImageName.originalname
                    : ""
                }
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default WeekendNews;
