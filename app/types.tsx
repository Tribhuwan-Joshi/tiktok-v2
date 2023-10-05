// LAYOUT INCLUDE TYPES

export interface RandomUser {
  id: string;
  name: string;
  image: string;
}

export interface MenuItemsTypes {
  iconString: string;
  colorString: string;
  sizeString: string;
}

export interface MenuItemFollowCompTypes {
  user: RandomUser;
}
