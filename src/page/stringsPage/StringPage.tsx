import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

import FlotingButton from "../../components/FlotingButton";
import ArrayMethod from "../../types/ArrayMethods";
import Card from "../../components/Card";
import Grid from "../../components/Grid";
import Title from "../../components/Title";
import { useParams } from "react-router-dom";

const StringPage = () => {
  const { arrayMethodsStrings, languagesButtons } = useContext(DataContext);
  const { languageId } = useParams();

  return (
    <article>
      <div className="flex gap-14 mb-20 max-[600px]:mb-2 max-[600px]:flex-col-reverse">
        <div className="relative top-[-3rem]">
          <FlotingButton type={"strings"} data={languagesButtons} />
        </div>
        <Title
          type="strings"
          title={languageId !== "undefined" ? languageId : "programación"}
        />
      </div>

      <Grid>
        {arrayMethodsStrings
          .filter((item: ArrayMethod) => item.language === languageId)
          .map((item: ArrayMethod) => (
            <Card key={item.id} data={item} />
          ))}
      </Grid>
    </article>
  );
};

export default StringPage;
