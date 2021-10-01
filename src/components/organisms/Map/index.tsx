import React, { useCallback, useEffect, useRef } from 'react';
import mapboxgl, { Map as MapBoxMap } from 'mapbox-gl';
import theme from '@styles/theme';
import styles from './Map.module.css';
import { useMapContext } from '@context/MapContext';

mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN || '';

interface IMapProp extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    onMove?(): void;
}

const Map: React.FC<IMapProp> = props => {
    const { id = 'Map__container', onMove } = props;

    const { map, setMap, canvas, setCanvas, coords, setCoords, zoom, setZoom } = useMapContext();

    const container = useRef<HTMLDivElement>(null);

    const boundCanvas = useCallback((_map: MapBoxMap) => {
        let firstSymbolLayer = '';
        const layers = _map.getStyle().layers;
        if (layers)
            for (const layer of layers)
                if (layer.type == 'symbol') {
                    firstSymbolLayer = layer.id;
                    break;
                }

        const bounds = _map.getBounds();
        // const deltaLng = Math.abs(bounds.getEast() - bounds.getWest());
        // const deltaLat = Math.abs(bounds.getNorth() - bounds.getSouth());
        // const additionLng = deltaLng * (deltaLng > deltaLat ? biggerCanvasSideCoef : smallerCanvasSideCoef);
        // const additionLat = deltaLat * (deltaLat > deltaLng ? biggerCanvasSideCoef : smallerCanvasSideCoef);

        _map.addSource('canvas-source', {
            type: 'canvas',
            canvas: 'container__canvas',
            coordinates: [
                // [bounds.getWest() - additionLng, bounds.getNorth() + additionLat],
                // [bounds.getEast() + additionLng, bounds.getNorth() + additionLat],
                // [bounds.getEast() + additionLng, bounds.getSouth() - additionLat],
                // [bounds.getWest() - additionLng, bounds.getSouth() - additionLat],
                [bounds.getWest(), bounds.getNorth()],
                [bounds.getEast(), bounds.getNorth()],
                [bounds.getEast(), bounds.getSouth()],
                [bounds.getWest(), bounds.getSouth()],
            ],
        });

        _map.addLayer({ id: 'canvas-layer', type: 'raster', source: 'canvas-source' }, firstSymbolLayer);
    }, []);

    const drawCanvas = useCallback(() => {
        const ctx = canvas?.getContext('2d');

        if (canvas && ctx) {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = `${theme.colors.red}33`;
            ctx.beginPath();
            ctx.rect(0, 0, canvas.width, canvas.height);
            ctx.fill();
        }
    }, [canvas]);

    useEffect(() => {
        if (!container.current || map) return;

        const _map = new MapBoxMap({
            container: container.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: coords,
            zoom: zoom,
            maxZoom: 15,
        });

        _map.on('move', () => {
            setCoords(_map.getCenter());
            setZoom(_map.getZoom());
        });

        _map.on('moveend', () => {
            _map.removeLayer('canvas-layer');
            _map.removeSource('canvas-source');
            boundCanvas(_map);
            drawCanvas();
        });

        _map.on('load', () => {
            boundCanvas(_map);
            drawCanvas();

            setMap(_map);
        });
    }, [container.current]);

    return (
        <div {...props} id={id} className={props.className} ref={container}>
            <canvas id={'container__canvas'} className={styles.map__canvas} ref={setCanvas} />
            {props.children}
        </div>
    );
};

export default Map;
