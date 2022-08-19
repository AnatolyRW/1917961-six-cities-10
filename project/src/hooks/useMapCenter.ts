import { Marker, Map } from 'leaflet';
import { MutableRefObject, useEffect } from 'react';
import { City } from '../types/data-types/offer';

function useMapCtnter(
  prevActiveCityRef: MutableRefObject<City>,
  prevMarkersRef: MutableRefObject<Marker[]>,
  activeCity: City,
  map: Map | null
): void {

  useEffect(() => {
    if (prevActiveCityRef.current !== activeCity && map) {
      prevActiveCityRef.current = activeCity;
      prevMarkersRef.current.forEach((marker) => marker.remove());
      prevMarkersRef.current = [];
      map.setView(
        {
          lat: activeCity.location.latitude,
          lng: activeCity.location.longitude
        },
        activeCity.location.zoom
      );
    }
  }, [prevActiveCityRef, prevMarkersRef, activeCity, map]);
}

export default useMapCtnter;
