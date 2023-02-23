import React from 'react';
import Button from "../../common/Button";
import { BsEye } from 'react-icons/bs'
import {Link} from "react-router-dom";

function HighlightedCategory({categories}) {
    return (
        <>
            <div className="highlighted-categories">
                <div className="highlight-lists d-flex">
                    {categories.map((list, index) => {
                        return (
                            <div key={index}>
                                <div className="category-text radius-ellipsoid text-center bg-grey">
                                    {list.text}
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="highlight-btn mt-4">
                    <Button text="view more categories" className="radius-rounded" url="/all-categories">
                        <span className="la la-eye">
                            <BsEye />
                        </span>
                    </Button>
                </div>

            </div>
        </>
    );
}


export default HighlightedCategory;
