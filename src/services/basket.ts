import { TebexHeadlessClient } from "..";
import { Basket, BasketAuthUrl, Package } from "../types";

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
  public async createBasket(completeUrl: string, cancelUrl: string, options?: {
    ipCountry?: string;
    ipAddress?: string;
  }): Promise<Basket> {
    const response = await this.client.context.axios.post(
      `${this.client.context.accountsEndpoint}/baskets`,
      {
        ip_address: options?.ipAddress,
        complete_url: completeUrl,
        cancel_url: cancelUrl,
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

  /**
   * Get the auth url for a basket
   *
   * @param ident The basket identifier
   * @param returnUrl The return url
   * @returns The auth urls
   */
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

  /**
   * Add a package to a basket
   *
   * @param ident The basket identifier
   * @param packageId The package identifier
   * @param quantity The quantity
   * @param variables The variables
   * @returns The updated basket
   */
  public async addPackage(
    ident: string,
    packageId: Package["id"],
    quantity: number = 1,
    variables?: any
  ): Promise<Basket> {
    const response = await this.client.context.axios.post(
      `${this.client.context.basketsEndpoint}/${ident}/packages`,
      {
        package_id: packageId,
        quantity: quantity,
        variables_data: variables,
      }
    );

    return this.client.handleResponse(response);
  }

  /**
   * Gift a package to a user
   *
   * @param ident The basket identifier
   * @param packageId The package identifier
   * @param targetUsernameId The target username id
   * @returns The updated basket
   */
  public async giftPackage(
    ident: string,
    packageId: Package["id"],
    targetUsernameId: string
  ): Promise<Basket> {
    const response = await this.client.context.axios.post(
      `${this.client.context.basketsEndpoint}/${ident}/packages`,
      {
        package_id: packageId,
        target_username_id: targetUsernameId,
      }
    );

    return this.client.handleResponse(response);
  }

  /**
   * Remove a package from a basket
   *
   * @param ident The basket identifier
   * @param packageId The package identifier
   * @returns The updated basket
   */
  public async removePackage(
    ident: string,
    packageId: Package["id"]
  ): Promise<Basket> {
    const response = await this.client.context.axios.post(
      `${this.client.context.basketsEndpoint}/${ident}/packages`,
      {
        package_id: packageId,
      }
    );

    return this.client.handleResponse(response);
  }

  public async updateQuantity(
    ident: string,
    packageId: Package["id"],
    quantity: number
  ): Promise<Basket> {
    const response = await this.client.context.axios.post(
      `${this.client.context.basketsEndpoint}/${ident}/packages/${packageId}`,
      {
        quantity: quantity,
      }
    );

    return this.client.handleResponse(response);
  }
}
