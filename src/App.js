import React, { useState } from "react";
import Dashboard from "./components/Dashboard/index";
import Login from "./components/Login/index";

function App() {
    const [username, setUsername] = useState("");
    return (
        <div className="App">
            {username ? (
                <Dashboard username={username} />
            ) : (
                <Login setUsername={setUsername} />
            )}
        </div>
    );
}

export default App;
