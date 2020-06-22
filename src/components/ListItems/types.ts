export interface Item {
  userId: number,
  id: number,
  title: string,
  body: string
}

export type Posts = {
  items: Item[]
}

export interface Post extends Item {
  item: Item,
  erorrs?: string
}