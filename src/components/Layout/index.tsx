import React from "react";
import Header from "./Header";
import Tabbar from "./Tabbar";

interface Layout {
  children: React.ReactNode;
  isHeader: boolean;
  isPadding?: boolean;
}

const Layout: React.FC<Layout> = ({
  children,
  isHeader = true,
  isPadding = true,
}) => {
  return (
    <div className={isPadding ? "layout padding-layout" : "layout"}>
      {isHeader && (
        <div>
          <Header />
          <Tabbar />
        </div>
      )}
      <div style={{ marginTop: "1.5rem" }}>{children}</div>
      <footer>&copy;Hairul Wardi | DOT Hiring Test💓</footer>
    </div>
  );
};

export default Layout;
