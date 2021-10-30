import '../styles/globals.scss'
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import {QueryClient, QueryClientProvider} from 'react-query';

import UserContextProvider from '../context/UserContext';
const queryClient = new QueryClient()

export default function App({Component, pageProps}) {
  return (
    <div>

      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <Navbar></Navbar>
            <Component {...pageProps}/>
          <Footer></Footer>
        </UserContextProvider>
      </QueryClientProvider>

    </div>
  )
}

/* <Component {...pageProps}/>
      <footer></footer> */