import React from 'react';
import axios from 'axios';
import { produce } from 'immer';

class AddPerson extends React.Component {

    state = {
        person: {
            firstName: '',
            lastName: '',
            age: ''
        },
    }

    onTextChange = e => {
        const nextState = produce(this.state, draftState => {
            draftState.person[e.target.name] = e.target.value;
        });
        this.setState(nextState);
    }

    onAddPersonClick = async () => {
        await axios.post('/api/peopleCars/add', this.state.person);
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3 card card-body bg-light">
                    <h2>Add a New Person</h2>
                    <input type="text" className="form-control" onChange={this.onTextChange} name="firstName" placeholder="First Name" />
                    <br></br>
                    <input type="text" className="form-control" onChange={this.onTextChange} name="lastName" placeholder="Last Name" />
                    <br></br>
                    <input type="text" className="form-control" onChange={this.onTextChange} name="age" placeholder="Age" />
                    <br></br>
                    <button className="btn btn-primary btn-lg btn-block" onClick={this.onAddPersonClick} >Submit</button>
                </div>
            </div>
        );
    }
}
export default AddPerson;