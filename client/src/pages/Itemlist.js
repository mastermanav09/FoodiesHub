import React , {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { getAllFoods } from '../actions/foodAction';
import {CircularProgress } from "@material-ui/core";
export default function Itemlist() {
  const dispatch = useDispatch();
    const foods = useSelector((state)=> state.getAllFoodsReducer);
    useEffect(()=>{
        dispatch(getAllFoods());
    },[dispatch])
    if(foods.length === 0)
    {
        return( 
            <div className='text-center'>
                <CircularProgress/>
            </div>
        )
    }
  return (
    <div style={{ textAlign : 'center'}}>
    <div className='row justify-content-center'>
        <div className='col-md-10'>
        <h2>Item List</h2>
        <table className='table table-bordered'>
          <thead className='table-dark'>
            <tr>
              <th>Name</th>
              <th>Prices</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {foods.map(item =>{
              return <tr>
                  <td>{item.name}</td>
                  <td>
                    Small : {item.prices[0]['small']} <br/>
                    Medium : {item.prices[0]['medium']} <br/>
                    Large : {item.prices[0]['large']}
                  </td>
                  <td>{item.category}</td>
                   <td>
                     <i className='fa fa-trash m-1'></i>
                     <i className='fa fa-edit m-1'></i>
                   </td>
              </tr>
            })}
          </tbody>
        </table>
        </div>
        </div>
    </div>
  )
}
