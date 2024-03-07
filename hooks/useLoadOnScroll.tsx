'use client'
import { DependencyList, LegacyRef, useCallback, useRef } from "react";
import useDebounce from "./useDebounce.hook";

interface Props {
  triggers?: DependencyList;
  loadMore: () => void;
}

export const useLoadOnScroll = ({ triggers = [], loadMore }: Props) => {
  const observerRef = useRef<IntersectionObserver>();

  const lastRef = useCallback(
    (node: HTMLElement) => {
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting) {
          loadMore?.()
        }
      });

      if (node) observerRef.current.observe(node);

      return node;
    },
    triggers
  ) as LegacyRef<HTMLDivElement>;

  return { lastRef }
}