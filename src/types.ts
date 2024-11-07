export interface objDataTypes {
  details: string;
  id: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  item: string;
  name: number;
  oldPrice: number;
  price: string;
  gender?: string;
  serialNo: string;
  quantity: number;
}

export interface categoryTypes {
  id: number;

  name: string;
  number: number;
}
export interface genderTypes {
  id: number;

  name: string;
  number: number;
}

export interface goods {
  listItems: objDataTypes[];
  numberOfItems: number;
  totalPrice: number;
}
