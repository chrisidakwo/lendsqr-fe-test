import {InputHTMLAttributes, ReactNode} from "react";

export interface WebInputWrapperProps
{
    iconRight?: string | ReactNode;
    onChangeText?: (value: string) => void;
    fontFamily?: string;
}

export type InputWebProps = WebInputWrapperProps & InputHTMLAttributes<HTMLInputElement>;
