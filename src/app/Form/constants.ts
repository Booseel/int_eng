/**
 * Interfaces
 */
interface MessagesElement {
    password: string;
    email: string;
    [key: string]: string;

}

/**
 * Constants
 */
export const ELEMENT = '.fields__input';
export const CHECKBOX = '#terms';
export const BUTTON = '#submit__button';

export const existEmail = 'User with this email already exists.';
export const invalidEmail = 'Invalid email';

export const inputMessagesElement: MessagesElement = {
    password: '#password_message',
    email: '#email_message',
    currency: '#currency_message',
};