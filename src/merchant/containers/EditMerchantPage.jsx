
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import ModifiedFormEditMerchant from '../components/ModifiedFormEditMerchant'
import getMerchantData from '../services/getMerchantData'

const EditMerchantPage = props => {
  const { idPayment } = useParams()
  const [isLoading, setIsLoading] = useState({
	editMerchant: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit Merchant Page")
  }, []);


const [merchantData, setMerchantData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editMerchant: true}))
      const { data: merchantDataResponse } = await getMerchantData({ idPayment })

	  setMerchantData(merchantDataResponse.data)
	  setIsLoading(prev => ({...prev, editMerchant: false}))
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
		singularName={"Merchant"}
		isLoading={isLoading.editMerchant}
	>
		{merchantData ? 
		(<>
		 <ModifiedFormEditMerchant
			{...{ 
				merchantData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditMerchantPage

