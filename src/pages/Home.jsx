import { Stack } from "@mui/material";
import Header from "../components/home/Header";
import HomeFind from "../components/home/HomeFind";
import WeekendNews from "../components/home/WeekendNews";

const Home = () => {
  return (
    <>
      <Header />
      <Stack spacing={10} mt={10}>
        <HomeFind />
        <WeekendNews />
      </Stack>
    </>
  );
};

export default Home;
