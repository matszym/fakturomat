var appName = 'fakturomat',
app = angular.module(appName, [
      'ngRoute',
      'ui.bootstrap',
      'ngAnimate',
      'ngCookies',
      'dashboardNavigation',
      'CompanyProfiles',
      'index',
      'messages',
      'ngResource'
   ]);

angular.element(document).ready(function(){
   angular.bootstrap(document, [appName]);
});