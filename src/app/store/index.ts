/**
 * Interfaces
 */
interface Store {
    fields: {
        terms: string;
        email: string;
        password: string;
        currency: string;
        [key: string]: any;
    };
    activeButton: boolean;
    noValidField: string[];
}

export const store: Store = {
    fields: {
        email: '',
        password: '',
        terms: 'accept',
        currency: 'USD', 
    },
    activeButton: false,
    noValidField: ['email', 'password'],
};


