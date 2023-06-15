import GuestList from './GuestList.json';

export class UserRepository {
  guestList: User[];

  constructor() {
    this.guestList = GuestList;
  }

  getUser(id: string): User | undefined {
    return this.guestList.find((guest) => guest.id === id);
  }
}

export const userRepository = new UserRepository();
