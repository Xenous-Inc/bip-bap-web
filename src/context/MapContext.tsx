import React, { createContext, Dispatch, useContext, useState } from 'react';
import { LngLatLike, Map as MapBoxMap } from 'mapbox-gl';

interface IMapContext {
    map: MapBoxMap | null;

    setMap: Dispatch<MapBoxMap | null>;

    canvas: HTMLCanvasElement | null;

    setCanvas: Dispatch<HTMLCanvasElement | null>;

    coords: LngLatLike;

    setCoords: Dispatch<LngLatLike>;

    zoom: number;

    setZoom: Dispatch<number>;
}

export const MapContext = createContext<IMapContext>({
    map: null,
    setMap: () => {},
    canvas: null,
    setCanvas: () => {},
    coords: [73.371454, 54.985974],
    setCoords: () => {},
    zoom: 13,
    setZoom: () => {},
});

export const MapProvider: React.FC = props => {
    const [map, setMap] = useState<MapBoxMap | null>(null);
    const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
    const [coords, setCoords] = useState<LngLatLike>([73.371454, 54.985974]);
    const [zoom, setZoom] = useState(13);

    return (
        <MapContext.Provider value={{ map, setMap, canvas, setCanvas, coords, setCoords, zoom, setZoom }}>
            {props.children}
        </MapContext.Provider>
    );
};

export const useMapContext = () => ({ ...useContext(MapContext) });
