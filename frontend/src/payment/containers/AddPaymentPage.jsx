
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormAddPaymentForm from '../components/FormAddPaymentForm'
import getBookingListData from '../services/getBookingListData'

const AddPaymentPage = props => {
  const [isLoading, setIsLoading] = useState({
	addPaymentForm: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Add Payment Page")
  }, []);


const [bookingListData, setBookingListData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, addPaymentForm: true}))
      const { data: bookingListDataResponse } = await getBookingListData({  })

	  setBookingListData(bookingListDataResponse.data)
	  setIsLoading(prev => ({...prev, addPaymentForm: false}))
    }
	fetch()
  }, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/payment
			  	`}>
			  		<Button id="_BkxzQEzTEfGZ4ZceE57zww" className="p-4" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Payment"}
		isLoading={isLoading.addPaymentForm}
	>
		{bookingListData ? 
		(<>
		 <FormAddPaymentForm
			{...{ 
				bookingListData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddPaymentPage

