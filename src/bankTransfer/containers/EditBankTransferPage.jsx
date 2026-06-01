
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import ModifiedFormEditBankTransfer from '../components/ModifiedFormEditBankTransfer'
import getBankTransferData from '../services/getBankTransferData'

const EditBankTransferPage = props => {
  const { idPayment } = useParams()
  const [isLoading, setIsLoading] = useState({
	editBankTransfer: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit BankTransfer Page")
  }, []);


const [bankTransferData, setBankTransferData] = useState()

  useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editBankTransfer: true}))
      const { data: bankTransferDataResponse } = await getBankTransferData({ idPayment })

	  setBankTransferData(bankTransferDataResponse.data)
	  setIsLoading(prev => ({...prev, editBankTransfer: false}))
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
		singularName={"BankTransfer"}
		isLoading={isLoading.editBankTransfer}
	>
		{bankTransferData ? 
		(<>
		 <ModifiedFormEditBankTransfer
			{...{ 
				bankTransferData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditBankTransferPage

