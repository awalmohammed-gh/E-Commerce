import React, { useState } from 'react'
import { useECommerce } from '../context/ECommerceProvider'

const Shop = () => {

  const {products} = useECommerce();
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);

  const uniqueCategories = [...new Set(products.map(p => p.category))]
 const priceRange = [];

for (let i = 20; i < 1500; i += 50) {
  priceRange.push(`${i} - ${i + 50}`);
}



  
  return (
    <div>
    {/* header banner */}
      <div className=''>

      </div>

      <div className=''>
      {/* left side */}
        <div className=''></div>

        {/* Right side */}
        <div className=''></div>
      </div>
    </div>
  )
}

export default Shop
