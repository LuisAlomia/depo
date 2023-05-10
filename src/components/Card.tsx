import { useState } from "react";
import ArrayMethod from "../types/ArrayMethods";
import "../index.css";
import Code from "./Code";

type Props = {
  data: ArrayMethod;
};

const Card = ({ data }: Props) => {
  const [show, setShow] = useState<boolean>(false);

  const handleButton = () => setShow(!show);
  return (
    data && (
      <figure className=" w-[1fr] bg-[#252529] p-5 rounded-xl shadow-2xl hover:bg-[#1f1f22] hover:scale-[1.02] foco">
        <figcaption className="flex flex-col justify-between gap-5">
          <h3 className="text-xl text-white font-semibold capitalize flex justify-between">
            {data.name}
          </h3>
          <p>{data.description}</p>
          <a
            onClick={handleButton}
            className="hover:text-yellow-600 hover:cursor-pointer font-medium text-xs"
          >
            Documentación
          </a>
          <button
            onClick={handleButton}
            className="text-right hover:text-yellow-600 focus:text-yellow-600 hover:cursor-pointer  font-medium text-xs foco"
          >
            Ver codigo
          </button>
        </figcaption>

        <div className="relative  w-full">
          <span className="absolute w-full z-20 hidden">
            <Code data={data.example} />
          </span>
        </div>
      </figure>
    )
  );
};

export default Card;
