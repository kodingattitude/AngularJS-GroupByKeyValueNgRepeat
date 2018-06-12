var app = angular.module('groupbymultipleelementsfunctionality', ['angular.filter']);
app.controller('GroupByMultipleElementsController', function ($scope, $window) {
    $scope.ShowMore = false;
    $scope.ItemDetails = [
        {
            ItemId: 1,
            TransactionId: "TX001",
            ItemCategory: "Computer",
            ItemCode: "KB384",
            ItemName: "KeyBoard",
            ItemOldPrice: "600",
            ItemNewPrice: "500",
            ShowMore: true
        },
    {
        ItemId: 2,
        TransactionId: "TX001",
        ItemCategory: "Computer",
        ItemCode: "MU932",
        ItemName: "Mouse",
        ItemOldPrice: "500",
        ItemNewPrice: "400",
        ShowMore: false
    },
    {
        ItemId: 3,
        TransactionId: "TX001",
        ItemCategory: "Computer",
        ItemCode: "PD843",
        ItemName: "Pendrive",
        ItemOldPrice: "600",
        ItemNewPrice: "400",
        ShowMore: false
    },
    {
        ItemId: 4,
        TransactionId: "TX001",
        ItemCategory: "Computer",
        ItemCode: "DV0495",
        ItemName: "DVD Drive",
        ItemOldPrice: "2000",
        ItemNewPrice: "1500",
        ShowMore: false
    },
       {
           ItemId: 5,
           TransactionId: "TX002",
           ItemCategory: "Electricity",
           ItemCode: "KB384",
           ItemName: "KeyBoard",
           ItemOldPrice: "500",
           ItemNewPrice: "300",
           ShowMore: true
       },
    {
        ItemId: 6,
        TransactionId: "TX002",
        ItemCategory: "Electricity",
        ItemCode: "MU932",
        ItemName: "Mouse",
        ItemOldPrice: "400",
        ItemNewPrice: "300",
        ShowMore: false
    },
    {
        ItemId: 7,
        TransactionId: "TX002",
        ItemCategory: "Electricity",
        ItemCode: "PD843",
        ItemName: "Pendrive",
        ItemOldPrice: "800",
        ItemNewPrice: "700",
        ShowMore: false
    },
    {
        ItemId: 8,
        TransactionId: "TX002",
        ItemCategory: "Electricity",
        ItemCode: "DV0495",
        ItemName: "DVD Drive",
        ItemOldPrice: "1000",
        ItemNewPrice: "800",
        ShowMore: false
    },
    {
        ItemId: 9,
        TransactionId: "TX002",
        ItemCategory: "Electricity",
        ItemCode: "HD074",
        ItemName: "Hard Drive",
        ItemOldPrice: "900",
        ItemNewPrice: "700",
        ShowMore: false
    }
    ]; //To Declare List
    $scope.filteredItems = $scope.ItemDetails;
    $scope.ClearTextBoxes = function () {
        $window.location.reload();
        //$scope.searchItemCode = '';
        //$scope.searchItemName = '';
        //$scope.searchItemPrice = '';
    }
    $scope.ExpandMore = function (value) {
        this.ShowMore ? this.ShowMore = false : this.ShowMore = true;
      //  this.ShowMore = !this.ShowMore;
        if (this.ShowMore) {
           // this.ShowMore = true;
            for (var i = 0; i < value.length; i++) {
                value[i].ShowMore = true;
            }
        }
        else {
          //  this.ShowMore = false;
            for (var i = 0; i < value.length; i++) {
                if (i != 0)
                    value[i].ShowMore = false;
            }
        }
    }
    $scope.CheckedItem = function (item) {
        item.checked ? item.checked = false : item.checked = true;
        $scope.SelectedTransactions = [];
        if (item.checked)
            $scope.SelectedTransactions.push(item);
    }
    $scope.DisplaySelectedTransaction = function (item) {
        $scope.selectedGroupItems = item;
    }
   
});
