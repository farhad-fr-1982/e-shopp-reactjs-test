import React, { useContext } from 'react'
import './Css/shopCategory.css'
import { ShopeContext } from '../Context/ShopContext'
import dropdown_icon from '../Assets/dropdown_icon.png'
import Item from '../components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopeContext)
  return (
    <div className='shop-category'>
      <img src={props.banner} className='shopcategory_banner' alt="" />
      <div className="shopcategory_indexSort">
        <p>
          <span>Showing 1-12</span>Out Of 36 Products
        </p>
        <div className="shopcategory_sort">
          Sort By <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory_products">
        {
          all_product.map((item,i)=>{
            if(props.category === item.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }else{
              return null;
            }
          })
        }
      </div>
      <div className="shopcategory_loadmore">
        Explor More
      </div>
    </div>
  )
}

export default ShopCategory