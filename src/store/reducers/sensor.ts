import { IApiState } from '@store/types';
import { createReducer } from '@reduxjs/toolkit';
import { ISensor } from '@api/models/Sensor';
import {
    DeleteSensorActions,
    GetSensorActions,
    IDeleteSensorActionError,
    IGetSensorActionError,
    IGetSensorActionSuccess,
    IPostSensorActionError,
    IPostSensorActionSuccess,
    PostSensorActions,
} from '@store/actions/sensor/types';

export interface ISensorState extends IApiState {
    sensor: ISensor | null;

    sensorToken: string | null;
}

const initialState: ISensorState = {
    isLoading: false,
    sensor: null,
    sensorToken: null,
    error: null,
};

const sensorReducer = createReducer(initialState, {
    // * Post Sensor Actions * //
    [PostSensorActions.Start]: () => ({
        ...initialState,
        isLoading: true,
    }),
    [PostSensorActions.Success]: (state, action: IPostSensorActionSuccess) => ({
        ...state,
        sensor: action.payload.data.sensor,
        sensorToken: action.payload.data.sensorToken,
        isLoading: false,
    }),
    [PostSensorActions.Error]: (state, action: IPostSensorActionError) => ({
        ...state,
        error: action.payload.error,
        isLoading: false,
    }),
    // * Get Sensor Actions * //
    [GetSensorActions.Start]: () => ({
        ...initialState,
        isLoading: true,
    }),
    [GetSensorActions.Success]: (state, action: IGetSensorActionSuccess) => ({
        ...state,
        sensor: action.payload.data.sensor,
        isLoading: false,
    }),
    [GetSensorActions.Error]: (state, action: IGetSensorActionError) => ({
        ...state,
        error: action.payload.error,
        isLoading: false,
    }),
    // * Delete Sensor Actions * //
    [DeleteSensorActions.Start]: state => ({
        ...state,
        isLoading: true,
    }),
    [DeleteSensorActions.Success]: () => ({
        ...initialState,
    }),
    [DeleteSensorActions.Error]: (state, action: IDeleteSensorActionError) => ({
        ...state,
        error: action.payload.error,
        isLoading: false,
    }),
});

export default sensorReducer;
