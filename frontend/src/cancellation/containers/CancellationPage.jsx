
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import CancellationTable from "../components/CancellationTable";
import getCancellationListData from '../services/getCancellationListData'

const CancellationPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableCancellation: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Cancellation Page")
  }, []);


const [cancellationListData, setCancellationListData] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableCancellation: true}))
				const { data: cancellationListData } = await getCancellationListData()
				setCancellationListData(cancellationListData.data)
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
			  		<Button id="_puwKkEzYEfGZ4ZceE57zww" className="p-2" variant="primary">
			  		  Add Cancellation
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Cancellation"}
	singularName={"Cancellation"}
	items={[cancellationListData]}
	isLoading={isLoading.tableCancellation}
>
	<CancellationTable
		cancellationListData={cancellationListData}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default CancellationPage

