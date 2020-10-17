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

import WinnersTop from './winners-helpers/winners-top.component';
componentsModule.component('winnersTop', WinnersTop);

import WinnersBanner from './winners-helpers/winners-banner.component';
componentsModule.component('winnersBanner', WinnersBanner);

import WinnersList from './winners-helpers/winners-list.component';
componentsModule.component('winnersList', WinnersList);

import HomeSlider from './home/home-slider.component';
componentsModule.component('homeSliderComp', HomeSlider);

export default componentsModule;