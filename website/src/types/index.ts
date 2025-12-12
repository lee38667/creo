export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
};

export type NavLink = {
  name: string;
  href: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};
