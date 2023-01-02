import React, {ErrorInfo, JSXElementConstructor, ReactNode} from 'react';

export interface ErrorBoundaryProps {
    FallbackComponent?: JSXElementConstructor<{ error?: Error }>;
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState>
{
    public static defaultProps = {
        FallbackComponent: null,
    };

    public constructor(props: ErrorBoundaryProps)
    {
        super(props);
        this.state = {hasError: false};
    }

    public static getDerivedStateFromError(error: Error): ErrorBoundaryState
    {
        return {
            hasError: true,
            error,
        };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo): void
    {
        this.setState(() => ({
            hasError: true,
            error: error,
        }));

        console.error('An error occurred!', errorInfo);
    }

    public render(): ReactNode
    {
        const {hasError, error} = this.state;
        const {children, FallbackComponent} = this.props;

        if (hasError) {
            if (FallbackComponent) {
                return <FallbackComponent error={error}/>;
            } else {
                return null;
            }
        }

        return children;
    }
}
