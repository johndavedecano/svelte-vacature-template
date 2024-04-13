export type Vacature = {
  id?: string | undefined;
  title: string;
  type: string;
  location: string;
  description: string;
  href: string;
  company: string;
};

export type User = {
  displayName: string;
  email: string;
  avatar: string;
};

export type UserLoginField = {
  email: string;
  password: string;
};
