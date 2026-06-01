
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import ModifiedFormAddSessionBased from '../components/ModifiedFormAddSessionBased'
import getResourceListData from '../services/getResourceListData'

const AddSessionBasedPage = props => {
  const [isLoading, setIsLoading] = useState({
	addSessionBased: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Add SessionBased Page")
  }, []);


const [resourceListData, setResourceListData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, addSessionBased: true}))
      const { data: resourceListDataResponse } = await getResourceListData({  })

	  setResourceListData(resourceListDataResponse.data)
	  setIsLoading(prev => ({...prev, addSessionBased: false}))
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
		isLoading={isLoading.addSessionBased}
	>
		{resourceListData ? 
		(<>
		 <ModifiedFormAddSessionBased
			{...{ 
				resourceListData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddSessionBasedPage

