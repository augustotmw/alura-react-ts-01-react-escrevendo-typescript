import {ITask} from "../../pages/tasks.interface";

export interface ITasksChrono {
    startTimer: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    time: number;
    timerOn: boolean;
}
