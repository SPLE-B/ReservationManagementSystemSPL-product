
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import CancellationTable from "../components/CancellationTable";
import getListCancellation from '../services/getListCancellation'

const TableCancellationPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableCancellation: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Cancellation Page")
  }, []);


const [listCancellation, setListCancellation] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableCancellation: true}))
				const { data: listCancellation } = await getListCancellation()
				setListCancellation(listCancellation.data)
			} finally {
				setIsLoading(prev => ({...prev, tableCancellation: false}))
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
			  		<Button id="_D-Lc3V2sEfGvmuzulXFRIA" className="p-2" variant="primary">
			  		  Add
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Cancellation"}
	singularName={"Cancellation"}
	items={[listCancellation]}
	isLoading={isLoading.tableCancellation}
>
	<CancellationTable
		listCancellation={listCancellation}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableCancellationPage

