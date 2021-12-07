import React from 'react';
import axios from 'axios';
import { produce } from 'immer';

class AddCar extends React.Component {

    state = {
        car: {
            make: '',
            model: '',
            year: '',
        },
        person: {
            firstName: '',
            lastName: ''

        }
        
    }

    componentDidMount = async () => {
        const personId = this.props.match.params.personId;
        const { data } = await axios.get(`/api/peoplecars/getperson?id=${personId}`);
        this.setState({ person: data });
    }

    onTextChange = e => {
        const nextState = produce(this.state, draftState => {
            draftState.car[e.target.name] = e.target.value;
        });
        this.setState(nextState);
    }

    onAddCarClick = async () => {
        const personId = this.props.match.params.personId;
        const { make, model, year } = this.state.car;        
        await axios.post('/api/peopleCars/addcar', { make, model, year, personId });
        this.props.history.push('/');

    }
    render() {
        const { make, model, year, person } = this.state;
        const { firstName, lastName } = person
        return (

            <div className="col-md-6 offset-md-3 card card-body bg-light">
                <h2>Add a car for {firstName} {lastName}</h2>
                <input type="text" className="form-control" onChange={this.onTextChange} value={make} name="make" placeholder="Make" /><br></br>
                <input type="text" className="form-control" onChange={this.onTextChange} value={model} name="model" placeholder="Model" /><br></br>
                <input type="text" className="form-control" onChange={this.onTextChange} value={year} name="year" placeholder="Year" /><br></br>
    <button className="btn btn-primary btn-lg btn-block" onClick={this.onAddCarClick}>Submit</button></div>
        )

    }
}
export default AddCar;