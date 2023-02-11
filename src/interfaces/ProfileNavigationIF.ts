interface ProfileNavIF {
  name: string;
  queryName: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  current?: string;
}

export interface ProfileNavigationIF {
  navigation: ProfileNavIF[];
}
