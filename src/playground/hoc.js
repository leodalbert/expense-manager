// Higher Order Component - A component (HOC) that renders another component
// Reuse Code
// Render Hijacking
// Prop manipulation
// Abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>the info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>

            {props.isAdmin && <p>This is private info, please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>permission denided</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

//ReactDOM.render(<AdminInfo isAdmin= {false} info="there are some detailes" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated= {true} info='some info' />, document.getElementById('app'))