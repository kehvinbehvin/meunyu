type User = {
  id: number;
  slug: string;
  name: string;
  connection: string;
  attendance: {
    church: boolean;
    dinner: boolean;
  };
  isAdmin: boolean;
};
