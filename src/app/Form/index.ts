import * as $ from 'jquery';

import { 
    setField, 
    getInvalidArray, 
    getFields,
    shortRegister, 
} from 'app/services';
import { 
    ELEMENT, 
    CHECKBOX, 
    inputMessagesElement,
    BUTTON,
    existEmail,
    invalidEmail,
} from './constants';
import { passwordMessage } from 'app/services/validate';
import { IObject } from 'app/interfaces';
import { IWindow } from 'app/interfaces/IWindow';


export const form = (): void => {
    const { BASE_URL } = (window as IWindow).config;
    $('#have_account').attr('href', `${BASE_URL}#login`);
    $(ELEMENT).on('input', function(e: JQuery.Event): void {
        const value = String($(this).val()); 
        setField(this.id, value);
        const invalid = getInvalidArray();
        const element = $(this);
        const message = $(inputMessagesElement[this.id]);
        if (this.id === 'email') {
            message.text(invalidEmail);
        }
        if (this.id === 'password') {
            message.text(passwordMessage);
        }
        element.toggleClass('valid, invalid', invalid.indexOf(this.id) !== -1);
        message.toggleClass('hide, show', invalid.indexOf(this.id) !== -1);
    });

    $(CHECKBOX).on('change', function(e: JQuery.Event): void {
        const checked = $(this).prop('checked') ? 'accept' :  '';
        $('#checkmark').toggleClass('invalid', !checked);
        setField(this.id, checked);
    });

    $('#eye-open, #eye-close').on('click', (e: JQuery.Event): void => {
        $('#password').attr('type', (_, attr) => attr === 'password' ? 'text' : 'password');
        $('#eye-open, #eye-close').toggleClass('hide');
    });

    $(BUTTON).click(function(e: JQuery.Event): void {
        const submitButton = $(this);
        if (!submitButton.hasClass('active_btn')) {
            e.preventDefault();
        } else {
            const { terms, ...rest } = getFields();
            shortRegister(rest).then(
                (data: IObject<string>) => {
                  window.location.href = `${BASE_URL}?loginToken=${data.loginToken}`;
                },
                (error: IObject<string>) => {
                    if ('email' in error) {
                        setField('email', '');
                        const emailMessage = $('#email_message');
                        emailMessage.toggleClass('hide, show');
                        $('#email').addClass('invalid');
                        emailMessage.text(existEmail);
                    }
                },
            );
        }
        
    });
};

export const activateButton = (isActive: boolean) => {
    const button = $('.btn');
    isActive ? button.addClass('active_btn') : button.removeClass('active_btn');
};


