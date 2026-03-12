'use client';

import { useSyncExternalStore } from 'react';
import { useTheme as useNextTheme } from 'next-themes';

function subscribe() {
  return () => undefined;
}

export function useTheme() {
  const themeState = useNextTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  return {
    ...themeState,
    mounted,
  };
}