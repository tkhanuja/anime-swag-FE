import React from 'react'
import axios from 'axios'
export default class Homepage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: [],
            data : [],
        };
    }
    componentDidMount(){
    // Simple GET request using fetch
    axios.get('http://127.0.0.1:5000/')
        .then(response => {
            console.log(response.data)
            this.setState({
                name: response.data,
                
            })
        })
        .catch(error => {
            console.log(error)
        });
    
    }
    render() {
        const { name }= this.state
        return (
            <div>{
                JSON.stringify(name)
            }
            </div>
        )
    }
}

