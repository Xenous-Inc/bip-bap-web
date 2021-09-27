import { IAction, IApiRequestPayload } from '@store/types';
import { ActionFlags, ITokenFlag } from '@store/flags';

export const tokenMiddleware = () => (next: any) => async (action: IAction<string, IApiRequestPayload>) => {
    if (!action.payload || !action.payload.flags) {
        next(action);
        return;
    }

    const passToken = async (flag: ITokenFlag): Promise<ITokenFlag> => {
        return { ...flag };
    };

    action.payload.flags = await Promise.all(
        action.payload.flags.map(async flag => (flag.name == ActionFlags.Token ? passToken(flag as ITokenFlag) : flag)),
    );

    next(action);
};
