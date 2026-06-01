
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormEditBookingType from '../components/FormEditBookingType'
import getBookingTypeData from '../services/getBookingTypeData'

const EditBookingTypePage = props => {
  const { idBooking } = useParams()
  const [isLoading, setIsLoading] = useState({
	editBookingType: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit BookingType Page")
  }, []);


const [bookingTypeData, setBookingTypeData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editBookingType: true}))
      const { data: bookingTypeDataResponse } = await getBookingTypeData({  })

	  setBookingTypeData(bookingTypeDataResponse.data)
	  setIsLoading(prev => ({...prev, editBookingType: false}))
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
		singularName={"BookingType"}
		isLoading={isLoading.editBookingType}
	>
		{bookingTypeData ? 
		(<>
		 <FormEditBookingType
			{...{ 
				bookingTypeData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditBookingTypePage

