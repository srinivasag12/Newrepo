import routes from "routes";

export const useRouteName = () => {
  let name = "";
  routes.forEach((route) => {
    console.log(route);
    console.log(window.location.href + "///" + route.layout + route.path);
    console.log(window.location.href.indexOf(route.layout + route.path));
    /* if (window.location.href.indexOf(route.layout + route.path) !== -1) {
      name = routes.rtlActive ? route.rtlName : route.name;
    } */

    if (route.layout) {
      console.log("route.layout.......");
      if (window.location.href.indexOf(route.layout + route.path) !== -1) {
        name = routes.rtlActive ? route.rtlName : route.name;
      }
    } else if (route.views[0].layout) {
      console.log("route.views[0].layout.........");
      for (let index = 0; index < route.views.length; index++) {
        if (
          window.location.href.indexOf(
            route.views[index].layout + route.views[index].path
          ) !== -1
        ) {
          name = route.views[index].name;
        }
      }
    }

    // else if()
    // else if(route.icon ?  window.location.href.indexOf(route.layout + route.path)
    //  : window.location.href.indexOf(route.views[0].layout + route.views[0].path)){
    //   name =  route.views[0].name;
    // }
    // else if(window.location.href.indexOf((route.views)[0].layout + (route.views)[0].path)){

    // }
  });
  return name;
};
