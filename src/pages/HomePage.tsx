import { downloadUrl, features, highlights, sourceUrl } from '../content';
import { Link } from '../router';
import { Shot } from '../Shot';

export function HomePage() {
  const map = highlights.find((feature) => feature.id === 'map');
  const primary = highlights.filter((feature) => feature.id !== 'map');

  return (
    <>
      <section className='hero'>
        <div className='hero-copy'>
          <p className='kicker'>For RuneScape: Dragonwilds</p>
          <h1>Dragonwilds Save Editor</h1>
          <p className='lede'>
            A Windows app for changing your character’s stats, inventory,
            skills, and more.
          </p>
          <div className='actions'>
            <a className='button primary' href={downloadUrl}>
              Download for Windows
            </a>
            <a className='button secondary' href={sourceUrl}>
              View source
            </a>
          </div>
          <p className='release'>
            Version 1.0.0 · DragonwildsToolkit-1.0.0.exe
          </p>
        </div>
        {map ? (
          <div className='hero-shot'>
            <Shot src={map.image} alt={map.alt} title={map.title} />
            <h2>{map.title}</h2>
            <p>{map.text}</p>
          </div>
        ) : null}
      </section>

      <section className='band' aria-labelledby='highlights-title'>
        <div className='section-head'>
          <h2 id='highlights-title'>Highlights</h2>
          <p>
            Along with the map, these are the pages most people open the editor
            for.
          </p>
        </div>
        <div className='highlights'>
          {primary.map((feature, index) => (
            <article
              className={index === 0 ? 'highlight lead' : 'highlight'}
              key={feature.id}
            >
              <Shot
                src={feature.image}
                alt={feature.alt}
                title={feature.title}
              />
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className='band' aria-labelledby='more-title'>
        <div className='section-head'>
          <h2 id='more-title'>And plenty more</h2>
          <p>
            There’s a lot more in there.{' '}
            <Link href='/features'>See every feature</Link> for the full
            rundown.
          </p>
        </div>
        <div className='more-grid'>
          {features
            .filter((feature) => !highlights.some((item) => item.id === feature.id))
            .map((feature) => (
              <Link
                className={feature.experimental ? 'more-card wide' : 'more-card'}
                href={`/features#${feature.id}`}
                key={feature.id}
              >
                {feature.image ? (
                  <div className='more-thumb'>
                    <img src={feature.image} alt='' loading='lazy' />
                  </div>
                ) : null}
                <h3>
                  {feature.title}
                  {feature.experimental ? (
                    <span className='tag'>Experimental</span>
                  ) : null}
                </h3>
                <p>{feature.card}</p>
              </Link>
            ))}
        </div>
      </section>

      <section className='cta'>
        <div>
          <h2>Get Dragonwilds Toolkit</h2>
          <p>
            Version 1.0.0 is out now for Windows. Edit your single-player saves
            however you like, but <Link href='/notes'>read the notes</Link>{' '}
            before taking an edited character into a shared world.
          </p>
        </div>
        <div className='actions'>
          <a className='button primary' href={downloadUrl}>
            Download for Windows
          </a>
          <a className='button secondary' href={sourceUrl}>
            GitHub
          </a>
        </div>
      </section>
    </>
  );
}
