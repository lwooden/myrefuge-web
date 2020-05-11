import React, { Component } from 'react'
import CategoryItem from '../components/CategoryItem'
import axios from 'axios'


class Category extends Component {
    constructor() {
        super()

       this.state = {
           categories: []
       }
    }
    
componentDidMount() {
    this.getCategories()
}

getCategories() {
    axios.get('http://localhost:3001/api/categories')
    .then(response => {
        this.setState({categories: response.data}, () => {
            console.log(this.state)
        })
    })
}


render() {
    const categoryList = this.state.categories.map((category, i) => {
        return(
            <CategoryItem key={category.id} item={category} />
        )
    })
    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {categoryList}
            </ul>
        </div>
    )
  }
}



// render() {
//     const categoryList = this.state.categories.map((category, i) => {
//         return(
//             <li>{category.categoryName}</li>
//         )
//     })

//     return (
//         <div>
//             <h1>Categories</h1>
//             <ul>
//                 {categoryList}
//             </ul>
//         </div>
//     )
//   }
// }



export default Category