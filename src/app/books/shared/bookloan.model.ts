export interface Bookloan {
  id: string;
  dateOfCreation: number;
  dateOfLastModified: number;
  dueDate: number;
  bookCopy: {
    availability: string;
    comments: string;
    cover: string;
    dateOfCreation: number;
    dateOfLastModified: number;
    id: string
  };
  member: {
    address: {
      city: string;
      postalCode: string;
      streetName: string;
      streetNumber: string;
    };
    dateOfCreation: number;
    dateOfLastModified: number;
    email: string;
    id: string;
    inss: string;
    memberName: {
      firstname: string;
      lastname: string;
    };
  };
}
