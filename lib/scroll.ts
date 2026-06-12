import type Lenis from "lenis";

let lenis: Lenis | null = null;

export function setLenis(instance: Lenis | null): void {
  lenis = instance;
}

export function scrollTo(target: string | number): void {
  if (lenis) {
    lenis.scrollTo(target, { offset: -88, duration: 1.4 });
  } else if (typeof target === "string") {
    document.querySelector(target)?.scrollIntoView();
  } else {
    window.scrollTo({ top: target });
  }
}
