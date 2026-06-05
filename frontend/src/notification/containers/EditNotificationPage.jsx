
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormEditNotification from '../components/FormEditNotification'
import getNotificationData from '../services/getNotificationData'

const EditNotificationPage = props => {
  const { idNotification } = useParams()
  const [isLoading, setIsLoading] = useState({
	editNotification: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit Notification Page")
  }, []);


const [notificationData, setNotificationData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editNotification: true}))
      const { data: notificationDataResponse } = await getNotificationData({ idNotification })

	  setNotificationData(notificationDataResponse.data)
	  setIsLoading(prev => ({...prev, editNotification: false}))
    }
	fetch()
  }, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Notification"}
		isLoading={isLoading.editNotification}
	>
		{notificationData ? 
		(<>
		 <FormEditNotification
			{...{ 
				notificationData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditNotificationPage

