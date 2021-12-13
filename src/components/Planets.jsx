import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Planet from './Planet'

const fetchPlanets = async({ queryKey }) => { // this is how we get the passed params which is an array
    const res = await fetch(`http://swapi.dev/api/planets/?page=${queryKey[1]}`)
    return res.json()
}

export default function Planets() {
    const [page, setPage] = useState(1)
    const { data, status } = useQuery(['planets', page], fetchPlanets, { // it takes a string for naming the query (key) (if array then they are for being params to the function) & a function calling the api
        staleTime: 2000, // the query will make a req to get the lastest (fresh) data for 2s until it becomes stale
        cacheTime: 10, //  the time where the data is cached ---> after every navigation the fetch process will trigger since the cached time 10ms (it's better to set it to)
        onSuccess: () => console.log('data is fetched')
    }) 
    console.log(data)
    return (
        <div>
            <h2>Planets</h2>

            { status === 'loading' && <div>Loading data...</div> }
            { status === 'error' && <div>Error fethcing data</div> }
            { status === 'success' && (
                <>
                    <button 
                        onClick={() => setPage(prev => Math.max(prev - 1, 1))} 
                        disabled={ page === 1 }
                    >Previous Page</button>
                    <span>{ page }</span>
                    <button 
                        onClick={() => setPage(prev => (!data || !data.next ? prev : prev + 1))} 
                        disabled={!data || !data.next}
                    >Next page</button>
                    <div>
                        { data.results.map(planet => <Planet key={ planet.name } {...planet} />) }
                    </div>
                </>
            ) }
        </div>
    )
}