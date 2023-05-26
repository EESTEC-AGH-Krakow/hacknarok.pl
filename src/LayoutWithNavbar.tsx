import { createRef, ReactNode, RefObject, useEffect, useState } from "react";
import Navbar from "./Pages/Navbar";
import Observable from "./components/Observable";

export interface Page {
    title: string;
    component: ReactNode;
    icon: ReactNode;
}

export interface PageWithRef {
    page: Page;
    ref: RefObject<HTMLInputElement>;
}

interface LayoutWithNavbarProps {
    pages: Page[];
}

function LayoutWithNavbar({ pages }: LayoutWithNavbarProps) {
    console.log(pages);
    const [refs, setRefs] = useState<Record<string, PageWithRef>>({});

    const [currentPage, setCurrentPage] = useState(pages[0].title);

    const [pagesIntersections, setPagesIntersections] = useState(
        Object.fromEntries(pages.map((page) => [page.title, false]))
    );

    useEffect(() => {
        setRefs((current) =>
            Object.fromEntries(
                pages.map((page) => [
                    page.title,
                    {
                        page: page,
                        ref: current[page.title]?.ref || createRef(),
                    } as PageWithRef,
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
                pages={refs}
                currentPage={currentPage}
                onPageSelected={(pageName) => setCurrentPage(pageName)}
            />
            {pages.map((page) => {
                return (
                    <Observable
                        key={page.title}
                        onIntersectionChange={(isIntersecting) =>
                            onIntersectionChange(isIntersecting, page.title)
                        }
                    >
                        <div ref={refs[page.title]?.ref}>{page.component}</div>
                    </Observable>
                );
            })}
        </>
    );
}

export default LayoutWithNavbar;
