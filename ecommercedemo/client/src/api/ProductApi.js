import axios from 'axios';

const url = 'http://localhost:5000';

export async function showSellerProducts(sellerId) {
  try {
    const response = await axios.post(`${url}/product/showAll`, { sellerId });
    console.log({sellerId})
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function showSingleProduct(productId) {
  try {
    const response = await axios.post(`${url}/product/showSingle`, { productId });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function showCartProduct(ids) {
  try {
    const response = await axios.post(`${url}/product/showCart`, { ids });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
