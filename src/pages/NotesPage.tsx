import { downloadUrl, sourceUrl } from '../content';

export function NotesPage() {
  return (
    <div className='reading'>
      <header className='page-intro'>
        <p className='kicker'>Notes</p>
        <h1>Before you edit a save</h1>
        <p className='lede'>
          A few things worth knowing before you start changing your character and world files.
        </p>
      </header>

      <div className='note-list'>
        <article className='note'>
          <h2>Playing with others</h2>
          <p>
            Editing your own single-player saves is fine. Please don’t use an edited character to get an unfair advantage in a shared world.
          </p>
        </article>
        <article className='note'>
          <h2>Saving and backups</h2>
          <p>
            The app picks up your saves from <code>%LocalAppData%\RSDragonwilds\Saved\SaveCharacters</code> and <code>SaveGames</code>. Every time you save, it first makes an <code>.editorbackup</code> copy right next to the original, so you can always go back. Just make sure the game is closed before you save over a file it’s using.
          </p>
        </article>
        <article className='note'>
          <h2>Who made this</h2>
          <p>Dragonwilds Toolkit is an unofficial fan project and isn’t affiliated with Jagex.</p>
        </article>
      </div>

      <div className='actions note-actions'>
        <a className='button primary' href={downloadUrl}>
          Download for Windows
        </a>
        <a className='button secondary' href={sourceUrl}>
          View source
        </a>
      </div>
    </div>
  );
}
