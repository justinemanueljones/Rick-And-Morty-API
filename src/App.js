import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.scss';


function App() {
    const[url,setUrl]=useState('https://rickandmortyapi.com/api/character/?name=')
    const [info,setInfo]=useState({})
    const [results,setResults] =useState([])
    const [search,setSearch]= useState("")

 useEffect(()=>{
  axios.get(`${url}${search}`)
 .then((result)=>{
//    
setInfo(result.data.info)
setResults(result.data.results) 
 })
 .catch((error)=>{
  console.log(error)
 })
}, [search])

useEffect(()=>{
  console.log(url, info,results , search)
}, [url, info , results , search])


  return (
    <>
    <header>
    <img class="rm" src='https://hyperpix.net/wp-content/uploads/2020/04/rick-and-morty-logo-font-free-download.jpg' />
  
    <h2>
</h2>
    <p class="search">Search Your Favorite Character</p><input onChange= {(e)=>{
      setSearch(e.target.value)  
    }}
    value={search}
    type="text"/>
    </header>
    <main>
    
    {results.map((result, index)=>(
      <article key={index}>
      <img src={result.image } alt={`photo of ${result.name}`}/>
<p class="name">Name: {result.name}</p>
<p>Staus: {result.status}</p>
<p>Spicies: {result.species}</p>
<p>Gender: {result.gender}</p>
<p>Location: {result.origin.name}</p>
</article>
    ))}
    </main>
    </>
  );
}

export default App;
