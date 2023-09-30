'use client'
import {CircleF, GoogleMap, MarkerF, useLoadScript} from "@react-google-maps/api";
import type { NextPage} from "next";
import {useMemo} from "react";

import {FaLocationDot, FaMapLocationDot} from "react-icons/fa6";

const Home: NextPage = () => {
    const libraries = useMemo(() => ['places'], []);
    const mapCenter = useMemo(
        () => ({ lat: 50.0678693, lng: 19.9916377 }),
        []
    );

    const mapOptions = useMemo<google.maps.MapOptions>(
        () => ({
            disableDefaultUI: true,
            clickableIcons: true,
            scrollwheel: false,
        }),
        []
    );
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyATXEtRMP-Yn6KCPDpHTm5CTiYZI5qWqGc",
        libraries: libraries as any,
    });

    if (!isLoaded) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div>
                <p>This is Sidebar...</p>
            </div>
            <GoogleMap
                options={mapOptions}
                zoom={16}
                center={mapCenter}
                mapTypeId={google.maps.MapTypeId.ROADMAP}
                mapContainerStyle={{ width: '400px', height: '400px' }}
                onLoad={() => console.log('Map Component Loaded...')}
            >
                <MarkerF
                    position={mapCenter}
                    icon={FaMapLocationDot}
                    onLoad={() => console.log('Marker Loaded')} />

                {[1000, 500].map((radius, idx) => {
                    return (
                        <CircleF
                            key={idx}
                            center={mapCenter}
                            radius={radius}
                            onLoad={() => console.log('Circle Load...')}
                            options={{
                                fillColor: radius > 1000 ? 'red' : 'blue',
                                strokeColor: radius > 1000 ? 'red' : 'blue',
                                strokeOpacity: 0.8,
                            }}
                        />
                    );
                })}
            </GoogleMap>
        </div>
    );
};

export default Home;