import type { Axios } from 'axios';
import axios from 'axios';

class ApiService {
  api: Axios;

  constructor() {
    this.api = axios.create({ timeout: 5000, baseURL: '/api' });
  }

  addJWTToken(token: string) {
    this.api.interceptors.request.use((config) => {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  }

  async getFeed() {
    const { data } = await this.api.get('/event-photo/');
    return data;
  }

  async getUser(slug: string) {
    const { data } = await this.api.get(`/user/${slug}`);
    return data;
  }

  async getUsers() {
    const { data } = await this.api.get('/user/all');
    return data;
  }

  uploadPhoto(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.api.post('/event-photo', formData);
  }

  likePhoto(imageId: number) {
    return this.api.post(`/event-photo/${imageId}/like`);
  }
}

export const apiService = new ApiService();
