import React  from 'react';
import FooterLeftWidget from './FooterLeftWidget';
import sectiondata from "../../../store/store";

function CopyrightMenu({copyrightright}) {
    return (
        <>
            <div className="copyright-right-side justify-content-end d-flex align-items-center">
                <ul className="list-items">
                    {copyrightright.menus.map((link, index) => {
                        return (
                            <li key={index}>
                                <a href={link.path}>{link.title}</a>
                            </li>
                        )
                    })}
                </ul>
                <div className="select-field">
                    <select name="language" id="language-switch">
                        {copyrightright.languages.map((items, i) => {
                            return (
                                <option value={i} key={i}>{items}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="select-field">
                    <select name="currency" id="currency-switch">
                        {copyrightright.currency.map((items, i) => {
                            return (
                                <option value={i} key={i}>{items}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                <FooterLeftWidget footerleftcnts={sectiondata.footerdata}/>
                </div>
            </div>
        </>
    );
}

export default CopyrightMenu;
