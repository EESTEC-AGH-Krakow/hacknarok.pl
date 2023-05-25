import { PropsWithChildren, useEffect, useRef } from "react";
import useIsIntersecting from "../hooks/useIsInViewport";

interface ObservableProps {
    onIntersectionChange: (isIntersecting: boolean) => void;
}

export default function Observable({
    children,
    onIntersectionChange,
}: PropsWithChildren<ObservableProps>) {
    const ref = useRef(null);
    const isIntersecting = useIsIntersecting(ref);

    useEffect(() => {
        onIntersectionChange(isIntersecting);
    }, [isIntersecting]);

    return <div ref={ref}>{children}</div>;
}
