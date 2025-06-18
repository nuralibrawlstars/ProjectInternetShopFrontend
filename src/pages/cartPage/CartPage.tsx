import { useSelector } from 'react-redux';
import type { RootState } from '../../../store';
import s from './Cart.module.scss';
import Card from '../../card/Card';
import type { CartItem } from '../../../store/reducers/usersSlice';

const CartPage = () => {
  const user = useSelector((state: RootState) => state.users.user);
  console.log(user);

  return (
    <div className={s.card}>
      {user?.cart.map((product: CartItem) => (
        <div key={product._id}>
          <Card
            _id={product._id}
            title={product.product.title}
            price={product.product.price}
            image={product.product.image}
            rating={product.product.rating}
          />
        </div>
      ))}
    </div>
  );
};

export default CartPage;
