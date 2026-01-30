"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Token de Mapbox
mapboxgl.accessToken = "pk.eyJ1IjoicGVwZWVsbXVkdSIsImEiOiJjbHhuM29hMjcwZm15MmtzZTd5MW05ZmJkIn0.XttMZMVW7mWJgyerIXMEkg";

// Ubicaciones de empresas
const companyLocations = [
  { name: "Galicia", lng: -8.5448, lat: 42.8782, color: "#ee722f", company: "Anceu" },
  { name: "Madrid", lng: -3.7038, lat: 40.4168, color: "#ee722f", company: "Carbono" },
  { name: "Bulgaria", lng: 25.4858, lat: 42.7339, color: "#8fcb17", company: "Audita" },
  { name: "Amsterdam", lng: 4.9041, lat: 52.3676, color: "#8aade5", company: "Botto" },
  { name: "Singapore", lng: 103.8198, lat: 1.3521, color: "#8fcb17", company: "Eleven Yellow" },
  { name: "San Francisco", lng: -122.4194, lat: 37.7749, color: "#8aade5", company: "Range" },
  { name: "Serbia", lng: 20.4489, lat: 44.7866, color: "#ee722f", company: "Upleap" },
  { name: "Morocco", lng: -7.0926, lat: 31.7917, color: "#8fcb17", company: "Snoop" },
];

export function GlobeSection() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [mapLoaded, setMapLoaded] = useState(false);
  const rotationIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isInteractingRef = useRef(false);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [0, 20],
      zoom: 1.5,
      projection: "globe",
      interactive: true,
      attributionControl: false,
      logoPosition: "bottom-right",
      scrollZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      touchZoomRotate: false,
    });
    
    // Ocultar el logo de Mapbox con CSS
    map.current.on("load", () => {
      const logoEl = mapContainer.current?.querySelector(".mapboxgl-ctrl-logo");
      if (logoEl) {
        (logoEl as HTMLElement).style.display = "none";
      }
      const attrEl = mapContainer.current?.querySelector(".mapboxgl-ctrl-attrib");
      if (attrEl) {
        (attrEl as HTMLElement).style.display = "none";
      }
    });

    map.current.on("style.load", () => {
      if (!map.current) return;
      
      // Cambiar el color del agua a gris con toque azul (30% del azul #8aade5)
      if (map.current.getLayer("water")) {
        map.current.setPaintProperty("water", "fill-color", "#b8c4d4");
      }
      
      // Configurar la atmósfera del globo
      map.current.setFog({
        color: "rgb(236, 236, 236)",
        "high-color": "rgb(236, 236, 236)",
        "horizon-blend": 0.02,
        "space-color": "rgb(236, 236, 236)",
        "star-intensity": 0,
      });

      setMapLoaded(true);

      // Añadir marcadores con tooltip
      companyLocations.forEach((location) => {
        // Marcador
        const el = document.createElement("div");
        el.className = "globe-marker";
        el.style.width = "12px";
        el.style.height = "12px";
        el.style.borderRadius = "50%";
        el.style.backgroundColor = location.color;
        el.style.border = "2px solid white";
        el.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
        el.style.cursor = "pointer";
        
        // Crear popup de Mapbox para el tooltip
        const popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
          offset: 10,
          className: "company-popup",
        }).setHTML(`<span style="font-family: var(--font-aeonik-medium); font-size: 12px; color: #333;">${location.company}</span>`);
        
        el.addEventListener("mouseenter", () => {
          popup.setLngLat([location.lng, location.lat]).addTo(map.current!);
        });
        el.addEventListener("mouseleave", () => {
          popup.remove();
        });

        const marker = new mapboxgl.Marker({ element: el })
          .setLngLat([location.lng, location.lat])
          .addTo(map.current!);
        
        markersRef.current.push(marker);
      });

      // Rotación automática
      const rotateGlobe = () => {
        if (!map.current || isInteractingRef.current) return;
        const center = map.current.getCenter();
        center.lng -= 0.2;
        map.current.setCenter(center);
      };

      rotationIntervalRef.current = setInterval(rotateGlobe, 50);

      // Pausar rotación al interactuar
      map.current.on("mousedown", () => {
        isInteractingRef.current = true;
      });
      
      map.current.on("mouseup", () => {
        setTimeout(() => {
          isInteractingRef.current = false;
        }, 2000);
      });

      map.current.on("touchstart", () => {
        isInteractingRef.current = true;
      });
      
      map.current.on("touchend", () => {
        setTimeout(() => {
          isInteractingRef.current = false;
        }, 2000);
      });
    });

    return () => {
      if (rotationIntervalRef.current) {
        clearInterval(rotationIntervalRef.current);
      }
      markersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-black mb-4"
            style={{ fontFamily: "var(--font-aeonik-bold)" }}
          >
            Audacity Around the Globe
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-aeonik-regular)" }}
          >
            Connecting top talent with leading companies worldwide
          </p>
        </div>

        {/* Contenedor del globo - sin borde ni sombra */}
        <div className="relative flex justify-center">
          <div
            ref={mapContainer}
            style={{
              width: "700px",
              height: "700px",
              opacity: mapLoaded ? 1 : 0,
              transition: "opacity 1s ease",
            }}
          />
        </div>

        {/* Contador de empresas */}
        <div className="text-center mt-8 mb-16">
          <p
            className="text-lg text-gray-500"
            style={{ fontFamily: "var(--font-aeonik-regular)" }}
          >
            150+ companies across 30+ countries
          </p>
        </div>
        
      </div>
      
      {/* Línea divisora con efecto 3D de hendidura - ancho completo de la página */}
      <div 
        className="relative my-32"
        style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
        }}
      >
        {/* Sombra superior (hacia arriba) */}
        <div 
          style={{
            position: 'absolute',
            top: '-8px',
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0) 100%)',
          }}
        />
        {/* Línea central */}
        <div 
          className="w-full h-[2px]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.12) 50%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.25) 100%)',
          }}
        />
        {/* Sombra inferior (hacia abajo) */}
        <div 
          style={{
            position: 'absolute',
            bottom: '-8px',
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%)',
          }}
        />
      </div>
    </section>
  );
}
