import { useEffect } from 'react';
import { downloadUrl } from './content';
import { FeaturesPage } from './pages/FeaturesPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { NotesPage } from './pages/NotesPage';
import { Link, LocationProvider, useLocation } from './router';

const titles: Record<string, string> = {
  '/': 'Dragonwilds Toolkit',
  '/features': 'Features · Dragonwilds Toolkit',
  '/notes': 'Notes · Dragonwilds Toolkit',
};

export default function App() {
  return (
    <LocationProvider>
      <Shell />
    </LocationProvider>
  );
}

function Shell() {
  const { path } = useLocation();

  useEffect(() => {
    document.title = titles[path] ?? 'Page not found · Dragonwilds Toolkit';
  }, [path]);

  return (
    <div className='page'>
      <header className='site-header'>
        <Link className='brand' href='/'>
          <img src='/icon.png' alt='' width={32} height={32} />
          Dragonwilds Toolkit
        </Link>
        <nav aria-label='Site'>
          <Link href='/'>Home</Link>
          <Link href='/features'>Features</Link>
          <Link href='/notes'>Notes</Link>
          <a className='button primary' href={downloadUrl}>
            Download
          </a>
        </nav>
      </header>

      <main>
        {path === '/' ? <HomePage /> : null}
        {path === '/features' ? <FeaturesPage /> : null}
        {path === '/notes' ? <NotesPage /> : null}
        {path !== '/' && path !== '/features' && path !== '/notes' ? (
          <NotFoundPage />
        ) : null}
      </main>

      <footer className='site-footer'>
        <p>Unofficial. Not affiliated with Jagex.</p>
        <p>
          <Link href='/features'>Features</Link>
          <Link href='/notes'>Notes</Link>
          <a href='https://github.com/slimnate/dragonwilds-toolkit'>GitHub</a>
        </p>
      </footer>
    </div>
  );
}
