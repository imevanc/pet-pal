import { ImageIF } from "./ImageIF";
import { ConnectionsIF } from "./ConnectionsIF";

export interface ServicesPageIF {
  heading: string;
  paragraph: string;
  connectWith: ConnectionsIF;
  image: ImageIF;
}
