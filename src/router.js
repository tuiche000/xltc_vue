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
      {
        name: 'more',
        path: 'more',
        component: () => import('./view/form/more'),
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
    name: 'case',
    component: () => import('./view/case'),
    meta: {
      title: ''
    }
  },
  {
    name: 'usege',
    component: () => import('./view/usege'),
    meta: {
      title: ''
    }
  },
  {
    name: 'profile',
    component: () => import('./view/profile'),
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

const router = new Router({
  routes, scrollBehavior() {
    return { x: 0, y: 0 }
  }
});

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
