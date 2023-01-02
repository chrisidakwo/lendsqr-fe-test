import React, {Fragment} from 'react';

import {NavDesktopContainer, NavLeftElementsContainer} from "./components/StyledNavBar";
import LeftElements from "./components/MenuSections/LeftElements";

const NavBar = (): JSX.Element => {
    return (
        <Fragment>
            <NavDesktopContainer>
                <NavLeftElementsContainer>
                    <LeftElements />
                </NavLeftElementsContainer>
            </NavDesktopContainer>
        </Fragment>
    );
};

export default NavBar;
