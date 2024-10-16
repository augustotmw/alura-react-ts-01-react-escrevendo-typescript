import { v4 as uuidv4 } from 'uuid';
import React from "react";
import {AppButton} from "../../../../shared/components/AppButton";
import styles from './tasksForm.module.scss';
import {ITaskForm} from "./tasksForm.interfaces";
import {ITask} from "../../pages/tasks.interface";


export class TasksForm extends React.Component<ITaskForm, any> {

    defaultState: ITask = {
        name: '',
        time: '00:00:00',
        selected: false,
        completed: false,
    };
    state: ITask = { ...this.defaultState };

    setTasks = (tasks:ITask[])=>[
        ...tasks,
        {
            ...this.state,
            selected: false,
            completed: false,
            id: uuidv4()
        }
    ];

    onChangeName = (ev:React.ChangeEvent<HTMLInputElement>)=>
        this.setState({...this.state, name: ev.target.value});

    onChangeTime = (ev:React.ChangeEvent<HTMLInputElement>)=>
        this.setState({...this.state, time: ev.target.value});

    submitForm = (ev:React.ChangeEvent<HTMLFormElement>) => {
        ev.preventDefault();
        this.props.setTasks(this.setTasks);
        this.setState({...this.defaultState});
        return false;
    }

    render() {
        return (
            <form className={styles.TasksForm} onSubmit={this.submitForm}>
                <div className={styles['form-item']}>
                    <label htmlFor="taskName">Tarefa</label>
                    <input
                        type="text"
                        name="taskName"
                        id="taskName"
                        placeholder="O que vc quer estudar?"
                        required
                        value={this.state.name}
                        onChange={this.onChangeName}
                    />
                </div>
                <div className={styles['form-item']}>
                    <label htmlFor="taskTime">Tempo</label>
                    <input
                        id="taskTime"
                        type="time"
                        name="taskTime"
                        step="1"
                        min="00:00:01"
                        max="04:30:00"
                        value={this.state.time}
                        onChange={this.onChangeTime}
                    />
                </div>
                <AppButton type="submit"> Adicionar </AppButton>
            </form>
        );
    }
}
