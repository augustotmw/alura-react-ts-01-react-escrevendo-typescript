export interface AppButtonProps {
    children?: React.ReactNode;
    label?: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}
