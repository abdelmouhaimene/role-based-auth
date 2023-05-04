import React, { Fragment, createContext,useState } from 'react';
import Router from './router';

  
const UserContext = createContext()

const App = () => {


  const [user, setUser] = useState();
  
  return (
    <Fragment>
      <UserContext.Provider value={{user , setUser}}> 
        <Router/>
      </UserContext.Provider>
    </Fragment>
  );
};
export {UserContext}
export default App;


