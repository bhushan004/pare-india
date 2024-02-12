import { IntroSection, ProductInfo } from '@/components/products';

export const metadata = {
  title: 'Pare India World Class Products',
  description: '',
}

const ProductsPage = () => {
  return (
    <>
      <IntroSection />
      <ProductInfo />
    </>
  );
};

export default ProductsPage;
