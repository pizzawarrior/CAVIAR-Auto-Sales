import React, { useState } from 'react';

import logo from './assets/caviar-logo.png';
import {
    NavStyle,
    LeftContainer,
    RightContainer,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    NavbarLinkContainer,
    NavbarLink,
    Logo,
    OpenLinksBtn,
    NavbarLinkExtended,
} from './style';

export default function Nav() {
    const [extendNavBar, setExtendNavBar] = useState(false);

    return (
        <NavStyle className={extendNavBar ? 'full_screen' : ''}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to='/'>
                            <Logo src={logo}></Logo>
                        </NavbarLink>
                    </NavbarLinkContainer>
                </LeftContainer>
                <RightContainer>
                    <NavbarLink to='/sales'>Sales Department</NavbarLink>
                    <NavbarLink to='/service'>Service Department</NavbarLink>
                    <OpenLinksBtn
                        onClick={() => {
                            setExtendNavBar((curr) => !curr);
                        }}
                    >
                        {extendNavBar ? <> &#10005; </> : <> &#8801;</>}
                    </OpenLinksBtn>
                </RightContainer>
            </NavbarInnerContainer>
            {extendNavBar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended to='/sales'>
                        Sales Department
                    </NavbarLinkExtended>
                    <NavbarLinkExtended to='/service'>
                        Service Department
                    </NavbarLinkExtended>
                    <NavbarLinkExtended to='/sales-form'>
                        Add Sales Forms
                    </NavbarLinkExtended>
                </NavbarExtendedContainer>
            )}
        </NavStyle>
    );
}
