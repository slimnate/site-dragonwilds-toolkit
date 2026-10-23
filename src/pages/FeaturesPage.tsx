import { features } from '../content';
import { Link } from '../router';
import { Shot } from '../Shot';

export function FeaturesPage() {
  return (
    <>
      <div className='feature-layout'>
        <nav className='feature-index' aria-label='On this page'>
          <p className='index-label'>On this page</p>
          {features.map((feature) => (
            <Link href={`/features#${feature.id}`} key={feature.id}>
              {feature.title}
            </Link>
          ))}
        </nav>

        <div>
          <header className='page-intro'>
            <p className='kicker'>Features</p>
            <h1>Everything the editor can do</h1>
            <p className='lede'>
              A tour of every page in the app, in the order you’ll find them. World save editing is at the end, and it’s still experimental.
            </p>
          </header>
          {features.map((feature) => (
            <article className='feature-block' id={feature.id} key={feature.id}>
              <h2>
                {feature.title}
                {feature.experimental ? <span className='tag'>Experimental</span> : null}
              </h2>
              <p>{feature.text}</p>
              <ul className='detail-list'>
                {feature.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              {feature.image && feature.alt ? (
                <Shot src={feature.image} alt={feature.alt} title={feature.title} />
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
