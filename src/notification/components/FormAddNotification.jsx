
import React from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Form,
  InputField,
  SelectionField,
  MultiSelectionField,
  VisualizationAttr,
  Spinner,
  Modal,
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import saveNotification from '../services/saveNotification'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormAddNotification = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const submit = (data) => {
    const cleanData = cleanFormData(data)
    saveNotification({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/notification`)
  	notifySuccess(`Save Notification berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add Notification" 
		  onSubmit={handleSubmit(submit)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="message"
	        name="message"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Message"
	          placeholder="Masukkan message"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="typeMessage"
	        name="typeMessage"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Typemessage"
	          placeholder="Masukkan typemessage"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="statusMessage"
	        name="statusMessage"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Statusmessage"
	          placeholder="Masukkan statusmessage"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,
	      <Controller
	        key="targetEmail"
	        name="targetEmail"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Targetemail"
	          placeholder="Masukkan targetemail"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
		  ,
	
		  ]}
	
		  itemsEvents={[
		    <Button id="_D5WANF2sEfGvmuzulXFRIA" key="Submit" type="submit" variant="primary">Submit</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormAddNotification
