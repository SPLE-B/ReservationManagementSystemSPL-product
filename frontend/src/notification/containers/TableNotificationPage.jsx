
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import NotificationTable from "../components/NotificationTable";
import getListNotification from '../services/getListNotification'

const TableNotificationPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableNotification: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Notification Page")
  }, []);


const [listNotification, setListNotification] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableNotification: true}))
				const { data: listNotification } = await getListNotification()
				setListNotification(listNotification.data)
			} finally {
				setIsLoading(prev => ({...prev, tableNotification: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/notification/add
			  	`}>
			  		<Button id="_D5WAMF2sEfGvmuzulXFRIA" className="p-2" variant="primary">
			  		  Add
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Notification"}
	singularName={"Notification"}
	items={[listNotification]}
	isLoading={isLoading.tableNotification}
>
	<NotificationTable
		listNotification={listNotification}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableNotificationPage

