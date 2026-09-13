import type {MouseEvent} from 'react'

export type ButtonProps = {
    text: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    disabled?:boolean;
    className?: string;
}