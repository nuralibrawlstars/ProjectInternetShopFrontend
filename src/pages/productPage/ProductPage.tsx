import s from './Product.module.scss';

const ProductPage = () => {
  return (
    <div className='container'>
      <p>title</p>
      <div className={s.card}>
        <div>
          <img src='/public/clothes.png'></img>
        </div>

        <div>
          <p>cvena</p>
          <p>rating</p>

          <button>1</button>
          <button>add to card</button>
          <button>favorite</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
