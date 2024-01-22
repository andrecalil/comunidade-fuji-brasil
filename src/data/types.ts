export type LinkType = {
  title: string;
  url: string;
  image: string;
};

export type RepairShopType = {
  name: string;
  website: string;
  description: string;
  whatsapp: string;
};

export type StoreType = {
  name: string;
  state: string;
  fullCountry: boolean;
  website: string;
  description: string;
  rents: boolean;
  sells: boolean;
  officialRepresentant: boolean;
  whatsapp: string;
};

export type PartnershipType = {
  title: string;
  description: string;
  image: string;
  whatsapp?: string;
  site: string;
  mode: "w" | "c";
};
