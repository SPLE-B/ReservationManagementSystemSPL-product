
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import DynamicTable from "../components/DynamicTable";
import getListPricing from '../../pricing/services/getListPricing'
import getListDynamic from '../services/getListDynamic'

const TableDynamicPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableDynamic: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Dynamic Page")
  }, []);


const [listPricing, setListPricing] = useState()
	
	const [listDynamic, setListDynamic] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableDynamic: true}))
				const { data: listPricing } = await getListPricing()
				const { data: listDynamic } = await getListDynamic()
				setListPricing(listPricing.data)
				setListDynamic(listDynamic.data)
			} finally {
				setIsLoading(prev => ({...prev, tableDynamic: false}))
			}
		}
		fetchData()
  	}, [])

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`tambah
			  	`}>
			  		<Button id="_ctMmwFOREfGo6ZcKDXKvFQ" className="p-2" variant="primary">
			  		  Tambah Dynamic
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Dynamic"}
	singularName={"Dynamic"}
	items={[listPricing, listDynamic]}
	isLoading={isLoading.tableDynamic}
>
	<DynamicTable
		listPricing={listPricing}
		listDynamic={listDynamic}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableDynamicPage

