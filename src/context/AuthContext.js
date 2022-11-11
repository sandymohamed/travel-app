import { useState, createContext } from 'react';

// default value false
const AuthContext = createContext(false);

function AuthProvider(props) {
  const [isAuthorized, setisAuthorized] = useState(false);

  const loggin = () => {
    setisAuthorized(!isAuthorized);
  };
  return (
    <div>
      <AuthContext.Provider value={{ isAuthorized, loggin }}>{props.children}</AuthContext.Provider>
    </div>
  );
}
export { AuthContext, AuthProvider };
