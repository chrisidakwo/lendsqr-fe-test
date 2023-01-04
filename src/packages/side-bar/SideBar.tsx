import React, {Fragment} from 'react';
import styled from 'styled-components';
import useMedia from "react-use/esm/useMedia";
import Drawer from "@mui/material/Drawer";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CloseIcon from '@mui/icons-material/Close';

import {BREAKPOINT_SCREEN_MD} from "../../ui-kit/theme";
import {DashboardIcon} from "../../ui-kit/icon";
import OrganizationSwitcher from "./components/OrganizationSwitcher";
import MenuItem from "./components/MenuItem";
import {MenuItem as IMenuItem} from './types';
import {menuItems} from "./data/menu-items";
import {Typography} from "../../ui-kit/typography";
import colors from "../../ui-kit/theme/definitions/colors";

export interface SideBarProps {
    open: boolean;
    onClose: () => void;
}

export interface ContentProps {
    isLargeScreen: boolean;
    sideBarClose?: () => void;
}

const MenuSection = styled.div``;

const SectionHeader = styled(Typography)`
  color: ${colors.grey.main};
  display: block;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  text-transform: uppercase;
  margin: 40px 0 20px;
  padding: 0 30px;
`;

const ContentWrapper = styled.div`
  padding: 130px 0 20px;

  @media (max-width: ${BREAKPOINT_SCREEN_MD}px) {
    padding: 30px 0 20px;
  }
`;

const SidebarMenuItems = () => {
    const Items = Object.keys(menuItems).map((key) => {
        const items = menuItems[key] as IMenuItem[];

        return (
            <MenuSection key={key}>
                <SectionHeader elementType='span'>{key}</SectionHeader>
                {items.map((item) => <MenuItem
                    label={item.label}
                    url={item.url}
                    icon={item.icon}
                    key={key + item.label}
                />)}
            </MenuSection>
        );
    });

    return (
        <Fragment>
            <MenuItem url='/' label='Dashboard' icon={DashboardIcon}/>
            {Items}
        </Fragment>
    );
}

const Content = ({isLargeScreen, sideBarClose}: ContentProps): JSX.Element => {
    return (
        <ContentWrapper>
            {!isLargeScreen && (
                <div
                    style={{display: 'flex', alignItems: 'center', paddingLeft: '30px', marginBottom: '1rem'}}
                    onClick={() => sideBarClose && sideBarClose()}
                >
                    <CloseIcon sx={{color: colors.blue.dark, height: 16, width: 16}}/>
                </div>
            )}
            <OrganizationSwitcher/>
            <SidebarMenuItems/>
        </ContentWrapper>
    );
}

const SideBar = ({open, onClose}: SideBarProps): JSX.Element => {
    const isLargeScreen = useMedia(`(min-width: ${BREAKPOINT_SCREEN_MD}px)`);
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    return (
        <Fragment>
            {isLargeScreen ? (
                <Drawer
                    onClose={onClose}
                    open={open}
                    anchor="left"
                    variant="permanent"
                    PaperProps={{
                        sx: {
                            width: 285,
                            boxShadow: '0 5px 20px rgba(0, 0, 0, 0.04)',
                            border: '0',
                            flexShrink: 0,
                            [`& .MuiDrawer-paper`]: {width: 285, boxSizing: 'border-box'},
                        }
                    }}
                >
                    <Content isLargeScreen={true}/>
                </Drawer>
            ) : (
                <SwipeableDrawer
                    onClose={onClose}
                    open={open}
                    onOpen={() => undefined}
                    anchor="left"
                    variant="temporary"
                    sx={{zIndex: 1500}}
                    PaperProps={{
                        sx: {
                            width: 285
                        }
                    }}
                    disableBackdropTransition={!iOS}
                    disableDiscovery={iOS}
                >
                    <Content isLargeScreen={false} sideBarClose={onClose}/>
                </SwipeableDrawer>
            )}
        </Fragment>
    );
};

export default SideBar;
