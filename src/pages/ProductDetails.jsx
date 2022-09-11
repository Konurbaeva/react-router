import { useParams } from 'react-router-dom';
import { getProductById } from '../fakeAPI';

const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);
  console.log('product: ', product);

  return (
    <main>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>
          Product {product.name}- {id}
        </h2>
      </div>
    </main>
  );
};

export default ProductDetails;
