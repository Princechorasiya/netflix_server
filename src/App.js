import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/homepage/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import ProductList from "./pages/productlist/ProductList";
import NewUser from "./pages/newuser/NewUser";
import NewProduct from "./pages/newproduct/NewProduct";
import Product from "./pages/product/Product";
import { useState, useEffect, useMemo, useContext } from "react";

import axios from "axios";
import LoginPage from "./pages/login/loginPage";
import { AuthContext } from "./context/authContext/authContext";
import { MovieContextProvider } from "./context/movieContext/movieContext";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";

function App() {
	const { user } = useContext(AuthContext);
	return (
		<>
			<Routes>
				<Route
					path='/login'
					element={user ? <Navigate to='/' /> : <LoginPage />}
				/>
				<Route
					exact
					path='/'
					element={!user ? <Navigate to='/login' /> : <Home />}
				/>
				{user && (
					<>
						<Route path='/users' element={<UserList />} />
						<Route path='/user/:id' element={<User />} />
						<Route path='/newUser' element={<NewUser />} />
						<Route path='/products' element={<ProductList />} />
						<Route path='/product/:productId' element={<Product />} />
						<Route path='/newproduct' element={<NewProduct />} />
						<Route path='//lists/:ListId' element={<List />} />
						<Route path='/lists' element={<ListList />} />
						<Route path='/newList' element={<NewList />} />
					</>
				)}
			</Routes>
		</>
	);
}

export default App;
