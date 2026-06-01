
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormEditCancellation from '../components/FormEditCancellation'
import getCancellationData from '../services/getCancellationData'

const EditCancellationPage = props => {
  const { idCancellation } = useParams()
  const [isLoading, setIsLoading] = useState({
	editCancellation: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit Cancellation Page")
  }, []);


const [cancellationData, setCancellationData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editCancellation: true}))
      const { data: cancellationDataResponse } = await getCancellationData({ idCancellation })

	  setCancellationData(cancellationDataResponse.data)
	  setIsLoading(prev => ({...prev, editCancellation: false}))
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
		singularName={"Cancellation"}
		isLoading={isLoading.editCancellation}
	>
		{cancellationData ? 
		(<>
		 <FormEditCancellation
			{...{ 
				cancellationData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditCancellationPage

