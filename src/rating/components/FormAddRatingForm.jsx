
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
import saveRating from '../services/saveRating'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormAddRatingForm = ({ 
	resourceListData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  const save = (data) => {
    const cleanData = cleanFormData(data)
    saveRating({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/rating`)
  	notifySuccess(`Save Rating berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add Rating Form" 
		  onSubmit={handleSubmit(save)}
	
	    vas={[
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="score"
	        name="score"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Score"
	          placeholder="Masukkan score"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,

	      <Controller
	        key="idResource"
	        name="idResource"
	        control={control}
	        render={({ field, fieldState }) => (
	        <SelectionField
	          
	          label="Resource"
	          options={resourceListData}
	          optionKey="idResource"
	          optionLabel="name"
	          placeholder="Masukkan resource"
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
		  ]}
	
		  itemsEvents={[
		    <Button id="_cXSOMEh6EfGfS44y06AMZQ" key="Save" type="submit" variant="primary">Save</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormAddRatingForm
