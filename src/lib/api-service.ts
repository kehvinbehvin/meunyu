import type { Axios } from 'axios';
import axios from 'axios';

class ApiService {
  api: Axios;

  constructor() {
    this.api = axios.create({ timeout: 20000, baseURL: '/api' });
  }

  addJWTToken(token: string) {
    this.api.interceptors.request.use((config) => {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  }

  async getFeed() {
    const { data } = await this.api.get('/event-photo?sort=likes');
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

  uploadPhoto(file: File, caption: string) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('captions', caption);
    return this.api.post('/event-photo', formData);
  }

  likePhoto(imageId: number) {
    return this.api.post(`/event-photo/${imageId}/like`);
  }

  async getPendingImages() {
    const { data } = await this.api.get('/event-photo/all');
    return data;
  }

  async getMessage() {
    const { data } = await this.api.get('/message');
    return data;
  }

  async approveImage(id: number) {
    await this.api.post(`/event-photo/${id}/approve`);
  }

  async setShowMessage(showMessages: boolean) {
    await this.api.post(`/message/toggle-display`, { showMessages });
  }

  async getShowMessage() {
    const { data } = await this.api.get('/message/toggle-display');
    return data;
  }
}

export const apiService = new ApiService();
