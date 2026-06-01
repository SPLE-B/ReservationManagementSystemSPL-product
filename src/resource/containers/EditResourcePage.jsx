
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormEditResource from '../components/FormEditResource'
import getResourceData from '../services/getResourceData'

const EditResourcePage = props => {
  const { idResource } = useParams()
  const [isLoading, setIsLoading] = useState({
	editResource: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit Resource Page")
  }, []);


const [resourceData, setResourceData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editResource: true}))
      const { data: resourceDataResponse } = await getResourceData({ idResource })

	  setResourceData(resourceDataResponse.data)
	  setIsLoading(prev => ({...prev, editResource: false}))
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
		singularName={"Resource"}
		isLoading={isLoading.editResource}
	>
		{resourceData ? 
		(<>
		 <FormEditResource
			{...{ 
				resourceData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditResourcePage

