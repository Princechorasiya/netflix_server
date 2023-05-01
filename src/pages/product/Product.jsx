import React from 'react'
import "./product.css";
import { Link, useLocation } from 'react-router-dom';

import { Publish } from '@mui/icons-material';
import DefaultLayout from '../../layout/DefaultLayout';

const Product = () => {
    const location = useLocation();
	// console.log(location)
	const { state } = location;
	
    
	console.log(state);
	return (
		<>
			<div className="product">
				<div className="productTitleContainer">
					<h1 className="productTitle">Movie</h1>
					<Link to="/newproduct">
						<button className="productAddButton">Create</button>
					</Link>
				</div>
				<div className="productTop">
          
					<div className="productTopRight">
						<div className="productInfoTop">
							<img src={state.img} alt="" className="productInfoImg" />
							<span className="productName">{state.title}</span>
						</div>
						<div className="productInfoBottom">
							<div className="productInfoItem">
								<span className="productInfoKey">id:</span>
								<span className="productInfoValue">{state._id}</span>
							</div>
							<div className="productInfoItem">
								<span className="productInfoKey">genre:</span>
								<span className="productInfoValue">{state.genre}</span>
							</div>

							<div className="productInfoItem">
								<span className="productInfoKey">limit:</span>
								<span className="productInfoValue">{state.limit}</span>
							</div>

							<div className="productInfoItem">
								<span className="productInfoKey">year:</span>
								<span className="productInfoValue">{state.year}</span>
							</div>
							
						</div>
					</div>
				</div>
				<div className="productBottom">
					<form className="productForm">
						<div className="productFormLeft">
							<label>Movie Title</label>
							<input type="text" placeholder={state.title} />
							<label>Year</label>
							<input type="text" placeholder={state.year} />
							<label>Genre</label>
							<input type="text" placeholder={state.genre} />
							<label>Limit</label>
							<input type="text" placeholder={state.limit} />
							<label>Trailer</label>
							<input type="file" placeholder={state.trailer} />

							<label>Video</label>
            <input type="file" placeholder={state.video} />
							
						</div>
						<div className="productFormRight">
							<div className="productUpload">
								<img src={state.img} alt="" className="productUploadImg" />
								<label for="file">
									<Publish />
								</label>
								<input type="file" id="file" style={{ display: "none" }} />
							</div>
							<button className="productButton">Update</button>
						</div>
					</form>
				</div>
			</div></>
    )
}

export default DefaultLayout(Product);