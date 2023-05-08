import { arrayMethod } from "../../data/arrayMethod.data";
import ArrayMethod from "../../types/ArrayMethods";
import Card from "./components/Card";
import Grid from "./components/Grid";

const ArraysPage = () => {
  return (
    <article>
      <Grid>
        {arrayMethod.map((item: ArrayMethod) => (
          <Card key={item.id} data={item} />
        ))}
      </Grid>
    </article>
  );
};

export default ArraysPage;
