import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

import FlotingButton from "../../components/FlotingButton";
import ArrayMethod from "../../types/ArrayMethods";
import Card from "./components/Card";
import Grid from "./components/Grid";

const ArraysPage = () => {
  const { arrayMethods } = useContext(DataContext);

  return (
    <article>
      <FlotingButton />
      <Grid>
        {arrayMethods.map((item: ArrayMethod) => (
          <Card key={item.id} data={item} />
        ))}
      </Grid>
    </article>
  );
};

export default ArraysPage;
