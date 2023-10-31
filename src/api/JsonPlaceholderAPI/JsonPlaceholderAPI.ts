import { FetchArgs } from "@/api/API/types";
import { JSON_PLACEHOLDER_BASE_URL } from "@/constants";
import { API } from "../API/API";

export interface FetchArg<Updates = Record<string, unknown>> extends FetchArgs {
  signal?: AbortSignal;
  userId?: number;
  updates?: Updates;
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export interface Posts {
  id: number;
  userId: number;
  title: string;
  body: string;
}
export interface Comments {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

class JsonPlaceholderAPI extends API {
  async getPhotos({ signal, ...rest }: FetchArg) {
    const response = await this.fetch<Photo[]>({ path: "photos", signal });

    return response.slice(0, 20);
  }
  async getPosts({ signal, ...rest }: FetchArg) {
    const response = await this.fetch<Posts[]>({ path: "posts", signal });

    return response.slice(0, 10);
  }
  async getComments({ signal, ...rest }: FetchArg) {
    const response = await this.fetch<Comments[]>({ path: "comments", signal });

    return response.slice(0, 15);
  }

  async getUsers({ signal, ...rest }: FetchArg) {
    return await this.fetch<User[]>({ path: "users", signal, ...rest });
  }

  async getUser({ signal, userId, ...rest }: FetchArg) {
    return await this.fetch<User>({ path: `users/${userId}`, signal, ...rest });
  }

  async deleteUser({ signal, userId, ...rest }: FetchArg) {
    return await this.fetch({
      path: `users/${userId}`,
      signal,
      method: "DELETE",
      ...rest,
    });
  }

  async updateUser({ signal, userId, updates, ...rest }: FetchArg) {
    return await this.fetch({
      path: `users/${userId}`,
      signal,
      method: "PATCH",
      body: updates,
      ...rest,
    });
  }
}

export default new JsonPlaceholderAPI(JSON_PLACEHOLDER_BASE_URL);
