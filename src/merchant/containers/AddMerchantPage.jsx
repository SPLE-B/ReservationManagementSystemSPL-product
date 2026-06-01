
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import ModifiedFormAddMerchant from '../components/ModifiedFormAddMerchant'
import getBookingListData from '../services/getBookingListData'

const AddMerchantPage = props => {
  const [isLoading, setIsLoading] = useState({
	addMerchant: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Add Merchant Page")
  }, []);


const [bookingListData, setBookingListData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, addMerchant: true}))
      const { data: bookingListDataResponse } = await getBookingListData({  })

	  setBookingListData(bookingListDataResponse.data)
	  setIsLoading(prev => ({...prev, addMerchant: false}))
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
		isLoading={isLoading.addMerchant}
	>
		{bookingListData ? 
		(<>
		 <ModifiedFormAddMerchant
			{...{ 
				bookingListData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddMerchantPage

