import { useEffect } from 'react';

export const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClick = event => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.target.tagName !== 'svg'
      ) {
        callback();
      }
    };
    document.body.addEventListener('click', handleClick);
    return () => document.body.removeEventListener('click', handleClick);
  }, [callback, ref]);
};
