import { eventVenues } from "./eventVenues";

const cdn = "https://bookonelocal.in/cdn";

export const events = {
  heading: "Weddings, Corporate & Celebrations",
  description: "Bring destination weddings, corporate offsites, conferences, anniversaries, and private celebrations together across a 7-acre mountain estate. Five dedicated event venues host groups from 20 to 500 guests, with luxury stays, in-house catering, and dedicated event coordination on site.",
  features: [
    ...eventVenues.map((venue) => `${venue.name}: ${venue.capacity}`),
    "In-house dining and dedicated event coordination",
    "Stay, dine and celebrate across one private estate",
  ],
  image: `${cdn}/DSC08758.avif`
};
