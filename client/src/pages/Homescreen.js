import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { getAllFoods } from '../actions/foodAction';
import {CircularProgress } from "@material-ui/core";
import Card from '../components/Card'
import Filter from '../components/Filter';

export default function Homescreen() {
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
      <div>
    <Filter/>
    <div className='row justify-content-center'>
        {foods.map((food)=>{
            return (
                <div className='col-md-3 m-3' key={food._id} style={{borderRadius : '20px',textAlign:'center'}}>
                    <div>
                        <Card food = {food}/>
                    </div>
                </div>
            )})}
    </div>
    </div>
  )
}
