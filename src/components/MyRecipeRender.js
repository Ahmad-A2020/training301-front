import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap/'

export class MyRecipeRender extends Component {
    render() {
        console.log(this.props.myrecipedata)
        return (
            <div style={{display:'flex' ,flexWrap:'wrap', paddingLeft:'20px'}}>
            {
                this.props.myrecipedata.map((item,index)=>{
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
                            <Button variant="primary" onClick={()=>this.props.deleteFaviroteFunction(item)}>Delete</Button>
                            <Button variant="primary" onClick={()=>this.props.showFormFunction(item)}>Update</Button>
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

export default MyRecipeRender
