import React, { useState } from 'react';
import { InputChangeEvent } from '../input-change-event.model';
import './text-input.component.scss';

interface Props {
    id: string;
    label: string;
    name?: string;
    placeholder?: string;
    value?: string;

    onValueChange: (event: InputChangeEvent<string>) => void;
}

export const TextInput = (props: Props) => {
    const { id, label, placeholder, name } = props;

    const [value, setValue] = useState(props.value);

    function onValueChange(event: React.FormEvent<HTMLInputElement>) {
        setValue(event.currentTarget.value);
        props.onValueChange({
            name: event.currentTarget.name,
            value: event.currentTarget.value
        });
    }

    return (
        <>
            <div className="text-input">
                <label htmlFor={id}>{label}</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder={placeholder}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onValueChange}
                />
            </div>
        </>
    );
}