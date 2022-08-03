import axios from "axios";
import React, { useEffect,useState } from 'react'
import SingleContent from '../../components/SingleContent/SingleContent'
import CustomPagination from '../../components/Pagination/CustomPagination'
import Genres from "../../components/SingleContent/Genres";
import useGenres from "../../Hooks/useGenre";

const Movies = () => {

  const [content, setContent] =useState([]);
  const[page,setPage]=useState(1);
  const[numOfPages,setNumOfPages]=useState();
  const[selectedGenres, setSelectedGenres]=useState([]);
  const[genres,setGenres]=useState([]);
  const genreForURL=useGenres(selectedGenres)


  const fetchMovies =async()=>{
    const { data } =await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=2ef1ceec32ba25ef401fdf5929030939&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}&with_genres=${genreForURL}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages)
  };

  useEffect(()=>{
    fetchMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[page,genreForURL])
  return (
    <div>
      <span className="pageTitle">Movies</span>
      <Genres 
      type="movie" 
      selectedGenres={selectedGenres} 
      setSelectedGenres={setSelectedGenres}
      genres={genres} 
      setGenres={setGenres}
      setPage={setPage}
      />
      <div className='trending'>
        {//
         content?.map((c) => 
        <SingleContent
        key={c.id}
        id={c.id}
        poster={c.poster_path}
        title={c.original_title || c.title}
        date={c.release_date}
        media_type="movie"
        vote_average={c.vote_average}
        />)}
      </div>
      {numOfPages >1 && (
      <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
      )} 
        </div>
  )
};

export default Movies