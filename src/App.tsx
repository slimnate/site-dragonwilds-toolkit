const features = [
  {
    id: 'file',
    title: 'File',
    image: '/images/character-file.png',
    alt: 'File page with the character name, hardcore setting, and worlds playtime',
    text: 'Rename the character, check the save version, and turn hardcore on or off. Playtime is listed for each world this character has entered.',
  },
  {
    id: 'character',
    title: 'Character',
    image: '/images/character-vitals.png',
    alt: 'Character page with vital bars, a drink buff, and the mount row',
    text: 'Health, stamina, sustenance, hydration, and endurance sit on their bars, next to the drink buff and the equipped mount.',
  },
  {
    id: 'inventory',
    title: 'Inventory',
    image: '/images/character-inventory.png',
    alt: 'Inventory page with the bag grid and the equipment doll',
    text: 'Bag pages cover inventory, runes, ammo, quest items, and the personal chest. The equipment doll sits beside the grid, and items come from the bundled catalog.',
  },
  {
    id: 'skills',
    title: 'Skills',
    image: '/images/character-skills.png',
    alt: 'Skills page with Attack selected, showing level, XP, and unlocks',
    text: 'Set the XP on each skill. The level and the unlocks that XP reaches are shown beside it.',
  },
  {
    id: 'spells',
    title: 'Spells',
    image: '/images/character-spells.png',
    alt: 'Spellbook with four spell wheels and the spell list',
    text: 'Unlock spells from the book and place them on the four wheels.',
  },
  {
    id: 'map',
    title: 'Map',
    image: '/images/character-map.png',
    alt: 'Ashenfall map with pins and resource markers',
    text: 'Ashenfall, with fog of war, custom pins, and resource markers.',
  },
  {
    id: 'journal',
    title: 'Journal',
    image: '/images/character-journal.png',
    alt: 'Journal on the Recipes tab with Law Rune selected',
    text: 'World, Recipes, and Knowledge pages from the in-game journal. Unlock an entry or mark it unread.',
  },
  {
    id: 'quests',
    title: 'Quests',
    image: '/images/character-quests.png',
    alt: 'Quests page with active quests open',
    text: 'Active, completed, and not-started quests, with state and objectives on the open card.',
  },
  {
    id: 'progress',
    title: 'Progress',
    image: '/images/character-progress.png',
    alt: 'Progress page with the recipe list expanded',
    text: 'Recipes, buildings, spells, discovery, vendors, and agility. The recipe list shows what the crafting menu already knows.',
  },
  {
    id: 'appearance',
    title: 'Appearance',
    image: '/images/character-appearance.png',
    alt: 'Appearance page with body, head, hair, and color slots filled',
    text: 'Body, head, hair, and color slots from the customization tables.',
  },
] as const

export default function App() {
  return (
    <div className='page'>
      <header className='site-header'>
        <a className='brand' href='#overview'>
          Dragonwilds Toolkit
        </a>
        <nav aria-label='Page'>
          <a href='#overview'>Overview</a>
          <a href='#saves'>Saves</a>
          <a href='#features'>Features</a>
          <a href='#notes'>Notes</a>
        </nav>
      </header>

      <main>
        <section className='hero' id='overview'>
          <p className='kicker'>Windows desktop app</p>
          <h1>Dragonwilds Toolkit</h1>
          <p className='lede'>
            A character save editor for RuneScape: Dragonwilds. Open a{' '}
            <code>SaveCharacters</code> JSON file, change it, and write it back.
          </p>
          <figure className='shot hero-shot'>
            <img
              src='/images/character-map.png'
              alt='Dragonwilds Toolkit open on the Ashenfall map, with pins and resource markers'
            />
          </figure>
        </section>

        <section className='band' id='saves'>
          <h2>How a save is handled</h2>
          <div className='steps'>
            <article>
              <h3>Find the file</h3>
              <p>
                Live characters are in{' '}
                <code>%LocalAppData%\RSDragonwilds\Saved\SaveCharacters</code>.
                The app lists that folder, and Open… can pick a file from
                anywhere else.
              </p>
            </article>
            <article>
              <h3>Write it back</h3>
              <p>
                Save overwrites the open file. Save as… picks a new path. Each
                write makes a <code>.editorbackup</code> beside the file first.
              </p>
            </article>
            <article>
              <h3>Close the game</h3>
              <p>
                Close Dragonwilds before replacing a live save. The game can
                overwrite the file again if it is still running.
              </p>
            </article>
          </div>
        </section>

        <section className='features' id='features'>
          <h2>Character</h2>
          {features.map((feature) => (
            <article className='feature' id={feature.id} key={feature.id}>
              <div className='feature-copy'>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
              <figure className='shot'>
                <img src={feature.image} alt={feature.alt} />
              </figure>
            </article>
          ))}
          <p className='planned'>
            World save editing is a planned feature and is still experimental.
          </p>
        </section>

        <section className='band notes' id='notes'>
          <h2>Notes</h2>
          <p>
            Single-player edits are allowed. Do not use an edited character to
            gain an advantage in a shared world.
          </p>
          <p>Unofficial. Not affiliated with Jagex.</p>
        </section>
      </main>
    </div>
  )
}
