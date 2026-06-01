import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import ratingRoutes from "@/rating/routes";
import bookingTypeRoutes from "@/bookingType/routes";
import pricingRoutes from "@/pricing/routes";
import bankTransferRoutes from "@/bankTransfer/routes";
import cancellationRoutes from "@/cancellation/routes";
import resourceRoutes from "@/resource/routes";
import cancellationPaidRoutes from "./cancellationPaid/routes";
import dynamicRoutes from "./dynamic/routes";
import sessionBasedRoutes from "./sessionBased/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...ratingRoutes, 
	...sessionBasedRoutes, 
	...dynamicRoutes, 
	...bankTransferRoutes, 
	...cancellationPaidRoutes, 
	...resourceRoutes, 
  ])
  return router
}

const MobileRoutes = () => {
	const router = useRoutes([ 
	  ...commonMobileRoutes, 
  ])
  return router
}

export {GlobalRoutes, MobileRoutes}
