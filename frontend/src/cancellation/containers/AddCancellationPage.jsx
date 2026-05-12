
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormForm from '../components/FormForm'
import getBookingListData from '../services/getBookingListData'

const AddCancellationPage = props => {
  const [isLoading, setIsLoading] = useState({
	form: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Add Cancellation Page")
  }, []);


const [bookingListData, setBookingListData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, form: true}))
      const { data: bookingListDataResponse } = await getBookingListData({  })

	  setBookingListData(bookingListDataResponse.data)
	  setIsLoading(prev => ({...prev, form: false}))
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
		singularName={""}
		isLoading={isLoading.form}
	>
		{bookingListData ? 
		(<>
		 <FormForm
			{...{ 
				bookingListData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddCancellationPage

