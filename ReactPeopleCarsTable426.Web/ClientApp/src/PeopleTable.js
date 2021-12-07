import React from 'react';
import axios from 'axios';
import PersonRow from './PersonRow';
import { produce } from 'immer';

class PeopleTable extends React.Component {

    state = {
        people: [],
       
    }

    componentDidMount = async () => {
        await this.refreshPeople();
    }

    refreshPeople = async () => {
        const response = await axios.get('/api/peoplecars/getall');
        const people = response.data;
        this.setState({ people });
    }

  

    render() {
        const { people } = this.state;
        return (
            <div className="container" style={{ marginTop: 60 }}>
                <div className="row mt-4">
                    <a href="/addperson">
                        <button className="btn btn-success btn-lg btn-block">Add Person</button>
                    </a>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <table className="table table-header table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Age</th>
                                    <th>Car Count</th>
                                    <th>Add Car</th>
                                    <th>Delete Car</th>
                                </tr>
                            </thead>
                            <tbody>
                                {people.map(p =>
                                    <PersonRow person={p} key={p.id} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default PeopleTable;