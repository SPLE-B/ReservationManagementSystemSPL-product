
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import ModifiedFormAddCancellationPaid from '../components/ModifiedFormAddCancellationPaid'
import getBookingListData from '../services/getBookingListData'

const AddCancellationPaidPage = props => {
  const [isLoading, setIsLoading] = useState({
	addCancellationPaid: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Add CancellationPaid Page")
  }, []);

  const [bookingListData, setBookingListData] = useState()
  
	  useEffect(() => {
	  const fetch = async () => {
	  setIsLoading(prev => ({...prev, addCancellationPaid: true}))
		const { data: bookingListDataResponse } = await getBookingListData({  })
  
	  setBookingListData(bookingListDataResponse.data)
	  setIsLoading(prev => ({...prev, addCancellationPaid: false}))
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
		singularName={"CancellationPaid"}
		
	>
		{bookingListData ? 
		(<>
		 <ModifiedFormAddCancellationPaid
			{...{ 
				bookingListData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddCancellationPaidPage

