import React, { Component } from 'react'
import axios from 'axios'
import PassageItem from '../components/PassageItem'


class PassagesPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            passages: [],
            category: ''
        }
        console.log("Props passed to PassagePage:",props) // check props that were passed down to this component
    }

componentDidMount() {
    this.getPassagesByCategory()
    this.setCategory()
}

// I have access to the "id" of the category that was clicked on the last page through the prop
// this.props.match.params.id. I need to provide that to my api call below


// Get passages and save them to local state so I can render
getPassagesByCategory() {
    let categoryId = this.props.match.params.id
    axios.get(`http://localhost:3001/api/categories/${categoryId}/passages`)
    .then(response => {
        this.setState({passages: response.data}, () => {
            console.log(this.state)
        })
    })
    .catch(err => console.log)
}


// Get category and save it to local state so I can. May can do this right after the call above in one function 
// instead of 2 but this is the only way I know how right now :)
setCategory() {
    let categoryId = this.props.match.params.id
    axios.get(`http://localhost:3001/api/categories/${categoryId}`)
    .then(response => {
        this.setState({category: response.data}, () => {
            // console.log(this.state)
        })
    })
    .catch(err => console.log)
}


    render(){
        // console.log(this.state.details)
        // console.log(this.state.category)
        const passageList = this.state.passages.map((passage, i) => {
            return(
                <PassageItem key={passage.id} item={passage} id={passage.id} verse={passage.passageText} location={passage.passageLocation} likeCounter={passage.likeCounter} />
            )
        })
        return (
            <div>
            <h1>Verses About "{this.state.category.categoryName}"</h1>
            <h3>{passageList}</h3>
            </div>
        )
    }
}


export default PassagesPage



