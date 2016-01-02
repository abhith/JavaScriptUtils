# Angular Directives

## showFocus
set focus to input conditionally
```HTML
<input type="text" class="searcher" name="searchTerm" ng-model="query" show-focus="vm.toggleView">
```

## rating
rating directive. author : Scot Allen
```HTML
<otf-rating value="vm.defaultRating" min="1" max="5"></otf-rating>
```

## ngEnter
trigger specified function on enter key press
```HTML
 <input type="text" class="searcher" ng-model="query" ng-enter="vm.redirect()">
```

## dirPagination
dirPagination - AngularJS module for paginating (almost) anything.
* Copyright 2014 Michael Bromley <michael@michaelbromley.co.uk>
```HTML
<li dir-paginate="item in vm.searchResuls | itemsPerPage: 10">

<dir-pagination-controls template-url="../templates/dirPagination.tpl.html"></dir-pagination-controls>
```

## postRepeatDirective
Time logging directive:
To measure the time a list rendering takes, which logs the time by using the ng-repeat property “$last”.
```HTML
 <tr ng-repeat="item in items" post-repeat-directive>…</tr>
```