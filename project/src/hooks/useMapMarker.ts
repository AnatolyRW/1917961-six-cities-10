import { Marker, Map, Icon } from 'leaflet';
import { MutableRefObject, useEffect } from 'react';
import Offer from '../types/data-types/offer';
import { IconParameter } from '../const';

const defaultIcon = new Icon({
  iconUrl: IconParameter.Url.Default,
  iconSize: [IconParameter.Size.x, IconParameter.Size.y],
  iconAnchor: [IconParameter.Anchor.x, IconParameter.Anchor.y],
});

const selectIcon = new Icon({
  iconUrl: IconParameter.Url.Current,
  iconSize: [IconParameter.Size.x, IconParameter.Size.y],
  iconAnchor: [IconParameter.Anchor.x, IconParameter.Anchor.y],
});

function useMapMarker (
  prevMarkersRef: MutableRefObject<Marker[]>,
  activeCityOffers: Offer[],
  map: Map | null,
  activeCardId: number | null
): void {

  useEffect(() => {
    if (map) {
      activeCityOffers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });
        marker
          .setIcon(offer.id === activeCardId ? selectIcon : defaultIcon)
          .addTo(map);
        prevMarkersRef.current.push(marker);
      });
    }
  }, [prevMarkersRef, activeCityOffers, map, activeCardId]);
}

export default useMapMarker;
