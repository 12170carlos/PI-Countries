import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { getAllActivities } from '../../../redux/actions/actions';


export default function FilterSet() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search)

    useEffect(() => {
        dispatch(getAllActivities());
        
    })
  return (
    <div>FilterSet</div>
  )
}

