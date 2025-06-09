import { NavLink } from 'react-router-dom';
import s from './Login.module.scss';

const LoginPage = () => {
  return (
    <>
      <div className='container'>
        <div className={s.container}>
          <form action=''>
            <p className={s.p}>Sign in</p>
            <div>
              <label className={s.label}>Email</label>
              <input
                className={s.input}
                type='text'
                // value={title}
                // onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label className={s.lable}>Password</label>
              <input
                className={s.input}
                type='text'
                // value={price}
                // onChange={e => setPrice(Number(e.target.value))}
              />
            </div>
            <button className={s.saveButton} type='submit'>
              Sign in
            </button>
            <div className={s.login}>
              <p>Don't have an account?</p>
              <NavLink className={s.sigup} to='/register'>
                Sign up
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
