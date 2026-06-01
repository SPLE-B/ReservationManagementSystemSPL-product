
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import ModifiedFormAddCancellationPaid from '../components/ModifiedFormAddCancellationPaid'

const AddCancellationPaidPage = props => {
  const [isLoading, setIsLoading] = useState({
	addCancellationPaid: false,

  });
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Add CancellationPaid Page")
  }, []);

  return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"CancellationPaid"}
		
	>
		<ModifiedFormAddCancellationPaid
			{...props}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddCancellationPaidPage

