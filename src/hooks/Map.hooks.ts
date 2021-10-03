import { IApiState } from '@store/types';
import { ISensor } from '@api/models/Sensor';
import { useSelector } from 'react-redux';
import { dispatch, RootState } from '@store/index';
import { ISensorsState } from '@store/reducers/sensors';
import { createGetAllSensorsAction } from '@store/actions/sensor/actions';

export interface IUseSensors extends IApiState {
    sensors: Array<ISensor> | null;

    getSensors(): void;
}

export const useSensors = (): IUseSensors => {
    const { isLoading, sensors, error } = useSelector<RootState, ISensorsState>(store => store.sensors);

    const getSensors = () => dispatch(createGetAllSensorsAction());

    return { isLoading, sensors, error, getSensors };
};
