export interface AppButtonProps {
    children?: any;
    label?: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void
}
