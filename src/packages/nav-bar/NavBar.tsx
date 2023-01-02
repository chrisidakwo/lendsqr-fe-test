import React, {Fragment} from 'react';

import {LeftElements, RightElements} from './components/MenuSections';
import {NavDesktopContainer, NavLeftElementsContainer, NavRightElementsContainer} from "./components/StyledNavBar";

const NavBar = (): JSX.Element => {
    return (
        <Fragment>
            <NavDesktopContainer>
                <NavLeftElementsContainer>
                    <LeftElements/>
                </NavLeftElementsContainer>

                <NavRightElementsContainer>
                    <RightElements/>
                </NavRightElementsContainer>
            </NavDesktopContainer>
        </Fragment>
    );
};

export default NavBar;
