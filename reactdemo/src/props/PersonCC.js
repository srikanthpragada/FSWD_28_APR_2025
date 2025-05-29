import React, { Component } from 'react'

export default class PersonCC extends Component {
    // constructor(props) {
    //     super(props)
    //     this.name = props.name
    //     this.email = props.email
    // }

    constructor({ name, email }) {
        super()
        this.name = name
        this.email = email
    }

    render() {
        return (
            <>
                <h2>{this.name}</h2>
                <h3>{this.email}</h3>
            </>
        )
    }
}
