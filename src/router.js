import Vue from "vue";
import VueRouter from "vue-router";

/* Page Component imports here */

/* Hook up Vue-Router to Vue */
Vue.use(VueRouter);

/* Page Component imports here */
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Skills from "./pages/Skills";
// include sub page components
import Page1Sub1 from "./pages/page1Sub1";
import Page1Sub2 from "./pages/page1Sub2";

var routes = [
  {
    path: "/p1",
    name: "Page1",
    component: Page1,
    children: [
      {
        path: "sub1",
        component: Page1Sub1
      },
      {
        path: "sub2",
        component: Page1Sub2
      }
    ]
  },
  {
    path: "/p2",
    name: "Page2",
    component: Page2
  },
  ,
  {
    path: "/p3",
    name: "Skills",
    component: Skills
  },
  /* 重定向 */
  {
    path: "*",
    redirect: "/p1"
  },
  {
    path: "/p1",
    redirect: "/p1/sub1"
  }
];
/* Make the router instance */
var Router = new VueRouter({
  routes
});

export default Router;
