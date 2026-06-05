
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import ModifiedFormAddDynamic from '../components/ModifiedFormAddDynamic'
import getResourceListData from '../services/getResourceListData'

const AddDynamicPage = props => {
  const [isLoading, setIsLoading] = useState({
	addDynamic: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Add Dynamic Page")
  }, []);

  const [resourceListData, setResourceListData] = useState()

    useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, addDynamic: true}))
      const { data: resourceListDataResponse } = await getResourceListData({  })

	  setResourceListData(resourceListDataResponse.data)
	  setIsLoading(prev => ({...prev, addDynamic: false}))
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
		singularName={"Dynamic"}
		
	>
		{resourceListData ? 
		(<>
		 <ModifiedFormAddDynamic
			{...{ 
				resourceListData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddDynamicPage

