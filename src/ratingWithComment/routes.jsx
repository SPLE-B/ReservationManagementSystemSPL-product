
import React from 'react';
import RatingPage from './containers/RatingPage'
import AddRatingPage from './containers/AddRatingPage'
import UpdateRatingPage from './containers/UpdateRatingPage'

const ratingWithCommentRoutes = [
{ 
    path: "/rating",
    element: <RatingPage />,
  }	
,
{ 
    path: "/rating/add",
    element: <AddRatingPage />,
  }	
,
{ 
    path: "/rating/update/:idRating",
    element: <UpdateRatingPage />,
  }	

]

export default ratingWithCommentRoutes
