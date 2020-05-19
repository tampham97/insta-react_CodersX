import React, { Component } from 'react'

export default class Heading extends Component {
    render() {
        return (
            <div className='heading'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpieEIm8fvpLUTwVQOxfEZcnTOPh5M5UNPoFFeWSpQgUPlh4-3&usqp=CAU" className='avatar' alt="..."/>
                <div className="name">
                    <span >taam_pham</span>
                    <span className="location">Bien Vung Tau</span>
              </div>
            </div>
        )
    }
}
