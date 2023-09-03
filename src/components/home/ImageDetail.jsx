import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid, Typography } from "@mui/material";

const ImageDetail = () => {
  const { id } = useParams();
  const [imageDetails, setImageDetails] = useState(null);

  useEffect(() => {
    const fetchImageDetails = async () => {
      try {
        const response = await axios.get(
          `http://216.250.9.208:1498/api/paintings/${id}`
        );
        setImageDetails(response.data);
      } catch (error) {
        console.error("Error fetching image details:", error);
      }
    };

    fetchImageDetails();
  }, [id]);

  if (!imageDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Container>
        <Typography variant="h2" sx={{ textAlign: "center", mb: 7 }}>
          Image Details
        </Typography>
        <Grid container>
          <Grid item lg={6} md={6} xs={12} sm={12}>
            <img
              style={{ width: "70%" }}
              src={`http://216.250.9.208:1498/uploads/paintings/${imageDetails.coverImageName.filename}`}
              alt={imageDetails.coverImageName.originalname}
            />
            <Typography variant="h4">{imageDetails.title}</Typography>
          </Grid>
          <Grid item lg={6} md={6} xs={12} sm={12}></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ImageDetail;
