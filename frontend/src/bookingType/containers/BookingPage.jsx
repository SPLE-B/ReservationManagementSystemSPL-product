
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import BookingTable from "../components/BookingTable";
import getBookingListData from '../services/getBookingListData'

const BookingPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableBooking: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Booking Page")
  }, []);


const [bookingListData, setBookingListData] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableBooking: true}))
				const { data: bookingListData } = await getBookingListData()
				setBookingListData(bookingListData.data)
			} finally {
				setIsLoading(prev => ({...prev, tableBooking: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/booking/add
			  	`}>
			  		<Button id="_GrnxsExZEfGt54WqW4PGnA" className="p-2" variant="primary">
			  		  Create Booking
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Booking "}
	singularName={"Booking"}
	items={[bookingListData]}
	isLoading={isLoading.tableBooking}
>
	<BookingTable
		bookingListData={bookingListData}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default BookingPage

