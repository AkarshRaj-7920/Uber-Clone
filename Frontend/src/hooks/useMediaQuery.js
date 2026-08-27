import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
    const getMatches = () => {
        // Prevents errors during server-side rendering
        if (typeof window === "undefined") {
            return false;
        }

        return window.matchMedia(query).matches;
    };

    const [matches, setMatches] = useState(getMatches);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);

        const handleChange = (event) => {
            setMatches(event.matches);
        };

        // Set initial value
        setMatches(mediaQuery.matches);

        // Listen for changes
        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, [query]);

    return matches;
};

export default useMediaQuery;