import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import type { AppDispatch, RootState } from '../../../store';
import { toggleFavoriteAsync } from '../../../store/actions/usersAction';
import Rating from '../../rating/Rating';
import type { ProductType } from '../../types/Product-type';
import s from './Product.module.scss';

const ProductPage = () => {
  const [product, setProduct] = useState<ProductType>({
    _id: '',
    title: '',
    description: '',
    price: 0,
    image: '',
    rating: 0,
    category: '',
    isFavorite: false,
  });
  const { id } = useParams<{ id?: string }>();

  const user = useSelector((state: RootState) => state.users.user);
  console.log(user);

  const dispatch = useDispatch<AppDispatch>();
  const isFavorite = useSelector((state: RootState) =>
    state.users.user?.favorites.includes(product._id)
  );

  const getProductById = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/products/${id}`);
      let cardImage = '/clothes.png';
      const apiURL = 'http://localhost:8000';
      if (response.data.image) {
        cardImage = apiURL + '/uploads/' + response.data.image;
        response.data.image = cardImage;
      }

      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductById();
  }, [id]);

  const handleToggleFavorite = async () => {
    dispatch(toggleFavoriteAsync(product._id));
  };

  return (
    <>
      <div className='container'>
        <p className={s.title}>{product.title}</p>
        <div className={s.card}>
          <div>
            <img src={product.image}></img>
          </div>

          <div style={{ position: 'relative' }}>
            <p className={s.price}>$ {product.price}</p>
            <Rating rating={product.rating} />

            <b>opisanie: </b>
            {product.description}

            <div className={s.btnWrap}>
              <input type='number' defaultValue={1} className={s.qty} min={1} />
              <button className={s.btnCard}>
                <img src='/whiteCard-icon.png' style={{ width: '15px', marginRight: '10px' }} />
                Add to card
              </button>
              <button className={s.btnFavorite} onClick={handleToggleFavorite}>
                {!isFavorite ? (
                  <img src='/heart-icon.png' style={{ width: '20px', marginRight: '15px' }} />
                ) : (
                  <img src='/Heart_filled.svg' style={{ width: '20px', marginRight: '15px' }} />
                )}
                Favorite
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
