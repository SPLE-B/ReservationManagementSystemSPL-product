
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import ModifiedFormEditSessionBased from '../components/ModifiedFormEditSessionBased'
import getSessionBasedData from '../services/getSessionBasedData'

const EditSessionBasedPage = props => {
  const { idBooking } = useParams()
  const [isLoading, setIsLoading] = useState({
	editSessionBased: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit SessionBased Page")
  }, []);


const [sessionBasedData, setSessionBasedData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editSessionBased: true}))
      const { data: sessionBasedDataResponse } = await getSessionBasedData({ idBooking })

	  setSessionBasedData(sessionBasedDataResponse.data)
	  setIsLoading(prev => ({...prev, editSessionBased: false}))
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
		singularName={"SessionBased"}
		isLoading={isLoading.editSessionBased}
	>
		{sessionBasedData ? 
		(<>
		 <ModifiedFormEditSessionBased
			{...{ 
				sessionBasedData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditSessionBasedPage

