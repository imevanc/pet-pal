import Map from "react-map-gl";
import React from "react";
import { MapViewIF } from "../../../interfaces/MapViewIF";

const MapCard: React.FC = () => {
  const [viewState, setViewState] = React.useState<MapViewIF>({
    width: "100%",
    height: "100%",
    longitude: -2.244644,
    latitude: 53.480069,
    zoom: 12,
  });
  const mapStyles: React.CSSProperties = {
    position: "relative",
    width: "inherit",
    height: "inherit",
  };
  return (
    <div className="space-y-6 lg:col-span-2 lg:col-start-1">
      <section aria-labelledby="applicant-information-title">
        <div className="bg-white shadow-2xl sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2
              id="applicant-information-title"
              className="text-xl font-medium leading-6 text-gray-900"
            >
              Find Your Woof-pals
            </h2>
            <p className="mt-1 max-w-2xl text-baseline text-gray-500">
              You can see dog friendly places
            </p>
          </div>
          <div className="p-5 h-[400px] w-full">
            <div className="cursor-pointer flex w-full justify-center h-full w-full">
              <div className="shadow-xl h-full w-full">
                <Map
                  attributionControl={false}
                  {...viewState}
                  onMove={(evt) => setViewState(evt.viewState)}
                  style={mapStyles}
                  mapStyle="mapbox://styles/imevanc/clfx4e7xp000y01li4pvo9pok"
                  mapboxAccessToken={`${process.env.mapbox_token}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MapCard;
