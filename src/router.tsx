import {
  createContext,
  useContext,
  useEffect,
  useState,
  type MouseEvent,
  type ReactNode,
} from 'react';

type LocationState = {
  path: string;
  hash: string;
};

const LocationContext = createContext<LocationState>({ path: '/', hash: '' });

function readLocation(): LocationState {
  const raw = window.location.pathname;
  const path = raw.length > 1 && raw.endsWith('/') ? raw.slice(0, -1) : raw;
  return { path, hash: window.location.hash };
}

export function LocationProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState(readLocation);

  useEffect(() => {
    const sync = () => setLocation(readLocation());
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  useEffect(() => {
    const id = location.hash.startsWith('#') ? location.hash.slice(1) : '';
    if (!id) {
      window.scrollTo(0, 0);
      return;
    }

    let cancelled = false;
    const scroll = () => {
      if (!cancelled) document.getElementById(id)?.scrollIntoView();
    };
    scroll();

    const pending = [...document.images].filter((image) => !image.complete);
    for (const image of pending) {
      image.addEventListener('load', scroll);
      image.addEventListener('error', scroll);
    }
    return () => {
      cancelled = true;
      for (const image of pending) {
        image.removeEventListener('load', scroll);
        image.removeEventListener('error', scroll);
      }
    };
  }, [location]);

  return <LocationContext.Provider value={location}>{children}</LocationContext.Provider>;
}

export function useLocation() {
  return useContext(LocationContext);
}

export function navigate(href: string) {
  const url = new URL(href, window.location.origin);
  const next = `${url.pathname}${url.search}${url.hash}`;
  const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  if (next !== current) window.history.pushState(null, '', next);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

type LinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export function Link({ href, className, children }: LinkProps) {
  const { path, hash } = useLocation();
  const url = new URL(href, window.location.origin);
  const samePath = url.pathname === path;
  const pageCurrent = url.hash === '' && samePath;
  const hashCurrent = url.hash !== '' && samePath && url.hash === hash;

  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigate(href);
  }

  return (
    <a
      href={href}
      className={className}
      aria-current={pageCurrent ? 'page' : hashCurrent ? 'location' : undefined}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
