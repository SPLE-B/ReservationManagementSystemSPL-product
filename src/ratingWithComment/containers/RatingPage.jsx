
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import RatingCard from "../components/RatingCard";
import getRatingListData from '../services/getRatingListData'

const RatingPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	listRating: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Rating Page")
  }, []);


const [ratingListData, setRatingListData] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listRating: true}))
				const { data: ratingListData } = await getRatingListData()
				setRatingListData(ratingListData.data)
			} finally {
				setIsLoading(prev => ({...prev, listRating: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/rating/add
			  	`}>
			  		<Button id="_1I5xwF2DEfGjCoBCLIsS7g" className="p-2" variant="primary">
			  		  Give Rating
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"Rating"}
	singularName={"Rating"}
	items={[ratingListData]}
	isLoading={isLoading.listRating}
>
	<RatingCard
		ratingListData={ratingListData}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default RatingPage

