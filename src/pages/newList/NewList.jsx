import React, { useContext,useEffect, useState } from 'react'
import { useHistory, useNavigate } from "react-router-dom"
import { ListContext } from '../../context/listContext/ListContext';
import { MovieContext } from './../../context/movieContext/movieContext';
import { getMovies, } from './../../context/movieContext/apiCalls';
import { createList } from '../../context/listContext/apiContext';
const NewList = () => {
  const [list, setList] = useState(null);
  // const history = useHistory();
  const history = useNavigate();

  const { dispatch } = useContext(ListContext);

  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);
  console.log(history);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);



  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    console.log(list);
    history("/lists");
    // history.push("/lists");
  }
  return (
    <>
      <div className="newProduct">
        <h1 className="addProductTitle">New List</h1>

        <form action="" className="addProductForm">
          <div className="formLeft">
            <div className="addProductItem">
              <label htmlFor="">Title</label>

              <input type="text" placeholder="Popular Movies" name="title" onChange={handleChange} />
            </div>
            <div className="addProductItem">
              <label htmlFor="">Type</label>

              <select name="type" id="" onChange={handleChange}>
                <option value="">Type</option>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
              </select>
            </div>


          </div>

          <div className="formRight">
            <div className="addProductItem">
              <label htmlFor="">Content</label>
              <select multiple name="content" onChange={handleSelect} style={{ height: "280px" }}
              >
                {movies.map((movie) => (
                  <option key={movie._id} value={movie._id}>
                    {movie.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button className="addProductButton" onClick={handleSubmit}>Create</button>
        </form>

      </div>
    </>
  )
}

export default NewList