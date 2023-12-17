// import { useRef, useEffect } from "react";

// export function useHorizontalScroll() {
//   const elRef = useRef();
//   useEffect(() => {
//     const el = elRef.current;
//     if (el) {
//       const onWheel = e => {
//         if (e.deltaY == 0) return;
//         e.preventDefault();
//         el.scrollTo({
//           left: el.scrollLeft + e.deltaY,
//           behavior: "smooth"
//         });
//       };
//       el.addEventListener("wheel", onWheel);
//       return () => el.removeEventListener("wheel", onWheel);
//     }
//   }, []);
//   return elRef;
// }




// export function useHorizontalScroll() {
//     const scrollDuration = 200
//     const elRef = useRef(null);
//     const [scrollRef, scrollTo] = useSmoothScroll();
//     const setRef = useCallback((el) => {
//         scrollRef(el);
//         elRef.current = el;
//     }, []);

//     useEffect(() => {
//         const el = elRef.current;
//         if (el) {
//             const onWheel = (e) => {
//                 if (e.deltaY == 0) return;
//                 e.preventDefault();
//                 scrollTo({addLeft: e.deltaY}, scrollDuration);
//             };
//             el.addEventListener("wheel", onWheel);
//             return () => el.removeEventListener("wheel", onWheel);
//         }
//     }, []);
//     return setRef;
// }