import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class CategoryItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: props.item
        }
    }

    render(){
        return (
            <li>{this.state.item.categoryName}</li>
        )
    }
  }

   
export default CategoryItem