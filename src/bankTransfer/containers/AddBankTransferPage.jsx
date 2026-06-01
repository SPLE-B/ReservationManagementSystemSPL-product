
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import ModifiedFormAddBankTransfer from '../components/ModifiedFormAddBankTransfer'
import getBookingListData from '../services/getBookingListData'

const AddBankTransferPage = props => {
  const [isLoading, setIsLoading] = useState({
	addBankTransfer: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Add BankTransfer Page")
  }, []);


const [bookingListData, setBookingListData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, addBankTransfer: true}))
      const { data: bookingListDataResponse } = await getBookingListData({  })

	  setBookingListData(bookingListDataResponse.data)
	  setIsLoading(prev => ({...prev, addBankTransfer: false}))
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
		singularName={"BankTransfer"}
		isLoading={isLoading.addBankTransfer}
	>
		{bookingListData ? 
		(<>
		 <ModifiedFormAddBankTransfer
			{...{ 
				bookingListData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddBankTransferPage

