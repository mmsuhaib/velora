"use client";

import { useRef, useEffect, type ElementType } from "react";
import { getGsap, prefersReducedMotion } from "./gsapConfig";

type AnimatedTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  wordDelay?: number;
};

export default function AnimatedText({
  text,
  as: Tag = "span",
  className,
  delay = 0,
  wordDelay = 0.06,
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    if (!ref.current) return;

    if (prefersReducedMotion()) {
      ref.current.querySelectorAll<HTMLElement>("[data-word-inner]").forEach((el) => {
        el.style.transform = "translateY(0)";
        el.style.opacity = "1";
      });
      return;
    }

    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      gsap.to(ref.current!.querySelectorAll("[data-word-inner]"), {
        y: 0,
        opacity: 1,
        duration: 0.9,
        delay,
        stagger: wordDelay,
        ease: "power4.out",
      });
    }, ref);

    return () => ctx.revert();
  }, [delay, wordDelay]);

  const Component = Tag as ElementType;

  return (
    <Component ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top pb-[0.08em]">
          <span
            data-word-inner
            className="inline-block translate-y-[110%] opacity-0"
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </Component>
  );
}
