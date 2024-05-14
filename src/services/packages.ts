import { ClientContext } from "..";
import { BaseResponse, Package } from "../types";
import { transformKeys } from "../utils";

export class PackagesService {
  constructor(private readonly context: ClientContext) {}

  public async getPackages(): Promise<any> {
    const response = await this.context.axios.get<BaseResponse<Package[]>>(
      `${this.context.accountsEndpoint}/packages`
    );

    const data = response.data.data;
    return transformKeys(data);
  }
}
