
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import ModifiedFormTambahDynamic from '../components/ModifiedFormTambahDynamic'
import getResourceListData from '../../pricing/services/getResourceListData'

const ModifiedViewContainer = props => {
  const [isLoading, setIsLoading] = useState({
	tambahDynamic: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Modified ViewContainer")
  }, []);


const [resourceListData, setResourceListData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, tambahDynamic: true}))
      const { data: resourceListDataResponse } = await getResourceListData({  })

	  setResourceListData(resourceListDataResponse.data)
	  setIsLoading(prev => ({...prev, tambahDynamic: false}))
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
		isLoading={isLoading.tambahDynamic}
	>
		{resourceListData ? 
		(<>
		 <ModifiedFormTambahDynamic
			{...{ 
				resourceListData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ModifiedViewContainer

