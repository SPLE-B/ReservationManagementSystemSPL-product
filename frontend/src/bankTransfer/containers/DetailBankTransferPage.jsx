
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailBankTransfer from '../components/DetailBankTransfer'
import getDetailBankTransfer from '../services/getDetailBankTransfer'

const DetailBankTransferPage = props => {
  const { idPayment } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailBankTransfer: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail BankTransfer Page")
  }, []);


const [detailBankTransfer, setDetailBankTransfer] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailBankTransfer: true}))
				const { data: detailBankTransfer } = await getDetailBankTransfer({ idPayment })
				setDetailBankTransfer(detailBankTransfer.data)
			} finally {
				setIsLoading(prev => ({...prev, detailBankTransfer: false}))
			}
		}
		fetchData()
	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/banktransfer
			  	`}>
			  		<Button id="_hp8MwV2FEfGjCoBCLIsS7g" className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail BankTransfer"}
	singularName={"BankTransfer"}
	items={{...detailBankTransfer}}
	isLoading={isLoading.detailBankTransfer}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailBankTransfer {...{ data : { ...detailBankTransfer }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailBankTransferPage

