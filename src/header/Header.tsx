import { useState } from 'react';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <header className='container'>
        <nav className={s.nav}>
          <div className={s.navMenu}>
            <NavLink to='/'>
              <img src='/logo-icon.png' />
            </NavLink>

            <NavLink to='/women'>Женщины</NavLink>

            <NavLink to='/men'>Мужчины</NavLink>

            <NavLink to='/girls'>Девочки</NavLink>

            <NavLink to='/boys'>Мальчики</NavLink>
          </div>

          <div className={s.navMenu}>
            <NavLink to='/cart'>
              <img src='/cart-icon.png' />
            </NavLink>

            <NavLink to='/favorites'>
              <img src='/heart-icon.png' />
            </NavLink>

            <NavLink to='/profile'>
              <img src='/profile-icon.png' />
            </NavLink>
          </div>
        </nav>

        <div className={s.burgerMenu}>
          <NavLink to='/'>
            <img src='/logo-icon.png' />
          </NavLink>

          <button onClick={() => setIsModalOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} style={customStyles} contentLabel='Example Modal'>
          <button onClick={() => setIsModalOpen(false)} className={s.closeIcon}>
            X
          </button>
          <div className={s.modalLinks}>
            <NavLink to='/women'>Женщины</NavLink>

            <NavLink to='/men'>Мужчины</NavLink>

            <NavLink to='/girls'>Девочки</NavLink>

            <NavLink to='/boys'>Мальчики</NavLink>
            <NavLink to='/cart'>
              <img src='/cart-icon.png' />
            </NavLink>

            <NavLink to='/favorites'>
              <img src='/heart-icon.png' />
            </NavLink>

            <NavLink to='/profile'>
              <img src='/profile-icon.png' />
            </NavLink>
          </div>
          <form>
            {/* <input />
            <button>tab navigation</button>
            {/* <button>stays</button>
            <button>inside</button>
            <button>the modal</button> */}
          </form>
        </Modal>
      )}
    </div>
  );
};
export default Header;
