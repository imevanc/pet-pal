interface Category {
  name: string;
  href: string;
}

interface ServiceContainerIF {
  title: string;
  href: string;
  category: Category;
  imageUrl: string;
}

export interface ServicesContainerIF {
  services: ServiceContainerIF[];
}
