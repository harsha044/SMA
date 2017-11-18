import { InjectionToken } from '@angular/core';
import { IAppConstant } from './Iapp.constant';

export let AppConstant = new InjectionToken<IAppConstant>('app.constant');

export const Appvalues: IAppConstant = {
    pagesize: 10,
    baseUrl: 'http://localhost:4200',
    color: 'red',
    paginationOption: [10, 20, 30]
}