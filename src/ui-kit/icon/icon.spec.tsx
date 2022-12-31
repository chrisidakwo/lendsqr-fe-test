import 'jest-styled-components';
import React from 'react';
import TestRenderer from 'react-test-renderer';

import {
    BankIcon,
    BriefcaseIcon,
    ClipboardIcon,
    CoinsIcon,
    DashboardIcon,
    EqualizerIcon,
    ExchangeIcon,
    FilterIcon,
    GalaxyIcon,
    GraphIcon,
    HandshakeIcon,
    MoneyBagIcon,
    MoneyHandIcon,
    NotificationIcon,
    PercentBadgeIcon,
    PiggyBankIcon,
    ScrollPaperIcon,
    SearchIcon,
    UserCheckIcon,
    UserSettingsIcon,
    UsersIcon,
    UserTimesIcon,
} from "./svgs";

describe('UI Kit/icon', () => {
    it('Renders BankIcon', () => {
        const render = TestRenderer.create(<BankIcon />).toJSON();
        expect(render).toMatchSnapshot();
    });

    it('Renders BriefcaseIcon', () => {
        const render = TestRenderer.create(<BriefcaseIcon />).toJSON();
        expect(render).toMatchSnapshot();
    });

    it('Renders BriefcaseIcon with a different color', () => {
        const render = TestRenderer.create(<BriefcaseIcon fillColor="#e89d7a" />).toJSON();
        expect(render).toMatchSnapshot();
    });

    it('Renders ClipboardIcon', () => {
        const render = TestRenderer.create(<ClipboardIcon />).toJSON();
        expect(render).toMatchSnapshot();
    });

    it('Renders CoinsIcon', () => {
        const render = TestRenderer.create(<CoinsIcon />).toJSON();
        expect(render).toMatchSnapshot();
    });

    it('Renders DashboardIcon', () => {
        const render = TestRenderer.create(<DashboardIcon />).toJSON();
        expect(render).toMatchSnapshot();
    });

    it('Renders EqualizerIcon', () => {
        const render = TestRenderer.create(<EqualizerIcon />).toJSON();
        expect(render).toMatchSnapshot();
    });

    it('Renders ExchangeIcon', () => {
        const render = TestRenderer.create(<ExchangeIcon />).toJSON();
        expect(render).toMatchSnapshot();
    });

    it('Renders FilterIcon', () => {
        const render = TestRenderer.create(<FilterIcon />).toJSON();
        expect(render).toMatchSnapshot();
    });

    it('Renders GalaxyIcon', () => {
        const render = TestRenderer.create(<GalaxyIcon />).toJSON();
        expect(render).toMatchSnapshot();
    });

    it('Renders GraphIcon', () => {
        const render = TestRenderer.create(<GraphIcon />).toJSON();
        expect(render).toMatchSnapshot();
    });

    it('Renders HandshakeIcon', () => {
        const render = TestRenderer.create(<HandshakeIcon />).toJSON();
        expect(render).toMatchSnapshot();
    });

    it('Renders MoneyBagIcon', () => {
        const render = TestRenderer.create(<MoneyBagIcon />).toJSON();
        expect(render).toMatchSnapshot();
    });

    it('Renders MoneyHandIcon', () => {
        const render = TestRenderer.create(<MoneyHandIcon />).toJSON();
        expect(render).toMatchSnapshot();
    });

    it('Renders NotificationIcon', () => {
        const render = TestRenderer.create(<NotificationIcon />).toJSON();
        expect(render).toMatchSnapshot();
    });

    it('Renders PercentBadgeIcon', () => {
        const render = TestRenderer.create(<PercentBadgeIcon />).toJSON();
        expect(render).toMatchSnapshot();
    });

    it('Renders PiggyBankIcon', () => {
        const render = TestRenderer.create(<PiggyBankIcon />).toJSON();
        expect(render).toMatchSnapshot();
    });

    it('Renders ScrollPaperIcon', () => {
        const render = TestRenderer.create(<ScrollPaperIcon />).toJSON();
        expect(render).toMatchSnapshot();
    });

    it('Renders SearchIcon', () => {
        const render = TestRenderer.create(<SearchIcon fillColor={'red'} />).toJSON();
        expect(render).toMatchSnapshot();
    });

    it('Renders UserCheckIcon', () => {
        const render = TestRenderer.create(<UserCheckIcon />).toJSON();
        expect(render).toMatchSnapshot();
    });

    it('Renders UserSettingsIcon', () => {
        const render = TestRenderer.create(<UserSettingsIcon />).toJSON();
        expect(render).toMatchSnapshot();
    });

    it('Renders UsersIcon', () => {
        const render = TestRenderer.create(<UsersIcon />).toJSON();
        expect(render).toMatchSnapshot();
    });

    it('Renders UserTimesIcon', () => {
        const render = TestRenderer.create(<UserTimesIcon />).toJSON();
        expect(render).toMatchSnapshot();
    });
});
