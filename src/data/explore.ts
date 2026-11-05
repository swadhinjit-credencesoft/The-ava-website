export interface ExploreArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
}

const cdn = "https://bookonelocal.in/cdn";

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
  }
];
