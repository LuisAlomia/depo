import ArrayMethod from "../../../types/ArrayMethods";
import "../../../index.css";

type Props = {
  data: ArrayMethod;
};

const Card = ({ data }: Props) => {
  return (
    <figure className=" w-[1fr] bg-[#252529] p-5 rounded-xl shadow-2xl hover:bg-[#1f1f22] hover:scale-[1.02] colorr">
      <figcaption className="flex flex-col justify-between gap-5">
        <h1 className="text-xl text-white font-semibold capitalize">
          {data.name}
        </h1>
        <p>{data.description}</p>
        <p className="text-right">
          <span className="hover:text-yellow-600 hover:cursor-pointer">
            mas...
          </span>
        </p>
      </figcaption>
    </figure>
  );
};

export default Card;
