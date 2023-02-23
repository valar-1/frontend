import React from 'react';
import {IoIosLink} from "react-icons/io";
import {FiHeart, FiPhone} from "react-icons/fi";
import {FaRegCalendarCheck} from "react-icons/fa";
import {AiOutlineEye} from "react-icons/ai";
import {Link} from "react-router-dom";

function PlaceGrid({griditems}) {
    return (
        <>
            {griditems.map((item, index) => {
                return (
                    <div className="col-lg-4 column-td-6" key={index}>
                        <div className="card-item">
                            <Link to={item.titleUrl} className="card-image-wrap">
                                <div className="card-image">
                                    <img src={item.image} className="card__img" alt="Place" />
                                </div>
                            </Link>
                            <div className="card-content-wrap">
                                <div className="card-content">
                                    <Link to={item.titleUrl}>
                                        <h4 className="card-title">{item.title}
                                        </h4>
                                        <p className="card-sub">
                                            {item.stitle}
                                        </p>
                                    </Link>
                                    <div className="card-price">
                                        <span className="card-price__amount">{item.price}&nbsp;</span>
                                        <span className="card-price__label">/ &nbsp;per day</span>
                                    </div>
                                </div>
                              {/*   <div className="rating-row">
                                    <div className="rating-rating">
                                        {item.ratings.map((rating, index) => {
                                            return (
                                                <span key={index}>{rating}</span>
                                            )
                                        })}
                                        <span className="rating-count">{item.ratingNum}</span>
                                    </div> */}
{/*                                     <div className="listing-info">
                                        <ul>
                                            <li><span className="info__count"><AiOutlineEye /></span> {item.view}</li>
                                            <li>
                                                <span className="info__save" data-toggle="tooltip" data-placement="top" title="Bookmark">
                                                    <FiHeart />
                                                </span>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    
                )
            })}
        </>
    );
}

export default PlaceGrid;
