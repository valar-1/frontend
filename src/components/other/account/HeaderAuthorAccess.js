import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { FiPlus, FiBookmark, FiSearch, FiLogIn } from 'react-icons/fi';
import { BsListCheck, BsQuestion, BsGear, BsPower } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import userimg from '../../../assets/images/team1.jpg'

function HeaderAuthorAccess() {
  return (
    <div className="login-dropdown-container">
    <Dropdown>
        <Dropdown.Toggle variant="light" id="header-author-access-dropdown">
            <FiLogIn />
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/login">Sign In</Dropdown.Item>
            <Dropdown.Item as={Link} to="#">Sign Up</Dropdown.Item>
            <Dropdown.Item as={Link} to="#">List Your Space</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default HeaderAuthorAccess;
