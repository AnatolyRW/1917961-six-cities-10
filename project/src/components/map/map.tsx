import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap/useMap';
import Offer, { City } from '../../types/data-types/offer';
import 'leaflet/dist/leaflet.css';
import { Icon, Marker } from 'leaflet';
import { IconParameter, } from '../../const';
//import { Icon, Marker } from 'leaflet';

type MapProps = {
    offers: Offer[],
    city: City,
    className: string
}

const defaultIcon = new Icon({
  iconUrl: IconParameter.Url.Default,
  iconSize: [IconParameter.Size.x, IconParameter.Size.y],
  iconAnchor: [IconParameter.Anchor.x, IconParameter.Anchor.y],
});

function Map({offers, city, className}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            defaultIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers]);

  return (
    <section className={`map ${className}`} ref={mapRef}>
    </section>
  );
}

export default Map;
