import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rating from '../../rating/Rating';
import type { ProductType } from '../../types/Product-type';
import s from './Product.module.scss';

const ProductPage = () => {
  const [product, setProduct] = useState<ProductType>({
    _id: 0,
    title: '',
    description: '',
    price: 0,
    image: '',
    rating: 0,
    category: '',
  });
  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
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
    getProductById();
  }, [id]);

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
              {/* <select name="select">

                 <option value="value1">Значение 1</option>
                 <option value="value2" selected>Значение 2</option>
                 <option value="value3">Значение 3</option>
               </select>  */}
              <input type='number' defaultValue={1} className={s.qty} min={1} />
              <button className={s.btnCard}>
                <img src='/whiteCard-icon.png' style={{ width: '15px', marginRight: '10px' }} />
                Add to card
              </button>
              <button className={s.btnFavorite}>
                <img src='/heart-icon.png' style={{ width: '20px', marginRight: '15px' }} />
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
