
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailBooking from '../components/DetailBooking'
import getBookingDetailData from '../services/getBookingDetailData'

const DetailBookingPage = props => {
  const { idBooking } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailBooking: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail Booking Page")
  }, []);


const [bookingDetailData, setBookingDetailData] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailBooking: true}))
				const { data: bookingDetailData } = await getBookingDetailData({ idBooking })
				setBookingDetailData(bookingDetailData.data)
			} finally {
				setIsLoading(prev => ({...prev, detailBooking: false}))
			}
		}
		fetchData()
	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/booking
			  	`}>
			  		<Button id="_akC4MExaEfGt54WqW4PGnA" className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail Booking"}
	singularName={"Booking"}
	items={{...bookingDetailData}}
	isLoading={isLoading.detailBooking}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailBooking {...{ data : { ...bookingDetailData }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailBookingPage

