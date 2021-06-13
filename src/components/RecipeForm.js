import React, { Component } from 'react'
import {Form,Button} from 'react-bootstrap/'

export class RecipeForm extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={(e)=>this.props.updateFunction(e)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Recipe Name</Form.Label>
                    <Form.Control type="text" placeholder={this.props.formItem.label} name='label'/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Image link</Form.Label>
                    <Form.Control type="text" placeholder={this.props.formItem.image} name='image' />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                
            </div>
        )
    }
}

export default RecipeForm
