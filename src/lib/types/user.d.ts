type User = {
  id: number;
  slug: string;
  name: string;
  connection: string;
  token: string;
  attendance: {
    church: boolean;
    dinner: boolean;
  };
  isAdmin: boolean;
  language: 'en' | 'ko';
};
