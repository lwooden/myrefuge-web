import React from 'react'
import Category from '../components/Category'



const CategoryPage = (props) => (
    <div>
    {console.log("Props passed to Category Page:",props)}
      This is my Category Page component
      <Category/>
    </div>
  )

export default CategoryPage