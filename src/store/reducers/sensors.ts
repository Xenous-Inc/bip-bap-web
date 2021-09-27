import { IApiState } from '@store/types';
import { createReducer } from '@reduxjs/toolkit';
import { ISensor } from '@api/models/Sensor';
import {
    DeleteSensorActions,
    GetAllSensorsActions,
    GetSensorActions,
    IDeleteSensorActionError,
    IGetAllSensorsActionError,
    IGetAllSensorsActionSuccess,
    IGetSensorActionError,
    IGetSensorActionSuccess,
} from '@store/actions/sensor/types';

export interface ISensorsState extends IApiState {
    sensors: Array<ISensor> | null;
}

const initialState: ISensorsState = {
    isLoading: false,
    sensors: null,
    error: null,
};

const sensorsReducer = createReducer(initialState, {
    // * Get All Sensors Actions * //
    [GetAllSensorsActions.Start]: () => ({
        ...initialState,
        isLoading: true,
    }),
    [GetAllSensorsActions.Success]: (state, action: IGetAllSensorsActionSuccess) => ({
        ...state,
        sensors: [...action.payload.data.sensors],
        isLoading: false,
    }),
    [GetAllSensorsActions.Error]: (state, action: IGetAllSensorsActionError) => ({
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
        sensors: [action.payload.data.sensor],
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

export default sensorsReducer;
