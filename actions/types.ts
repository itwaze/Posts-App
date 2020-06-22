interface Item {
  userId: number,
  id: number,
  title: string,
  body: string
}

export type Posts = {
  items: Item[]
}

export type Error = {
  err: object
}
