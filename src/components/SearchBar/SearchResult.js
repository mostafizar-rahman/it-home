import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SearchResult = () => {
    const x = useLoaderData()
    console.log(x)
  return (
    <div >SearchResult</div>
  )
}

export default SearchResult