
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormEditPricing from '../components/FormEditPricing'
import getPricingData from '../services/getPricingData'

const EditPricingPage = props => {
  const { idPricing } = useParams()
  const [isLoading, setIsLoading] = useState({
	editPricing: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit Pricing Page")
  }, []);


const [pricingData, setPricingData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editPricing: true}))
      const { data: pricingDataResponse } = await getPricingData({ idPricing })

	  setPricingData(pricingDataResponse.data)
	  setIsLoading(prev => ({...prev, editPricing: false}))
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
		isLoading={isLoading.editPricing}
	>
		{pricingData ? 
		(<>
		 <FormEditPricing
			{...{ 
				pricingData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditPricingPage

