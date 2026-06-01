
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import DynamicTable from "../components/DynamicTable";
import getdynamic from '../services/getdynamic'

const TableDynamicPage = props => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState({
	tableDynamic: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Table Dynamic Page")
  }, []);


const [dynamic, setdynamic] = useState()


useEffect(() => {
		
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableDynamic: true}))
				const { data: dynamic } = await getdynamic()
				setdynamic(dynamic.data)
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
			  	<Link to={`/pricing/add
			  	`}>
			  		<Button id="_EM9fqF2sEfGvmuzulXFRIA" className="p-2" variant="primary">
			  		  Add
			  		</Button>
			  	</Link>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Dynamic"}
	singularName={"Dynamic"}
	items={[dynamic]}
	isLoading={isLoading.tableDynamic}
>
	<DynamicTable
		dynamic={dynamic}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableDynamicPage

