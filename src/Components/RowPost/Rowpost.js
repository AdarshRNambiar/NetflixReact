import React, {useEffect, useState} from 'react'
import './Rowpost.css'
import axios from '../../axios'
import { imageUrl,API_KEY } from '../../Constants/Constants'
import YouTube from 'react-youtube';
function Rowpost(props) {
    const [movies,setMovies] = useState([])
    const [UrlId,setUrlId]=useState('')


    useEffect(()=>{
      axios.get(props.url).then(response=>{
        console.log(response.data)
        setMovies(response.data.results)
      }).catch(err=>{
        alert("Network error something in Rowpost")   
        console.log("Some error in network api")
      })
  },[])

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    }};
    const handleMovietrailer=(id)=>{
      axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        // console.log(response.data)
        if(response.data.results.length!=0){
          setUrlId(response.data.results[0])
        }else{
          console.log("Array empty trailer not available")
        }
      })
    }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
            <img onClick={()=>handleMovietrailer(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster"></img>

          )
        }
        
      </div>
      { UrlId && <YouTube opts={opts} videoId={UrlId.key} />}
    </div>
  )
}

export default Rowpost
