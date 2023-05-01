import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const List = () => {
  const location = useLocation();
  console.log(location)
  const { state } = location;
  // console.log(state);
  return (
    <>
      <div className="product">
        <div className="productTitleContainer">
          <h1 className="productTitle">
            List
          </h1>
          <Link to="/newList">
            <button className="productAddButton">Create</button>
          </Link>
          </div>

          <div className="productTop">
            <div className="productTopRight">
              <div className="productInfoTop">
                <span className="productName">{state.title}</span>

              </div>
              <div className="productInfoBottom">
                <div className="productInfoItem">
                  <span className="productInfoKey">ID:</span>
                  <span className="productInfoValue">
                    {state._id}
                  </span>
                </div>

                <div className="productInfoItem">
                  <span className="productIfoKey">Genre:</span>
                  <span className="productInfoValue">{state.genre}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productIfoKey">Type::</span>
                  <span className="productInfoValue">{state.type}</span>
                </div>


              </div>
            </div>
          </div>

          <div className="productBottom">
            <form action="" className="productForm">
              <div className="productFormLeft">
                <label htmlFor="">List Title</label>
                <input type="text" name="" id="" placeholder={state.title} />

                <label htmlFor="">Type</label>
                <input type="text" name="" id="" placeholder={state.type} />

                <label htmlFor="">Genre</label>
                <input type="text" name="" id="" placeholder={state.genre} />
                

              </div>
              <div className="productFormRight">
                <button className="productButton">Update</button>
              </div>
            </form>
          </div>
        </div>
     
    </>
  )
}

export default List