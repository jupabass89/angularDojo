export interface JokeResponse {
  type: string;
  value: {
      id: number,
      joke: string,
      categories: any[]
  };
}
