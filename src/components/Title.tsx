type Props = {
  type: string;
  title?: string;
};

const Title = ({ type, title }: Props) => {
  return (
    <h2 className="text-6xl font-extrabold">
      Metodos de {type} mas usados en{" "}
      <span className="text-yellow-700 capitalize">{title}.</span>
    </h2>
  );
};

export default Title;
