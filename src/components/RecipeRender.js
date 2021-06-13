import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap/'
import './Recipe.css'


export class RecipeRender extends Component {
    render() {
        return (
            <div class='container' style={{display:'flex' ,flexWrap:'wrap', paddingLeft:'20px'}} >
                {
                    this.props.recipedata.map((item,index)=>{
                        return(
                            <>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.label}</Card.Title>
                                <Card.Text>
                                    <ul>
                               {item.healthLabels.map(i=>{
                                   return(
                                       <li>
                                           {i}
                                       </li>

                                       )
                                    })}
                                    </ul>
                                </Card.Text>
                                <Button variant="primary" onClick={()=>this.props.addFaviroteFunction(item)}>Add favirote</Button>
                            </Card.Body>
                            </Card>

                            </>
                        )
                    })
                }
            </div>
        )
    }
}

export default RecipeRender
