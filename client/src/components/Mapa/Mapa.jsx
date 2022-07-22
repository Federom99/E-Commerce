import { MapContainer, Marker, Popup, TileLayer, useMap, Circle } from 'react-leaflet';
import LocationMarker from './Location';

const Mapa = ({sucursales, selectSucursal}) => {
    const position = [-34.60376, -58.38162];

    return(
        <div style={{display: "flex"}}>
            <MapContainer center={position} zoom={16} scrollWheelZoom={true} style={{height:"400px", width:"400px", margin: "auto",
        marginTop:"2rem", marginBottom:"2rem"}}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />  {/*////////////////////UBICACION ACTUAL///////////////////*/}
            {
                sucursales.map((s, i) => {
                    return(<Marker position={s.coordenadas} key={i}
                        eventHandlers={{
                            click: () => {
                              selectSucursal(s);
                            },
                          }} >
                            <Popup>
                                Punto de retiro: 
                                {" "+s.nombre + ", " + s.capital}
                            </Popup>
                        </Marker>)
                })
            }
          </MapContainer>
        </div>
    )
};

export default Mapa;
