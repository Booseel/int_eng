import * as $ from 'jquery';

import { setField } from 'app/services';

export const currency = (): void => {
    $('.currency').click(function(e: JQuery.Event): void {
        const allCurrency = $('.currency');
        allCurrency.removeClass('currency__active');
        allCurrency.addClass('disable');
        $(this).removeClass('disable');
        $(this).addClass('currency__active');
        $('#currency_message').removeClass('show');
        const currencyValue = $(this).data('currency');
        setField('currency', currencyValue);
    });
};
