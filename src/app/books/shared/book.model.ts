export interface Book {
  author: {
    authorName: {
      name: string;
    };
    books: null[];
    dateOfCreation: number;
    dateOfLastModified: number;
    id: string;
  };
  copiesOfBook: {
    availability: string;
    comments: string;
    cover: string;
    dateOfCreation: number;
    dateOfLastModified: number;
    id: string;
  }[];
  dateOfCreation: number;
  dateOfLastModified: number;
  id: string;
  isbn: string;
  title: string;
}
