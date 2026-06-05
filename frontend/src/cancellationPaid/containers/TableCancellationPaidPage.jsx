
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import CancellationPaidTable from "../components/CancellationPaidTable";
import getcancellationpaid from '../services/getcancellationpaid'

const TableCancellationPaidPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableCancellationPaid: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table CancellationPaid Page")
  }, []);


const [cancellationpaid, setcancellationpaid] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableCancellationPaid: true}))
				const { data: cancellationpaid } = await getcancellationpaid()
				setcancellationpaid(cancellationpaid.data)
			} finally {
				setIsLoading(prev => ({...prev, tableCancellationPaid: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/cancellation/add
			  	`}>
			  		<Button id="_EvSwqF2sEfGvmuzulXFRIA" className="p-2" variant="primary">
			  		  Add
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table CancellationPaid"}
	singularName={"CancellationPaid"}
	items={[cancellationpaid]}
	isLoading={isLoading.tableCancellationPaid}
>
	<CancellationPaidTable
		cancellationpaid={cancellationpaid}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableCancellationPaidPage

