import angular from 'angular';

let componentsModule = angular.module('app.components', []);


import ListErrors from './list-errors.component'
componentsModule.component('listErrors', ListErrors);

import ShowAuthed from './show-authed.directive';
componentsModule.directive('showAuthed', ShowAuthed);

import FollowBtn from './buttons/follow-btn.component';
componentsModule.component('followBtn', FollowBtn);

import ArticleMeta from './article-helpers/article-meta.component';
componentsModule.component('articleMeta', ArticleMeta);

import FavoriteBtn from './buttons/favorite-btn.component';
componentsModule.component('favoriteBtn', FavoriteBtn);

import ArticlePreview from './article-helpers/article-preview.component';
componentsModule.component('articlePreview', ArticlePreview);

import ArticleList from './article-helpers/article-list.component';
componentsModule.component('articleList', ArticleList);

import ListPagination from './article-helpers/list-pagination.component';
componentsModule.component('listPagination', ListPagination);

import ServicesList from './services-helpers/services-list.component';
componentsModule.component('servicesList', ServicesList);

import ServicesBanner from './services-helpers/services-banner.component';
componentsModule.component('servicesBanner', ServicesBanner);

import ServicesComments from './services-helpers/services-comments.component';
componentsModule.component('servicesComments', ServicesComments);

export default componentsModule;
