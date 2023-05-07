import Card from "./components/Card";
import { arrayMethod } from "../../data/arrayMethod.data";
import ArrayMethod from "../../types/ArrayMethods";
import Grid from "./components/Grid";
import Header from "../../shared/components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Grid>
        {arrayMethod.map((item: ArrayMethod) => (
          <Card key={item.name} data={item} />
        ))}
      </Grid>
    </>
  );
};

export default Home;
