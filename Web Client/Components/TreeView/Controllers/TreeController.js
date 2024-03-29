function TreeController($scope, $rootScope) {

    $scope.tree = [
        {
            name : 'Home',
            children:[],
            linkTo : 'app.home'
        },
        {
            name : 'Calendar',
            children:[],
            linkTo : 'app.calendar'
        },
        {
            name : 'Tasks',
            children:[],
            linkTo : 'app.tasks'
        },
        {
            name : 'Contacts',
            children:[],
            linkTo : 'app.contacts'
        },
        {
            name : 'Cases',
            children:[],
            linkTo : 'app.cases'
        },
        {
            name : 'Document',
            children:[],
            linkTo : 'app.document'
        },
        {
            name : 'Billing',
            children:[],
            linkTo : 'app.billing'
        },
        {
            name : 'Reporting',
            children:[],
            linkTo : 'app.reporting'
        },
        {
            name : 'Profile',
            children:[],
            linkTo : 'app.profile'
        },
        {
            name : 'Message',
            children:[],
            linkTo : 'app.message'
        },
        {
            name : 'Setting',
            children:[],
            linkTo : 'app.setting'
        },
        {
            name : 'User',
            children:[],
            linkTo : 'app.users'
        }
    ];
    $scope.tree.sort( function( a, b ) {
        if ( a.name < b.name )
            return -1 ;
        if ( a.name > b.name )
            return 1;
        return 0;
    });
    $scope.selectedItems = [];

    $scope.selectedRow = $scope.tree[0];

    $scope.expandRow = function(row){
        row.expanded = !row.expanded;

        if(row.expanded){
            row.refresh();
        }
    };

    function addToCollection(o, event){

        if(event.target.nodeName != "INPUT") {
            if(!event.ctrlKey){
                if(!event.shiftKey){
                    for (var i = 0; i < $scope.selectedItems.length; i++) {
                        removeFromCollection($scope.selectedItems[i]);
                    }
                }else{
                    return;
                    //TODO: shift key behavior
                    var start = $scope.selectedPages[$scope.selectedPages.length - 1].index;
                    var end = p.index;
                    console.log("start : %o, end : %o", start, end);
                    if(end > start){
                        for(var i = start ; i <= end ; i++){
                            $scope.container.pages[i].selected = true;
                            $scope.selectedPages.push($scope.container.pages[i]);
                        }
                    }else{
                        for(var i = end ; i <= start ; i++){
                            $scope.container.pages[i].selected = true;
                            $scope.selectedPages.push($scope.container.pages[i]);
                        }
                    }
                    console.log("selectedPages : %o", $scope.selectedPages);
                    return;
                }
            }else{
            }
            var c = 0;
            for(var i = 0 ; i < $scope.selectedItems.length ; i++){
                if($scope.selectedItems[i].data.id == o.id){
                    c++;
                    break;
                }
            }
            if( c == 0 ){
                $scope.selectedItems.push({
                    data : o,
                    dom : $(event.toElement)
                });
                console.log(event.target);
                console.log($(event.toElement));
                $(event.target).addClass("selected-row");
            }
        }
        console.log($scope.selectedItems);
        //set css on element
        //add to collection
    }
    function removeFromCollection(o){
        o.dom.removeClass("selected-row");
        $scope.selectedItems.splice($scope.selectedItems.indexOf(o),1);
    }



    var clicks = 0;
    $scope.customClick = function (row, event) {
        event.stopPropagation();
        event.preventDefault();
        event.originalEvent.preventDefault();
        event.originalEvent.stopPropagation();
        if(event.target.nodeName == "I"){
            return;
        }

        addToCollection(row, event);

        clicks++;
        if (clicks == 1) {
            setTimeout(function () {
                if (clicks == 1) {
                    $scope.user_clicks_branch(row, event);
                } else {
                    $scope.user_dblclicks_branch(row, event);
                }
                clicks = 0;
            }, 300);
        }
        return false;
    };


    $scope.user_clicks_branch = function (row, event) {
        $scope.$apply();
        $rootScope.$broadcast("viewContainer", row);
    };

    $scope.user_dblclicks_branch = function (branch, event) {
        $scope.$apply();
        $rootScope.$broadcast("openContainer", branch);
    };



}
