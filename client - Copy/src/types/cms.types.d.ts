declare module "cms-interfaces" {
  export interface cms {
    data: data[];
    meta: meta;
  }

  export interface data {
    id: number;
    attributes: attributes;
  }
  export interface attributes {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    content: content[];
  }

  export interface content {
    title: string;
    number: number;
    notation: string;
  }

  export interface meta {
    pagination: pagination;
  }

  export interface pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  }
}
