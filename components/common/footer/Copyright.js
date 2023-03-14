import React from 'react';
import CopyrightMenu from "./CopyrightMenu";
import sectiondata from "../../../data/store";

function Copyright() {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="copy-right margin-top-50px padding-top-60px">
                        <p className="copy__desc">
                            &copy; Copyright Hyboria Inc. 2023
                        </p>

                        <CopyrightMenu copyrightright={sectiondata.Footerdata.copyright} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Copyright;
