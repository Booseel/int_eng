export interface IResponse extends Response {
    data: {
        data: IResponseData;
        errors: ErrorData[];
        extensions: any;
    };
}

export interface ShortRegisterParam {
    email: string;
    password: string;
    currency:  'EUR' | 'USD' | 'GBP' | 'RUB';
}

export interface UserRegisterPayload {
    [key: string]: any;
}

export interface IObject<I = any> {
    [key: string]: I;
}

interface ErrorData {
    extensions: ErrorExtensions;
    message: string;
    path: any[];
}

interface ErrorExtensions {
    code: string;
    data: IObject;
    debug: string;
}

interface IResponseData {
    userRegistrationSimple: {
        accessToken: string,
        loginToken: string;
        refreshToken: string;
        affiliate?: string;
    };
}
