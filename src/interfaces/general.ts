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
  "job-duty": string[];
}

interface Project {
  title: string;
  description: string[];
  stack: string[];
  image: ImageMetadata;
  github?: string;
  demo?: string,
}

interface Testimonial {
  image: string;
  name: string;
  role: string;
  text: string;
  linkedin: string;
}