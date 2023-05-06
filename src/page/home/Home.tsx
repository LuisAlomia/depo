import Card from "./components/Card";
import { arrayMethod } from "../../data/arrayMethod.data";
import ArrayMethod from "../../types/ArrayMethods";
import Grid from "./components/Grid";

const Home = () => {
  return (
    <>
      <p>Este es el home</p>
      <Grid>
        {arrayMethod.map((item: ArrayMethod) => (
          <Card key={item.name} data={item} />
        ))}
      </Grid>
    </>
  );
};

export default Home;
