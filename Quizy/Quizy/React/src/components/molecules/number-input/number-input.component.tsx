import React, { useState } from 'react';
import { InputChangeEvent } from '../input-change-event.model';
import './number-input.component.scss';

interface Props {
    id: string;
    label: string;
    placeholder?: string;
    value?: number;

    onValueChange: (value: InputChangeEvent<number>) => void;
}

export const NumberInput = (props: Props) => {
    const { id, label, placeholder } = props;

    const [value, setValue] = useState(props.value);

    function onValueChange(event: React.FormEvent<HTMLInputElement>) {
        const value = parseInt(event.currentTarget.value) || 0;
        setValue(value);
        props.onValueChange({
            value: value,
            name: event.currentTarget.name
        });
    }

    return (
        <>
            <div className="u-full-width">
                <label htmlFor={id}>{label}</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder={placeholder}
                    id={id}
                    value={value}
                    onChange={onValueChange}
                />
            </div>
        </>
    );
};