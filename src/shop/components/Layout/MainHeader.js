import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import {useSelector, useDispatch} from "react-redux";
import { actionCreator } from '../../store/store';

const MainHeader = (props) => {
  const val = useSelector(state => state.Dummy.num);
  const dispatch = useDispatch();
  return (
    <header className={classes.header}>
      <h1>ReduxCart {val}</h1>
      <button onClick={() => {
        dispatch(actionCreator());
      }}>{val}</button>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
