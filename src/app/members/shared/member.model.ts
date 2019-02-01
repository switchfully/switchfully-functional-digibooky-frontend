export interface Member {
  address: {
    city: string;
    postalCode: string;
    streetName: string;
    streetNumber: string;
  };
  dateOfCreation: 0;
  dateOfLastModified: 0;
  email: string;
  id: string;
  inss: string;
  memberName: {
    firstname: string;
    lastname: string;
  };
}
