import axios, { AxiosInstance, AxiosResponse } from "axios";
import {
  CategoriesService,
  PackagesService,
  WesbtoreService,
  BasketService,
} from "./services";
import { TebexErrorResponse } from "./types";
import { transformKeys } from "./utils";

const BASE_URL = "https://headless.tebex.io";

export class TebexError extends Error {
  constructor(
    public readonly response: TebexErrorResponse,
    public readonly status: number
  ) {
    super(
      `received error from Tebex: ${response.title}; ${response.detail} (status ${status})`
    );
  }
}

export class ClientContext {
  constructor(
    public readonly axios: AxiosInstance,
    public readonly identifier: string,
    public readonly accountsEndpoint: string,
    public readonly basketsEndpoint: string
  ) {}
}

export class TebexHeadlessClient {
  public readonly context: ClientContext;

  public readonly packages: PackagesService;
  public readonly categories: CategoriesService;
  public readonly webstore: WesbtoreService;
  public readonly basket: BasketService;

  constructor(webstoreIdentifier: string) {
    const axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        Accept: "application/json",
      },
      validateStatus: () => true, // so we can handle the errors ourselves
    });

    this.context = new ClientContext(
      axiosInstance,
      webstoreIdentifier,
      `${BASE_URL}/api/accounts/${webstoreIdentifier}`,
      `${BASE_URL}/api/baskets`
    );

    this.packages = new PackagesService(this);
    this.categories = new CategoriesService(this);
    this.webstore = new WesbtoreService(this);
    this.basket = new BasketService(this);
  }

  public async handleResponse<R>(
    response: AxiosResponse,
    withData: boolean = true
  ): Promise<R> {
    const data = response.data;
    const status = response.status;

    if (status !== 200) {
      throw new TebexError(data, status);
    }

    return transformKeys(withData ? data.data : data);
  }
}
