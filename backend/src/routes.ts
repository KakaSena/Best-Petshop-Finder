import express from 'express'
import SearchController from './controllers/SearchController';

const routes = express.Router();
const searchController  = new SearchController();

routes.get('/search', searchController.search);

export default routes;