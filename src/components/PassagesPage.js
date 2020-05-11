import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class CategoryDetailsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            details: [],
        }
        // console.log(props) // check props that are available to me
    }

componentDidMount() {
    this.getPassagesByCategory()
}

// I have access to the "id" of the category that was clicked on the last page through the prop
// this.props.match.params.id. I need to provide that to my api call below

getPassagesByCategory() {
    let categoryId = this.props.match.params.id
    axios.get(`http://localhost:3001/api/categories/${categoryId}/passages`)
    .then(response => {
        this.setState({details: response.data}, () => {
            console.log(this.state)
        })
    })
    .catch(err => console.log)
}


    render(){
        // console.log(this.state.details)
        const passageList = this.state.details.map((passage, i) => {
            return(
                <div>
                    <p>{passage.passageText}</p>
                    <p>- {passage.passageLocation}</p>
                </div>
            )
        })
        return (
            <div>
            <h3>{passageList}</h3>
            </div>
        )
    }
}


export default CategoryDetailsPage



