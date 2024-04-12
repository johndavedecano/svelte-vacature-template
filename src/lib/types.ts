export type Vacature = {
  title: string;
  type: string;
  location: string;
  href: string;
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
