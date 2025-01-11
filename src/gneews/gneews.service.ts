import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GneewsService {
  private readonly baseUrl = 'https://gnews.io/api/v4';
  private readonly apiKey = '38d4b5a1d276a9c299048f92feabc421'; 

  async getTopHeadlines(language = 'en'): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/top-headlines`, {
        params: {
          lang: language,
          token: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Failed to fetch news',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async searchNews(query: string, language = 'en'): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/search`, {
        params: {
          q: query,
          lang: language,
          token: this.apiKey,
        },
      });
      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Failed to search news',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}