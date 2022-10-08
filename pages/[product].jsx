import SpecificProduct from "../Components/Advance/SpecificProduct";

const product = (props) => {
  let productData = {
    name: props.product?.title,
  };

  return (
    <div>
      {props.error ? props.error : <SpecificProduct {...productData} />}
    </div>
  );
};
export const getServerSideProps = async (context) => {
  const router = context;
  let { productID } = router.query;
  let product;
  if (productID) {
    let productRes = await fetch(
      `https://fakestoreapi.com/products/${productID}`
    );
    product = await productRes.json();

    return {
      props: { product: product },
    };
  } else {
    return {
      props: { error: "page not found" },
    };
  }
};
export default product;
