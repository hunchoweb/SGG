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
    category: "Commercial",
    location: "Bellevue, WA",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Skyline Residences",
    category: "Residential",
    location: "Seattle, WA",
    image:
      "https://images.unsplash.com/photo-1500576992153-0271099def59?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Evergreen Innovation Hub",
    category: "Residential",
    location: "Redmond, WA",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Soundview Medical Campus",
    category: "Commercial",
    location: "Tacoma, WA",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Bluewater Logistics",
    category: "Commercial",
    location: "Kent, WA",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Harborfront Pavilion",
    category: "Commercial",
    location: "Everett, WA",
    image:
      "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    title: "Cascade Research Labs",
    category: "Commercial",
    location: "Kirkland, WA",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    title: "Summit Tower Renovation",
    category: "Commercial",
    location: "Spokane, WA",
    image:
      "https://images.unsplash.com/photo-1487956382158-bb926046304a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 9,
    title: "Blue Horizon Condominiums",
    category: "Residential",
    location: "Portland, OR",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
];

