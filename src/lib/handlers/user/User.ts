import GuestList from './GuestList.json';

export class UserRepository {
  guestList: User[];

  constructor(guestData: any) {
    this.guestList = guestData;
  }

  getUser(id: string): User | undefined {
    return this.guestList.find((guest) => guest.id === id);
  }
}

export const userRepository = new UserRepository(GuestList);
