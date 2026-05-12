
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailPayment from '../components/DetailPayment'
import getPaymentDetailData from '../services/getPaymentDetailData'

const DetailPaymentPage = props => {
  const { idPayment } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailPayment: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail Payment Page")
  }, []);


const [paymentDetailData, setPaymentDetailData] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailPayment: true}))
				const { data: paymentDetailData } = await getPaymentDetailData({ idPayment })
				setPaymentDetailData(paymentDetailData.data)
			} finally {
				setIsLoading(prev => ({...prev, detailPayment: false}))
			}
		}
		fetchData()
	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/payment
			  	`}>
			  		<Button id="__8iqIEzSEfGZ4ZceE57zww" className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail Payment"}
	singularName={"Payment"}
	items={{...paymentDetailData}}
	isLoading={isLoading.detailPayment}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailPayment {...{ data : { ...paymentDetailData }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailPaymentPage

