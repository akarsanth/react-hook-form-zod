import { useEffect, useState } from "react";

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const handleChange = () => setMatches(media.matches);

    media.addEventListener("change", handleChange);

    // Cleanup function to remove listener on unmount
    return () => media.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
};
