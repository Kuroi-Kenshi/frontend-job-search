import PropTypes from 'prop-types';
import s from './SearchBar.module.sass';

const SearchBar = () => {
  return (
      <section className={s.wrapper}>
          <form>
              <ul className={s.filter}>
                  <li className={`${s.filter__item} ${s.location}`}>
                    <input type='text' placeholder='Москва' className={s.filter__input}/>
                  </li>
                  <li className={`${s.filter__item} ${s.schedule}`}>
                    <button type='button' className={s.filter__button}>Гибкий график</button>
                  </li>
                  <li className={`${s.filter__item} ${s.employment}`}>
                    <button type='button' className={s.filter__button}>Частичная занятость</button>
                  </li>
                  <li className={`${s.filter__item} ${s.experience}`}>
                    <button type='button' className={s.filter__button}>От 1 года до 3 лет</button>
                  </li>
                  <li className={`${s.filter__item} ${s.salary}`}>
                    <input type='text' placeholder='150 000 руб.' className={s.filter__input}/>
                  </li>
                  <li className={`${s.filter__item} ${s.submit_btn}`}>
                    <button type='submit' className={s.filter__button}>Поиск</button>
                  </li>
              </ul>
          </form>
      </section>
  );
}

// SearchBar.propTypes = {
//   text: PropTypes.string
// }

export default SearchBar;