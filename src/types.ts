export type RatingType = {
  name: string;
  skillSet: string;
  votes: number;
};

export type RatingRowProps = {
  rating: RatingType;
  theme: string;
};

export type CardDataType = {
  name: string;
  nickname: string;
  imgSrc: string;
  description: string;
}