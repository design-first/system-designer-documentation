/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: 'System Designer',
  tagline: 'An IDE for designing systems',
  url: 'https://designfirst.io/systemdesigner/',
  baseUrl: '../',

  projectName: '',
  organizationName: '',

  headerLinks: [
    { doc: 'what-is-system-designer', label: 'INTRODUCTION' }
  ],

  headerIcon: 'img/logo.png',
  footerIcon: 'img/logo.png',
  favicon: 'img/favicon.ico',

  colors: {
    primaryColor: '#f8f8f8',
    secondaryColor: '#f8f8f8',
  },

  copyright: 'System Designer is distributed under Apache License 2.0 - Copyright © 2018 Erwan Carriou',

  highlight: {
    theme: 'zenburn',
  },

  onPageNav: 'separate'
};

module.exports = siteConfig;
