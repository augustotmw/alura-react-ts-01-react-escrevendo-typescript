import React from "react";
import styles from './appButton.module.scss';
import {AppButtonProps} from "./appButton.interfaces";


export class AppButton extends React.Component<AppButtonProps, {}> {

    render() {
        const { type = 'button', onClick = ()=>{}} = this.props;

        return (
            <button {...{type, onClick} } className={styles.btn}>{ this.props.children }</button>
        );
    }
}
