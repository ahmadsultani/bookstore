export interface LoginTypes {
  email: string;
  password: string;
}

export interface SignupTypes {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserTypes {
  id: string;
  name: string;
  email: string;
  balance: number;
}

export interface BookTypes {
  _id: string;
  author: string;
  title: string;
  qty: number;
  price: number;
}

export interface JWTPayloadTypes extends UserTypes {
  iat: number;
  exp: number;
}

export interface CheckoutTypes {
  book: BookTypes;
  requestedQty: number;
}
