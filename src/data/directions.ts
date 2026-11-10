export interface DirectionStep {
  instruction: string;
  distance?: string;
  detail?: string;
}

export interface DirectionRoute {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  from: string;
  landmark: string;
  junction: string;
  summary: string;
  steps: DirectionStep[];
}

export const directions: DirectionRoute[] = [
  {
    id: "karjat-station",
    title: "Coming from Karjat Railway Station",
    badge: "By Train / Station Route",
    subtitle: "Approx. 4-7 km to resort",
    from: "Karjat Junction Railway Station",
    landmark: "Baba Dairy House",
    junction: "Borgaon Phata (Borgaon Fata)",
    summary: "Head from Karjat station towards Borgaon Phata with Baba Dairy House as the landmark.",
    steps: [
      {
        instruction: "Start from Karjat Railway Station towards Borgaon Phata",
        detail: "Landmark: Baba Dairy House",
      },
      {
        instruction: "Reach Borgaon Phata & take a RIGHT turn",
        distance: "Go straight for 400 meters",
      },
      {
        instruction: "Take a RIGHT turn",
        distance: "Go straight for 200 meters",
      },
      {
        instruction: "Take a LEFT turn",
        distance: "Go straight for 400 meters",
      },
      {
        instruction: "Arrive at The Mountain Resort Karjat",
        detail: "Survey No. 120, 144 & 145, Wavarle, Vadvihir, Karjat",
      },
    ],
  },
  {
    id: "panvel-side",
    title: "Coming from Panvel Side / Mumbai",
    badge: "By Road / Highway Route",
    subtitle: "3.5 km from Chowk",
    from: "Panvel Side via Chowk",
    landmark: "Meridian Petrol Pump",
    junction: "Borgaon Phata (Borgaon Fata)",
    summary: "From Panvel side via Chowk (3.5 km), watch for Meridian Petrol Pump at Borgaon Phata.",
    steps: [
      {
        instruction: "From Chowk, proceed 3.5 km towards Borgaon Phata",
        detail: "Landmark: Meridian Petrol Pump",
      },
      {
        instruction: "At Borgaon Phata, take a LEFT turn",
        distance: "Go straight for 500 meters",
      },
      {
        instruction: "Take a RIGHT turn",
        distance: "Go straight for 200 meters",
      },
      {
        instruction: "Take a LEFT turn",
        distance: "Go straight for 400 meters",
      },
      {
        instruction: "Arrive at The Mountain Resort Karjat",
        detail: "Survey No. 120, 144 & 145, Wavarle, Vadvihir, Karjat",
      },
    ],
  },
];
