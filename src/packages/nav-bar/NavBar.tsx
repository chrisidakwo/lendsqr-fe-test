import React, {Fragment} from 'react';

import {LeftElements, RightElements} from './components/MenuSections';
import {NavDesktopContainer, NavLeftElementsContainer, NavRightElementsContainer} from "./components/StyledNavBar";

export interface NavBarProps
{
    onMenuClicked: () => void;
}

const NavBar = ({onMenuClicked}: NavBarProps): JSX.Element => {
    return (
        <Fragment>
            <NavDesktopContainer>
                <NavLeftElementsContainer>
                    <LeftElements menuClicked={() => onMenuClicked()}/>
                </NavLeftElementsContainer>

                <NavRightElementsContainer>
                    <RightElements/>
                </NavRightElementsContainer>
            </NavDesktopContainer>
        </Fragment>
    );
};

export default NavBar;
