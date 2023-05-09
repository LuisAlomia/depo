import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return <main className="max-w-7xl mx-auto px-6">{children}</main>;
};

export default Layout;
