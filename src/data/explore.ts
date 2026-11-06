import { touristPlaces } from "./touristPlaces";
import { eventVenues } from "./eventVenues";

export interface ExploreArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
}

const cdn = "https://bookonelocal.in/cdn";
const nearbyAttractionsContent = [
  "<p>Karjat is a useful base for a mix of outdoor, heritage, and family outings. The places below are drawn from the resort's nearby attractions guide; check current directions, access, timings, and weather before travelling.</p>",
  ...touristPlaces.map((place) => `<p><b>${place.name}</b> — ${place.activity}. ${place.description}</p>`),
  "<h2>Plan the day around conditions</h2><p>Travel times and access can change with traffic, road work, rain, and seasonal conditions. Check the route on the day, especially before visiting waterfalls or starting a trek.</p>",
  '<h2>Make Karjat your base</h2><p>Allow time to relax at the resort between outings. <a href="/tour">See nearby places</a>, then <a href="/rooms">check available stays</a> for your dates.</p>',
].join("\n");

const weddingVenueCapacityContent = eventVenues
  .map((venue) => `<p><b>${venue.name}</b>: ${venue.capacity}. ${venue.description}</p>`)
  .join("\n");

const weddingPlanningContent = [
  "<p>A destination wedding needs a clear plan for guest count, function spaces, accommodation, dining, and travel. The Mountain Resort brings several celebration areas and stay options together on one private estate in Karjat.</p>",
  "<h2>Start with dates and guest numbers</h2><p>Choose a few possible dates and estimate the number of guests for each function. Event space capacities depend on the venue and layout, so confirm the expected setup with the resort team.</p>",
  weddingVenueCapacityContent,
  "<h2>Map out the celebration flow</h2><p>List the functions you expect to host, such as a welcome gathering, Haldi, Mehendi, Sangeet, ceremony, and reception. Share the sequence with the events team so they can discuss spaces, timing, and changeovers.</p>",
  "<h2>Plan guest stays and dining</h2><p>Consider the mix of couples, families, and larger groups in your guest list. Room names, occupancy, and current rates are available through the live booking inventory; ask the resort about room combinations for your dates.</p>",
  "<h2>Confirm event details</h2><p>Ask for a written quotation that covers the chosen spaces, accommodation, meal arrangements, event services, and any outside vendors you plan to use. Confirm current terms directly before booking.</p>",
  '<h2>Take the next step</h2><p><a href="/events">View the event spaces</a> or <a href="/contact">send an enquiry</a> with your dates, guest count, and preferred functions.</p>',
].join("\n");

export const exploreArticles: ExploreArticle[] = [
  {
    id: "karjat-weekend-getaway",
    title: "Plan a Karjat Weekend Getaway",
    excerpt: "A simple guide to a relaxing mountain-estate break near Mumbai and Pune.",
    category: "Travel Guide",
    image: `${cdn}/DSC08846.avif`,
    content: `Karjat offers a change of pace from the city, with mountain views and green countryside. The Mountain Resort by Redwings is a private 7-acre estate for a relaxed stay, a family break or a celebration weekend.\n\n<h2>Make time to unwind</h2>Set aside time to enjoy the estate, open lawns, mountain views, pool and in-house dining. Pool access hours can vary by stay or event booking, so confirm the details when booking.\n\n<h2>Getting here</h2>The resort is in Wavarle, Vadvihir, Khalapur, Karjat. The official listing places it about 4–7 km from Karjat Junction Railway Station and within reach of Mumbai and Pune. Check your route and travel time before departure.\n\n<h2>Choose a stay that fits</h2>Options include Cliff View Rooms, Family Rooms, Glass Jacuzzi Rooms and a three-bedroom Bungalow Villa. Larger groups can ask the team about room combinations and availability.\n\n<h2>Plan your visit</h2><a href="/rooms">Explore the accommodation</a> or <a href="/contact">contact the resort</a> to confirm current availability and details.`,
  },
  {
    id: "destination-wedding-karjat",
    title: "Destination Weddings in Karjat",
    excerpt: "Explore the lawns, poolside setting and private event spaces across a 7-acre estate.",
    category: "Weddings",
    image: `${cdn}/DSC08849.avif`,
    content: `The Mountain Resort brings accommodation, dining and celebration spaces together across a private 7-acre estate in Karjat. The setting is designed for multi-day wedding celebrations, with mountain views and dedicated zones for different functions.\n\n<h2>Spaces for each celebration</h2>Venue options include mountain-view destination grounds, wedding lawns, poolside celebrations and private event spaces. The official venue information lists capacities ranging from intimate gatherings of 20 to larger celebrations of up to 500 guests, depending on the space.\n\n<h2>Keep guests together</h2>Cliff View Rooms, Family Rooms, Glass Jacuzzi Rooms and a three-bedroom Bungalow Villa offer different accommodation options. In-house dining and event coordination help bring the weekend together.\n\n<h2>Request a quotation</h2>Event availability and inclusions can vary by date and requirements. <a href="/events">Explore event options</a> or <a href="/contact">contact the team</a> for a current quotation.`,
  },
  {
    id: "mumbai-to-karjat-road-trip",
    title: "Mumbai to Karjat: A Weekend Drive",
    excerpt: "Plan a smooth arrival for a mountain escape from Mumbai or Navi Mumbai.",
    category: "Getting Here",
    image: `${cdn}/DSC08758.avif`,
    content: `Karjat is a popular escape from Mumbai and Navi Mumbai. The Mountain Resort is in Wavarle, Vadvihir, Khalapur, Karjat, Maharashtra 410201, on a 7-acre mountain estate.\n\n<h2>Plan your route</h2>The resort's official information describes the property as approximately 75 km from Mumbai and about 4–7 km from Karjat Junction Railway Station. Travel time depends on traffic, weather and your starting point, so check live directions before you leave.\n\n<h2>Arriving by train</h2>Karjat Junction is the closest railway station listed by the resort. Arrange onward transport to the property ahead of time, especially for groups or late arrivals.\n\n<h2>Before you set off</h2>Confirm your booking, arrival time and any transfer needs with the resort. <a href="/contact">Contact the team</a> for current directions and assistance.`,
  },
  {
    id: "pune-to-karjat-getaway",
    title: "Pune to Karjat: Plan a Mountain Break",
    excerpt: "What to know when planning a Karjat stay from Pune.",
    category: "Getting Here",
    image: `${cdn}/DSC08846.avif`,
    content: `A stay in Karjat makes room for a change of scenery, from mountain views to relaxed time on a private estate. The Mountain Resort by Redwings is located in Wavarle, Vadvihir, Khalapur, Karjat.\n\n<h2>Travel planning</h2>The resort's official information describes Karjat as approximately 100 km from Pune. Actual journey time depends on traffic, weather and route conditions; use live directions on your travel day.\n\n<h2>Stay options</h2>Choose from Cliff View Rooms, Family Rooms, Glass Jacuzzi Rooms and a private three-bedroom Bungalow Villa.\n\n<h2>Make it a relaxing stay</h2>Enjoy the estate, mountain scenery, pool and in-house dining. Confirm pool access hours and available services for your booking. <a href="/rooms">View stay options</a>.`,
  },
  {
    id: "karjat-family-holiday",
    title: "A Family Holiday in Karjat",
    excerpt: "Room options and resort experiences for a family stay together.",
    category: "Family Stays",
    image: `${cdn}/2026-04-02-073125239-DSC08769.jpg`,
    content: `A family escape works best when everyone has room to relax. The Mountain Resort offers Family Rooms and a three-bedroom Bungalow Villa with two bathrooms and a living area, alongside Cliff View and Glass Jacuzzi accommodation.\n\n<h2>Spend time at the estate</h2>The resort brings mountain views, open lawns, an outdoor pool and in-house dining together on a private 7-acre property. Pool access hours depend on the type of booking, so check details before arrival.\n\n<h2>Plan for your group</h2>Share your dates and group size with the resort team to confirm the right room mix, rates and meal options. <a href="/contact">Ask about a family stay</a>.`,
  },
  {
    id: "karjat-monsoon-escape",
    title: "A Monsoon Escape to Karjat",
    excerpt: "Enjoy Karjat's green season with a comfortable stay and mountain views.",
    category: "Seasonal Guide",
    image: `${cdn}/DSC08849.avif`,
    content: `The monsoon brings a lush look to the Karjat countryside and surrounding hills. A private estate stay gives you room to slow down, enjoy the views and spend time with family or friends.\n\n<h2>Keep plans flexible</h2>Rain can affect outdoor plans and local routes. Check weather, road conditions and attraction access before heading out, and follow local advice around waterfalls and trails.\n\n<h2>Enjoy the resort</h2>Spend time in your room, enjoy in-house dining and confirm pool availability for your booking. The resort offers Cliff View, Family, Glass Jacuzzi and Bungalow Villa stays.\n\n<h2>Check current availability</h2>Seasonal rates and inclusions can change. <a href="/rooms">Explore rooms</a> or <a href="/contact">get in touch</a> for current information.`,
  },
  {
    id: "things-to-do-near-karjat",
    title: "Things to Do Near Karjat",
    excerpt: "Explore nearby theme parks, caves, waterfalls, forts, and hill scenery from a Karjat base.",
    category: "Nearby Attractions",
    image: `${cdn}/DSC08846.avif`,
    content: nearbyAttractionsContent,
  },
  {
    id: "best-time-to-visit-karjat",
    title: "Best Time to Visit Karjat",
    excerpt: "Choose a season for your Karjat stay, outdoor plans, or celebration weekend.",
    category: "Seasonal Guide",
    image: `${cdn}/DSC08849.avif`,
    content: `<p>Karjat offers a different setting through the year, from clear, comfortable days to a greener monsoon landscape. The best dates depend on whether you are planning outdoor sightseeing, a relaxed stay, or a multi-day celebration.</p>\n\n<h2>Cooler months</h2><p>October to February is a popular period for outdoor events and sightseeing. Reserve early for preferred dates and confirm current availability with the resort.</p>\n\n<h2>Summer visits</h2><p>From March to May, plan outdoor activities earlier or later in the day and leave time to rest between outings. Check the services and pool hours available with your booking.</p>\n\n<h2>Monsoon scenery</h2><p>June to September can bring lush hills and seasonal waterfalls. Rain may affect roads, trails, and outdoor plans, so check weather and local access before leaving the resort.</p>\n\n<h2>Choose dates that fit your plans</h2><p>Conditions vary each year. Check forecasts and live travel routes, then <a href="/rooms">review stay availability</a> or <a href="/contact">contact the resort</a> about your dates.</p>`,
  },
  {
    id: "corporate-offsite-karjat",
    title: "Planning a Corporate Offsite in Karjat",
    excerpt: "Bring a team together with private event spaces, accommodation, dining, and time outdoors.",
    category: "Corporate Events",
    image: "/meeting-optimized.jpg",
    content: `<p>A corporate offsite works best when the meeting space, meals, and overnight stay are planned together. The Mountain Resort in Wavarle, Karjat brings indoor and outdoor gathering areas together on a private estate.</p>\n\n<h2>Choose a space for your group</h2><p>Private event spaces are listed for gatherings of 20 to 100 guests, with other lawns and poolside settings available for larger events. Capacity depends on the space and layout; confirm the arrangement with the events team.</p>\n\n<h2>Plan the schedule</h2><p>Share your group size, preferred dates, meeting requirements, meal needs, and room mix when enquiring. This helps the team confirm what is available for your event.</p>\n\n<h2>Leave time to unwind</h2><p>Use the estate's lawns, mountain setting, dining, and stay options to give the group time together outside the meeting schedule. Confirm pool access and event services for your booking.</p>\n\n<h2>Request event details</h2><p><a href="/events">Explore event spaces</a> or <a href="/contact">contact the resort</a> with your dates and expected guest count.</p>`,
  },
  {
    id: "couples-getaway-karjat",
    title: "A Couples' Getaway in Karjat",
    excerpt: "Plan a quiet mountain-view stay with time for the estate, dining, and a private jacuzzi room option.",
    category: "Couples Stays",
    image: `${cdn}/2026-04-02-082005702-DSC08852.jpg`,
    content: `<p>A couples' break in Karjat can be as relaxed or active as you choose. The Mountain Resort offers a private estate setting with mountain views, in-house dining, and several stay options.</p>\n\n<h2>Choose a stay</h2><p>The Glass Jacuzzi Room offers a private jacuzzi experience. Cliff View Rooms provide mountain views, while other rooms and the Bungalow Villa can suit different group sizes. Room details and rates may vary with the live booking inventory.</p>\n\n<h2>Keep the itinerary simple</h2><p>Leave time to enjoy the estate and confirm dining and pool access details for your booking. For nearby outings, check the weather and travel conditions before you set off.</p>\n\n<h2>Plan your dates</h2><p><a href="/rooms">View current room details</a> or <a href="/contact">contact the resort</a> about availability and arrangements for your stay.</p>`,
  },
  {
    id: "two-day-karjat-itinerary",
    title: "A Two-Day Karjat Itinerary",
    excerpt: "A flexible two-day outline for balancing a resort stay with one nearby outing.",
    category: "Trip Planning",
    image: `${cdn}/DSC08846.avif`,
    content: `<p>A short Karjat break can combine time at the resort with one nearby outing. Keep the plan flexible: drive times, weather, attraction access, and your check-in arrangements can affect how much fits into each day.</p>\n\n<h2>Day one: arrive and settle in</h2><p>Travel to Wavarle, check in at the time confirmed for your reservation, and leave room to unpack and enjoy the estate. Have a meal on site and keep the evening relaxed rather than trying to fit in a long excursion after the drive.</p>\n\n<h2>Day two: choose one main outing</h2><p>Pick an attraction that matches your group and the conditions. Families may prefer a theme park, while visitors seeking heritage or outdoor scenery can look at the caves, fort, waterfall, or Matheran. Check access, weather, and directions before setting out.</p>\n\n<h2>Keep a backup plan</h2><p>Rain, traffic, and seasonal closures can change outdoor plans. If conditions are poor, spend more time at the resort and check pool access and dining details for your booking.</p>\n\n<h2>Check the details before travel</h2><p>Confirm your room, arrival time, guest count, and transport arrangements. <a href="/tour">Browse nearby places</a> and <a href="/rooms">check current stay details</a>.</p>`,
  },
  {
    id: "karjat-heritage-and-trekking",
    title: "Caves and Fort Treks Around Karjat",
    excerpt: "Plan a heritage or hill outing to Kondana Caves or Peth Fort with weather and trail conditions in mind.",
    category: "Outdoor Guide",
    image: `${cdn}/DSC08849.avif`,
    content: `<p>Karjat's surrounding hills offer outings for visitors interested in heritage and outdoor scenery. Kondana Caves and Peth Fort / Kothaligad are listed among nearby places, but trail conditions and access can change with the season.</p>\n\n<h2>Kondana Caves</h2><p>The Buddhist rock-cut caves are near Rajmachi Fort and include an approach trail. The route may be slippery in wet weather, so check local conditions and choose footwear and a guide appropriate to your group.</p>\n\n<h2>Peth Fort / Kothaligad</h2><p>The fort is known for its rock-cut staircase and hilltop views. Treat it as an outdoor trek: check the route, weather, daylight, and your group's fitness before you go.</p>\n\n<h2>Prepare before you leave</h2><p>Carry water, suitable footwear, sun or rain protection, and a charged phone. Follow local guidance, stay on established routes, and avoid waterfalls or exposed paths during unsafe conditions.</p>\n\n<h2>Plan a comfortable return</h2><p>Allow time to travel back to the resort and unwind after an outdoor day. <a href="/tour">See more nearby attractions</a> or <a href="/contact">ask the resort about directions</a>.</p>`,
  },
  {
    id: "karjat-wedding-planning-checklist",
    title: "A Destination Wedding Checklist for Karjat",
    excerpt: "Key questions to settle before choosing event spaces, guest rooms, and a celebration schedule.",
    category: "Wedding Planning",
    image: `${cdn}/DSC08849.avif`,
    content: weddingPlanningContent,
  },
  {
    id: "planning-a-group-stay-in-karjat",
    title: "Planning a Group Stay in Karjat",
    excerpt: "Coordinate rooms, arrival details, and shared resort time for a family or friends' trip.",
    category: "Group Stays",
    image: `${cdn}/2026-04-02-073125239-DSC08769.jpg`,
    content: `<p>Travelling with a group takes a little coordination. The Mountain Resort has several stay types, including Cliff View Rooms, Family Rooms, Glass Jacuzzi Rooms, and a three-bedroom Bungalow Villa.</p>\n\n<h2>Share the group's needs</h2><p>Before booking, list your dates, number of adults and children, room preferences, and any accessibility or adjoining-room requests. Ask the resort which combinations can be arranged for your group.</p>\n\n<h2>Check live room details</h2><p>Room names, photos, features, occupancy, rates, and available inventory are shown from the live booking information. Review the details for your selected dates and confirm any special requests directly.</p>\n\n<h2>Coordinate arrival and meals</h2><p>Share your expected arrival time with the group and confirm check-in details with the resort. Ask about dining options and pool access for your booking so everyone knows what to expect.</p>\n\n<h2>Plan shared activities</h2><p>Leave open time for the estate and choose nearby outings that suit the group. Check distances, weather, and travel conditions before finalising your plan.</p>\n\n<h2>Make an enquiry</h2><p><a href="/rooms">Review current stay options</a> or <a href="/contact">contact the resort</a> with your dates and group size.</p>`,
  }
];
