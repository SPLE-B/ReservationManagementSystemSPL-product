
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormAddBookingTypeForm from '../components/FormAddBookingTypeForm'
import getResourceListData from '../services/getResourceListData'

const AddBookingPage = props => {
  const [isLoading, setIsLoading] = useState({
	addBookingTypeForm: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Add Booking Page")
  }, []);


const [resourceListData, setResourceListData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, addBookingTypeForm: true}))
      const { data: resourceListDataResponse } = await getResourceListData({  })

	  setResourceListData(resourceListDataResponse.data)
	  setIsLoading(prev => ({...prev, addBookingTypeForm: false}))
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
		isLoading={isLoading.addBookingTypeForm}
	>
		{resourceListData ? 
		(<>
		 <FormAddBookingTypeForm
			{...{ 
				resourceListData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddBookingPage

