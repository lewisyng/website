export type ProjectBasic = {
  _id: string
}

export type ProjectOverview = {
    title: string
    description: string
    links: string[]
    image: {
      asset: {
        _ref: string
      }
    }
}

export type ProjectDetails = {
    content: any
}