
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormUpdateRatingForm from '../components/FormUpdateRatingForm'
import getRatingDetailData from '../services/getRatingDetailData'

const UpdateRatingPage = props => {
  const { idRatingupdae } = useParams()
  const [isLoading, setIsLoading] = useState({
	updateRatingForm: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Update Rating Page")
  }, []);


const [ratingDetailData, setRatingDetailData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, updateRatingForm: true}))
      const { data: ratingDetailDataResponse } = await getRatingDetailData({ idRatingupdae  })

	  setRatingDetailData(ratingDetailDataResponse.data)
	  setIsLoading(prev => ({...prev, updateRatingForm: false}))
    }
	fetch()
  }, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/rating
			  	`}>
			  		<Button id="_QNe44Eh8EfGfS44y06AMZQ" className="p-4" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Rating"}
		isLoading={isLoading.updateRatingForm}
	>
		{ratingDetailData ? 
		(<>
		 <FormUpdateRatingForm
			{...{ 
				ratingDetailData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UpdateRatingPage

