
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormAddPricing from '../components/FormAddPricing'
import getResourceListData from '../services/getResourceListData'

const AddPricingPage = props => {
  const [isLoading, setIsLoading] = useState({
	addPricing: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Add Pricing Page")
  }, []);

  const [resourceListData, setResourceListData] = useState()
  
    useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, addPricing: true}))
      const { data: resourceListDataResponse } = await getResourceListData({  })

	  setResourceListData(resourceListDataResponse.data)
	  setIsLoading(prev => ({...prev, addPricing: false}))
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
		singularName={"Pricing"}
		
	>
		<FormAddPricing
			{...{ 
				resourceListData
				}}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddPricingPage

