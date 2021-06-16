import React, { useEffect, useState } from 'react';
import { showSellers } from '../api/SellerApi';
import SellerCardComponent from './SellerCardComponent';
// a@gmail.com
// a123

function SellerBodyComponent({ setSellerId }) {
  const [sellerArray, setSellerArray] = useState();

  useEffect(() => {
    async function getData() {
      const sellers = await showSellers();
      setSellerArray(sellers.seller);
    }
    getData();
  }, []);

  return (
    <div>
      {sellerArray &&
        sellerArray.map((seller, index) => (
          <SellerCardComponent key={index} seller={seller} setSellerId={setSellerId} />
        ))}
    </div>
  );
}

export default SellerBodyComponent;
