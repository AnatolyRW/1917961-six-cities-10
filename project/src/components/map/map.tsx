import { useRef } from 'react';
import useMap from '../../hooks/useMap';
import Offer, { City } from '../../types/data-types/offer';
import 'leaflet/dist/leaflet.css';
import { Marker } from 'leaflet';
import useMapCenter from '../../hooks/useMapCenter';
import useMapMarker from '../../hooks/useMapMarker';

type MapProps = {
    offers: Offer[],
    city: City,
    className: string,
    activeCardId: number | null
}

function Map({offers, city, className, activeCardId}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const prevActiveCityRef = useRef<City>(city);
  const prevMarkersRef = useRef<Marker[]>([]);

  const map = useMap(mapRef, city);

  useMapCenter(prevActiveCityRef, prevMarkersRef, city, map);

  useMapMarker(prevMarkersRef, offers, map, activeCardId);

  return (
    <section className={`map ${className}`} ref={mapRef}>
    </section>
  );
}

export default Map;
