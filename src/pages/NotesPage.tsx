import { downloadUrl, sourceUrl } from '../content';

export function NotesPage() {
  return (
    <div className='reading'>
      <header className='page-intro'>
        <p className='kicker'>Notes</p>
        <h1>Before you edit a save</h1>
        <p className='lede'>
          Dragonwilds Toolkit writes character JSON and world <code>.sav</code> files on Windows.
        </p>
      </header>

      <div className='note-list'>
        <article className='note'>
          <h2>Shared worlds</h2>
          <p>
            Single-player edits are allowed. Do not use an edited character to gain an advantage in a shared world.
          </p>
        </article>
        <article className='note'>
          <h2>Saving</h2>
          <p>
            The app lists <code>%LocalAppData%\RSDragonwilds\Saved\SaveCharacters</code> and <code>SaveGames</code>. Close the game before overwriting a live file. Each save writes an <code>.editorbackup</code> next to that file first.
          </p>
        </article>
        <article className='note'>
          <h2>Affiliation</h2>
          <p>Unofficial. Not affiliated with Jagex.</p>
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
