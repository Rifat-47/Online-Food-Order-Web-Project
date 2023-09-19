import React from "react";

const UserContext = React.createContext({
    user: null,
    onSignUp : () => { },
    onSignIn : () => {},
    onSignOut : () => {},
})


export default UserContext;