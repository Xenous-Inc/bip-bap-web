import { IAction, IApiRequestPayload } from '@store/types';
import { ActionFlags, ITokenFlag } from '@store/flags';
import { getSavedToken } from '@utils/storage';

export const tokenMiddleware = () => (next: any) => async (action: IAction<string, IApiRequestPayload>) => {
    if (!action.payload || !action.payload.flags) {
        next(action);
        return;
    }

    const passToken = async (flag: ITokenFlag): Promise<ITokenFlag> => ({ ...flag, data: getSavedToken() });

    action.payload.flags = await Promise.all(
        action.payload.flags.map(async flag => (flag.name == ActionFlags.Token ? passToken(flag as ITokenFlag) : flag)),
    );

    next(action);
};
