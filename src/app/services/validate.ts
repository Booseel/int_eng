interface ValidateRules {
    password: any;
    [key: string]: any;
}

export const validation = (name: string, value: string): boolean =>
    validationRules[name] ? validationRules[name](value) : true;

export let passwordMessage: string;

const emailValidate = (value: string): boolean => {
    // tslint:disable-next-line:max-line-length
    const pattern  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (pattern.test(value.toLowerCase()));
};

const passwordValidate = (value: string): boolean => {
    if (/[а-я А-Я]/g.test(value)) {
        passwordMessage = 'Use only latin letters';
        return false;
    }
    if (value && value.length < 8) {
        passwordMessage = 'Choose a password with 8+ letters';
        return false;
    }
    if (!/[A-Z]/g.test(value)) {
        passwordMessage = 'Use capital letter in your password';
        return false;
    }
    return true;
};
    
const validationRules: ValidateRules = {
    password: passwordValidate,
    email: emailValidate,
};