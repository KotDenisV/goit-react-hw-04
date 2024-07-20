import s from './SearchBar.module.css';

function SearchBar({ onSubmit }) {
    
    return (        
      <header className={s.wrapper}>
        <form className={s.form} onSubmit={onSubmit}>
          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={s.button} type="submit">Search</button>
        </form>
      </header>
    )
}

export default SearchBar;