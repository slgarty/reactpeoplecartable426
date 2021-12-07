import React from 'react';
import { Route } from 'react-router-dom';
import AddCar from './AddCar';
import AddPerson from './AddPerson';
import PeopleTable from './PeopleTable';
import Layout from './Layout';
import GetCars from './GetCars';

const App = () => {
    return (
        <Layout>
            <div>
                <Route exact path='/' component={PeopleTable} />
                <Route exact path='/AddPerson' component={AddPerson} />
                <Route exact path='/AddCar/:personId' component={AddCar} />
                <Route exact path='/GetCars/:personId' component={GetCars} />
            </div>
        </Layout>
    )
}

export default App;