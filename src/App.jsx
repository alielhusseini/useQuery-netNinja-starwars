import { useState } from 'react';
import { Navbar, People, Planets } from './components'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

 // Create a client (we must first create a provider first for the app)
 const queryClient = new QueryClient()

function App() {
  const [page, setPage] = useState('planets')

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          { page === 'planets' ? <Planets /> : <People /> }
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={ false } />
    </QueryClientProvider>
  );
}

export default App;
