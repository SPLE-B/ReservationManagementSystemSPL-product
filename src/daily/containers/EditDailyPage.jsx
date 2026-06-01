
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import ModifiedFormEditDaily from '../components/ModifiedFormEditDaily'
import getDailyData from '../services/getDailyData'

const EditDailyPage = props => {
  const { idBooking } = useParams()
  const [isLoading, setIsLoading] = useState({
	editDaily: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit Daily Page")
  }, []);


const [dailyData, setDailyData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editDaily: true}))
      const { data: dailyDataResponse } = await getDailyData({ idBooking })

	  setDailyData(dailyDataResponse.data)
	  setIsLoading(prev => ({...prev, editDaily: false}))
    }
	fetch()
  }, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Daily"}
		isLoading={isLoading.editDaily}
	>
		{dailyData ? 
		(<>
		 <ModifiedFormEditDaily
			{...{ 
				dailyData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditDailyPage

