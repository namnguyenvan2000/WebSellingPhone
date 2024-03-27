// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

var app = angular.module('myapp', [])

app.controller('myctrl', function ($scope, $http) {
  $scope.giohang = [];
  $scope.products = [];
  $http.get('ipone.json').then(function (response) {
    $scope.products = response.data;
  });
  $scope.pro = [];
  $http.get('pro.json').then(function (response) {
    $scope.pro = response.data;
  });
  $scope.pro2 = [];
  $http.get('pro2.json').then(function (response) {
    $scope.pro2 = response.data;
  });
  $scope.dsIphone = [];
  $http.get('dsIphone.json').then(function (response) {
    $scope.dsIphone = response.data;
  });
  $scope.dsIphone2 = [];
  $http.get('dsIphone2.json').then(function (response) {
    $scope.dsIphone2 = response.data;
  });
  $scope.dsSamsung = [];
  $http.get('dsSamsung.json').then(function (response) {
    $scope.dsSamsung = response.data;
  });
  $scope.dsSamsung2 = [];
  $http.get('dsSamsung2.json').then(function (response) {
    $scope.dsSamsung2 = response.data;
  });
  $scope.giohang = [];
  $http.get('giohang.json').then(function (response) {
    $scope.giohang = response.data;
  });
  $scope.getToTal = function(){
    var total = 0;
    for (var i = 0; i < $scope.giohang.length; i++){
      total += $scope.giohang[i].price * $scope.giohang[i].soluong;
    }
    return total;
  }
  $scope.xoahet = function () {
    $scope.$parent.giohang = [];
  }
  $scope.xoa = function (i) {
    $scope.$parent.giohang.splice(i, 1);
  }
});


app.controller("trangctSP", function ($scope) {
  $scope.mua = function (sp) {
    var chuaCo = true;
    for (const item of $scope.$parent.giohang) {
      if (item.id == sp.id) {
        //TH1: Đã có sp rồi thì tăng sl
        item.soluong++;
        chuaCo = false;
        break;
      }
    }
    if (chuaCo) {
      //TH2: chưa có sp thì thêm vaof giỏ hàng
      sp.soluong = 1;
      $scope.$parent.giohang.push(sp);
    }
    console.log($scope.$parent.giohang);
  }

});
app.controller("trangctSP", function ($scope, $routeParams) {
  var id = $routeParams.id;
  $scope.sanpham = {};
  for (const item of $scope.$parent.dsSP) {
    if (item.id == id) {
      $scope.sanpham = item;
      break;
    }
  }
})
app.controller('cartCtrl', function ($scope, $http) {
  $scope.tinhtongthanhtien = function () {
    var tong = 0;
    for (const item of $scope.$parent.giohang) {
      tong += item.price * item.soluong;
    }
    return tong;
  }

});



