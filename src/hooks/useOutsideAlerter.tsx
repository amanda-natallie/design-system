import { useEffect } from 'react';

export const useOutsideAlerter = (
  ref: React.RefObject<HTMLButtonElement | HTMLDivElement | HTMLInputElement>,
  callback: () => void
): void => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (!ref?.current?.contains(event?.target as Node)) {
        callback();
      }
    }

    document.addEventListener('mouseup', handleClickOutside);
    return (): void => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [ref, callback]);
};
