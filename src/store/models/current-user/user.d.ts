declare type CurrentUserState = UserRecord;

declare interface UserAddressRecord {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

declare interface CompanyRecord {
  name: string;
  catchPhrase: string;
  bs: string;
}

declare interface UserRecord {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddressRecord;
  phone: string;
  website: string;
  company: CompanyRecord;
}
