export interface ProviderIF {
  callbackUrl: string;
  id: string;
  name: string;
  signinUrl: string;
  type: string;
}

export interface ProvidersIF {
  google: ProviderIF;
  facebook: ProviderIF;
  instagram: ProviderIF;
}
