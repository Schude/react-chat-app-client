import React, {useContext} from 'react';
import Dashboard from './components/Dashboard/index';
import Login from './components/Login/index';
import {Context} from './context/ContextProvider';

function App() {
    const {username} = useContext(Context);
    return <div className="App">{username ? <Dashboard /> : <Login />}</div>;
}

export default App;
