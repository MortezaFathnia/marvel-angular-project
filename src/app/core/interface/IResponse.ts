import { IResult } from './IResult';
export class IResponse<T> {
        code?: number;
        status?: string;
        data?: IResult<T>;
}