
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
import updateRating from '../services/updateRating'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormUpdateRatingForm = ({ 
	ratingDetailData
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: ratingDetailData })
  
  
  
  
  const navigate = useNavigate()
  
  const save = (data) => {
    const cleanData = cleanFormData(data)
    updateRating({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/rating`)
  	notifySuccess(`Update Rating berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Update Rating Form" 
		  onSubmit={handleSubmit(save)}
	
	    vas={[
	      <VisualizationAttr
	        label="Id Resource"
	        content={ratingDetailData?.idResource}
	        
	      />
		  ]}
	
		  formFields={[
	
	      <Controller
	        key="score"
	        name="score"
	        control={control}
	        render={({ field, fieldState }) => (
	        <InputField
	          label="Rating Score"
	          placeholder="Masukkan rating score"
	          defaultValue={ratingDetailData.score}
	          fieldState={fieldState}
	          {...field}
	          isRequired={false}
	        />
	        )}
	      />
	
	,

	
		  ]}
	
		  itemsEvents={[
		    <Button id="_ClCtQEh8EfGfS44y06AMZQ" key="Save" type="submit" variant="primary">Save</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormUpdateRatingForm
