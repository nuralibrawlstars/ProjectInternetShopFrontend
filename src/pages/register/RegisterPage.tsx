import { NavLink } from 'react-router-dom';
import s from './Register.module.scss';

const RegisterPage = () => {
  return (
    <>
      <div className='container'>
        <div className={s.register}>
          <form action=''>
            <p className={s.p}>Sign up</p>

            <div>
              <label className={s.label}>User Name</label>
              <input
                className={s.input}
                type='text'
                // value={title}
                // onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label className={s.label}>Email</label>
              <input
                className={s.input}
                type='text'
                // value={userName}
                // onChange={e => setUsername(Number(e.target.value))}
              />
            </div>
            <div>
              <label className={s.label}>Password</label>
              <input
                className={s.input}
                type='text'
                // value={price}
                // onChange={e => setPrice(Number(e.target.value))}
              />
            </div>

            <div>
              <label className={s.label}>Confirm Password</label>
              <input
                className={s.input}
                type='text'
                // value={price}
                // onChange={e => setPrice(Number(e.target.value))}
              />
            </div>

            <button className={s.saveButton} type='submit'>
              Sign up
            </button>
            <div className={s.login}>
              <p>Already have an account?</p>
              <NavLink className={s.sign} to='/login'>
                Sign in
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
