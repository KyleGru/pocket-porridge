// @TODO: Usually to rip out commented out code rather than leave commented out when committing
// You can use git to get the code back if you really need it
import './App.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom'

import { PorridgeNavbar } from './Components/PorridgeNavbar'
// import dotenv from 'dotenv'
// dotenv.config()

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
    <ApolloProvider client={client}>
    <PorridgeNavbar />
    <Outlet/>
    </ApolloProvider>
    </>
  )
}



export default App
