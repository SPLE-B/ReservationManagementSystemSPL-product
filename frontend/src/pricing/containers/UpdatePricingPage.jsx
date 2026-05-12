
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormUpdatePricingForm from '../components/FormUpdatePricingForm'
import getPricingData from '../services/getPricingData'

const UpdatePricingPage = props => {
  const { idPricing } = useParams()
  const [isLoading, setIsLoading] = useState({
	updatePricingForm: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Update Pricing Page")
  }, []);


const [pricingData, setPricingData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, updatePricingForm: true}))
      const { data: pricingDataResponse } = await getPricingData({ idPricing  })

	  setPricingData(pricingDataResponse.data)
	  setIsLoading(prev => ({...prev, updatePricingForm: false}))
    }
	fetch()
  }, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/pricing
			  	`}>
			  		<Button id="_MxWNQExuEfGmhuROO-RZsA" className="p-4" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Pricing"}
		isLoading={isLoading.updatePricingForm}
	>
		{pricingData ? 
		(<>
		 <FormUpdatePricingForm
			{...{ 
				pricingData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UpdatePricingPage

