import axios from 'axios';

const api = axios.create({
  baseURL: 'http://my-drupal-site.ddev.site/jsonapi',
});

export default api;
