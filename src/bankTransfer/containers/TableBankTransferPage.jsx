
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import BankTransferTable from "../components/BankTransferTable";
import getbanktransfer from '../services/getbanktransfer'

const TableBankTransferPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableBankTransfer: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table BankTransfer Page")
  }, []);


const [banktransfer, setbanktransfer] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableBankTransfer: true}))
				const { data: banktransfer } = await getbanktransfer()
				setbanktransfer(banktransfer.data)
			} finally {
				setIsLoading(prev => ({...prev, tableBankTransfer: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/banktransfer/add
			  	`}>
			  		<Button id="_hp2GKF2FEfGjCoBCLIsS7g" className="p-2" variant="primary">
			  		  Add
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table BankTransfer"}
	singularName={"BankTransfer"}
	items={[banktransfer]}
	isLoading={isLoading.tableBankTransfer}
>
	<BankTransferTable
		banktransfer={banktransfer}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableBankTransferPage

