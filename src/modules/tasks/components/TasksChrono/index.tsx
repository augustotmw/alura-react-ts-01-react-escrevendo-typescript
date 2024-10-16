import styles from './tasksChrono.module.scss';
import {AppButton} from "../../../../shared/components/AppButton";
import TasksChronoClock from "../TasksChronoClock";
import {ITasksChrono} from "./tasksChrono.interfaces";

export default function TasksChrono({ time }:ITasksChrono) {
    return (
        <div className={styles.TasksChrono}>
            <h3>Por favor, escolha uma tarefa e inicie o cronômetro.</h3>
            <div className={styles.clockWrapper}>
                <TasksChronoClock { ...{time} } />
            </div>
            <AppButton>Iniciar</AppButton>
        </div>
    );
}
