
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import SessionBasedTable from "../components/SessionBasedTable";
import getsessionbased from '../services/getsessionbased'

const TableSessionBasedPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableSessionBased: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table SessionBased Page")
  }, []);


const [sessionbased, setsessionbased] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableSessionBased: true}))
				const { data: sessionbased } = await getsessionbased()
				setsessionbased(sessionbased.data)
			} finally {
				setIsLoading(prev => ({...prev, tableSessionBased: false}))
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
			  		<Button id="_h0NjGF2FEfGjCoBCLIsS7g" className="p-2" variant="primary">
			  		  Add
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table SessionBased"}
	singularName={"SessionBased"}
	items={[sessionbased]}
	isLoading={isLoading.tableSessionBased}
>
	<SessionBasedTable
		sessionbased={sessionbased}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableSessionBasedPage

