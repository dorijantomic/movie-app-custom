import React, { Component } from 'react'
import Card from '../../components/Card/Card'

export default class MovieListContainer extends Component {
    
    state = {
        movies:[1,1,1,1,1,1,1,1,1,1]
    }
    render() {
        return (
            <div>
               {this.state.movies.map((movie,i) =>{
                  return <Card />
               })}
            </div>
        )
    }
}
