// Idea from https://typeorm.io/#/undefined/create-a-model

export class Airport {
  id: number;
  icao: string;         // ICAO identifier
  name: string;         // Name of airport
  lat: number;          // Latitude
  lon: number;          // Longitude
  runway: number;       // Runway number - One entry pr. runway pr. airport
  ils: number;          // ILS frequency (optional)
  ground: number;       // Ground frequency
  tower: number;        // Tower frequency
  control: number;      // Control/TMA frequency
  direction: number;    // Runway direction (in degrees)
  elevation: number;    // Runway elevation in meters
  length: number;       // Runway length in meters
  tacan: number;        // Always X-ray
  theater: number;      // 0 = disabled, 1 = caucasus, 2 = pg
}