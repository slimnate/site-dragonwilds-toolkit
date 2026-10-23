import { Link } from '../router';

export function NotFoundPage() {
  return (
    <header className='page-intro reading'>
      <p className='kicker'>Missing page</p>
      <h1>This address is not on the site.</h1>
      <p className='lede'>
        <Link href='/'>Back to the homepage.</Link>
      </p>
    </header>
  );
}
