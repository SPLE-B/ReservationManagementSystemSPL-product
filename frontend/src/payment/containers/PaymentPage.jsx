
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import PaymentTable from "../components/PaymentTable";
import getPaymentListData from '../services/getPaymentListData'

const PaymentPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tablePayment: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Payment Page")
  }, []);


const [paymentListData, setPaymentListData] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tablePayment: true}))
				const { data: paymentListData } = await getPaymentListData()
				setPaymentListData(paymentListData.data)
			} finally {
				setIsLoading(prev => ({...prev, tablePayment: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/payment/add
			  	`}>
			  		<Button id="_qKr80EzREfGZ4ZceE57zww" className="p-2" variant="primary">
			  		  Add Payment
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Payment "}
	singularName={"Payment"}
	items={[paymentListData]}
	isLoading={isLoading.tablePayment}
>
	<PaymentTable
		paymentListData={paymentListData}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default PaymentPage

