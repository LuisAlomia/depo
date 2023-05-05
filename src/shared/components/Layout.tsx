import { ReactNode } from "react";

type Props = {
  childrem: ReactNode;
};

const Layout = ({ childrem }: Props) => {
  return <div>{childrem}</div>;
};

export default Layout;
