import React from "react";
import styles from './appButton.module.scss';
import {AppButtonProps} from "./appButton.interfaces";


export class AppButton extends React.Component<AppButtonProps, {}> {

    render() {
        const { type = 'button'} = this.props;

        return (
            <button {...{type}} className={styles.btn}>{ this.props.children }</button>
        );
    }
}
