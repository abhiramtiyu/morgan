import { Fragment,useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIconComponent from '../../component/cart-icon/CartIconComponent';
import CartDropdown from '../../component/cart-dropdown/CartDropdown';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../authentication/cart-context';
import { signOutUser } from '../../utils/firebase/firebase.util';

import './navigation.styles.scss';

const Navigation = () => {
  const {currentUser} = useContext(UserContext)
 const {isCartOpen} = useContext(CartContext)
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {
            currentUser ? (
              <span className='nav-link' onClick={signOutUser}> SIGN OUT</span>
            ) : (
              <Link className='nav-link' to='/Auth'>
            SIGN IN
          </Link>
            )
          }
          <CartIconComponent/>
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;