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
          <p className='kicker'>Windows desktop app</p>
          <h1>Dragonwilds Save Editor</h1>
          <p className='lede'>
            Edit character stats, inventory, skills, and more.
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
            Inventory, skills, and spells sit next to the map. These are the
            edits a character save is usually opened for.
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
          <h2 id='more-title'>The rest of the editor</h2>
          <p>
            <Link href='/features'>Open the features page</Link> for a write-up
            of each one.
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
          <h2>Download the Windows app</h2>
          <p>
            Version 1.0.0. Single-player edits are allowed.{' '}
            <Link href='/notes'>Read the notes</Link> before using an edited
            character in a shared world.
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
