// hooks/useScreenSize.ts
import { useState, useEffect } from 'react';

type Breakpoints = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
};

export type ScreenSize = keyof Breakpoints;

const defaultBreakpoints: Breakpoints = {
  xs: 0,      // 0-639px
  sm: 640,    // 640-767px
  md: 768,    // 768-1023px
  lg: 1024,   // 1024-1279px
  xl: 1280,   // 1280-1535px
  '2xl': 1536 // 1536px+
};

export function useScreenSize(
  customBreakpoints?: Partial<Breakpoints>
): ScreenSize {
  const breakpoints = { ...defaultBreakpoints, ...customBreakpoints };
  const sortedBreakpoints = Object.entries(breakpoints)
    .sort((a, b) => a[1] - b[1])
    .map(([key]) => key as ScreenSize);

  const getSize = (): ScreenSize => {
    if (typeof window === 'undefined') return sortedBreakpoints[sortedBreakpoints.length - 1]; // Default to largest for SSR
    
    const width = window.innerWidth;
    for (let i = sortedBreakpoints.length - 1; i >= 0; i--) {
      const size = sortedBreakpoints[i];
      if (width >= breakpoints[size]) {
        return size;
      }
    }
    return 'xs';
  };

  const [screenSize, setScreenSize] = useState<ScreenSize>(getSize);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScreenSize(getSize());
      }, 100); // Debounce to improve performance
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return screenSize;
}

// Helper hooks for common use cases
export function useIsMobile(): boolean {
  const size = useScreenSize();
  return size === 'xs' || size === 'sm';
}

export function useIsDesktop(): boolean {
  const size = useScreenSize();
  return size === 'lg' || size === 'xl' || size === '2xl';
}