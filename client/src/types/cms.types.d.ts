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
  export interface stat {
    id: number;
    number: string;
    notation: string;
    description: string;
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
  export interface TeamMember {
    id: number;
    attributes: {
      name: string;
      specialty: string;
      position: string;
      facebook: string;
      linkedin: string;
      twitter: string;
      instagram: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      locale: string;
      custom_page: boolean;
      custom_page_url: string;
      pofilepic: {
        data: Array<{
          id: number;
          attributes: {
            name: string;
            alternativeText: string | null;
            caption: string | null;
            width: number;
            height: number;
            formats: {
              thumbnail: {
                name: string;
                hash: string;
                ext: string;
                mime: string;
                path: string | null;
                width: number;
                height: number;
                size: number;
                url: string;
              };
              small: {
                name: string;
                hash: string;
                ext: string;
                mime: string;
                path: string | null;
                width: number;
                height: number;
                size: number;
                url: string;
              };
            };
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: string | null;
            provider: string;
            provider_metadata: null;
            createdAt: string;
            updatedAt: string;
          };
        }>;
      };
      localizations: {
        data: Array<{
          id: number;
          attributes: {
            name: string;
            specialty: string;
            position: string;
            facebook: string;
            linkedin: string;
            twitter: string;
            instagram: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            locale: string;
            custom_page: boolean | null;
            custom_page_url: string | null;
          };
        }>;
      };
    };
  }
}
