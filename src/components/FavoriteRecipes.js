import React, { Component } from 'react'
import axios from 'axios';
import MyRecipeRender from './MyRecipeRender.js';
import RecipeForm from './RecipeForm.js';

export class FavoriteRecipes extends Component {
    constructor(props){
        super(props);
        this.state={
            serverLink:'http://localhost:3020',
            show:false,
            myrecipedata:[],
            formItem:[],
            showform:false,
        }

    }
    componentDidMount=async()=>{
        let myRecipreData= await axios.get(`http://localhost:3020/getmyrecipes`);
        this.setState({
            myrecipedata:myRecipreData.data,
            show:true

        })
        console.log(this.state.myrecipedata)
        

    }
    deleteFaviroteFunction=async (item)=>{
        let id =item._id;
        console.log(id)
        let myRecipreDataAfterDelete= await axios.delete(`http://localhost:3020/deleterecipes/${id}`);
        console.log(myRecipreDataAfterDelete.data);
        this.setState({
            myrecipedata:myRecipreDataAfterDelete.data
        })


    }
    showFormFunction=(item)=>{
        this.setState({
            showform:true,
            formItem:item
        })
    }
    updateFunction= async (e)=>{
        e.preventDefault();
        let newLabel=e.target.label.value;
        let newImage=e.target.image.value;
        console.log(newLabel,newImage);
        let id =this.state.formItem._id;
        let newData= {label:newLabel,image:newImage}
        let dataAfterUpdate= await axios.put(`http://localhost:3020/updaterecipes/${id}`,newData)
        this.setstate({
            myrecipedata:dataAfterUpdate.data,
        })
    }
    render() {
        return (
            <div>
                { this.state.showform &&
                <RecipeForm
                
                formItem={this.state.formItem}
                updateFunction={this.updateFunction}
                />
                
                }
                <div>
                {this.state.show && 
                <MyRecipeRender
                myrecipedata={this.state.myrecipedata}
                deleteFaviroteFunction={this.deleteFaviroteFunction}
                showFormFunction={this.showFormFunction}
                
                />
                }
                </div>
                
            </div>
        )
    }
}

export default FavoriteRecipes
