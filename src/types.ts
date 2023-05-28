export type RatingDataType = {
  name: string;
  skillSet: string;
  votes: number;
};

export type RatingRowPropsType = {
  rating: RatingDataType;
  theme: string;
}

export type CardDataType = {
  name: string;
  nickname: string;
  imgSrc: string;
  description: string;
}

export type CardPropsType = {
  card: CardDataType;
}