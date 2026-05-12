
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import NotificationTable from "../components/NotificationTable";
import getNotificationListData from '../services/getNotificationListData'

const NotificationPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableNotification: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Notification Page")
  }, []);


const [notificationListData, setNotificationListData] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableNotification: true}))
				const { data: notificationListData } = await getNotificationListData()
				setNotificationListData(notificationListData.data)
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
			  		<Button id="_Y2fCYEzXEfGZ4ZceE57zww" className="p-2" variant="primary">
			  		  Add Notification
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Notification"}
	singularName={"Notification"}
	items={[notificationListData]}
	isLoading={isLoading.tableNotification}
>
	<NotificationTable
		notificationListData={notificationListData}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default NotificationPage

