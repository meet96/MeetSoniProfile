export type NotableProject = {
  slug: string;
  name: string;
  description: string;
  image: string;
  url: string;
};

export const notableProjects: NotableProject[] = [
  {
    slug: "saayahealth",
    name: "Saayahealth",
    description: "A healthcare platform improving access to digital health services.",
    image: "/images/saayaHealthLogo.webp",
    url: "http://saayahealth.com/",
  },
  {
    slug: "nextu",
    name: "Nextu",
    description: "An ed-tech platform for Latin American professionals.",
    image: "/images/nextuLogo.webp",
    url: "http://nextu.se/",
  },
];
