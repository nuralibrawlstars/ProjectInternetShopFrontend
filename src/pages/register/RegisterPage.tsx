import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Register.module.scss';

const RegisterPage = () => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [inputType, setInputType] = useState('password');

  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(fullname, email, password, confirmPassword);
  };

  const inputTypeHandler = () => {
    if (inputType === 'password') {
      setInputType('text');
    } else {
      setInputType('password');
    }
  };

  return (
    <>
      <div className='container'>
        <div className={s.register}>
          <form onSubmit={submitFormHandler}>
            <p className={s.p}>Sign up</p>

            <div>
              <label className={s.label}>User Name</label>
              <input
                className={s.input}
                type='text'
                value={fullname}
                onChange={e => setFullName(e.target.value)}
              />
            </div>
            <div>
              <label className={s.label}>Email</label>
              <input
                className={s.input}
                type='text'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div style={{ position: 'relative' }}>
              <button className={s.eye} onClick={inputTypeHandler}>
                {inputType === 'password' ? (
                  <img
                    src='/closedEye.svg'
                    alt='closed Eye'
                    style={{ width: '16px', height: '16px' }}
                  />
                ) : (
                  <img
                    src='/public/Eyes.svg'
                    alt='openedEye'
                    style={{ width: '16px', height: '16px' }}
                  />
                )}
              </button>
              <label className={s.label}>Password</label>
              <input
                className={s.input}
                type={inputType}
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label className={s.label}>Confirm Password</label>
              <input
                className={s.input}
                type={inputType}
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
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
