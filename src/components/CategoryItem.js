import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'


class CategoryItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: props.item
        }
    }

    render(){
        // console.log(this.state)
        return (
            <li>
           <Link to={`/passages/${this.state.item.id}`}>{this.state.item.categoryName}</Link> 
            </li>
        )
    }
  }

   
export default CategoryItem