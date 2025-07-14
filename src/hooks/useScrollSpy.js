import { useEffect, useState } from "react";

export default function useScrollSpy(ids, offset = 90) {
  const [activeId, setActiveId] = useState(ids[0]);
  useEffect(() => {
    const handler = () => {
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            setActiveId(ids[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [ids, offset]);
  return activeId;
}
