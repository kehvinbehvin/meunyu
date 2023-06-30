export type User = {
  id: string;
  name: string;
  attendance: { dinner: boolean; church: boolean };
  isAdmin: boolean;
  token: string;
};
