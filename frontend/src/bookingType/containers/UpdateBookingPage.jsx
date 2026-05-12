
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormUpdateBookingTypeForm from '../components/FormUpdateBookingTypeForm'
import getBookingDetailData from '../services/getBookingDetailData'
import getResourceListData from '../services/getResourceListData'

const UpdateBookingPage = props => {
  const { idBooking } = useParams()
  const [isLoading, setIsLoading] = useState({
	updateBookingTypeForm: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Update Booking Page")
  }, []);


const [bookingDetailData, setBookingDetailData] = useState()
  const [resourceListData, setResourceListData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, updateBookingTypeForm: true}))
      const { data: bookingDetailDataResponse } = await getBookingDetailData({ idBooking  })
      const { data: resourceListDataResponse } = await getResourceListData({ idBooking  })

	  setBookingDetailData(bookingDetailDataResponse.data)
	  setResourceListData(resourceListDataResponse.data)
	  setIsLoading(prev => ({...prev, updateBookingTypeForm: false}))
    }
	fetch()
  }, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/booking/${idBooking}
			  	`}>
			  		<Button id="_6gSLUExaEfGt54WqW4PGnA" className="p-4" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"BookingType"}
		isLoading={isLoading.updateBookingTypeForm}
	>
		{bookingDetailData && resourceListData ? 
		(<>
		 <FormUpdateBookingTypeForm
			{...{ 
				bookingDetailData
, 				resourceListData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UpdateBookingPage

