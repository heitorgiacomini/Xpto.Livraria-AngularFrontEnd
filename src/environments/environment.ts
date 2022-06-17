import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Livraria',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44376',
    redirectUri: baseUrl,
    clientId: 'Livraria_App',
    responseType: 'code',
    scope: 'offline_access Livraria',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44376',
      rootNamespace: 'Xpto.Livraria',
    },
  },
} as Environment;
