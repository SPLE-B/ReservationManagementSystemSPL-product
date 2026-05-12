
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import PricingTable from "../components/PricingTable";
import getListPricing from '../services/getListPricing'

const TablePricingPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tablePricing: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Pricing Page")
  }, []);


const [listPricing, setListPricing] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tablePricing: true}))
				const { data: listPricing } = await getListPricing()
				setListPricing(listPricing.data)
			} finally {
				setIsLoading(prev => ({...prev, tablePricing: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/pricing/tambah
			  	`}>
			  		<Button id="_I4GdEExpEfGmhuROO-RZsA" className="p-2" variant="primary">
			  		  Tambah Pricing
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Pricing"}
	singularName={"Pricing"}
	items={[listPricing]}
	isLoading={isLoading.tablePricing}
>
	<PricingTable
		listPricing={listPricing}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TablePricingPage

