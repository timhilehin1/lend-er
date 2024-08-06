export interface DataModel {
  addresses: singleAddress[];
  latitude: number;
  longitude: number;
  name: string;
  phoneNumber: string;
  email: string;
}

export interface singleAddress {
  address: string;
}
