import React from 'react';
import axios from 'axios';
import CarRow from './CarRow';
import { Link } from 'react-router-dom';
import { produce } from 'immer';



class GetCars extends React.Component {
    state = {
        cars: []
    }
    componentDidMount = async () => {
        const id = this.props.match.params.personId;
        const response = await axios.get(`/api/peoplecars/getcars?id=${id}`);
        const cars = response.data;
        this.setState({ cars });
    }
    onDeleteClick = async () => {        
        const personId = this.props.match.params.personId;
        await axios.post(`/api/peopleCars/delete?personId=${ personId }`);
        this.props.history.push('/');
    }



    render() {

        return (

            <div className="container">

                <div className="row">
                    <div className="col-md-10">
                        <div className="row mt-5"><div className="col-md-12">
                            <table className="table table-hover table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Make</th>
                                        <th>Model</th>
                                        <th>Year</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.cars.map(c =>
                                        <CarRow car={c} key={c.id} />)}
                                </tbody>

                            </table>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h3>Are you sure you want to delete all of these cars?</h3>
                            </div>
                            <div className="col-md-6">
                                <a href="/" >
                                    <button className="btn btn-primary btn-lg btn-block">No</button>
                                </a>
                            </div>
                            <div className="col-md-6">
                                <button className="btn btn-danger btn-lg btn-block" onClick={this.onDeleteClick}>Yes</button></div>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}
export default GetCars;
