interface Skill {
  name: string;
  logo: string;
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
  image: string;
  github?: string;
  demo?: string,
}
