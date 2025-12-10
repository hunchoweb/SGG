export type Project = {
  id: number;
  title: string;
  category: "Commercial" | "Residential";
  location: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Northgate Corporate Center",
    category: "Residential",
    location: "Bellevue, WA",
    image: "/images/commercial1.jpeg",
  },
  {
    id: 2,
    title: "Skyline Residences",
    category: "Residential",
    location: "Seattle, WA",
    image: "/images/residential1.jpg",
  },
  {
    id: 3,
    title: "Evergreen Innovation Hub",
    category: "Residential",
    location: "Redmond, WA",
    image: "/images/residential2.jpg",
  },
  {
    id: 4,
    title: "Soundview Medical Campus",
    category: "Commercial",
    location: "Tacoma, WA",
    image:
      "/images/commercial4.jpeg",
  },
  {
    id: 5,
    title: "Bluewater Logistics",
    category: "Commercial",
    location: "Kent, WA",
    image: "/images/commercial3.jpeg",
  },
  {
    id: 6,
    title: "Harborfront Pavilion",
    category: "Commercial",
    location: "Everett, WA",
    image:
      "/images/commercial2.jpeg",
  },
  {
    id: 7,
    title: "Cascade Research Labs",
    category: "Commercial",
    location: "Kirkland, WA",
    image:
      "/images/commercial5.jpeg",
  },
  {
    id: 8,
    title: "Summit Tower Renovation",
    category: "Commercial",
    location: "Spokane, WA",
    image:
      "/images/commercial6.jpeg",
  },
  {
    id: 9,
    title: "Blue Horizon Condominiums",
    category: "Residential",
    location: "Portland, OR",
    image: "/images/residential3.jpeg",
  },
];

