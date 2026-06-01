
import React from 'react'
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const RatingCard = ({ 
    ratingListData}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[ratingListData]}
  	
  	itemsAttrs={[
          {
            id: "idResource",
            condition: "",
            label: "Id Resource",
            featureName: "idResource",
            editable: false
          }
  ,        {
            id: "ratingScore",
            condition: "",
            label: "Rating Score",
            featureName: "score",
            editable: false
          }

  ]}
      itemsEvents={(ratingItem) => [
        <Link to={`/rating/update/${ratingItem.idRating}`}>
          <Button
            id="_sAD64EhvEfGfS44y06AMZQ"
            size="sm"
            variant=
                "primary"
          >
            Change
          </Button>
        </Link>
  	]}
    />
  )	
};

export default RatingCard;
