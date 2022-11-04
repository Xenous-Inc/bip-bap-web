import React, { useEffect, useState } from 'react';
import styles from './MapController.module.css';
import './MapController.module.css';
import { IconButton } from '@chakra-ui/react';
import FlowerIcon from '@icons/FlowerIcon';
import SkullIcon from '@icons/SkullIcon';
import PlusIcon from '@icons/PlusIcon';
import MinusIcon from '@icons/MinusIcon';
import LayersIcon from '@icons/LayersIcon';
import theme from '@styles/theme';
import LineChartIcon from '@icons/LineChartIcon';
import MapPinIcon from '@icons/MapPinIcon';

interface IMapControllerProp extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    onLayerChange?(layers: Array<Layer>): void;

    onZoomOut?(): void;

    onZoomIn?(): void;
}

export enum Layer {
    sensors = 'sensors',
    gradient = 'gradient',
}

const MapController: React.FC<IMapControllerProp> = props => {
    const { onLayerChange, onZoomIn, onZoomOut } = props;

    const [layersOpen, setLayersOpen] = useState(false);
    const [layers, setLayers] = useState([Layer.gradient]);

    useEffect(() => onLayerChange?.(layers), [layers]);

    return (
        <div {...props} className={`${styles.container} ${props.className}`}>
            <div className={styles.container__legend}>
                <FlowerIcon height={20} />
                <div className={styles.legend__gradient} />
                <SkullIcon height={20} />
            </div>

            <div className={styles.container__zoom}>
                <IconButton onClick={onZoomIn} variant={'shadow'} icon={<PlusIcon />} aria-label={'Zoom In'} />
                <IconButton onClick={onZoomOut} variant={'shadow'} icon={<MinusIcon />} aria-label={'Zoom Out'} />
            </div>

            <div className={styles.container__layers}>
                <div
                    className={`${styles.layers__selector} ${
                        layersOpen ? styles.layers__selector_state_active : styles.layers__selector_state_inactive
                    }`}
                >
                    <div className={styles.selector__selectorOptions}>
                        <span
                            className={
                                layers.includes(Layer.gradient)
                                    ? `${styles.selectorOptions__option} ${styles.selectorOptions__option_state_active}`
                                    : styles.selectorOptions__option
                            }
                            onClick={() =>
                                layers.includes(Layer.gradient)
                                    ? setLayers(layers.filter(l => l != Layer.gradient))
                                    : setLayers([...layers, Layer.gradient])
                            }
                        >
                            <LineChartIcon
                                stroke={
                                    layers.includes(Layer.gradient) ? theme.colors.white : theme.colors.elements.icons
                                }
                            />
                            Градиент
                        </span>
                        <span
                            className={
                                layers.includes(Layer.sensors)
                                    ? `${styles.selectorOptions__option} ${styles.selectorOptions__option_state_active}`
                                    : styles.selectorOptions__option
                            }
                            onClick={() =>
                                layers.includes(Layer.sensors)
                                    ? setLayers(layers.filter(l => l != Layer.sensors))
                                    : setLayers([...layers, Layer.sensors])
                            }
                        >
                            <MapPinIcon
                                stroke={
                                    layers.includes(Layer.sensors) ? theme.colors.white : theme.colors.elements.icons
                                }
                            />
                            Датчики
                        </span>
                    </div>
                </div>
                <IconButton
                    onClick={() => setLayersOpen(prev => !prev)}
                    variant={'shadow'}
                    icon={
                        <div
                            className={`${styles.layers__icon} ${
                                layersOpen ? styles.layers__icon_state_active : styles.layers__icon_state_inactive
                            }`}
                        >
                            {layersOpen ? <PlusIcon /> : <LayersIcon width={28} />}
                        </div>
                    }
                    aria-label={'Layers'}
                />
            </div>
        </div>
    );
};

export default MapController;
