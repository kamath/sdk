/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Servers } from "./servers.js";

export class SmitheryRegistry extends ClientSDK {
  private _servers?: Servers;
  get servers(): Servers {
    return (this._servers ??= new Servers(this._options));
  }
}
