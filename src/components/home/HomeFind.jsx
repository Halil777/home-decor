import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid, Stack, Typography } from "@mui/material";
import {
  homeFindTitle,
  imgPoster,
  imgPosterComment,
} from "../../style/home/homeStyle";

const HomeFind = () => {
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

  const staticTexts = [
    {
      imgPoster: "Постеры, картины, обои",
      imgPosterComment:
        "Заказывайте прямо здесь или через инстаграм, ICQ или приходите в наш офис",
    },
    {
      imgPoster: "Рамки и крепления",
      imgPosterComment: "Выберите раму по Вашему вкусу из 100+ видов со склада",
    },
    {
      imgPoster: "Примерка постеров, картин, обоев",
      imgPosterComment:
        "Подберите постеры, картины, обои к Вашему интерьеру, а наши дизайнеры Вам в этом помогут",
    },
    {
      imgPoster: "Примерка постеров, картин, обоев",
      imgPosterComment:
        "Подберите постеры, картины, обои к Вашему интерьеру, а наши дизайнеры Вам в этом помогут",
    },
  ];

  return (
    <div>
      <Container>
        <Typography sx={homeFindTitle}>На нашем сайте вы найдете</Typography>
        <Grid container spacing={3}>
          {paintings.slice(0, 4).map((painting, index) => (
            <Grid item lg={3} md={3} xs={12} sm={6} key={painting._id}>
              <Stack spacing={2}>
                <img
                  style={{ width: "240px", height: "267px" }}
                  src={`http://216.250.9.208:1498/uploads/paintings/${painting.coverImageName.filename}`}
                  alt={
                    painting.coverImageName
                      ? painting.coverImageName.originalname
                      : ""
                  }
                />
                <Typography sx={imgPoster}>
                  {staticTexts[index].imgPoster}
                </Typography>
                <Typography sx={imgPosterComment}>
                  {staticTexts[index].imgPosterComment}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default HomeFind;
