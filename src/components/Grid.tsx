import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Grid = ({ children }: Props) => {
  return (
    <section className="w-full grid grid-cols-[repeat(auto-fit,_minmax(19rem,_1fr))] justify-items-center gap-4">
      {children}
    </section>
  );
};

export default Grid;
