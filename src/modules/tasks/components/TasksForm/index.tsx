import { v4 as uuidv4 } from 'uuid';
import React, {useState} from "react";
import AppButton from "../../../../shared/components/AppButton";
import styles from './tasksForm.module.scss';
import {ITaskForm} from "./tasksForm.interfaces";
import {ITask} from "../../pages/tasks.interface";

const TasksForm = ({setTasks}: ITaskForm) => {
    const defaultState: ITask = {
        name: '',
        time: '00:00:00',
        selected: false,
        completed: false,
    };
    const [form, setForm] = useState<ITask>({ ...defaultState });

    const addTask = (tasks:ITask[])=>[
        ...tasks,
        {
            ...form,
            selected: false,
            completed: false,
            id: uuidv4()
        }
    ];

    const onChangeName = (ev:React.ChangeEvent<HTMLInputElement>)=>
        setForm({...form, name: ev.target.value});

    const onChangeTime = (ev:React.ChangeEvent<HTMLInputElement>)=>
        setForm({...form, time: ev.target.value});

    const submitForm = (ev:React.ChangeEvent<HTMLFormElement>) => {
        ev.preventDefault();
        setTasks(addTask);
        setForm({...defaultState});
        return false;
    }

    return (
        <form className={styles.TasksForm} onSubmit={submitForm}>
            <div className={styles['form-item']}>
                <label htmlFor="taskName">Tarefa</label>
                <input
                    type="text"
                    name="taskName"
                    id="taskName"
                    placeholder="O que vc quer estudar?"
                    required
                    value={form.name}
                    onChange={onChangeName}
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
                    value={form.time}
                    onChange={onChangeTime}
                />
            </div>
            <AppButton type="submit"> Adicionar </AppButton>
        </form>
    );
}

export default TasksForm;
