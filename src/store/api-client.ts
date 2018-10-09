import axios from 'axios';
import { Omit } from 'utility-types';

const Api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export const getAllUsers = () => Api.get<UserRecord[]>('/users');
export const getAllPosts = () => Api.get<PostRecord[]>('/posts');
export const postNewPost = (post: Omit<PostRecord, 'id'>) => Api.post<PostRecord>('/posts', post);