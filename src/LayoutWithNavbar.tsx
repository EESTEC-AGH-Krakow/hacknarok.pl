import { createRef, ReactNode, RefObject, useEffect, useState } from "react";
import Navbar from "./Pages/Navbar";
import Observable from "./components/Observable";

interface Page {
    title: string;
    component: ReactNode;
}

interface LayoutWithNavbarProps {
    pages: Page[];
}

function LayoutWithNavbar({ pages }: LayoutWithNavbarProps) {
    const [refs, setRefs] = useState<
        Record<string, RefObject<HTMLInputElement>>
    >({});

    const [currentPage, setCurrentPage] = useState(pages[0].title);

    const [pagesIntersections, setPagesIntersections] = useState(
        Object.fromEntries(pages.map((page) => [page.title, false]))
    );

    useEffect(() => {
        setRefs((current) =>
            Object.fromEntries(
                pages.map((page) => [
                    page.title,
                    current[page.title] || createRef(),
                ])
            )
        );
    }, []);

    useEffect(() => {
        const page = Object.keys(pagesIntersections).findLast(
            (p) => pagesIntersections[p]
        );
        setCurrentPage(page!);
    }, [pagesIntersections]);

    const onIntersectionChange = (
        isIntersecting: boolean,
        pageTitle: string
    ) => {
        setPagesIntersections((current) => ({
            ...current,
            [pageTitle]: isIntersecting,
        }));
    };

    return (
        <>
            <Navbar
                pageRefs={refs}
                currentPage={currentPage}
                onPageSelected={(pageName) => setCurrentPage(pageName)}
            />
            {pages.map((page) => {
                return (
                    <Observable
                        onIntersectionChange={(isIntersecting) =>
                            onIntersectionChange(isIntersecting, page.title)
                        }
                    >
                        <div ref={refs[page.title]}>{page.component}</div>
                    </Observable>
                );
            })}
        </>
    );
}

export default LayoutWithNavbar;
