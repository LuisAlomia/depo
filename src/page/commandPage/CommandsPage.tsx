import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import ArrayMethod from "../../types/ArrayMethods";
import Card from "../../components/Card";
import FlotingButton from "../../components/FlotingButton";
import Title from "../../components/Title";
import { useParams } from "react-router-dom";

const CommandsPage = () => {
  const { arrayCommands } = useContext(DataContext);
  const { languageId } = useParams();

  return (
    <article>
      <div className="flex gap-14 mb-20 max-[600px]:mb-2 max-[600px]:flex-col-reverse">
        <div className="relative top-[-3rem]">
          <FlotingButton type={"commands"} />
        </div>
        <Title
          type="arrays"
          title={languageId !== "undefined" ? languageId : "programación"}
        />
      </div>

      {arrayCommands
        .filter((item: ArrayMethod) => item.language === languageId)
        .map((item: ArrayMethod) => (
          <div key={item.id} className="my-4">
            <Card data={item} />
          </div>
        ))}
    </article>
  );
};

export default CommandsPage;
