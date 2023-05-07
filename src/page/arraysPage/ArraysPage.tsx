import { arrayMethod } from "../../data/arrayMethod.data";
import ArrayMethod from "../../types/ArrayMethods";
import Card from "../home/components/Card";
import Grid from "../home/components/Grid";

const ArraysPage = () => {
  return (
    <article>
      <Grid>
        {arrayMethod.map((item: ArrayMethod) => (
          <Card key={item.name} data={item} />
        ))}
      </Grid>
    </article>
  );
};

export default ArraysPage;
