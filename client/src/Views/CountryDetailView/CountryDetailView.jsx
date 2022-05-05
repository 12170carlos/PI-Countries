
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DetailsCard from './Components/DetailsCard/DetailsCard';
import ActivityCards from './Components/ActivityCards/ActivityCards';
import s from './DetailPage.module.css';
import { getByDetail } from '../../redux/actions/actions';
import { useNavigate, useParams } from 'react-router';


  function CountryDetailView() {
	
	const navigate = useNavigate();
	const { id } = useParams();
	const dispatch = useDispatch();

	

	useEffect(() => {
		dispatch(getByDetail(id))
	}, [dispatch, id])
	
	let c = useSelector(state => state.detailed);

	return (
		<div className={s.container}>
			<h1 className={s.title}>Country Details</h1>
			<DetailsCard
			 
				id={c.id} 
				name={c.name} 
				flag={c.flag} 
				capital={c.capital} 
				region={c?.subregion?.region?.name} 
				subregion={c?.subregion?.name}
				population={c.population} 
				area={c.area} 
			/>
			<h1 className={s.title}>{c?.activities?.length === 0 ? "No related activities" : "Related activities"}</h1>
			<ActivityCards activities={c.activities}/>
			<button className={s.goBack} onClick={() => navigate(-1)}>Go Back</button>				
		</div>
	)
}

export default CountryDetailView;