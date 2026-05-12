
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";
const NotificationTable = ({ notificationListData,
	}) => {
  const { checkPermission } = useAuth();
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[notificationListData]}
  	  itemsAttrs={[
          {
            id: "idNotification",
            condition: "",
            label: "Id Notification",
            featureName: "idNotification",
            editable: false
          }
  ,        {
            id: "statusMessage",
            condition: "",
            label: "Status Message",
            featureName: "statusMessage",
            editable: false
          }
  ,        {
            id: "typeMessage",
            condition: "",
            label: "Type Message",
            featureName: "typeMessage",
            editable: false
          }
  ,        {
            id: "message",
            condition: "",
            label: "Message",
            featureName: "message",
            editable: false
          }
  ]}
  	/>
  </>
  )
};

export default NotificationTable;
