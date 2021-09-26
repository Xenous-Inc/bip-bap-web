import { IAction, IApiRequestPayload } from '@store/types';

const cleanerMiddleware = () => (next: any) => (action: IAction<string, IApiRequestPayload>) => {
    if (!action.payload) {
        next(action);
        return;
    }

    delete action.payload.flags;

    next(action);
};

export default cleanerMiddleware;
