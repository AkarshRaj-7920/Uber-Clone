import { useEffect, useRef, useState } from "react";
import * as maplibregl from 'maplibre-gl';
import { setWorkerUrl } from 'maplibre-gl';
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url';
import 'maplibre-gl/dist/maplibre-gl.css';

setWorkerUrl(workerUrl);

const LibreMap = () => {
    const mapContainer = useRef(null);
    const mapInstance = useRef(null);
    const locationRequested = useRef(false);
    const markerRef = useRef(null);
    const watchIdRef = useRef(null);
    const hasCenteredMap = useRef(false);

    const [userLocation, setUserLocation] = useState(null);
    const [locationError, setLocationError] = useState("");
    const [loadingLocation, setLoadingLocation] = useState(false);

    const getUserLocation = () => {
        // Check browser support
        if (!navigator.geolocation) {
            setLocationError("Geolocation is not supported by your browser.");
            return;
        }

        setLoadingLocation(true);
        setLocationError("");

        const watchId = navigator.geolocation.watchPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Save coordinates
                setUserLocation({
                    latitude,
                    longitude
                });

                console.log(`User Coordinates: ${latitude}, ${longitude}`);     // TO BE REMOVED

                setLoadingLocation(false);
            },

            (error) => {
                console.error("Location error:", error.message);

                setLocationError(error.message);
                setLoadingLocation(false);
            },

            {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 0,
            }
        );

        watchIdRef.current = watchId;

        return watchId;
    };

    // Automatic Locaiton Request
    useEffect(() => {
        const watchId = getUserLocation();

        return () => {
            if (watchId !== null) {
                navigator.geolocation.clearWatch(watchId);
                watchIdRef.current = null;
            }

            if (markerRef.current) {
                markerRef.current.remove();
                markerRef.current = null;
            }

            hasCenteredMap.current = false;
        };
    }, []);

    // Map movement to the location
    useEffect(() => {
        if (!userLocation || !mapInstance.current) return;

        const map = mapInstance.current;

        const { latitude, longitude } = userLocation;

        const coordinates = [longitude, latitude];

        const updateMarker = () => {
            // Center map only on the first location update
            if (!hasCenteredMap.current) {
                map.flyTo({
                    center: coordinates,
                    zoom: 16,
                    speed: 1.5,
                    essential: true,
                });

                hasCenteredMap.current = true
            }

            // Create marker if dosen't exist
            if (!markerRef.current) {
                const markerElement = document.createElement("div");

                markerElement.className = ' w-5 h-5 bg-[#276EF1] border-4 border-white rounded-full shadow-[0_0_0_6px_rgba(39,110,241,0.18),0_2px_8px_rgba(0,0,0,0.3)] cursor-pointer'

                //Create maplibre marker
                markerRef.current = new maplibregl.Marker({
                    element: markerElement,
                    anchor: "center",
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);
            } else {
                // Update existing marker position
                markerRef.current.setLngLat(coordinates);
            }

            console.log("User marker updated:", coordinates);
        };

        if (map.loaded()) {
            updateMarker();
        } else {
            map.once("load", updateMarker);
        }

        return () => {
            map.off("load", updateMarker);
        }
    }, [userLocation])


    useEffect(() => {
        // Prevent multiple map instances
        if (mapInstance.current) return;

        // Read AWS Configuration
        const region = import.meta.env.VITE_AWS_REGION;
        const mapstyle = import.meta.env.VITE_AWS_MAP_STYLE;
        const apikey = import.meta.env.VITE_AWS_MAP_API_KEY;

        // Check Configuration
        if (!region || !mapstyle || !apikey) {
            console.error("AWS Map Configuaration is missing.");
            return;
        }

        // Construct AWS Map style URL
        const styleUrl = `https://maps.geo.${region}.amazonaws.com/v2/styles/${mapstyle}/descriptor?key=${apikey}`;

        // Initialize MapLibre
        const map = new maplibregl.Map({
            container: mapContainer.current,
            style: styleUrl,

            // Initial map position India
            center: [78.9629, 20.5937],

            // Initial Zone
            zoom: 4,

            // Minimum and Maximum Zone
            minZone: 2,
            maxZone: 20,
        })

        mapInstance.current = map;

        // Add zoom and compas controls
        map.addControl(
            new maplibregl.NavigationControl({
                visualizePitch: true,
            }),
            "top-right"
        );

        // Log sucessful map loading
        map.on("load", () => {
            console.log("Map loaded Sucessfully");
        })

        // Handle map errors
        map.on("error", (event) => {
            console.error("MapLibre error:", event.error || event);
        });

        // Cleanup when component unmounts
        return () => {
            map.remove()
            mapInstance.current = null;
        }
    }, [])


    return (
        <div className="w-full h-full relative overflow-hidden">
            {locationError && (
                <p>
                    {locationError}
                </p>
            )}

            <div
                ref={mapContainer}
                className="w-full h-full"
            >
            </div>
        </div>
    )
}

export default LibreMap
