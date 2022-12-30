import { createRef, ReactNode, RefObject, useEffect, useState } from "react";
import Navbar from "./Pages/Navbar";

interface Page {
  title: string;
  component: ReactNode;
}

interface LayoutWithNavbarProps {
  pages: Page[];
}

function LayoutWithNavbar({ pages }: LayoutWithNavbarProps) {
  const [refs, setRefs] = useState<Record<string, RefObject<HTMLInputElement>>>(
    {}
  );

  useEffect(() => {
    setRefs((current) =>
      Object.fromEntries(
        pages.map((page) => [page.title, current[page.title] || createRef()])
      )
    );
  }, []);

  return (
    <>
      <Navbar pageRefs={refs} />
      {pages.map((page) => {
        return <div ref={refs[page.title]}>{page.component}</div>;
      })}
    </>
  );
}

export default LayoutWithNavbar;
