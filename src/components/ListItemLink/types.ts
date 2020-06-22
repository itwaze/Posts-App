export interface Item {
  userId: number,
  id: number,
  title: string,
  body: string
}

export type Post = {
  item: Item
};