import React, { useState } from "react";
import Dashboard from "./components/Dashboard/index";
import Login from "./components/Login/index";

function App() {
    const [user, setUser] = useState("");
    return (
        <div className="App">
            {user ? (
                <Dashboard user={user} />
            ) : (
                <Login setUser={setUser} />
            )}
        </div>
    );
}

export default App;
