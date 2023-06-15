type User = {
  id: string;
  name: string;
  attendance: {
    church: boolean;
    dinner: boolean;
  };
  isAdmin: boolean;
};
