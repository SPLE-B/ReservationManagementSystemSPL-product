
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import MerchantTable from "../components/MerchantTable";
import getmerchant from '../services/getmerchant'

const TableMerchantPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableMerchant: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Merchant Page")
  }, []);


const [merchant, setmerchant] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableMerchant: true}))
				const { data: merchant } = await getmerchant()
				setmerchant(merchant.data)
			} finally {
				setIsLoading(prev => ({...prev, tableMerchant: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/merchant/add
			  	`}>
			  		<Button id="_hk4GmF2FEfGjCoBCLIsS7g" className="p-2" variant="primary">
			  		  Add
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Merchant"}
	singularName={"Merchant"}
	items={[merchant]}
	isLoading={isLoading.tableMerchant}
>
	<MerchantTable
		merchant={merchant}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableMerchantPage

