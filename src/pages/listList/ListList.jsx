import "./listList.css";
import { DataGrid } from '@mui/x-data-grid';

import { DeleteOutline } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import { useContext, useEffect } from "react";
import { ListContext } from './../../context/listContext/ListContext';
import { deleteList, getLists } from './../../context/listContext/apiContext';
import { List } from "@mui/material";
import DefaultLayout from "../../layout/DefaultLayout";


const ListList = () => {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteList(id, dispatch);
  }

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "title", width: 250 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "type", headerName: "Type", width: 150 },
    
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{ pathname: "/lists/" + params.row._id, list: params.row }} state={params.row}>
              <button className="productListEdit">Edit</button>
            </Link>

            <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row._id)} />
            
          </>
        );
      },
    },
  ];

  return <>
    <div className="productList">
      <DataGrid rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id} />
    </div></>

}

export default DefaultLayout( ListList);