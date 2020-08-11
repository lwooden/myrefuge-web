import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class PassageItem extends Component {
    constructor(props) {
        super(props)
        this.onLikePassageHandler = this.onLikePassageHandler.bind(this)

        this.state = {
            // item: props.item,
            id: props.id,
            verse: props.verse,
            location: props.location,
            likeCounter: props.likeCounter
        }
        // console.log("Props passed to Passage Item:",props) // check props that were passed down to this component
    }


    onLikePassageHandler() {

        // console.log(this.state.)
        this.setState((prevState) => {

            let newValue = prevState.likeCounter + 1 // save new value for likeCounter 

            // axios.get(`http://localhost:3001/api/passages/likeVerse?passageId=${this.state.id}&currentLikeCounter=${newValue}`)
            // .then(response => {
            //         console.log(response)
            //     })

            // post new likeCounter value to the database
            axios.post('http://localhost:3001/api/passages/likeVerse', {
                passageId: this.state.id
                // currentLikeCounter: newValue
            })
            .then(response => {
                    console.log(response)
                })
                
                // update state with new value and then the UI
                return {
                    likeCounter: newValue
                } 

            })

    }
    

    render(){

        return (
            <div>
            <p>{this.state.verse}</p>
            <p>- {this.state.location}</p>
            <button onClick={this.onLikePassageHandler}>Like</button>
            <p>Likes: {this.state.likeCounter}</p>
        </div>
        )
    }
  }

   
export default PassageItem