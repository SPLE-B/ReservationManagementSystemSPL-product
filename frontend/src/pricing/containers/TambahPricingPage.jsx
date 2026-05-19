
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormTambahPricing from '../components/FormTambahPricing'
import getResourceListData from '../services/getResourceListData'

const TambahPricingPage = props => {
  const [isLoading, setIsLoading] = useState({
	tambahPricing: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Tambah Pricing Page")
  }, []);


const [resourceListData, setResourceListData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, tambahPricing: true}))
      const { data: resourceListDataResponse } = await getResourceListData({  })

	  setResourceListData(resourceListDataResponse.data)
	  setIsLoading(prev => ({...prev, tambahPricing: false}))
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
		isLoading={isLoading.tambahPricing}
	>
		{resourceListData ? 
		(<>
		 <FormTambahPricing
			{...{ 
				resourceListData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TambahPricingPage

