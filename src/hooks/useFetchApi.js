import { useCallback, useEffect, useState } from 'react';

export default function useFetchApi(url) {
    const [state, setState] = useState({ data: null, loading: true, error: null });
    const [tick, setTick] = useState(0);

    const refetch = useCallback(() => {
        setState((s) => ({ ...s, loading: true, error: null }));
        setTick((t) => t + 1);
    }, []);

    useEffect(() => {
        const controller = new AbortController();

        fetch(url, { signal: controller.signal })
            .then((res) => {
                if (!res.ok) throw new Error(`Error ${res.status}`);
                return res.json();
            })
            .then((data) => setState({ data, loading: false, error: null }))
            .catch((err) => {
                if (err.name === 'AbortError') return;
                setState({ data: null, loading: false, error: err.message || 'Error de red' });
            });

        return () => controller.abort();
    }, [url, tick]);

    return { ...state, refetch };
}