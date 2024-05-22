import {useCallback, useInsertionEffect, useRef} from "react";

export type CallbackArgs = [unknown, ...unknown[]];

export type T = (...args: CallbackArgs) => void;

export function useEvent(fn: (...args: CallbackArgs) => void): T {
    const ref = useRef<T | null>(null);

    useInsertionEffect(() => {
        ref.current = fn;
    }, [fn]);

    return useCallback((...args: CallbackArgs) => {
        const f = ref.current!;
        return f(...args);
    }, []);
}