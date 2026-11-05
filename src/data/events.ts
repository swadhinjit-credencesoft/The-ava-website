import { eventVenues } from "./eventVenues";

const cdn = "https://bookonelocal.in/cdn";

export const events = {
  heading: "Weddings & Events",
  description: "Bring weddings, anniversaries, engagements, corporate offsites and private celebrations together across a 7-acre mountain estate. Four dedicated event spaces host groups from 20 to 500 guests, with stays, dining and event coordination on site.",
  features: [
    ...eventVenues.map((venue) => `${venue.name}: ${venue.capacity}`),
    "In-house dining and dedicated event coordination",
    "Stay, dine and celebrate across one private estate",
  ],
  image: `${cdn}/DSC08758.avif`
};
