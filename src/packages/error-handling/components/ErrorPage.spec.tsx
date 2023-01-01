import {mount} from "enzyme";

import ErrorPage from "./ErrorPage";

describe('ErrorPage', () => {
    it('renders the error page with the right error message', () => {
        const wrapper = mount(
            <ErrorPage error={new Error('Test error occurred!')}/>
        );

        expect(wrapper.find('h1').text()).toBe('Oops! Something went wrong when loading the page.');
        expect(wrapper.find('p').text()).toBe('Test error occurred!');
    });
});
