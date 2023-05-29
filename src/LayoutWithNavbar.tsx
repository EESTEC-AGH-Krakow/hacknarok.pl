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
    const [refs, setRefs] = useState<Record<string, PageWithRef>>({});

    const [currentPage, setCurrentPage] = useState(pages[0].title);
    const [suppressReactionToScroll, setSuppressReactionToScroll] =
        useState(false);

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
        const visiblePages = Object.keys(pagesIntersections).filter(
            (p) => pagesIntersections[p]
        );
        const page = visiblePages[visiblePages.length - 1];
        setCurrentPage(page!);
    }, [pagesIntersections]);

    const onPageSelected = (page: string) => {
        setCurrentPage(page);
        setSuppressReactionToScroll(true);
        setTimeout(() => {
            setSuppressReactionToScroll(false);
        }, 1000);
    };

    const onIntersectionChange = (
        isIntersecting: boolean,
        pageTitle: string
    ) => {
        if (suppressReactionToScroll) return;

        setPagesIntersections((current) => {
            const next = {
                ...current,
                [pageTitle]: isIntersecting,
            };

            if (!isIntersecting) return next;

            // when scroll is done very quickly sometimes we get intersection of ex. page 1 and page 7. Knowing the last intersected page we can clean the other pages
            const currentPageIndex = Object.keys(next).indexOf(pageTitle);

            for (let i = 0; i < Object.keys(next).length; i++) {
                if (i >= currentPageIndex - 1 && i <= currentPageIndex + 1)
                    continue;

                next[Object.keys(next)[i]] = false;
            }

            return next;
        });
    };

    return (
        <>
            <Navbar
                pages={refs}
                currentPage={currentPage}
                onPageSelected={onPageSelected}
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
