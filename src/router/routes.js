const routes = [
  {
    path: '/',
    component: () => import('pages/Login.vue'),
  },
  {
    path: '/Usuario',
    component: () => import('layouts/usuarioLayout.vue'),
    children: [
      { path: '/Usuario', component: () => import('pages/HomePage.vue') },
      { path: '/Usuario/listarItems', component: () => import('pages/listarItems.vue') },
      { path: '/Usuario/cadastroItem', component: () => import('pages/cadastroItem.vue') },
      { path: '/Usuario/cadastroEstoque', component: () => import('pages/cadastroEstoque.vue') },
      { path: '/Usuario/ControleUsuarios', component: () => import('pages/ControleUsuarios.vue') },
      { path: '/Usuario/entradaEstoque', component: () => import('pages/entradaEstoque.vue') },
      { path: '/Usuario/saidaEstoque', component: () => import('pages/saidaEstoque.vue') },
      { path: '/Usuario/historico', component: () => import('pages/HistoricoPage.vue') },
      { path: '/Usuario/Relatorio', component: () => import('pages/gerarRelatorio.vue') },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
