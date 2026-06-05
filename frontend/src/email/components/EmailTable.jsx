
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';
import * as Layouts from "@/commons/layouts";
const EmailTable = ({ 
    email}) => {
  const { checkPermission } = useAuth();
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[email]}
  	  itemsAttrs={[
          {
            id: "idnotification",
            condition: "",
            label: "Id Notification",
            featureName: "idNotification",
            editable: false
          }
  ,        {
            id: "message",
            condition: "",
            label: "Message",
            featureName: "message",
            editable: false
          }
  ,        {
            id: "typemessage",
            condition: "",
            label: "Type Message",
            featureName: "typeMessage",
            editable: false
          }
  ,        {
            id: "statusmessage",
            condition: "",
            label: "Status Message",
            featureName: "statusMessage",
            editable: false
          }
  ,        {
            id: "targetemail",
            condition: "",
            label: "Target Email",
            featureName: "targetEmail",
            editable: false
          }
  ]}
  	/>
  </>
  )
};

export default EmailTable;
