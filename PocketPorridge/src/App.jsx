// @TODO: Usually to rip out commented out code rather than leave commented out when committing
// You can use git to get the code back if you really need it
import './App.css'

import { PorridgeNavbar } from './Components/PorridgeNavbar'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom'




const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { PorridgeNavbar }) => {
  const token = localStorage.getItem('id_token');

  return {
    PorridgeNavbar: {
      ...PorridgeNavbar,
        authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
3
// import dotenv from 'dotenv'
// dotenv.config()

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <PorridgeNavbar />
        <Outlet/>
      </div>
    </ApolloProvider>
  );
}

export default App
