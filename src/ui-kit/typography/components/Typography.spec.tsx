import TestRenderer from "react-test-renderer";

import {ThemeProvider} from "../../theme";
import Typography from "./Typography";
import {TYPOGRAPHY_VARIANT_BODY_1, TYPOGRAPHY_VARIANT_BODY_2, TYPOGRAPHY_VARIANT_SUBSCRIPT} from "../Typography.types";

describe('UIKit/Typography', () => {
    describe('Typography', () => {
        it('correctly renders h1 text', () => {
            const renderer = TestRenderer.create(
                <ThemeProvider>
                    <Typography elementType={'h1'}>Lorem ipsum dolor</Typography>
                </ThemeProvider>,
            );
            const tree = renderer.toJSON();

            expect(renderer.root.findAllByType('h1')).toHaveLength(1);
            expect(tree).toHaveStyleRule('font-size', '2.25rem');
            expect(tree).toHaveStyleRule('font-weight', '600');
            expect(tree).toHaveStyleRule('line-height', '3rem');
        });

        it('renders typography as element with different variant styles', () => {
            const renderer = TestRenderer.create(
                <ThemeProvider>
                    <Typography elementType={'p'} styleVariant={'h1'} color={'hotpink'}>
                        Lorem ipsum dolor
                    </Typography>
                </ThemeProvider>,
            );
            const tree = renderer.toJSON();

            expect(renderer.root.findAllByType('h1')).toHaveLength(0);
            expect(renderer.root.findAllByType('p')).toHaveLength(1);
            expect(tree).toHaveStyleRule('font-size', '2.25rem');
            expect(tree).toHaveStyleRule('font-weight', '600');
            expect(tree).toHaveStyleRule('line-height', '3rem');
            expect(tree).toHaveStyleRule('color', 'hotpink');
        });

        it('renders typography with default styles', () => {
            const renderer = TestRenderer.create(
                <ThemeProvider>
                    <Typography elementType={'p'}>Lorem ipsum dolor</Typography>
                </ThemeProvider>,
            );
            const tree = renderer.toJSON();

            expect(tree).toHaveStyleRule('font-size', '1rem');
            expect(tree).toHaveStyleRule('line-height', '1.75rem');
        });
    });

    describe('variantCss', () => {
        it('renders variant styles', () => {
            const tree = TestRenderer.create(
                <ThemeProvider>
                    <div>
                        <Typography elementType={'div'} styleVariant={TYPOGRAPHY_VARIANT_BODY_1}>
                            Lorem ipsum dolor
                        </Typography>
                        <Typography elementType={'div'} styleVariant={TYPOGRAPHY_VARIANT_BODY_2}>
                            Lorem ipsum dolor
                        </Typography>
                        <Typography elementType={'p'} styleVariant={TYPOGRAPHY_VARIANT_SUBSCRIPT}>
                            Lorem ipsum dolor
                        </Typography>
                    </div>
                </ThemeProvider>,
            ).toJSON();

            expect(tree).toMatchSnapshot();
        });
    });

    describe('stylesCss', () => {
        it('renders color', () => {
            const tree = TestRenderer.create(
                <ThemeProvider>
                    <div>
                        <Typography
                            elementType={'div'}
                            styleVariant={TYPOGRAPHY_VARIANT_BODY_1}
                            color={'hotpink'}
                            fontWeightRegular
                        >
                            Lorem ipsum dolor
                        </Typography>
                        <Typography
                            elementType={'div'}
                            styleVariant={TYPOGRAPHY_VARIANT_BODY_1}
                            fontWeightMedium
                        >
                            Lorem ipsum dolor
                        </Typography>
                        <Typography
                            elementType={'div'}
                            styleVariant={TYPOGRAPHY_VARIANT_BODY_1}
                            fontWeightBold
                        >
                            Lorem ipsum dolor
                        </Typography>
                        <Typography elementType={'div'}>
                            Lorem ipsum dolor
                        </Typography>
                    </div>
                </ThemeProvider>,
            ).toJSON();

            expect(tree).toMatchSnapshot();
        });
    });
});
