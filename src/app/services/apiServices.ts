import axios from 'axios';

import { register } from './gql';
import { IResponse, UserRegisterPayload, ShortRegisterParam } from 'app/interfaces';
import { IWindow } from 'app/interfaces/IWindow';

const { API } = (window as IWindow).config;

// tslint:disable-next-line:no-console
const errorMessages = (error: string): void => console.log(error);


const postRequest = (param: ShortRegisterParam): Promise<any> => (
    axios({
        url: API,
        method: 'post',
        data: {
            query: register,
            variables: param,
        },
    })
);

export const shortRegister = async( param: ShortRegisterParam ): Promise<UserRegisterPayload> => {
    try {
        const errorsArray: any = {};
        const { data: { data , errors } }: IResponse = await postRequest(param);
        if (!data) {
            errors.map((k: any) => {
                if ('data' in k.extensions) {
                    const messages = k.extensions.data;
                    Object.keys(messages).map((errosKey: string) => errorsArray[errosKey] = messages[errosKey][0]);
                }
            });
            return Promise.reject(errorsArray);
        } 
        return (data.userRegistrationSimple);
    } catch (error) {
        errorMessages(error);
    }
};