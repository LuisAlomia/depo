import Prism from "prismjs";
import "prismjs/components/prism-javascript"; // Language
import "prismjs/themes/prism-tomorrow.css"; // Theme
import { useEffect } from "react";

type Props = {
  data?: string;
};

const Code = ({ data }: Props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className="rounded-xl scrollContainer">
      <code className="language-javascript">{data}</code>
    </pre>
  );
};

export default Code;
