import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../store/authSlice';

import classes from './Header.module.css';

const Header = () => {
  const isAuthenticated = useSelector(state => state.login.isAuthenticated);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(loginActions.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
