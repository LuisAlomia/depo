import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return <main className="max-w-6xl mx-auto p-6">{children}</main>;
};

export default Layout;
