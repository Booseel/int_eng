import * as $ from 'jquery';

import { terms } from '.';
import { IWindow } from 'app/interfaces/IWindow';

const { TERMS } = (window as IWindow).config;
const urlP = `${TERMS}privacy-policy-v1.0.pdf`;
const urlC = `${TERMS}terms-and-conditions-v1.0.pdf`;

const modalEl = $('.modal');
const contentEl = $('.modal__content');

export const modal = () => {
    $('#Privacy, #Conditions').click( function (e: JQuery.Event): void {
        e.preventDefault();
        openModal();
        contentEl.append(this.id === 'Privacy' ? terms(urlP) : terms(urlC));
    });

    $('.wrapper, .modal__close').click((e: JQuery.Event): void => {
        closeModal();
    });
    const openModal = () => {
        modalEl.addClass('open');
    };

    const closeModal = () => {
        $('.terms__content').remove();
        modalEl.removeClass('open');
    };
};
