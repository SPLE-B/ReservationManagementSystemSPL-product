
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormUpdatePaymentForm from '../components/FormUpdatePaymentForm'
import getPaymentDetailData from '../services/getPaymentDetailData'
import getBookingListData from '../services/getBookingListData'

const UpdatePaymentPage = props => {
  const { idPayment } = useParams()
  const [isLoading, setIsLoading] = useState({
	updatePaymentForm: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Update Payment Page")
  }, []);


const [paymentDetailData, setPaymentDetailData] = useState()
  const [bookingListData, setBookingListData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, updatePaymentForm: true}))
      const { data: paymentDetailDataResponse } = await getPaymentDetailData({ idPayment  })
      const { data: bookingListDataResponse } = await getBookingListData({ idPayment  })

	  setPaymentDetailData(paymentDetailDataResponse.data)
	  setBookingListData(bookingListDataResponse.data)
	  setIsLoading(prev => ({...prev, updatePaymentForm: false}))
    }
	fetch()
  }, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/payment/${idPayment}
			  	`}>
			  		<Button id="_b3JT0EzTEfGZ4ZceE57zww" className="p-4" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Payment"}
		isLoading={isLoading.updatePaymentForm}
	>
		{paymentDetailData && bookingListData ? 
		(<>
		 <FormUpdatePaymentForm
			{...{ 
				paymentDetailData
, 				bookingListData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UpdatePaymentPage

