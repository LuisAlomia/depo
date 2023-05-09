import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

import FlotingButton from "../../components/FlotingButton";
import ArrayMethod from "../../types/ArrayMethods";
import Card from "./components/Card";
import Grid from "./components/Grid";
import Title from "../../components/Title";
import { useParams } from "react-router-dom";

const ArraysPage = () => {
  const { arrayMethods } = useContext(DataContext);
  const { languageId } = useParams();

  return (
    <article>
      <div className="flex gap-14 mb-14">
        <FlotingButton />
        <Title
          type="arrays"
          title={languageId !== "undefined" ? languageId : "programacion"}
        />
      </div>

      <Grid>
        {arrayMethods.map((item: ArrayMethod) => (
          <Card key={item.id} data={item} />
        ))}
      </Grid>
    </article>
  );
};

export default ArraysPage;
