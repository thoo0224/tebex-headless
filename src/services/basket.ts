import { TebexHeadlessClient } from "..";
import { Basket, BasketAuthUrl } from "../types";

export class BasketService {
  constructor(private readonly client: TebexHeadlessClient) {}

  /**
   *
   * @param ident The basket identifier
   * @returns The basket
   */
  public async getBasket(ident: string): Promise<Basket> {
    const response = await this.client.context.axios.get<any>(
      `${this.client.context.accountsEndpoint}/baskets/${ident}`
    );

    return this.client.handleResponse(response);
  }

  /**
   * Create a new basket
   *
   * @param options Options
   * @param options.ipCountry An ISO 3166-1 alpha-2 country code can be provided with authenticated requests
   * @param options.ipAddress An IPv4 address can be provided with authenticated requests
   * @returns The created basket
   */
  public async createBasket(options?: {
    ipCountry?: string;
    ipAddress?: string;
  }): Promise<Basket> {
    const response = await this.client.context.axios.post(
      `${this.client.context.accountsEndpoint}/baskets`,
      {
        ip_address: options?.ipAddress,
      },
      {
        headers: {
          "CF-IPCountry": options?.ipCountry,
        },
      }
    );

    return this.client.handleResponse(response);
  }

  /**
   * Create a new basket
   *
   * @param username The username of the user
   * @param options Options
   * @param options.ipAddress An IPv4 address can be provided with authenticated requests
   * @returns The created basket
   */
  public async createBasketMinecraft(
    username: string,
    options?: {
      ipAddress?: string;
    }
  ): Promise<Basket> {
    const response = await this.client.context.axios.post(
      `${this.client.context.accountsEndpoint}/baskets`,
      {
        ip_address: options?.ipAddress,
        username: username,
      }
    );

    return this.client.handleResponse(response);
  }

  public async getBasketAuthUrl(
    ident: string,
    returnUrl: string
  ): Promise<BasketAuthUrl[]> {
    const response = await this.client.context.axios.get(
      `${this.client.context.accountsEndpoint}/baskets/${ident}/auth`,
      {
        params: {
          returnUrl: returnUrl,
        },
      }
    );

    return this.client.handleResponse(response, false);
  }
}
