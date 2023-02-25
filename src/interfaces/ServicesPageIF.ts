import { ImageContainerIF } from "./ImageContainerIF";
import { ConnectionsIF } from "./ConnectWithIF";

export interface ServicesPageIF {
  heading: string;
  paragraph: string;
  connectWith: ConnectionsIF;
  image: ImageContainerIF;
}
