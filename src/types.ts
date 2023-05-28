export type RatingType = {
  name: string;
  skillSet: string;
  votes: number;
};

export type RatingRowProps = {
  rating: RatingType;
  theme: string;
};
