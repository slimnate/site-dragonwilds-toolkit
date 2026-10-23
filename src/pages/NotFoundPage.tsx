import { Link } from '../router';

export function NotFoundPage() {
  return (
    <header className='page-intro reading'>
      <p className='kicker'>Page not found</p>
      <h1>There’s nothing here.</h1>
      <p className='lede'>
        <Link href='/'>Head back to the homepage.</Link>
      </p>
    </header>
  );
}
