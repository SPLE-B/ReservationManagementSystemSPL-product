
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailBookingType from '../components/DetailBookingType'
import getDetailBookingType from '../services/getDetailBookingType'

const DetailBookingTypePage = props => {
  const { idBooking } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailBookingType: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail BookingType Page")
  }, []);


const [detailBookingType, setDetailBookingType] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailBookingType: true}))
				const { data: detailBookingType } = await getDetailBookingType({ idBooking })
				setDetailBookingType(detailBookingType.data)
			} finally {
				setIsLoading(prev => ({...prev, detailBookingType: false}))
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
			  		<Button id="_hZ9QGl2FEfGjCoBCLIsS7g" className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail BookingType"}
	singularName={"BookingType"}
	items={{...detailBookingType}}
	isLoading={isLoading.detailBookingType}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailBookingType {...{ data : { ...detailBookingType }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailBookingTypePage

