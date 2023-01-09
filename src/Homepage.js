import React, {  useState }  from 'react'
import axios from 'axios'
export default class Homepage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
            data: [],
            loading: true,
        };
        
    }
    componentDidMount(){
    // Simple GET request using fetch
        
        axios.get('http://127.0.0.1:5000/')
            .then(response => {
                console.log(response.data)
                
                this.setState({
                    data: response.data
                    
                })
                
            })
            .catch(error => {
                
                console.log(error)
                
            })
            .finally(() => {
                this.setState({ loading: false })
            });
        
    }
    render() {
        const  data  = this.state.data
        const  loading  = this.state.loading
        if ( loading ) {
            console.log('me')
            return (<ul>Loading...</ul>)
            
        }
        else {
            console.log(loading)
            return (
                <ul>
            
          
            
                    {JSON.stringify(data.Naruto)}
                    
                    
                    {data.Naruto.map(
                        (shirts, i) => (<li key={ i}> {shirts.i} </li>)
                    )}
            
                </ul>
            )
        }
        
        
    }
}


