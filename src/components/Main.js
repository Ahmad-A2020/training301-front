import React, { Component } from 'react'
import axios from 'axios'
import RecipeRender from './RecipeRender.js'

export class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            serverLink:'http://localhost:3020',
            show:false,
            recipedata:[],
        }

    }
    componentDidMount=async()=>{
        let impporteData= await axios.get(`http://localhost:3020/getrecipes?ingredient=chicken`);
        this.setState({
            recipedata:impporteData.data,
            show:true

        })
    }
    addFaviroteFunction=async(item)=>{
        let recipe=item;
        console.log(item);
        let savedRecipe= await axios.post(`http://localhost:3020/saverecipes`,item);

    }

    render() {
        
        return (
            <div>
                {this.state.show && 
                <RecipeRender
                recipedata={this.state.recipedata}
                addFaviroteFunction={this.addFaviroteFunction}
                
                />
                }

                
                
            </div>
        )
    }
}

export default Main
