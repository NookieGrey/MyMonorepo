export type BookDescriptionProps = {
  annotation: string;
  details: {
    author: string;
    publisher: string;
    year: string;
    binding: string;
    pages: number;
    genre: string;
    language: string;
  };
};

export type BookContentProps = {
  title: string;
  author: string;
  mainImage: string;
  thumbnails: string[];
  bookDescription: BookDescriptionProps;
};
