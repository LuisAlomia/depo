import { arrayMethod } from "../../data/arrayMethod.data";
import FlotingButton from "../../shared/components/FlotingButton";
import ArrayMethod from "../../types/ArrayMethods";
import Card from "./components/Card";
import Grid from "./components/Grid";

const ArraysPage = () => {
  return (
    <article>
      <FlotingButton />
      <Grid>
        {arrayMethod.map((item: ArrayMethod) => (
          <Card key={item.id} data={item} />
        ))}
      </Grid>
    </article>
  );
};

export default ArraysPage;
