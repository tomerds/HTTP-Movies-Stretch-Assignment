import React from 'react';
import { Button, Card, CardBody, Collapse, Form, FormGroup, Input } from 'reactstrap';

class NewMovie extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div className='formContainer'>
        <Button className="formButton" color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Add New Movie</Button>
        <Collapse isOpen={this.state.collapse} className="form">
          <Card >
            <CardBody>
              <Form >
                <h1>Add a new Movie:</h1>
                <FormGroup>
                  <Input type="text" name="title" id="title" placeholder="Title" value={this.props.titleValue} onChange={this.props.onChange} />
                </FormGroup>
                <FormGroup>
                  <Input type="text" name="director" id="director" placeholder="Director" value={this.props.directorValue} onChange={this.props.onChange} />
                </FormGroup>
                <FormGroup>
                  <Input type="number" name="metascore" id="metascore" placeholder="Metascore" value={this.props.metaValue} onChange={this.props.onChange} />
                </FormGroup>
                <FormGroup>
                  <Input type="text" name="stars" id="stars" placeholder="stars" value={this.props.starsValue} onChange={this.props.onChange} />
                </FormGroup>
              </Form>
              <Button onClick={this.props.submit}>Submit</Button>


            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default NewMovie;