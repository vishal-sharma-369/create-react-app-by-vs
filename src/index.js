import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

function Page()
{
    return(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}

ReactDOM.render(<Page/>,document.getElementById('root'));