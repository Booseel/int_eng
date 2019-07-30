import { store } from 'app/store';
import { activateButton } from 'app/Form';
import { validation } from './validate';

export const setField = (name: string, value: any): void => {
    const { noValidField, fields} = store;
    let newValue = '';
    if (validation(name, value)) {
        newValue = value;
    }
    fields[name] = newValue;
    editEmptyField(name, newValue);
    noValidField.length === 0 ? setButtonStatus(true) : setButtonStatus(false);
};

export const setButtonStatus = (value: boolean) => {
    store.activeButton = value;
    activateButton(value);
};

export const getFields = (): any => store.fields;

export const getInvalidArray = (): string[] => store.noValidField;

const editEmptyField = (name: string, value: string) => {
    const { noValidField } = store;
    const position = noValidField.indexOf(name);
    if (value && position !== -1 ) {
        noValidField.splice(position, 1);
    } else if (!value && position === -1) {
        noValidField.push(name);
    }
};