import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from '../components/Buttons';
import logo from '../img/PlanB-Logo.png';


export default class Navbar extends Component {
    render() {
        return(
            <NavWrap className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/Shirt-Front/'>
                    <img src={logo} alt="store" width="50" height="50" className="navbar-brand" />
                </Link>

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/Shirt-Front/" className="nav-link nav-link-home">
                            Shop
                        </Link>
                    </li>
                </ul>

   
                {/* Login and Cart Links aligned to right of navbar */}
                <div className = "ml-auto row">

                <Link to="/Shirt-Front/contact" className="nav-item text-inline m-auto my-auto px-2">
                    <ButtonContainer>
                        Contact
                    </ButtonContainer>
                </Link>

                <Link to="/Shirt-Front/cart" className="nav-item text-inline m-auto my-auto px-2">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                        Cart!
                    </ButtonContainer>
                </Link>
                </div>


            </NavWrap>
        
        )
    }
}


const NavWrap = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color:var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform:capitalize;
    }
    .nav-item{
        font-size: small;
    }
`;

