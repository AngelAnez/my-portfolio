interface Skill {
  name: string;
  logo: ImageMetadata;
  type: "Frontend" | "Backend" | "Desarrollo"
}

interface Experience {
  position: string;
  company: string;
  "start-date": string;
  "end-date": string;
  "job-duty": string;
  stack: string[];
}

interface Project {
  title: string;
  description: string;
  preview: ImageMetadata;
  stack: string[];
  images: ImageMetadata[];
  problem?: string;
  result?: string;
  role?: string;
  github?: string;
  demo?: string;
  team?: TeamMember[];
}

interface Testimonial {
  image: string;
  name: string;
  role: string;
  text: string;
  linkedin: string;
}

interface TeamMember{
  name: string;
  image: string;
  role: string;
}