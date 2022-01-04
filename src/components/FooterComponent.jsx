import React, { Component } from 'react'

export default class FooterComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <footer className="footer">
                    <span>&copy; E-Wallet</span>
                </footer>
            </div>
        )
    }
}
