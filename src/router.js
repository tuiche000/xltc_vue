import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    name: 'form',
    component: () => import('./view/form'),
    meta: {
      title: ''
    },
    children: [
      {
        name: 'login',
        path: 'login',
        component: () => import('./view/form/login'),
        meta: {
          title: ''
        }
      },
      {
        name: 'register',
        path: 'register',
        component: () => import('./view/form/register'),
        meta: {
          title: ''
        }
      },
      {
        name: 'cooperation',
        path: 'cooperation',
        component: () => import('./view/form/cooperation'),
        meta: {
          title: ''
        }
      },
    ]
  },
  {
    name: 'home',
    component: () => import('./view/home'),
    meta: {
      title: ''
    }
  },
  {
    name: 'article',
    component: () => import('./view/article'),
    meta: {
      title: ''
    }
  },
  {
    name: 'faq',
    component: () => import('./view/faq'),
    meta: {
      title: ''
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
