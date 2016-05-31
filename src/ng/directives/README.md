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

## postRepeatDirective
Time logging directive:
To measure the time a list rendering takes, which logs the time by using the ng-repeat property “$last”.
```HTML
 <tr ng-repeat="item in items" post-repeat-directive>…</tr>
```