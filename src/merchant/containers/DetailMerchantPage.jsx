
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import DetailMerchant from '../components/DetailMerchant'
import getDetailMerchant from '../services/getDetailMerchant'

const DetailMerchantPage = props => {
  const { idPayment } = useParams()
  const [isLoading, setIsLoading] = useState({
	detailMerchant: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Detail Merchant Page")
  }, []);


const [detailMerchant, setDetailMerchant] = useState()
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, detailMerchant: true}))
				const { data: detailMerchant } = await getDetailMerchant({ idPayment })
				setDetailMerchant(detailMerchant.data)
			} finally {
				setIsLoading(prev => ({...prev, detailMerchant: false}))
			}
		}
		fetchData()
	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/merchant
			  	`}>
			  		<Button id="_hk9mIV2FEfGjCoBCLIsS7g" className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail Merchant"}
	singularName={"Merchant"}
	items={{...detailMerchant}}
	isLoading={isLoading.detailMerchant}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailMerchant {...{ data : { ...detailMerchant }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailMerchantPage

