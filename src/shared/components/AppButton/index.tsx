import styles from './appButton.module.scss';
import {AppButtonProps} from "./appButton.interfaces";

const AppButton = ({ type = 'button', onClick = ()=>{}, children}: AppButtonProps) => (
    <button {...{type, onClick} } className={styles.btn}>{ children }</button>
)

export default AppButton;
