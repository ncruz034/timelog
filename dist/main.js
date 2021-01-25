(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+CyI":
/*!*******************************************************************!*\
  !*** ./src/app/components/project/list/project-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListComponent", function() { return ProjectListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_project_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./project-list.component.html */ "pyLl");
/* harmony import */ var _project_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-list.component.css */ "fwvb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/project.service */ "c3AT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







var ProjectListComponent = /** @class */ (function () {
    function ProjectListComponent(projectService, router) {
        this.projectService = projectService;
        this.router = router;
        this.addProject = false;
        this.projectname = 'The Project';
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        this.fetchProjects();
    };
    Object.defineProperty(ProjectListComponent.prototype, "searchTerm", {
        get: function () {
            return this._searchTerm;
        },
        set: function (value) {
            this._searchTerm = value;
            this.filteredProjects = this.filtereProjects(value);
        },
        enumerable: false,
        configurable: true
    });
    ProjectListComponent.prototype.filtereProjects = function (searchString) {
        return this.projects.filter(function (project) {
            return project.projectName.toString().toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
        });
    };
    ProjectListComponent.prototype.filterProjects = function () {
    };
    ProjectListComponent.prototype.addProjectToggle = function () {
        this.addProject = !this.addProject;
    };
    ProjectListComponent.prototype.addNewOrder = function (project_id, projectName, clientName) {
        this.router.navigate(["orders/create/" + project_id + "/" + projectName + "/" + clientName]);
    };
    ProjectListComponent.prototype.fetchProjects = function () {
        var _this = this;
        this.projectService.getProjects().subscribe(function (data) {
            _this.projects = data;
            _this.filteredProjects = data;
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigate(['/auth']);
                }
            }
        });
    };
    ProjectListComponent.prototype.editProject = function (id) {
        this.router.navigate(["projects/edit/" + id]);
    };
    ProjectListComponent.prototype.detailProject = function (id) {
        this.router.navigate(["projects/detail/" + id]);
    };
    ProjectListComponent.prototype.deleteProject = function (id) {
        var _this = this;
        this.projectService.deleteProject(id).subscribe(function () {
            _this.fetchProjects();
            _this.router.navigate(["projects/"]);
        });
    };
    ProjectListComponent.ctorParameters = function () { return [
        { type: _services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    ProjectListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-project-list',
            template: _raw_loader_project_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_project_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ProjectListComponent);
    return ProjectListComponent;
}());



/***/ }),

/***/ "+DUU":
/*!*************************************************************!*\
  !*** ./src/app/components/time/list/time-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TimeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeListComponent", function() { return TimeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_time_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./time-list.component.html */ "w+ZD");
/* harmony import */ var _time_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time-list.component.css */ "Dn/o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_time_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/time.service */ "q+Sf");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/order.service */ "kVqo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");








var TimeListComponent = /** @class */ (function () {
    function TimeListComponent(orderService, timeService, router, calendar) {
        this.orderService = orderService;
        this.timeService = timeService;
        this.router = router;
        this.timeByOrder = [];
        this.displayedColumns = ['orderNumber', 'date', 'description', 'time', 'overTime', 'actions'];
        this.filteredDates = [];
        this.filteredDates2 = [];
        this.timesBySelectedDate = [];
        this.isExpanded = false;
        this.newOrderTotal = {
            orderNumber: '',
            regularTimeTotal: 0,
            overTimeTotal: 0
        };
        this.filteredOrderTotals = [];
        var weekDay = calendar.getWeekday(calendar.getToday());
        this.fromDate = calendar.getNext(calendar.getToday(), 'd', -weekDay);
        // this.fromDate =  calendar.getNext(calendar.getToday(), 'd', - 7);
        this.toDate = calendar.getNext(calendar.getToday(), 'd', +(6 - weekDay)); // calendar.getToday();
        this.defaultDate = calendar.getToday();
    }
    TimeListComponent.prototype.onDateSelection = function (date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
            this.filteredOrderTotals = [];
            this.filterDate();
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    };
    TimeListComponent.prototype.toggle = function (data) {
        var _this = this;
        this.timeByOrder = [];
        this.filteredDates2.forEach(function (time) {
            if (time.orderNumber === data) {
                _this.timeByOrder.push(time);
            }
        });
        this.timeService.sendTimeByOrder(this.timeByOrder);
        this.router.navigate(["times/time-per-order"]);
        /*
            if (this.isExpanded === false) {
              this.isExpanded = !this.isExpanded;
            }
        */
    };
    TimeListComponent.prototype.isHovered = function (date) {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    };
    TimeListComponent.prototype.isInside = function (date) {
        return date.after(this.fromDate) && date.before(this.toDate);
    };
    TimeListComponent.prototype.isRange = function (date) {
        return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
    };
    TimeListComponent.prototype.ngOnInit = function () {
        this.getUsersTime(localStorage.getItem('user_id'));
    };
    TimeListComponent.prototype.getTimesByOrderId = function () {
        var _this = this;
        this.timeService.geTimesByOrderId(this.currentOrderId).subscribe(function (data) {
            _this.times = data;
        });
    };
    TimeListComponent.prototype.getUsersTime = function (user_id) {
        var _this = this;
        this.timeService.getUsersTime(user_id).subscribe(function (data) {
            _this.userTimes = data.times;
            _this.userTimes2 = data.orders;
            _this.filteredDates = data.times;
            _this.filteredDates2 = data.orders;
            _this.filterDate();
        });
    };
    TimeListComponent.prototype.filterDate = function () {
        if (this.toDate == null) {
            this.toDate = this.defaultDate;
        }
        var dateFrom = new Date(this.fromDate.year, this.fromDate.month - 1, this.fromDate.day);
        var dateTo = new Date(this.toDate.year, this.toDate.month - 1, this.toDate.day);
        this.filteredDates = this.userTimes.filter(function (date) {
            var theDate = new Date(date._id.date);
            return (dateFrom <= theDate && dateTo >= theDate);
        });
        this.filteredDates2 = this.userTimes2.filter(function (data) {
            var theDate = new Date(data.date);
            return (dateFrom <= theDate && dateTo >= theDate);
        }).sort(function (a, b) {
            return (a.orderNumber - b.orderNumber);
        });
        var temp;
        for (var i = 0; i < this.filteredDates2.length; i++) {
            if (this.filteredDates2[i].orderNumber !== temp) {
                this.filteredOrderTotals.push({
                    orderNumber: this.filteredDates2[i].orderNumber,
                    totalTime: this.filteredDates2[i].time,
                    totalOverTime: this.filteredDates2[i].overTime
                });
                temp = this.filteredDates2[i].orderNumber;
            }
            else {
                this.filteredOrderTotals[this.filteredOrderTotals.length - 1].totalTime += this.filteredDates2[i].time;
            }
        }
        console.log(this.filteredOrderTotals);
    };
    TimeListComponent.prototype.listTimeByOrder = function (id) {
        this.router.navigate(["orders/detail/" + id]);
    };
    TimeListComponent.prototype.editTime = function (_id) {
        this.router.navigate(["times/edit/" + _id]);
    };
    TimeListComponent.prototype.deleteTime = function (_id) {
        var _this = this;
        this.timeService.deleteTime("" + _id).subscribe(function () {
            _this.getUsersTime(localStorage.getItem('user_id'));
        });
        /*  this.orderService.deleteTime(order_id, id).subscribe((time) => {
          console.log('Order Updated' + time);
         }); */
    };
    TimeListComponent.ctorParameters = function () { return [
        { type: _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] },
        { type: _services_time_service__WEBPACK_IMPORTED_MODULE_4__["TimeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCalendar"] }
    ]; };
    TimeListComponent.propDecorators = {
        currentOrderId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        isOrderRequest: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    TimeListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-time-list',
            template: _raw_loader_time_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_time_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"], _services_time_service__WEBPACK_IMPORTED_MODULE_4__["TimeService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCalendar"]])
    ], TimeListComponent);
    return TimeListComponent;
}());



/***/ }),

/***/ "+IsR":
/*!******************************************************************!*\
  !*** ./src/app/components/users/create/user-create.component.ts ***!
  \******************************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_create_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-create.component.html */ "8dc2");
/* harmony import */ var _user_create_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-create.component.css */ "YpU6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent() {
    }
    UserCreateComponent.prototype.ngOnInit = function () {
    };
    UserCreateComponent.ctorParameters = function () { return []; };
    UserCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-user-create',
            template: _raw_loader_user_create_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_user_create_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], UserCreateComponent);
    return UserCreateComponent;
}());



/***/ }),

/***/ "+pnO":
/*!**********************************************************************!*\
  !*** ./src/app/components/time/time-weekly/time-weekly.component.ts ***!
  \**********************************************************************/
/*! exports provided: TimeWeeklyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeWeeklyComponent", function() { return TimeWeeklyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_time_weekly_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./time-weekly.component.html */ "SvbY");
/* harmony import */ var _time_weekly_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time-weekly.component.css */ "bAdN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_time_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/time.service */ "q+Sf");





var TimeWeeklyComponent = /** @class */ (function () {
    function TimeWeeklyComponent(timeService) {
        this.timeService = timeService;
    }
    TimeWeeklyComponent.prototype.ngOnInit = function () {
        console.log("Getting user weekly time =====================");
        console.log("User Id: " + localStorage.getItem('user_id'));
        this.getUsersWeeklyTime(localStorage.getItem('user_id'));
    };
    TimeWeeklyComponent.prototype.getUsersWeeklyTime = function (user_id) {
        var _this = this;
        console.log("In weekly function");
        this.timeService.getUsersWeeklyTime(user_id).subscribe(function (data) {
            _this.userTimes = data;
            console.log(_this.userTimes);
        });
    };
    TimeWeeklyComponent.ctorParameters = function () { return [
        { type: _services_time_service__WEBPACK_IMPORTED_MODULE_4__["TimeService"] }
    ]; };
    TimeWeeklyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-time-weekly',
            template: _raw_loader_time_weekly_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_time_weekly_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_time_service__WEBPACK_IMPORTED_MODULE_4__["TimeService"]])
    ], TimeWeeklyComponent);
    return TimeWeeklyComponent;
}());



/***/ }),

/***/ "/AzP":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order/edit/order-edit.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container\">\r\n  <div class=\"heading\">\r\n    <legend>Edit Order</legend>\r\n  </div>\r\n  <div class=\"card borderless\">\r\n    <div class=\"card-body\">\r\n        <form [formGroup]='form' (ngSubmit)=\"editOrder()\">\r\n            <div *ngIf=\"form.errors\" class=\"alert alert-danger\">\r\n                ERROR! Some fields appear to be invalid\r\n            </div>\r\n\r\n    <hr>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"date\">DATE</label>\r\n                <div class=\"input-group\">\r\n                <input formControlName =\"date\" type=\"text\"  class=\"form-control\" placeholder=\"yyyy-mm-dd *\" name=\"date\"  id=\"date\" ngbDatepicker #date=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary fas fa-calendar-alt\" (click)=\"date.toggle()\" type=\"button\"></button>\r\n                </div>\r\n                </div>\r\n                <div *ngIf=\"(form.get('date').touched && form.get('date').invalid) || (form.get('date').invalid && form.errors)\" class=\"alert alert-danger\">A date is required</div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"clientName\">NAME OF CLIENT</label>\r\n                <input formControlName=\"clientName\" type=\"text\" class=\"form-control\" placeholder=\"Name of client *\" id=\"clientName\">\r\n                <div *ngIf=\"(form.get('clientName').touched && form.get('clientName').invalid) || (form.get('clientName').invalid && form.errors)\" class=\"alert alert-danger\">Client Name is required</div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"address\">ADDRESS</label>\r\n                <input formControlName=\"address\" type=\"text\" class=\"form-control\" placeholder=\"Address *\" id=\"address\">\r\n                <div *ngIf=\"(form.get('address').touched && form.get('address').invalid) || (form.get('address').invalid && form.errors)\" class=\"alert alert-danger\">Address is required</div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"phoneNumber\">PHONE</label>\r\n                <input formControlName=\"phoneNumber\" type=\"text\" class=\"form-control\" placeholder=\"Phone Number *\" id=\"phoneNumber\">\r\n                <div *ngIf=\"(form.get('phoneNumber').touched && form.get('phoneNumber').invalid) || (form.get('phoneNumber').invalid && form.errors)\" class=\"alert alert-danger\">Phone No. is required</div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"col-form-label\" for=\"fieldWorkPromissed\">FIELD WORK PROMISSED</label>\r\n              <div class=\"input-group\">\r\n              <input formControlName=\"fieldWorkPromissed\" type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"fieldWorkPromissed\"  ngbDatepicker #dFieldWork=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary fas fa-calendar-alt\" (click)=\"dFieldWork.toggle()\" type=\"button\"></button>\r\n              </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"col-form-label\" for=\"printsPromissed\">PRINTS PROMISSED</label>\r\n              <div class=\"input-group\">\r\n              <input formControlName=\"printsPromissed\" type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"printsPromissed\"  ngbDatepicker #d=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary fas fa-calendar-alt\" (click)=\"d.toggle()\" type=\"button\"></button>\r\n              </div>\r\n              </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n          <label class=\"col-form-label\" for=\"projectName\">PROJECT NAME</label>\r\n          <input formControlName=\"projectName\" type=\"text\" class=\"form-control\" placeholder=\"Project Name *\" id=\"projectName\">\r\n          <div *ngIf=\"(form.get('projectName').touched && form.get('projectName').invalid) || (form.get('projectName').invalid && form.errors)\" class=\"alert alert-danger\">Project Name is required</div>\r\n      </div>\r\n\r\n      <hr>\r\n      <div class=\"form-group\">\r\n          <label class=\"col-form-label\" for=\"legalDescription\">LEGAL DESCRIPTION</label>\r\n          <textarea formControlName=\"legalDescription\" type=\"text\" class=\"form-control\" placeholder=\"Legal Description *\" id=\"legalDescription\"></textarea>\r\n          <div *ngIf=\"(form.get('legalDescription').touched && form.get('legalDescription').invalid) || (form.get('legalDescription').invalid && form.errors)\" class=\"alert alert-danger\">Legal Description is required</div>\r\n      </div>\r\n      <hr>\r\n     <div class=\"row\">\r\n       <div class=\"col-md-6\">\r\n         <div class=\"row\">\r\n         <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"orderPlacedBy\">ORDER PLACED BY</label>\r\n                <input formControlName=\"orderPlacedBy\" type=\"text\" class=\"form-control\" placeholder=\"Order Placed By *\" id=\"orderPlacedBy\">\r\n                <div *ngIf=\"(form.get('orderPlacedBy').touched && form.get('orderPlacedBy').invalid) || (form.get('orderPlacedBy').invalid && form.errors)\" class=\"alert alert-danger\">Order Placed By is required</div>\r\n            </div>\r\n         </div>\r\n         <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"orderReceivedBy\">RECEIVED BY</label>\r\n                <input formControlName=\"orderReceivedBy\" type=\"text\" class=\"form-control\" placeholder=\"Order received by *\" id=\"orderReceivedBy\">\r\n                <div *ngIf=\"(form.get('orderReceivedBy').touched && form.get('orderReceivedBy').invalid) || (form.get('orderReceivedBy').invalid && form.errors)\" class=\"alert alert-danger\">Order received by is required</div>\r\n            </div>\r\n         </div>\r\n       </div>\r\n       <div class=\"form-group\">\r\n          <label class=\"col-form-label\" for=\"referToFileNumber\">REFER TO FILE No.</label>\r\n          <input formControlName=\"referToFileNumber\" type=\"text\" class=\"form-control\" placeholder=\"Refer to file No.\" id=\"referToFileNumber\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label class=\"col-form-label\" for=\"referToFieldBookNumber\">REFER TO FB No.</label>\r\n          <input formControlName=\"referToFieldBookNumber\" type=\"text\" class=\"form-control\" placeholder=\"Refer to FB No.\" id=\"referToFieldBookNumber\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label class=\"col-form-label\" for=\"referToOrderNumber\">REFER ORDER No.</label>\r\n          <input formControlName=\"referToOrderNumber\" type=\"text\" class=\"form-control\" placeholder=\"Refer to order No.\" id=\"referToOrderNumber\">\r\n      </div>\r\n      </div>\r\n       <div class=\"col-md-6\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-form-label\" for=\"fieldBook\">FB</label>\r\n                    <input formControlName=\"fieldBook\" type=\"text\" class=\"form-control\" placeholder=\"Field Book\" id=\"fieldBook\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-form-label\" for=\"page\">PG</label>\r\n                    <input formControlName=\"page\" type=\"text\" class=\"form-control\" placeholder=\"Page\" id=\"page\">\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-form-label\" for=\"section\">SEC</label>\r\n                    <input formControlName=\"section\" type=\"text\" class=\"form-control\" placeholder=\"Section\" id=\"section\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-form-label\" for=\"township\">TWP</label>\r\n                    <input formControlName=\"township\" type=\"text\" class=\"form-control\" placeholder=\"Township\" id=\"township\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-form-label\" for=\"range\">RGE</label>\r\n                    <input formControlName=\"range\" type=\"text\" class=\"form-control\" placeholder=\"Range\" id=\"range\">\r\n                </div>\r\n            </div>\r\n          </div>\r\n\r\n              <div class=\"form-group\">\r\n                  <label class=\"col-form-label\" for=\"partyChief\">PARTY CHIEF</label>\r\n                  <input formControlName=\"partyChief\" type=\"text\" class=\"form-control\" placeholder=\"Party Chief\" id=\"partyChief\">\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"dateCompleted\">DATE COMPLETED</label>\r\n                <div class=\"input-group\">\r\n                <input formControlName=\"dateCompleted\" type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dateCompleted\"  ngbDatepicker #dCompleted=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary fas fa-calendar-alt\" (click)=\"dCompleted.toggle()\" type=\"button\"></button>\r\n                </div>\r\n                </div>\r\n              </div>\r\n\r\n       </div>\r\n      </div>\r\n      <hr>\r\n      <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n           <div class=\"row\">\r\n             <div class=\"col-md-4\">\r\n                 <div class=\"form-group\">\r\n                     <label class=\"col-form-label\" for=\"mail\">MAIL</label>\r\n                     <input formControlName=\"mail\" type=\"text\" class=\"form-control\" placeholder=\"Mail\" id=\"mail\">\r\n                 </div>\r\n                 <div class=\"form-group\">\r\n                    <label class=\"col-form-label\" for=\"deliver\">DELIVER</label>\r\n                    <input formControlName=\"deliver\" type=\"text\" class=\"form-control\" placeholder=\"Deliver\" id=\"deliver\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-form-label\" for=\"pickup\">PICK UP</label>\r\n                    <input formControlName=\"pickup\" type=\"text\" class=\"form-control\" placeholder=\"Pick up\" id=\"pickup\">\r\n                </div>\r\n             </div>\r\n             <div class=\"col-md-8\">\r\n                 <div class=\"form-group\">\r\n                     <label class=\"col-form-label\" for=\"mailPrintsTo\">PRINTS TO</label>\r\n                     <input formControlName=\"mailPrintsTo\" type=\"text\" class=\"form-control\" placeholder=\"Prints To\" id=\"mailPrintsTo\">\r\n                 </div>\r\n                 <div class=\"form-group\">\r\n                    <label class=\"col-form-label\" for=\"deliverPrintsTo\">PRINTS TO</label>\r\n                    <input formControlName=\"deliverPrintsTo\" type=\"text\" class=\"form-control\" placeholder=\"Prints to\" id=\"deliverPrintsTo\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-form-label\" for=\"printsAtTime\">PRINTS AT (TIME)</label>\r\n                    <input formControlName=\"printsAtTime\" type=\"text\" class=\"form-control\" placeholder=\"Prints at time\" id=\"printsAtTime\">\r\n                </div>\r\n             </div>\r\n           </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n\r\n              <div class=\"form-group\">\r\n                  <label class=\"col-form-label\" for=\"dateInvoice\">DATE INVOICE</label>\r\n                  <div class=\"input-group\">\r\n                  <input formControlName=\"dateInvoice\" type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dateInvoice\"  ngbDatepicker #dInvoice=\"ngbDatepicker\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-outline-secondary fas fa-calendar-alt\" (click)=\"dInvoice.toggle()\" type=\"button\"></button>\r\n                  </div>\r\n                  </div>\r\n                </div>\r\n\r\n             <div class=\"form-group\">\r\n                 <label class=\"col-form-label\" for=\"amountSetBy\">AMOUNT SET BY:</label>\r\n                 <input formControlName=\"amountSetBy\" type=\"text\" class=\"form-control\" placeholder=\"Amount set by\" id=\"amountSetBy\">\r\n             </div>\r\n             <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"invoiceTypedBy\">INVOICE TYPED BY:</label>\r\n                <input formControlName=\"invoiceTypedBy\" type=\"text\" class=\"form-control\" placeholder=\"Invoice typed by\" id=\"invoiceTypedBy\">\r\n            </div>\r\n           </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n             <div class=\"row\">\r\n               <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                      <label class=\"col-form-label\" for=\"courierFees\">COURIER FEES</label>\r\n                      <input formControlName=\"courierFees\" type=\"text\" class=\"form-control\" placeholder=\"Courrier Fees\" id=\"courierFees\">\r\n\r\n                  </div>\r\n               </div>\r\n               <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                      <label class=\"col-form-label\" for=\"applPermitFees\">APPLICATIONS/PERMIT FEES</label>\r\n                      <input formControlName=\"applPermitFees\" type=\"text\" class=\"form-control\" placeholder=\"Application Permit Fee\" id=\"applPermitFees\">\r\n                  </div>\r\n               </div>\r\n             </div>\r\n          </div>\r\n\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input formControlName=\"isCOD\" class=\"form-check-input\" type=\"checkbox\" id=\"isCOD\">\r\n                  <label class=\"form-check-label\" for=\"isCOD\">COD</label>\r\n                </div>\r\n              </div>\r\n          </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                  <label class=\"col-form-label\" for=\"orderNumber\">ORDER No.</label>\r\n                  <input formControlName=\"orderNumber\" type=\"text\" class=\"form-control\" placeholder=\"Order Number *\" id=\"orderNumber\">\r\n                  <div *ngIf=\"(form.get('orderNumber').touched && form.get('orderNumber').invalid) || (form.get('orderNumber').invalid && form.errors)\" class=\"alert alert-danger\">Order Number is required</div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                  <label class=\"col-form-label\" for=\"fileNumber\">FILE NO.</label>\r\n                  <input formControlName=\"fileNumber\" type=\"text\" class=\"form-control\" placeholder=\"File Number\" id=\"fileNumber\">\r\n                  <div *ngIf=\"form.get('fileNumber').touched && form.get('fileNumber').invalid\" class=\"alert alert-danger\">File Number is required</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-form-label\" for=\"price\">PRICE $</label>\r\n                    <input formControlName=\"price\" type=\"text\" class=\"form-control\" placeholder=\"price\" id=\"price\">\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n            <button  class=\"btn btn-primary\" type=\"button\" color = \"accent\" routerLink=\"/orders\">Back</button>\r\n            <button class=\"btn btn-success\" type=\"button\" (click)=\"editOrder()\" [disabled]=\"!form.valid\">Save</button>\r\n          </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "/DQW":
/*!*****************************************************!*\
  !*** ./src/app/common/address/address.component.ts ***!
  \*****************************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_address_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./address.component.html */ "fw0U");
/* harmony import */ var _address_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address.component.css */ "r0g5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AddressComponent = /** @class */ (function () {
    function AddressComponent() {
    }
    AddressComponent.prototype.ngOnInit = function () {
    };
    AddressComponent.ctorParameters = function () { return []; };
    AddressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-address',
            template: _raw_loader_address_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_address_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "/MKq":
/*!*******************************************************************!*\
  !*** ./src/app/components/clients/list/client-list.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table{\r\n  width: 100%;\r\n}\r\n.mat-column-right{\r\n  text-align: center;\r\n}\r\n.box{\r\nwidth: auto;\r\nheight: auto;\r\nmargin: 0 auto;\r\npadding: 5px;\r\ntext-align: center;\r\nborder: 2px solid #2E333A\r\n}\r\n.child{\r\ndisplay: inline-block;\r\npadding: 25px;\r\ntext-align: left;\r\n}\r\n.example-chip-list {\r\nwidth: 100%;\r\n}\r\n.example-headers-align .mat-expansion-panel-header-title,\r\n.example-headers-align .mat-expansion-panel-header-description {\r\nflex-basis: 0;\r\n}\r\n.example-headers-align .mat-expansion-panel-header-description {\r\njustify-content: space-between;\r\ntext-align: center;\r\n}\r\n.pointerCursor {\r\n  cursor: pointer;\r\n}\r\n.a\r\n{\r\npadding-left: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUdBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWixjQUFjO0FBQ2QsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBRUE7O0FBRUEsYUFBYTtBQUNiO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsa0JBQWtCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCIiwiZmlsZSI6ImNsaWVudC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ubWF0LWNvbHVtbi1yaWdodHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uYm94e1xyXG53aWR0aDogYXV0bztcclxuaGVpZ2h0OiBhdXRvO1xyXG5tYXJnaW46IDAgYXV0bztcclxucGFkZGluZzogNXB4O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmJvcmRlcjogMnB4IHNvbGlkICMyRTMzM0FcclxufVxyXG4uY2hpbGR7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxucGFkZGluZzogMjVweDtcclxudGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uZXhhbXBsZS1jaGlwLWxpc3Qge1xyXG53aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXHJcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuZmxleC1iYXNpczogMDtcclxufVxyXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wb2ludGVyQ3Vyc29yIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmFcclxue1xyXG5wYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "/Qst":
/*!************************************************************************!*\
  !*** ./src/app/components/project/create/project-create.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.card{\r\n  padding-left: 100px;\r\n  padding-right: 100px;\r\n  border: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2QiLCJmaWxlIjoicHJvamVjdC1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2FyZHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "/VbO":
/*!************************************************************************************!*\
  !*** ./src/app/components/dashobard/admin-dashboard/admin-dashboard.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-card {\r\n  max-width: flex;\r\n  align-content: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.example-container {\r\n  width: flex;\r\n  height: flex;\r\n}\r\n\r\nbutton{\r\n  border-radius: 50%;\r\n}\r\n\r\nimg{\r\n  border-radius: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFHQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJhZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gIG1heC13aWR0aDogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICB3aWR0aDogZmxleDtcclxuICBoZWlnaHQ6IGZsZXg7XHJcbn1cclxuXHJcblxyXG5idXR0b257XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbmltZ3tcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Code\timelog\src\main.ts */"zUnb");


/***/ }),

/***/ "0np6":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: theUri */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theUri", function() { return theUri; });
var theUri = 'http://localhost:3000/api';
//export const theUri: string = 'https://ssa-timelog.herokuapp.com/api';


/***/ }),

/***/ "0upW":
/*!******************************************************************************************!*\
  !*** ./src/app/components/applications/tree-file-creator/tree-file-creator.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TreeFileCreatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeFileCreatorComponent", function() { return TreeFileCreatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tree_file_creator_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tree-file-creator.component.html */ "qHGh");
/* harmony import */ var _tree_file_creator_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree-file-creator.component.css */ "zGVB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var TreeFileCreatorComponent = /** @class */ (function () {
    function TreeFileCreatorComponent() {
        this.fileList = [];
        this.invalidFiles = [];
    }
    TreeFileCreatorComponent.prototype.onFilesInvalidEmiter = function (invalidFiles) {
        this.invalidFiles = invalidFiles;
    };
    TreeFileCreatorComponent.prototype.onFilesChange = function (fileList) {
        this.fileList = fileList;
    };
    TreeFileCreatorComponent.prototype.ngOnInit = function () {
    };
    TreeFileCreatorComponent.ctorParameters = function () { return []; };
    TreeFileCreatorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-tree-file-creator',
            template: _raw_loader_tree_file_creator_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_tree_file_creator_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TreeFileCreatorComponent);
    return TreeFileCreatorComponent;
}());



/***/ }),

/***/ "0z2C":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n.background {\r\n  max-width: flex;\r\n  align-content: center;\r\n  justify-content: center;\r\n  align-items: auto;\r\n}\r\n\r\n.example-container {\r\n  background-color: var(--background-color);;\r\n  width: flex;\r\n  height: flex;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uYmFja2dyb3VuZCB7XHJcbiAgbWF4LXdpZHRoOiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogYXV0bztcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTs7XHJcbiAgd2lkdGg6IGZsZXg7XHJcbiAgaGVpZ2h0OiBmbGV4O1xyXG59XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "1AuF":
/*!********************************************************!*\
  !*** ./src/app/components/dialog/dialog.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2cuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "1ctb":
/*!**********************************************************************!*\
  !*** ./src/app/components/clients/create/client-create.component.ts ***!
  \**********************************************************************/
/*! exports provided: ClientCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCreateComponent", function() { return ClientCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_client_create_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./client-create.component.html */ "lQ0Z");
/* harmony import */ var _client_create_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-create.component.css */ "EsIT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/client.service */ "Jmk/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _models_client_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/client.model */ "UMzN");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");









var ClientCreateComponent = /** @class */ (function () {
    function ClientCreateComponent(clientService, fb, router) {
        this.clientService = clientService;
        this.fb = fb;
        this.router = router;
        this.client = new _models_client_model__WEBPACK_IMPORTED_MODULE_7__["Client"]();
    }
    Object.defineProperty(ClientCreateComponent.prototype, "clientName", {
        get: function () { return this.form.get('clientName'); },
        enumerable: false,
        configurable: true
    });
    ClientCreateComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            clientName: [this.client.clientName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            date: [this.client.date, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            address: [this.client.address, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phone: [this.client.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            contact: [this.client.contact, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    ClientCreateComponent.prototype.addClient = function () {
        if (!this.form.valid) {
            this.form.setErrors({ invalidAddTime: true });
        }
        else {
            this.clientService.addClient(this.form.value).subscribe(function (order_id) { });
            this.router.navigate(["clients/"]);
        }
    };
    ClientCreateComponent.ctorParameters = function () { return [
        { type: _services_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    ClientCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-create',
            template: _raw_loader_client_create_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            providers: [{ provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDateAdapter"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDateNativeAdapter"] }],
            styles: [_client_create_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ClientCreateComponent);
    return ClientCreateComponent;
}());



/***/ }),

/***/ "2Zhw":
/*!************************************************************************!*\
  !*** ./src/app/components/admin/user-access/user-access.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWFjY2Vzcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "2gdd":
/*!***********************************************************************!*\
  !*** ./src/app/components/clients/detail/client-detail.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "3L37":
/*!************************************************************************!*\
  !*** ./src/app/components/dashobard/dashboard/dashboard.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-card {\r\n  max-width: flex;\r\n  align-content: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.example-container {\r\n  width: flex;\r\n  height: flex;\r\n}\r\n\r\nbutton{\r\n  border-radius: 50%;\r\n}\r\n\r\nimg{\r\n  border-radius: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFHQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gIG1heC13aWR0aDogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICB3aWR0aDogZmxleDtcclxuICBoZWlnaHQ6IGZsZXg7XHJcbn1cclxuXHJcblxyXG5idXR0b257XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbmltZ3tcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "6fFR":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashobard/clients-dashboard/clients-dashboard.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n<mat-card>\r\n  \r\n  <mat-vertical-stepper style=\"background-color:\" [linear]=\"isLinear\" #stepper>\r\n    <mat-step [stepControl]=\"firstFormGroup\">\r\n      <form [formGroup]=\"firstFormGroup\">\r\n        <ng-template matStepLabel>PROJECT & CONTACT INFORMATION</ng-template>\r\n            <mat-form-field >\r\n              <input matInput placeholder=\"Project Name:\">\r\n            </mat-form-field>\r\n            <table  cellspacing=\"5\">\r\n              <tr>\r\n                <td><mat-form-field >\r\n                  <input matInput placeholder=\"Project Manager Name\">\r\n                </mat-form-field></td>\r\n                <td><mat-form-field>\r\n                  <input matInput placeholder=\"Last\">\r\n                </mat-form-field></td>\r\n              </tr>\r\n            </table>\r\n\r\n            <table cellspacing=\"5\"><tr>\r\n              <td><mat-form-field >\r\n                <input matInput placeholder=\"Phone No.\">\r\n              </mat-form-field></td>\r\n              <td><mat-form-field>\r\n                <input matInput placeholder=\"Fax No.\">\r\n              </mat-form-field></td>\r\n              <td><mat-form-field>\r\n                <input matInput  placeholder=\"E-mail\">\r\n              </mat-form-field></td>\r\n            </tr></table>\r\n\r\n            <mat-form-field >\r\n                <input matInput placeholder=\"Accounting/Billing Contact\">\r\n            </mat-form-field>\r\n            <mat-form-field >\r\n                <input matInput placeholder=\"Accounting Check Run Dates\">\r\n            </mat-form-field>\r\n\r\n              <table cellspacing=\"5\"><tr>\r\n                <td><mat-form-field >\r\n                  <input matInput placeholder=\"Phone No.\">\r\n                </mat-form-field></td>\r\n                <td><mat-form-field>\r\n                  <input matInput placeholder=\"Fax No.\">\r\n                </mat-form-field></td>\r\n                <td><mat-form-field>\r\n                  <input matInput  placeholder=\"E-mail\">\r\n                </mat-form-field></td>\r\n              </tr></table>\r\n        <div>\r\n          <button mat-button matStepperNext>Next</button>\r\n        </div>\r\n\r\n      </form>\r\n    </mat-step>\r\n    <mat-step [stepControl]=\"secondFormGroup\">\r\n      <form [formGroup]=\"secondFormGroup\">\r\n        <ng-template matStepLabel>BILLING INFORMATION</ng-template>\r\n            <mat-form-field >\r\n              <input matInput placeholder=\"Property Owner\">\r\n            </mat-form-field>\r\n            <mat-form-field >\r\n              <input matInput placeholder=\"Party Responsible for Payment\">\r\n            </mat-form-field>\r\n            <p class=\"primary-text-color\">Original invoice should be addressed as follows:</p>\r\n            <mat-form-field >\r\n              <input matInput placeholder=\"Client/Company Name\">\r\n            </mat-form-field>\r\n            <mat-form-field >\r\n                <input matInput placeholder=\"Attention\">\r\n            </mat-form-field>\r\n            <table cellspacing=\"5\"><tr>\r\n                <td><mat-form-field >\r\n                  <input matInput placeholder=\"Phone No.\">\r\n                </mat-form-field></td>\r\n                <td><mat-form-field>\r\n                  <input matInput placeholder=\"Fax No.\">\r\n                </mat-form-field></td>\r\n                <td><mat-form-field>\r\n                  <input matInput  placeholder=\"E-mail\">\r\n                </mat-form-field></td>\r\n              </tr></table>\r\n\r\n            <p>\r\n              <mat-form-field>\r\n                <textarea matInput placeholder=\"Billing Address 1\"></textarea>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <textarea matInput placeholder=\"Billing Address 2\"></textarea>\r\n              </mat-form-field>\r\n            </p>\r\n\r\n            <table  cellspacing=\"5\"><tr>\r\n              <td><mat-form-field >\r\n                <input matInput placeholder=\"City\">\r\n              </mat-form-field></td>\r\n              <td><mat-form-field >\r\n                <input matInput placeholder=\"State\">\r\n              </mat-form-field></td>\r\n              <td><mat-form-field >\r\n                <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\">\r\n                <mat-hint align =\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n              </mat-form-field></td>\r\n            </tr></table>\r\n            <p class=\"primary-text-color\">Copies should be forwarded to:</p>\r\n            <mat-form-field >\r\n                <input matInput placeholder=\"Client/Company Name\">\r\n              </mat-form-field>\r\n              <mat-form-field >\r\n                  <input matInput placeholder=\"Attention\">\r\n              </mat-form-field>\r\n\r\n              <table cellspacing=\"5\"><tr>\r\n                  <td><mat-form-field >\r\n                    <input matInput placeholder=\"Phone No.\">\r\n                  </mat-form-field></td>\r\n                  <td><mat-form-field>\r\n                    <input matInput placeholder=\"Fax No.\">\r\n                  </mat-form-field></td>\r\n                  <td><mat-form-field>\r\n                    <input matInput  placeholder=\"E-mail\">\r\n                  </mat-form-field></td>\r\n                </tr></table>\r\n              <p>\r\n                <mat-form-field>\r\n                  <textarea matInput placeholder=\"Billing Address 1\"></textarea>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                  <textarea matInput placeholder=\"Billing Address 2\"></textarea>\r\n                </mat-form-field>\r\n              </p>\r\n\r\n              <table  cellspacing=\"5\"><tr>\r\n                <td><mat-form-field >\r\n                  <input matInput placeholder=\"City\">\r\n                </mat-form-field></td>\r\n                <td><mat-form-field >\r\n                  <input matInput placeholder=\"State\">\r\n                </mat-form-field></td>\r\n                <td><mat-form-field >\r\n                  <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\">\r\n                  <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n                </mat-form-field></td>\r\n              </tr></table>\r\n      </form>\r\n    </mat-step>\r\n    <mat-step>\r\n      <ng-template matStepLabel>INVOICE SUPPORTING DOCUMENTS/FORMATTING</ng-template>\r\n      <p class=\"primary-text-color\">Please note that additional fees may be added for any of the following services:</p>\r\n\r\n        <table  cellspacing=\"5\">\r\n          <tr>\r\n            <td>\r\n                <mat-checkbox>Insurance Certificate Required</mat-checkbox>\r\n            </td>\r\n            <td><mat-form-field >\r\n              <input matInput>\r\n            </mat-form-field></td>\r\n            </tr>\r\n            <tr>\r\n            <td>\r\n                <mat-checkbox>Project/P.O./Contract Number Reference</mat-checkbox>\r\n            </td>\r\n            <td><mat-form-field >\r\n                <input matInput>\r\n              </mat-form-field></td>\r\n          </tr>\r\n          <tr>\r\n              <td>\r\n                  <mat-checkbox>Insurance Certificate Required</mat-checkbox>\r\n              </td>\r\n              <td><mat-form-field >\r\n                  <input matInput>\r\n                </mat-form-field></td>\r\n            </tr>\r\n        </table>\r\n      <div>\r\n        <button mat-button matStepperPrevious>Back</button>\r\n        <button mat-button (click)=\"stepper.reset()\">Reset</button>\r\n        <button mat-button >Submit</button>\r\n      </div>\r\n    </mat-step>\r\n  </mat-vertical-stepper>\r\n</mat-card>\r\n-->");

/***/ }),

/***/ "7/Tp":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/zippy/zippy.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"zippy\">\r\n  <div class=\"zippy-heading\" [class.expanded]=\"isExpanded\" (click)=\"toggle()\">\r\n    <table>\r\n      <tr>\r\n        <td>{{data1}}</td><td>{{data2}}</td><td>{{data3}}</td><td>{{data4}}</td>\r\n      </tr>\r\n    </table>\r\n    {{title}}\r\n    <span class = \"fontIcon\" [ngClass]=\"isExpanded ? 'fas fa-chevron-down' : 'fas fa-chevron-up'\"></span>\r\n    </div>\r\n\r\n  <div *ngIf=\"isExpanded\" class=\"zippy-body\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "72Fy":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/billing/create/billing-create.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  create works!\r\n</p>\r\n");

/***/ }),

/***/ "7TQ8":
/*!********************************************************************!*\
  !*** ./src/app/components/order/create/order-create.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".create-form{\r\n    display:flex;\r\n    flex-direction:column;\r\n    min-width: 150px;\r\n    width:auto;\r\n    background-color: #ffffffce;\r\n}\r\n\r\n.field-full-width{\r\n    width: 50%;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJvcmRlci1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGUtZm9ybXtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICB3aWR0aDphdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmNlO1xyXG59XHJcblxyXG4uZmllbGQtZnVsbC13aWR0aHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "8dc2":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/create/user-create.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  user-create works!\r\n</p>\r\n");

/***/ }),

/***/ "8tFE":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dialog/dialog.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>dialog works!</p>\r\n");

/***/ }),

/***/ "9GAx":
/*!******************************************************************!*\
  !*** ./src/app/components/time/create/time-create.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".create-form{\r\n    display:flex;\r\n    flex-direction:column;\r\n    min-width: 150px;\r\n    width:auto;\r\n\r\n}\r\n.card{\r\n  padding: 100px;\r\n}\r\n.field-full-width{\r\n    width: 50%;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUtY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixVQUFVOztBQUVkO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoidGltZS1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGUtZm9ybXtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICB3aWR0aDphdXRvO1xyXG5cclxufVxyXG4uY2FyZHtcclxuICBwYWRkaW5nOiAxMDBweDtcclxufVxyXG4uZmllbGQtZnVsbC13aWR0aHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "9zAr":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/time/time-per-order/time-per-order.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n         <div class=\"container\">\r\n          <div class=\"heading\">\r\n            <legend>ORDER No. {{timeByOrder[0].orderNumber}}</legend>\r\n        </div>\r\n         <div class=\"card\">\r\n            <table class=\"table table-striped table-bordered\">\r\n              <thead class=\"table-dark\">\r\n                <tr>\r\n                  <th>Order No.</th>\r\n                  <th>Regular Time</th>\r\n                  <th>Overtime</th>\r\n                  <th>Total</th>\r\n                  <th>Actions</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let data of timeByOrder\">\r\n                  <td>{{data.orderNumber}}</td>\r\n                  <td>{{data.time}}</td>\r\n                  <td>{{data.overTime}}</td>\r\n                  <td>{{data.time + data.overTime}}</td>\r\n                  <td>\r\n                      <div class=\"form-group form-inline\" >\r\n                          <h5><a style=\"padding-right: 10px\"><i  class=\"fas fa-edit pointerCursor\" (click) = \"editTime(data._id)\" ngbTooltip=\"Edit Time\"></i></a></h5>\r\n                          <h4><a style=\"padding-right: 10px\"><i  class=\"fas fa-trash-alt pointerCursor\" (click) = \"deleteTime(data._id)\" ngbTooltip=\"Delete Time\"></i></a></h4>\r\n                      </div>\r\n                  </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n</div>\r\n");

/***/ }),

/***/ "A/Sw":
/*!*******************************************************************!*\
  !*** ./src/app/components/clients/edit/client-edit.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card{\r\n  padding-left: 100px;\r\n  padding-right: 100px;\r\n  border: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLFlBQVk7QUFDZCIsImZpbGUiOiJjbGllbnQtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n/*\r\n.example-fill-remaining-space {\r\n  /* This fills the remaining space, by using flexbox.\r\n     Every toolbar row uses a flexbox row layout. \r\n  flex: 1 1 auto;\r\n}\r\n*/\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Ozs7O0NBTUMiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLypcclxuLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC5cclxuICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiBcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4qL1xyXG5cclxuIl19 */");

/***/ }),

/***/ "A52Z":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/edit/user-edit.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  user-edit works!\r\n</p>\r\n");

/***/ }),

/***/ "A9cl":
/*!**********************************************************************!*\
  !*** ./src/app/components/clients/detail/client-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: ClientDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailComponent", function() { return ClientDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_client_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./client-detail.component.html */ "J8gE");
/* harmony import */ var _client_detail_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-detail.component.css */ "2gdd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/client.service */ "Jmk/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







var ClientDetailComponent = /** @class */ (function () {
    function ClientDetailComponent(route, clientService, http, router) {
        this.route = route;
        this.clientService = clientService;
    }
    ClientDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            //console.log(this.id);
            _this.clientService.getClientById(_this.id)
                .subscribe(function (client) {
                _this.client = client;
                //console.log(this.client);
            });
        });
    };
    ClientDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _services_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    ClientDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-detail',
            template: _raw_loader_client_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_client_detail_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _services_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ClientDetailComponent);
    return ClientDetailComponent;
}());



/***/ }),

/***/ "AFfg":
/*!*******************************************************************!*\
  !*** ./src/app/components/billing/list/billing-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: BillingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingListComponent", function() { return BillingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_billing_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./billing-list.component.html */ "rdzV");
/* harmony import */ var _billing_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./billing-list.component.css */ "NO2g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/project.service */ "c3AT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







var BillingListComponent = /** @class */ (function () {
    function BillingListComponent(projectService, router) {
        this.projectService = projectService;
        this.router = router;
    }
    BillingListComponent.prototype.ngOnInit = function () {
        this.fetchProjects();
    };
    BillingListComponent.prototype.fetchProjects = function () {
        var _this = this;
        this.projectService.getProjectStats().subscribe(function (data) {
            _this.projects = data;
            console.log(_this.projects);
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigate(['/auth']);
                }
            }
        });
    };
    BillingListComponent.ctorParameters = function () { return [
        { type: _services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    BillingListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-list',
            template: _raw_loader_billing_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_billing_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], BillingListComponent);
    return BillingListComponent;
}());



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    navBarBackgroundColor: 'white'
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B2/F":
/*!*****************************************************************!*\
  !*** ./src/app/components/time/create/time-create.component.ts ***!
  \*****************************************************************/
/*! exports provided: TimeCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeCreateComponent", function() { return TimeCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_time_create_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./time-create.component.html */ "tnBe");
/* harmony import */ var _time_create_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time-create.component.css */ "9GAx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_time_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/time.service */ "q+Sf");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/order.service */ "kVqo");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _models_time_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../models/time.model */ "O68N");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");











//import { MomentModule } from 'ngx-moment';
var TimeCreateComponent = /** @class */ (function () {
    function TimeCreateComponent(route, orderService, userService, timeService, fb, router) {
        this.route = route;
        this.orderService = orderService;
        this.userService = userService;
        this.timeService = timeService;
        this.fb = fb;
        this.router = router;
        this.time = new _models_time_model__WEBPACK_IMPORTED_MODULE_9__["Time"]();
        this.orders = null;
        this.form = this.fb.group({
            'order_id': [this.time.order_id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'date': [this.time.date, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'projectName': [this.time.projectName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'clientName': [this.time.clientName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'orderNumber': [this.time.orderNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'description': [this.time.description, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'time': [this.time.time, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'overTime': [this.time.overTime, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'isField': [this.time.isField],
            'userName': [this.time.userName],
            'user_id': [this.time.user_id],
        });
    }
    TimeCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.form.get('order_id').setValue(params.order_id);
            _this.form.get('projectName').setValue(params.projectName);
            _this.form.get('clientName').setValue(params.clientName);
            _this.form.get('orderNumber').setValue(params.orderNumber);
        });
    };
    TimeCreateComponent.prototype.addTime = function () {
        // this.orderService.getOrderIdByOrderNumber(this.form.value.orderNumber).subscribe((order_id: any) => {
        // Add new time to time collection, return the new time _id.
        if (!this.form.value.isField) {
            this.form.get('isField').setValue(false);
        }
        this.form.get('userName').setValue(localStorage.getItem('user'));
        this.form.get('user_id').setValue(localStorage.getItem('user_id'));
        if (!this.form.valid) {
            this.form.setErrors({ invalidAddTime: true });
        }
        else {
            this.timeService.addTime(this.form.value).subscribe(function (time_id) {
            });
            this.router.navigate(['/times']);
        }
    };
    TimeCreateComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: _services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _services_time_service__WEBPACK_IMPORTED_MODULE_5__["TimeService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    TimeCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-time-create',
            template: _raw_loader_time_create_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            providers: [{ provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDateAdapter"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDateNativeAdapter"] }],
            styles: [_time_create_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"], _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _services_time_service__WEBPACK_IMPORTED_MODULE_5__["TimeService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], TimeCreateComponent);
    return TimeCreateComponent;
}());

// Gets the order _id by passing an orderNumber; then,
// Adds new time to the time collection passing the order _id, and user _id; then,
// Adds new time _id to the current user's document; then,
// Adds new time _id to the selected order.
/* addTime() {
  this.orderService.getOrderIdByOrderNumber(this.form.value.orderNumber).subscribe((order_id: any) => {
        // Add new time to time collection, return the new time _id.
        this.timeService.addTime(
              this.form.value.date.toDateString(), order_id,
              this.form.value.description, this.form.value.time,
              localStorage.getItem('user_id')).subscribe((time_id: any) => {
              console.log('this is the time _id ' + time_id);
            // Add time to user, return a user _id.
            this.userService.addTimeToUser(localStorage.getItem('user_id'), time_id)
                  .subscribe((user: any) => {
                  console.log('This is the user _id ' + user._id);
                                        });
                // Add time to order, return a order _id.
                this.orderService.addTimeToOrder(order_id, time_id)
                      .subscribe((order: any) => {
                      console.log('This is the order _id ' + order._id);
                                        });
            });
            this.router.navigate(['/times']);
  });


} */
/*
 private _filter(value: string): string[] {
     const filterValue = value.toLowerCase();
   return this.clients.filter(client => client.toLowerCase().includes(filterValue));
 }

  async fetchProjects(){
   this.orderService.getOrders().subscribe(
     (data: Order[])=>{
      for(let i = 0; i < data.length; i++){
         this.clients.push(Object.values(data[i])[3]);
        console.log(this.clients);
       // console.log(data);
      }},
     err => {
       if(err instanceof HttpErrorResponse){
           if(err.status === 401){
             this.router.navigate(['/auth']);
           }
       }
     }
   );
 }
 */
/*   ngOnInit() {

    this.route.params.subscribe( params => {

        //console.log("The params area: " + params.projectName );
        this.form.get('projectName').setValue(params.projectName);
        this.form.get('clientName').setValue(params.clientName);
        this.form.get('orderNumber').setValue(params.orderNumber);
    });
  } */
//this.user_id = localStorage.getItem('user_id');
/* this.form = this.fb.group({
  'date': [this.time.date, Validators.required],
  'projectName': [this.time.projectName, Validators.required],
  'clientName': [this.time.clientName, Validators.required],
  'orderNumber': [this.time.orderNumber, Validators.required],
  'description': [this.time.description, Validators.required],
  'time': [this.time.time, Validators.required],
}); */
/*
this.fetchProjects().then(()=>{
  this.filteredClients = this.myControl.valueChanges
  .pipe(
    startWith(''),
    map(value => this._filter(value))
  );
});
*/


/***/ }),

/***/ "B7sV":
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashobard/admin-dashboard/admin-dashboard.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-dashboard.component.html */ "maui");
/* harmony import */ var _admin_dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-dashboard.component.css */ "/VbO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent() {
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
    };
    AdminDashboardComponent.ctorParameters = function () { return []; };
    AdminDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-admin-dashboard',
            template: _raw_loader_admin_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_admin_dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "BLgi":
/*!*****************************************************************************!*\
  !*** ./src/app/components/time/time-per-order/time-per-order.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: none;\r\n  padding-left: 100px;\r\n  padding-right: 100px;\r\n}\r\n\r\n.pointerCursor {\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUtcGVyLW9yZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJ0aW1lLXBlci1vcmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLnBvaW50ZXJDdXJzb3Ige1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "BOIe":
/*!**************************************************!*\
  !*** ./src/app/common/zippy/zippy.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".zippy{\r\n   border: 1px solid #ccc;\r\n   border-radius: 2px;\r\n}\r\n\r\n.zippy-heading{\r\n   font-weight: bold;\r\n   padding: 20px;\r\n   cursor: pointer;\r\n}\r\n\r\n.zippy-body{\r\n   padding: 20px;\r\n}\r\n\r\n.expanded{\r\n  background: #77bcf4;\r\n}\r\n\r\n.fontIcon{\r\n    float: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInppcHB5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxzQkFBc0I7R0FDdEIsa0JBQWtCO0FBQ3JCOztBQUVBO0dBQ0csaUJBQWlCO0dBQ2pCLGFBQWE7R0FDYixlQUFlO0FBQ2xCOztBQUVBO0dBQ0csYUFBYTtBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoiemlwcHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi56aXBweXtcclxuICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uemlwcHktaGVhZGluZ3tcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnppcHB5LWJvZHl7XHJcbiAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5leHBhbmRlZHtcclxuICBiYWNrZ3JvdW5kOiAjNzdiY2Y0O1xyXG59XHJcblxyXG4uZm9udEljb257XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "BTfv":
/*!*******************************************************!*\
  !*** ./src/app/components/dialog/dialog.component.ts ***!
  \*******************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dialog.component.html */ "8tFE");
/* harmony import */ var _dialog_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.component.css */ "1AuF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent.ctorParameters = function () { return []; };
    DialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-dialog',
            template: _raw_loader_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "Bb7m":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/project/detail/project-detail.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n<div class=\"heading\">\r\n    <legend>Project Details</legend>\r\n</div>\r\n\r\n  <div *ngIf=\"project\" class=\" card row text-white bg-secondary \">\r\n    <div class=\"card-header\">{{project.projectName}}</div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-2\">\r\n          <h5 class=\"card-title\">Name:</h5>\r\n          <h5 class=\"card-title\">Date:</h5>\r\n          <h5 class=\"card-title\">Client:</h5>\r\n          <h5 class=\"card-title\">Description:</h5>\r\n        </div>\r\n        <div class=\"col-sm-10\">\r\n          <h5 class=\"card-title\"><span>{{project.projectName}}</span></h5>\r\n          <h5 class=\"card-title\"><span>{{project.date | date}}</span></h5>\r\n          <h5 class=\"card-title\"><span>{{project.clientName}}</span></h5>\r\n          <h5 class=\"card-title\"><span>{{project.description}}</span></h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!--\r\n  <div *ngIf=\"project\">\r\n       <div class=\"card row\">\r\n\r\n         <div class=\"card-body\">\r\n           <h5><div class=\"card-title\">{{project.projectName}}</div></h5>\r\n           <h5>Project Name:</h5><h6 class=\"card-subtitle mb-2 text-muted\">{{project.projectName}}</h6>\r\n           <h5>Date:</h5><h6 class=\"card-subtitle mb-2 text-muted\">{{project.date | date}}</h6>\r\n           <h5>Client Name:</h5><h6 class=\"card-subtitle mb-2 text-muted\">{{project.clientName}}</h6>\r\n           <h5>Description:</h5><h6 class=\"card-subtitle mb-2 text-muted\">{{project.description}}</h6>\r\n         </div>\r\n\r\n       </div>\r\n  </div>\r\n-->\r\n    <div class=\"row\">\r\n      <div class=\"card text-white bg-dark mb-3 col-sm\" >\r\n        <div class=\"card-header\">OPEN ORDERS</div>\r\n        <div *ngFor='let order of project.projectOrders'>\r\n          <ul>\r\n            <li>{{order.orderNumber}}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n   </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"card text-white bg-primary mb-3 col-sm\" >\r\n      <div class=\"card-header\">OFFICE TIME</div>\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Regular Time: <span>{{officeRegTimeCounter}}</span></h5>\r\n        <h5 class=\"card-title\">Overtime: <span>{{officeOvrTimeCounter}}</span></h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card text-white bg-info mb-3 col-sm\">\r\n      <div class=\"card-header\">FIELD TIME</div>\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Regular Time: <span>{{fieldRegTimeCounter}}</span></h5>\r\n        <h5 class=\"card-title\">Overtime: <span>{{fieldOvrTimeCounter}}</span></h5>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "tXZI");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.css */ "0z2C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.showFiller = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.ctorParameters = function () { return []; };
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-home',
            template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "Deyd":
/*!*******************************************************************************!*\
  !*** ./src/app/components/service-request/create/service-create.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ServiceCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceCreateComponent", function() { return ServiceCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_service_create_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./service-create.component.html */ "dyLq");
/* harmony import */ var _service_create_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-create.component.css */ "Qy7t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var ServiceCreateComponent = /** @class */ (function () {
    function ServiceCreateComponent() {
    }
    ServiceCreateComponent.prototype.ngOnInit = function () {
    };
    ServiceCreateComponent.ctorParameters = function () { return []; };
    ServiceCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-service-create',
            template: _raw_loader_service_create_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_service_create_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ServiceCreateComponent);
    return ServiceCreateComponent;
}());



/***/ }),

/***/ "Dn/o":
/*!**************************************************************!*\
  !*** ./src/app/components/time/list/time-list.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table{\r\n    width: 100%;\r\n}\r\n\r\n.mat-column-right{\r\n  text-align: center;\r\n}\r\n\r\n.pointerCursor {\r\n  cursor: pointer;\r\n}\r\n\r\n.custom-day {\r\n  text-align: center;\r\n  padding: 0.185rem 0.25rem;\r\n  display: inline-block;\r\n  height: 2rem;\r\n  width: 2rem;\r\n}\r\n\r\n.custom-day.focused {\r\n  background-color: #e6e6e6;\r\n}\r\n\r\n.custom-day.range, .custom-day:hover {\r\n  background-color: rgb(2, 117, 216);\r\n  color: white;\r\n}\r\n\r\n.custom-day.faded {\r\n  background-color: rgba(2, 117, 216, 0.5);\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: row;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: none;\r\n  padding-left: 100px;\r\n  padding-right: 100px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUNBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJ0aW1lLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXJpZ2h0e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBvaW50ZXJDdXJzb3Ige1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY3VzdG9tLWRheSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICB3aWR0aDogMnJlbTtcclxufVxyXG4uY3VzdG9tLWRheS5mb2N1c2VkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG59XHJcbi5jdXN0b20tZGF5LnJhbmdlLCAuY3VzdG9tLWRheTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmN1c3RvbS1kYXkuZmFkZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTE3LCAyMTYsIDAuNSk7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "E8lZ":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"heading\">\r\n    <legend>Register</legend>\r\n  </div>\r\n  <div class=\"card borderless\">\r\n\r\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegister(registerForm.value)\">\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Name</label>\r\n            <input  class=\"form-control\"  placeholder=\"Enter Name\" required formControlName=\"name\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"last\">Last</label>\r\n            <input  class=\"form-control\" id=\"last\" placeholder=\"Enter Last Name\"  required formControlName = \"last\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email address</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" [formControl]=\"email\" required formControlName = \"email\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"password1\">Password</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" formControlName = \"password\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"password2\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"Password2\" placeholder=\"Enter password again\" formControlName = \"password2\">\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary\" value=\"Submit Form\" [disabled]=\"!registerForm.valid\">Submit</button>\r\n      </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--\r\n    <mat-card >\r\n      <form class=\"register-form\" [formGroup]=\"registerForm\" (ngSubmit)=\"onRegister(registerForm.value)\">\r\n      <div class=\"example-container\">\r\n        <mat-form-field >\r\n          <input matInput placeholder=\"Name\" required formControlName = \"name\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field >\r\n            <input matInput placeholder=\"Last\" required formControlName = \"last\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required formControlName = \"email\">\r\n          <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" required formControlName = \"password\">\r\n          <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" required formControlName = \"password2\">\r\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n          </mat-form-field>\r\n\r\n        <div class=\"button-row\">\r\n            <button mat-fab color=\"primary\" type=\"submit\" value=\"Submit Form\" [disabled]=\"!registerForm.valid\">Register</button>\r\n            <button mat-fab color=\"accent\" routerLink=\"/home\">Cancel</button>\r\n        </div>\r\n        <div style=\"text-align: center;\">{{successMessage}}</div>\r\n      </div>\r\n    </form>\r\n    </mat-card> -->\r\n\r\n");

/***/ }),

/***/ "EsIT":
/*!***********************************************************************!*\
  !*** ./src/app/components/clients/create/client-create.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".create-form{\r\n  display:flex;\r\n  flex-direction:column;\r\n  min-width: 150px;\r\n  width:auto;\r\n}\r\n\r\n.field-full-width{\r\n  width: 50%;\r\n}\r\n\r\n.card{\r\n  padding-left: 100px;\r\n  padding-right: 100px;\r\n  border: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsWUFBWTtBQUNkIiwiZmlsZSI6ImNsaWVudC1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGUtZm9ybXtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgd2lkdGg6YXV0bztcclxufVxyXG5cclxuLmZpZWxkLWZ1bGwtd2lkdGh7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "G56G":
/*!***************************************************************!*\
  !*** ./src/app/components/order/edit/order-edit.component.ts ***!
  \***************************************************************/
/*! exports provided: OrderEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderEditComponent", function() { return OrderEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-edit.component.html */ "/AzP");
/* harmony import */ var _order_edit_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-edit.component.css */ "ztte");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/order.service */ "kVqo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









var OrderEditComponent = /** @class */ (function () {
    function OrderEditComponent(datePipe, orderService, fb, router, route) {
        this.datePipe = datePipe;
        this.orderService = orderService;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.order = {};
        this.billed = [
            { value: true, viewValue: 'yes' },
            { value: false, viewValue: 'No' },
        ];
        this.statusOptions = [
            { value: 'In Progress', viewValue: 'In Progress' },
            { value: 'Finished', viewValue: 'Finished' },
            { value: 'Hold', viewValue: 'Hold' },
        ];
        this.form = this.fb.group({
            'date': [this.order.date, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'clientName': [this.order.clientName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'address': [this.order.address, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'phoneNumber': [this.order.phoneNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'fieldWorkPromissed': [this.order.fieldWorkPromissed],
            'printsPromissed': [this.order.printsPromissed],
            'projectName': [this.order.projectName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'legalDescription': [this.order.legalDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'orderPlacedBy': [this.order.orderPlacedBy, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'orderReceivedBy': [this.order.orderReceivedBy, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'referToFileNumber': [this.order.referToFileNumber],
            'referToFieldBookNumber': [this.order.referToFieldBookNumber],
            'referToOrderNumber': [this.order.referToOrderNumber],
            'fieldBook': [this.order.fieldBook],
            'page': [this.order.page],
            'section': [this.order.section],
            'township': [this.order.township],
            'range': [this.order.range],
            'partyChief': [this.order.partyChief],
            'dateCompleted': [this.order.dateCompleted],
            'mail': [this.order.mail],
            'deliver': [this.order.deliver],
            'pickup': [this.order.pickup],
            'mailPrintsTo': [this.order.mailPrintsTo],
            'deliverPrintsTo': [this.order.deliverPrintsTo],
            'printsAtTime': [this.order.printsAtTime],
            'dateInvoice': [this.order.dateInvoice],
            'amountSetBy': [this.order.amountSetBy],
            'invoiceTypedBy': [this.order.invoiceTypedBy],
            'courierFees': [this.order.courierFees],
            'applPermitFees': [this.order.applPermitFees],
            'isCOD': [this.order.isCOD],
            'orderNumber': [this.order.orderNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'fileNumber': [this.order.fileNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'price': [this.order.price],
        });
    }
    OrderEditComponent.prototype.editOrder = function () {
        var _this = this;
        if (!this.form.valid) {
            this.form.setErrors({ invalidEditOrder: true });
        }
        else {
            this.orderService.editOrder(this.id, this.form.value).subscribe(function () {
                //this.snackBar.open('Order updated succesfully', 'OK', {duration: 3000});
                _this.router.navigate(['/orders']);
            });
        }
    };
    OrderEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.orderService.getOrderById(_this.id).subscribe(function (res) {
                _this.order = res;
                _this.form.get('date').setValue(new Date(_this.order.date));
                _this.form.get('clientName').setValue(_this.order.clientName);
                _this.form.get('address').setValue(_this.order.address);
                _this.form.get('phoneNumber').setValue(_this.order.phoneNumber);
                _this.form.get('fieldWorkPromissed').setValue(new Date(_this.order.fieldWorkPromissed));
                _this.form.get('printsPromissed').setValue(new Date(_this.order.printsPromissed));
                _this.form.get('projectName').setValue(_this.order.projectName);
                _this.form.get('legalDescription').setValue(_this.order.legalDescription);
                _this.form.get('orderPlacedBy').setValue(_this.order.orderPlacedBy);
                _this.form.get('orderReceivedBy').setValue(_this.order.orderReceivedBy);
                _this.form.get('referToFileNumber').setValue(_this.order.referToFieldBookNumber);
                _this.form.get('referToFieldBookNumber').setValue(_this.order.referToFieldBookNumber);
                _this.form.get('referToOrderNumber').setValue(_this.order.referToOrderNumber);
                _this.form.get('fieldBook').setValue(_this.order.fieldBook);
                _this.form.get('page').setValue(_this.order.page);
                _this.form.get('section').setValue(_this.order.section);
                _this.form.get('township').setValue(_this.order.township);
                _this.form.get('range').setValue(_this.order.range);
                _this.form.get('partyChief').setValue(_this.order.partyChief);
                _this.form.get('dateCompleted').setValue(new Date(_this.order.dateCompleted));
                _this.form.get('mail').setValue(_this.order.mail);
                _this.form.get('deliver').setValue(_this.order.deliver);
                _this.form.get('pickup').setValue(_this.order.pickup);
                _this.form.get('mailPrintsTo').setValue(_this.order.mailPrintsTo);
                _this.form.get('deliverPrintsTo').setValue(_this.order.deliverPrintsTo);
                _this.form.get('printsAtTime').setValue(_this.order.printsAtTime);
                _this.form.get('dateInvoice').setValue(new Date(_this.order.dateInvoice));
                _this.form.get('amountSetBy').setValue(_this.order.amountSetBy);
                _this.form.get('invoiceTypedBy').setValue(_this.order.invoiceTypedBy);
                _this.form.get('courierFees').setValue(_this.order.courierFees);
                _this.form.get('applPermitFees').setValue(_this.order.applPermitFees);
                _this.form.get('isCOD').setValue(_this.order.isCOD);
                _this.form.get('orderNumber').setValue(_this.order.orderNumber);
                _this.form.get('fileNumber').setValue(_this.order.fileNumber);
                _this.form.get('price').setValue(_this.order.price);
            });
        });
    };
    OrderEditComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
        { type: _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    OrderEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-order-edit',
            template: _raw_loader_order_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            providers: [{ provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDateAdapter"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDateNativeAdapter"] }, _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
            styles: [_order_edit_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], OrderEditComponent);
    return OrderEditComponent;
}());



/***/ }),

/***/ "HA+T":
/*!***********************************************************************!*\
  !*** ./src/app/components/project/detail/project-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProjectDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailComponent", function() { return ProjectDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_project_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./project-detail.component.html */ "Bb7m");
/* harmony import */ var _project_detail_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-detail.component.css */ "Vto3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/project.service */ "c3AT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







var ProjectDetailComponent = /** @class */ (function () {
    function ProjectDetailComponent(route, projectService, http, router) {
        this.route = route;
        this.projectService = projectService;
        this.officeRegTimeCounter = 0;
        this.fieldRegTimeCounter = 0;
        this.officeOvrTimeCounter = 0;
        this.fieldOvrTimeCounter = 0;
        this.officeTotalHours = 0;
        this.fieldTotalHours = 0;
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            // console.log(this.id);
            _this.projectService.getProjectById(_this.id)
                .subscribe(function (project) {
                _this.project = project;
                if (_this.project) {
                    console.log('Orders: ' + _this.project.projectOrders.length + ' orders');
                    for (var _i = 0, _a = _this.project.projectOrders; _i < _a.length; _i++) {
                        _this.order = _a[_i];
                        console.log(_this.order.orderNumber);
                    }
                    console.log('Times: ' + _this.project.times.length + ' times');
                    for (var _b = 0, _c = _this.project.times; _b < _c.length; _b++) {
                        _this.time = _c[_b];
                        if (_this.time.isField) {
                            _this.fieldOvrTimeCounter += Number(_this.time.overTime);
                            _this.fieldRegTimeCounter += Number(_this.time.time);
                        }
                        else {
                            _this.officeOvrTimeCounter += Number(_this.time.overTime);
                            _this.officeRegTimeCounter += Number(_this.time.time);
                        }
                    }
                }
                //  console.log(this.project);
            });
        });
    };
    ProjectDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    ProjectDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-project-detail',
            template: _raw_loader_project_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_project_detail_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());



/***/ }),

/***/ "HOoa":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/access/access.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <mat-card>\r\n    <p class=\"primary-text-color\">Please select access level for new user</p>\r\n<table  cellspacing=\"5\">\r\n    <tr>\r\n      <td>\r\n          <mat-checkbox>Administrator</mat-checkbox>\r\n      </td>\r\n      <td><mat-form-field >\r\n        <input matInput>\r\n      </mat-form-field></td>\r\n      </tr>\r\n      <tr>\r\n      <td>\r\n          <mat-checkbox>Associate</mat-checkbox>\r\n      </td>\r\n      <td><mat-form-field >\r\n          <input matInput>\r\n        </mat-form-field></td>\r\n    </tr>\r\n    <tr>\r\n        <td>\r\n            <mat-checkbox>Client</mat-checkbox>\r\n        </td>\r\n        <td><mat-form-field >\r\n            <input matInput>\r\n          </mat-form-field></td>\r\n      </tr>\r\n  </table>\r\n<div>\r\n  <button mat-button >Back</button>\r\n  <button mat-button >Submit</button>\r\n</div>\r\n</mat-card> -->\r\n");

/***/ }),

/***/ "J4gB":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/toolbar/toolbar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<nav class=\"navbar navbar-expand-lg\" style=\"height: 100px;\">\r\n  <div class=\"container-fluid\">\r\n    <a class=\"navbar-brand\" routerLink=\"/\">Schwebke-Shiskin & Associates, inc.</a>\r\n    <span  class=\"text-accent-color\" >{{ authService.getUser() }}</span>\r\n  </div>\r\n</nav>\r\n\r\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <div>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\r\n      <ul class=\"navbar-nav mr-auto\" *ngIf=\"authService.loggedIn()\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/\">Dashboard<span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/clients\">Clients</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"/projects\">Projects</a>\r\n          </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/orders\">Orders</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"/times\">Times</a>\r\n          </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/user-access\">User-Access</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link active\" (click)=\"authService.logout()\">Logout</a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav mr-auto\" *ngIf=\"!authService.loggedIn()\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" routerLink=\"/auth\">Login</a>\r\n        </li>\r\n        <li>\r\n            <a class=\"nav-link\" routerLink=\"/users/register\">Register</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    </div>\r\n  </nav>\r\n<!--\r\n  <span class=\"text-accent-color\"  >Schwebke-Shiskin & Associates, inc. </span>\r\n  <span  style=\"padding:25px;\" class=\"text-accent-color\" >{{authService.getUser()}}</span>\r\n<span class=\"example-fill-remaining-space\"></span>\r\n<div *ngIf=\"authService.loggedIn()\">\r\n<span>  <button  mat-button routerLink=\"/dashboard\">Dashboard</button></span>\r\n<span>  <button  mat-button routerLink=\"/times\">Time</button></span>\r\n<span>  <button  mat-button routerLink=\"/orders\">Orders</button></span>\r\n<span>  <button  mat-button routerLink=\"/clients\">Clients</button></span>\r\n<span>  <button  mat-button routerLink=\"\">Users</button></span>\r\n<span>  <button  (click)=\"authService.logout()\">Logout</button></span>\r\n</div>\r\n<div *ngIf=\"!authService.loggedIn()\" >\r\n  <span><button  routerLink=\"/auth\">Login</button></span>\r\n  <span><button  routerLink=\"/users/register\">Register</button></span>\r\n</div>\r\n-->\r\n\r\n");

/***/ }),

/***/ "J8gE":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/clients/detail/client-detail.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"heading\">\r\n    <legend>Client Details</legend>\r\n  </div>\r\n<div class=\"card\">\r\n    <div *ngIf=\"client\">\r\n             <h5>Client Name:</h5><h6 class=\"card-subtitle mb-2 text-muted\">{{client.clientName}}</h6>\r\n             <h5>Date:</h5><h6 class=\"card-subtitle mb-2 text-muted\">{{client.date | date}}</h6>\r\n             <h5>Address:</h5><h6 class=\"card-subtitle mb-2 text-muted\">{{client.address}}</h6>\r\n             <h5>Phone:</h5><h6 class=\"card-subtitle mb-2 text-muted\">{{client.phone}}</h6>\r\n             <h5>Contact:</h5><h6 class=\"card-subtitle mb-2 text-muted\">{{client.contact}}</h6>\r\n    </div>\r\n  <div>\r\n    <button  class=\"btn btn-primary\" color = \"accent\" routerLink=\"/clients\">Back</button>\r\n  </div>\r\n</div>\r\n</div>\r\n");

/***/ }),

/***/ "Jmk/":
/*!********************************************!*\
  !*** ./src/app/services/client.service.ts ***!
  \********************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ "0np6");




var ClientService = /** @class */ (function () {
    function ClientService(http) {
        this.http = http;
        this.uri = _config_config__WEBPACK_IMPORTED_MODULE_3__["theUri"];
    }
    ClientService.prototype.addClient = function (newClient) {
        return this.http.post(this.uri + "/clients", newClient);
    };
    ClientService.prototype.getClients = function () {
        return this.http.get(this.uri + "/clients");
    };
    ClientService.prototype.getClientById = function (id) {
        return this.http.get(this.uri + "/clients/" + id);
    };
    ClientService.prototype.editClient = function (_id, updatedClient) {
        return this.http.put(this.uri + "/clients/" + _id, updatedClient);
    };
    ClientService.prototype.deleteClient = function (_id) {
        return this.http.delete(this.uri + "/clients/delete/" + _id);
    };
    ClientService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ClientService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "KCrP":
/*!*******************************************************!*\
  !*** ./src/app/directives/drag-and-drop.directive.ts ***!
  \*******************************************************/
/*! exports provided: DragAndDropDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDropDirective", function() { return DragAndDropDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var DragAndDropDirective = /** @class */ (function () {
    function DragAndDropDirective() {
        this.filesChangeEmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filesInvalidEmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.background = '#b3ffff';
        this.allowed_extensions = [];
    }
    DragAndDropDirective.prototype.onDragOver = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        var files = evt.dataTransfer.files;
        this.background = '#999';
        if (files.length > 0) {
            console.log(files);
        }
    };
    DragAndDropDirective.prototype.onDragLeave = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#eee';
    };
    DragAndDropDirective.prototype.onDrop = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#eee';
        var files = evt.dataTransfer.files;
        var valid_files = [];
        var invalid_files = [];
        if (files.length > 0) {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var ext = file.name.split('.')[file.name.split('.').length - 1];
                if (this.allowed_extensions.lastIndexOf(ext) !== -1) {
                    valid_files.push(file);
                }
                else {
                    console.log(file);
                    invalid_files.push(file);
                }
            }
            /*
            files.forEach(function(file){
              let ext = file.name.split('.')[file.name.split('.').length - 1];
              if(this.allowed_extensions.lastIndexOf(ext) != -1){
                valid_files.push(file);
              }else{
                invalid_files.push(file);
              }
            });
            */
            this.filesChangeEmiter.emit(valid_files);
            this.filesInvalidEmiter.emit(invalid_files);
        }
    };
    DragAndDropDirective.ctorParameters = function () { return []; };
    DragAndDropDirective.propDecorators = {
        filesChangeEmiter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        filesInvalidEmiter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        background: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['style.background',] }],
        allowed_extensions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        onDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['dragover', ['$event'],] }],
        onDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['dragleave', ['$event'],] }],
        onDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['drop', ['$event'],] }]
    };
    DragAndDropDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDragAndDrop]'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DragAndDropDirective);
    return DragAndDropDirective;
}());



/***/ }),

/***/ "Klm2":
/*!********************************************************************!*\
  !*** ./src/app/components/project/edit/project-edit.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card{\r\n  padding-left: 100px;\r\n  padding-right: 100px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJwcm9qZWN0LWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "NO2g":
/*!********************************************************************!*\
  !*** ./src/app/components/billing/list/billing-list.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWxsaW5nLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "NxgW":
/*!*******************************************************!*\
  !*** ./src/app/services/token-interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "lGQG");



var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
        var tokenizedReq = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authService.getToken()
            }
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    TokenInterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "O3o7":
/*!*****************************************!*\
  !*** ./src/app/models/project.model.ts ***!
  \*****************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());



/***/ }),

/***/ "O5bD":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"heading\">\r\n    <legend>Login</legend>\r\n  </div>\r\n  <div class=\"card borderless\">\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"onLogin(form.value)\">\r\n        <div *ngIf=\"form.errors\" class=\"alert alert-danger\">\r\n            ERROR! Some field(s) appear to be invalid\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleInputEmail1\">Email address</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" [formControl]=\"email\" required formControlName = \"email\">\r\n          <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleInputPassword1\">Password</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" formControlName = \"password\">\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\" value=\"Submit Form\" [disabled]=\"!form.valid\">Submit</button>\r\n      </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--\r\n  <form  [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin(loginForm.value)\">\r\n  <div >\r\n    <fieldset>\r\n      <div class=\"form-group row\">\r\n      <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required formControlName = \"email\">\r\n      <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\r\n    </fieldset>\r\n\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" required formControlName = \"password\">\r\n      <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n    </mat-form-field>\r\n\r\n    <div class=\"button-row\">\r\n        <button mat-fab color=\"primary\" type=\"submit\" value=\"Submit Form\" [disabled]=\"!loginForm.valid\">Login</button>\r\n        <button mat-fab color=\"accent\" routerLink=\"/home\">Cancel</button>\r\n    </div>\r\n    </div>\r\n    </fieldset>\r\n  </div>\r\n</form>\r\n -->\r\n\r\n");

/***/ }),

/***/ "O68N":
/*!**************************************!*\
  !*** ./src/app/models/time.model.ts ***!
  \**************************************/
/*! exports provided: Time */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return Time; });
var Time = /** @class */ (function () {
    function Time() {
    }
    return Time;
}());



/***/ }),

/***/ "OTA4":
/*!***********************************************************************!*\
  !*** ./src/app/components/project/create/project-create.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProjectCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCreateComponent", function() { return ProjectCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_project_create_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./project-create.component.html */ "ekqj");
/* harmony import */ var _project_create_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-create.component.css */ "/Qst");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/project.service */ "c3AT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _models_project_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/project.model */ "O3o7");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");









var ProjectCreateComponent = /** @class */ (function () {
    function ProjectCreateComponent(route, projectService, fb, router) {
        this.route = route;
        this.projectService = projectService;
        this.fb = fb;
        this.router = router;
        this.project = new _models_project_model__WEBPACK_IMPORTED_MODULE_7__["Project"]();
        this.form = this.fb.group({
            'projectName': [this.project.projectName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'clientName': [this.project.clientName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'date': [this.project.date, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'description': [this.project.description, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'status': [this.project.status, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'client_id': [this.project.client_id]
        });
    }
    Object.defineProperty(ProjectCreateComponent.prototype, "projectName", {
        get: function () { return this.form.get('projectName'); },
        enumerable: false,
        configurable: true
    });
    ProjectCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.client_id = params.client_id;
            _this.form.get('client_id').setValue(params.client_id);
            _this.form.get('clientName').setValue(params.clientName);
        });
    };
    ProjectCreateComponent.prototype.addProject = function () {
        if (!this.form.valid) {
            this.form.setErrors({ invalidAddProject: true });
        }
        else {
            this.projectService.addProject(this.form.value)
                .subscribe(function (project_id) {
            });
            this.router.navigate(["projects/"]);
        }
    };
    ProjectCreateComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    ProjectCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-project-create',
            template: _raw_loader_project_create_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            providers: [{ provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDateAdapter"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDateNativeAdapter"] }],
            styles: [_project_create_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ProjectCreateComponent);
    return ProjectCreateComponent;
}());



/***/ }),

/***/ "OueA":
/*!*******************************************************************!*\
  !*** ./src/app/components/order/detail/order-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: OrderDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailComponent", function() { return OrderDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-detail.component.html */ "RYHh");
/* harmony import */ var _order_detail_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-detail.component.css */ "r4Ye");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/order.service */ "kVqo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







var OrderDetailComponent = /** @class */ (function () {
    function OrderDetailComponent(route, orderService, http, router) {
        this.route = route;
        this.orderService = orderService;
        this.officeRegTimeCounter = 0;
        this.fieldRegTimeCounter = 0;
        this.officeOvrTimeCounter = 0;
        this.fieldOvrTimeCounter = 0;
        this.officeTotalHours = 0;
        this.fieldTotalHours = 0;
        this.displayedColumns = ['date', 'user', 'description', 'time'];
        this.currentJustify = 'fill';
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.orderService.getOrderById(_this.id)
                .subscribe(function (order) {
                _this.order = order;
                if (_this.order) {
                    for (var _i = 0, _a = _this.order.time; _i < _a.length; _i++) {
                        _this.time = _a[_i];
                        if (_this.time.isField) {
                            _this.fieldRegTimeCounter += Number(_this.time.time);
                            _this.fieldOvrTimeCounter += Number(_this.time.overTime);
                        }
                        else {
                            // console.log('Office Reg: ' + this.officeRegTimeCounter  + ' + ' + this.time.time);
                            _this.officeRegTimeCounter += Number(_this.time.time);
                            // console.log('Office Over: ' + this.officeOvrTimeCounter  + ' + ' + this.time.overTime);
                            _this.officeOvrTimeCounter += Number(_this.time.overTime);
                        }
                    }
                    _this.officeTotalHours = _this.officeRegTimeCounter + _this.officeOvrTimeCounter;
                    _this.fieldTotalHours = _this.fieldRegTimeCounter + _this.fieldOvrTimeCounter;
                }
                else {
                    console.log('No order available!');
                }
            });
        });
    };
    OrderDetailComponent.prototype.onPrintOrder = function () {
    };
    OrderDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    OrderDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-detail',
            template: _raw_loader_order_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_order_detail_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], OrderDetailComponent);
    return OrderDetailComponent;
}());



/***/ }),

/***/ "QVS+":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/user-access/user-access.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"heading\">\r\n      <legend>USERS ACCESS</legend>\r\n  </div>\r\n\r\n      <table class=\"table table-striped table-hover table-bordered\">\r\n        <thead class=\"table-dark\">\r\n          <tr>\r\n            <th>User ID</th>\r\n            <th>Name</th>\r\n            <th>Last</th>\r\n            <th>Role</th>\r\n            <th>Access</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr class=\"pointerCursor\" *ngFor=\"let user of filteredUsers; let i = index;\">\r\n            <td>{{user.email}}</td>\r\n            <td>{{user.name}}</td>\r\n            <td>{{user.lastName}}</td>\r\n            <td>\r\n                <select class=\"form-control\" id=\"userTypeSelect\">\r\n                    <option>root</option>\r\n                    <option>admin</option>\r\n                    <option>user</option>\r\n                  </select>\r\n            </td>\r\n            <td>\r\n\r\n                <select class=\"form-control\" id=\"userTypeSelect\">\r\n                    <option>high</option>\r\n                    <option>medium</option>\r\n                    <option>low</option>\r\n                  </select>\r\n\r\n              <!--\r\n              <div class=\"form-group form-inline\" >\r\n                <h5><a style=\" padding-right: 10px\"><i  class=\"fas fa-edit pointerCursor\" (click) = \"editUser(user._id)\" ngbTooltip=\"Edit User\"></i></a></h5>\r\n                <h4><a style=\"padding-right: 10px\"><i  class=\"fas fa-trash-alt pointerCursor\" (click) = \"deleteUser(user._id)\" ngbTooltip=\"Delete User\"></i></a></h4>\r\n              </div>\r\n            -->\r\n            </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n  </div>\r\n");

/***/ }),

/***/ "Qy7t":
/*!********************************************************************************!*\
  !*** ./src/app/components/service-request/create/service-create.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlLWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "RBR+":
/*!*************************************************************!*\
  !*** ./src/app/components/time/edit/time-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: TimeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeEditComponent", function() { return TimeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_time_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./time-edit.component.html */ "lL7O");
/* harmony import */ var _time_edit_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time-edit.component.css */ "bKeH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_time_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/time.service */ "q+Sf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");








var TimeEditComponent = /** @class */ (function () {
    function TimeEditComponent(route, timeService, fb, router) {
        this.route = route;
        this.timeService = timeService;
        this.fb = fb;
        this.router = router;
        this.time = {};
        this.form = this.fb.group({
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            time: 0,
            overTime: 0,
        });
    }
    TimeEditComponent.prototype.editTime = function () {
        var _this = this;
        var updatedTime = {
            date: this.form.value.date,
            description: this.form.value.description,
            time: this.form.value.time,
            overTime: this.form.value.overTime,
            orderNumber: this.time.orderNumber,
            order_id: this.time.order_id,
            projectName: this.time.projectName,
            clientName: this.time.clientName,
            userName: this.time.userName,
            user_id: this.time.user_id,
        };
        this.timeService.editTime(this.id, updatedTime).subscribe(function () {
            /*  this.snackBar.open('Time updated succesfully', 'OK', {
               duration: 3000
             }); */
            _this.router.navigate(['/times']);
        });
    };
    TimeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.timeService.getTimeById(_this.id).subscribe(function (res) {
                _this.time = res;
                _this.form.get('date').setValue(new Date(_this.time.date));
                _this.form.get('description').setValue(_this.time.description);
                _this.form.get('time').setValue(_this.time.time);
                _this.form.get('overTime').setValue(_this.time.overTime);
            });
        });
    };
    TimeEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _services_time_service__WEBPACK_IMPORTED_MODULE_5__["TimeService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    TimeEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit',
            template: _raw_loader_time_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            providers: [{ provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDateAdapter"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDateNativeAdapter"] }],
            styles: [_time_edit_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_time_service__WEBPACK_IMPORTED_MODULE_5__["TimeService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], TimeEditComponent);
    return TimeEditComponent;
}());



/***/ }),

/***/ "RYHh":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order/detail/order-detail.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"heading\">\r\n    <legend>Order Details<span><button type=\"button\"  class=\"btn btn-info\" (click)=\"onPrintOrder()\">print</button></span></legend>\r\n  </div>\r\n<div class=\"card borderless\">\r\n<ngb-tabset>\r\n  <ngb-tab>\r\n    <ng-template ngbTabTitle><b>ORDER</b></ng-template>\r\n    <ng-template ngbTabContent>\r\n        <div *ngIf=\"order\" class=\"card\">\r\n            <div class=\"card-body\">\r\n               <div>\r\n              <div class='row'>\r\n              <div class=\"col-3 left\">\r\n                  <p>BROWARD: 954-435-7010</p>\r\n                  <p>Dade: 305-652-7010</p>\r\n                </div>\r\n                <div class=\"col-6 center\">\r\n                  <h3>Schwebke-Shiskin & Associates, Inc.</h3>\r\n                </div>\r\n                <div class=\"col-3 right\">\r\n                  <p>3240 CORPORATE WAY</p>\r\n                  <p>MIRAMAR, FL 33025</p>\r\n                </div>\r\n              </div>\r\n\r\n              <div class='row'>\r\n                <div class=\"col-4 left\">\r\n                  <h5>LAND SURVEYORS</h5>\r\n                </div>\r\n                <div class=\"col-4 center\">\r\n                <h5>ENGINEERS</h5>\r\n                </div>\r\n                <div class=\"col-4 right\">\r\n                  <h5>LAND PLANNERS</h5>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <hr>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n\r\n                        <h6>DATE</h6>\r\n                        <p>{{order.date | date}}</p>\r\n\r\n                        <h6>NAME OF CLIENT</h6>\r\n                        <p>{{order.clientName}}</p>\r\n                        <label class=\"col-form-label\" for=\"address\">ADDRESS</label>\r\n                        <h6>{{order.address}}</h6>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n\r\n                        <label class=\"col-form-label\" for=\"phoneNumber\">PHONE</label>\r\n                        <h6>{{order.phoneNumber}}</h6>\r\n                        <label class=\"col-form-label\" for=\"fieldWorkPromissed\">FIELD WORK PROMISSED</label>\r\n                        <h6>{{order.fieldWorkPromissed}}</h6>\r\n                        <label class=\"col-form-label\" for=\"printsPromissed\">PRINTS PROMISSED</label>\r\n                        <h6>{{order.printsPromissed}}</h6>\r\n                </div>\r\n              </div>\r\n                  <label class=\"col-form-label\" for=\"projectName\">PROJECT NAME</label>\r\n                  <h6>{{order.projectName}}</h6>\r\n\r\n              <hr>\r\n                  <label class=\"col-form-label\" for=\"legalDescription\">LEGAL DESCRIPTION</label>\r\n                  <h6>{{order.legalDescription}}</h6>\r\n              <hr>\r\n             <div class=\"row\">\r\n\r\n               <div class=\"col-md-6\">\r\n                 <div class=\"row\">\r\n                 <div class=\"col-md-6\">\r\n                        <label class=\"col-form-label\" for=\"orderPlacedBy\">ORDER PLACED BY</label>\r\n                        <h6>{{order.orderPlacedBy}}</h6>\r\n                 </div>\r\n                 <div class=\"col-md-6\">\r\n                        <label class=\"col-form-label\" for=\"orderReceivedBy\">RECEIVED BY</label>\r\n                        <h6>{{order.orderReceivedBy}}</h6>\r\n                 </div>\r\n               </div>\r\n                  <label class=\"col-form-label\" for=\"referToFileNumber\">REFER TO FILE No.</label>\r\n                  <h6>{{order.referToFileNumber}}</h6>\r\n                  <label class=\"col-form-label\" for=\"referToFieldBookNumber\">REFER TO FB No.</label>\r\n                  <h6>{{order.referToFieldBookNumber}}</h6>\r\n                  <label class=\"col-form-label\" for=\"referToOrderNumber\">REFER ORDER No.</label>\r\n                  <h6>{{order.referToOrderNumber}}</h6>\r\n              </div>\r\n\r\n               <div class=\"col-md-6\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                            <label class=\"col-form-label\" for=\"fieldBook\">FB</label>\r\n                            <h6>{{order.fieldBook}}</h6>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                            <label class=\"col-form-label\" for=\"page\">PG</label>\r\n                            <h6>{{order.page}}</h6>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                            <label class=\"col-form-label\" for=\"section\">SEC</label>\r\n                            <h6>{{order.section}}</h6>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                            <label class=\"col-form-label\" for=\"township\">TWP</label>\r\n                            <h6>{{order.township}}</h6>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                            <label class=\"col-form-label\" for=\"range\">RGE</label>\r\n                            <h6>{{order.range}}</h6>\r\n                    </div>\r\n                  </div>\r\n                      <div class=\"form-group\">\r\n                          <label class=\"col-form-label\" for=\"partyChief\">PARTY CHIEF</label>\r\n                          <h6>{{order.partyChief}}</h6>\r\n                      </div>\r\n                        <label class=\"col-form-label\" for=\"dateCompleted\">DATE COMPLETED</label>\r\n                        <h6>{{order.dateCompleted}}</h6>\r\n               </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n\r\n                   <div class=\"row\">\r\n                     <div class=\"col-md-4\">\r\n                            <div>\r\n                              <label class=\"col-form-label\" for=\"mail\">MAIL</label>\r\n                              <h6>{{order.mail}}</h6>\r\n                            </div>\r\n\r\n                            <div>\r\n                                <label class=\"col-form-label\" for=\"deliver\">DELIVER</label>\r\n                                <h6>{{order.deliver}}</h6>\r\n                            </div>\r\n                            <div>\r\n                                <label class=\"col-form-label\" for=\"pickup\">PICK UP</label>\r\n                                <h6>{{order.pickup}}</h6>\r\n                            </div>\r\n\r\n                     </div>\r\n\r\n                     <div class=\"col-md-8\">\r\n                         <div>\r\n                             <label class=\"col-form-label\" for=\"mailPrintsTo\">PRINTS TO</label>\r\n                             <h6>{{order.mailPrintsTo}}</h6>\r\n                         </div>\r\n                         <div>\r\n                            <label class=\"col-form-label\" for=\"deliverPrintsTo\">PRINTS TO</label>\r\n                            <h6>{{order.deliverPrintsTo}}</h6>\r\n                        </div>\r\n                        <div>\r\n                            <label class=\"col-form-label\" for=\"printsAtTime\">PRINTS AT (TIME)</label>\r\n                            <h6>{{order.printsAtTime}}</h6>\r\n                        </div>\r\n                     </div>\r\n\r\n                   </div>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                      <div>\r\n                          <label class=\"col-form-label\" for=\"dateInvoice\">DATE INVOICE</label>\r\n                          <h6>{{order.dateInvoice}}</h6>\r\n                        </div>\r\n                     <div>\r\n                         <label class=\"col-form-label\" for=\"amountSetBy\">AMOUNT SET BY:</label>\r\n                         <h6>{{order.amountSetBy}}</h6>\r\n                     </div>\r\n                     <div>\r\n                        <label class=\"col-form-label\" for=\"invoiceTypedBy\">INVOICE TYPED BY:</label>\r\n                        <h6>{{order.invoiceTypedBy}}</h6>\r\n                    </div>\r\n                   </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                     <div class=\"row\">\r\n                       <div class=\"col-md-6\">\r\n                          <div>\r\n                              <label class=\"col-form-label\" for=\"courierFees\">COURIER FEES</label>\r\n                              <h6>{{order.courierFees}}</h6>\r\n                          </div>\r\n                       </div>\r\n                       <div class=\"col-md-6\">\r\n                          <div>\r\n                              <label class=\"col-form-label\" for=\"applPermitFees\">APPLICATIONS/PERMIT FEES</label>\r\n                              <h6>{{order.applPermitFees}}</h6>\r\n                          </div>\r\n                       </div>\r\n                     </div>\r\n                  </div>\r\n                      <div class=\"col-md-6\">\r\n                          <label class=\"col-form-label\" for=\"COD\">COD</label>\r\n                          <h6>{{order.isCOD}}</h6>\r\n                      </div>\r\n                  </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                      <div>\r\n                          <label class=\"col-form-label\" for=\"orderNumber\">ORDER No.</label>\r\n                          <h6>{{order.orderNumber}}</h6>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                      <div>\r\n                          <label class=\"col-form-label\" for=\"fileNumber\">FILE NO.</label>\r\n                          <h6>{{order.fileNumber}}</h6>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div>\r\n                            <label class=\"col-form-label\" for=\"price\">PRICE $</label>\r\n                            <h6>{{order.price}}</h6>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <hr>\r\n                    <button  class=\"btn btn-primary\" color = \"accent\" routerLink=\"/orders\">Back</button>\r\n            </div>\r\n          </div>\r\n    </ng-template>\r\n  </ngb-tab>\r\n\r\n    <!--Office Information-->\r\n    <ngb-tab>\r\n      <ng-template ngbTabTitle><b>OFFICE</b></ng-template>\r\n      <ng-template ngbTabContent >\r\n\r\n        <div  class=\"card\">\r\n          <div class = \"row left\">\r\n            <div class=\"col-2\">\r\n              <h5>Overtime:</h5>\r\n              <h5>Regular:</h5>\r\n              <h5>Total:</h5>\r\n            </div>\r\n\r\n            <div class=\"col-2\">\r\n                <h5>{{officeOvrTimeCounter}}</h5>\r\n                <h5>{{officeRegTimeCounter}}</h5>\r\n                <h5>{{officeTotalHours}}</h5>\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <table class=\"table table-striped table-bordered\">\r\n          <thead class=\"table-dark\">\r\n            <tr>\r\n              <th>Employee</th>\r\n              <th>Regular Time</th>\r\n              <th>Overtime</th>\r\n              <th>Total</th>\r\n             <!-- <th>Actions</th>-->\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n              <tr *ngFor=\"let time of order.time;\">\r\n              <td>{{time.userName}}</td>\r\n              <td>{{time.time}}</td>\r\n              <td>{{time.overTime}}</td>\r\n              <td>{{time.time + time.overTime}}</td>\r\n            </tr>\r\n          </tbody>\r\n          </table>\r\n        <!--\r\n        <div  class=\"card\">\r\n          <div class = \"row left\">\r\n            <div class=\"col-2\">\r\n              <h5>Total OT:</h5>\r\n              <h5>Total RT</h5>\r\n              <h5>Total Hours</h5>\r\n            </div>\r\n\r\n            <div class=\"col-2\">\r\n                <h5>{{officeOvrTimeCounter}}</h5>\r\n                <h5>{{officeRegTimeCounter}}</h5>\r\n                <h5>{{officeTotalHours}}</h5>\r\n              </div>\r\n          </div>\r\n          <hr>\r\n          <div class=\"row left\">\r\n                <div class=\"col-2\">\r\n                    <h4>Date</h4>\r\n                </div>\r\n                <div class=\"col-3\">\r\n                    <h4>Employee</h4>\r\n                </div>\r\n                <div class=\"col-3\">\r\n                    <h4>Description</h4>\r\n                </div>\r\n                <div class=\"col-2\">\r\n                    <h4>RT</h4>\r\n                </div>\r\n                <div class=\"col-2\">\r\n                    <h4>OT</h4>\r\n                </div>\r\n          </div>\r\n\r\n        <div *ngFor=\"let time of order.time;\">\r\n          <div *ngIf='!time.isField' class=\"row left\">\r\n            <div class=\"col-2\">\r\n              <h5>{{time.date | date}}</h5>\r\n            </div>\r\n            <div class=\"col-3\">\r\n                <h5>{{time.userName}}</h5>\r\n              </div>\r\n            <div class=\"col-3\">\r\n              <h5>{{time.description}}</h5>\r\n            </div>\r\n              <div  class=\"col-2\">\r\n                <h5>{{time.time}}</h5>\r\n            </div>\r\n            <div class=\"col-2\">\r\n                <h5>{{time.overTime}}</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        </div>\r\n      -->\r\n      </ng-template>\r\n      </ngb-tab>\r\n\r\n      <ngb-tab>\r\n        <ng-template ngbTabTitle><b>FIELD</b> order</ng-template>\r\n        <ng-template ngbTabContent>\r\n          <div class=\"card\">\r\n            <div class = \"row left\">\r\n              <div class=\"col-2\">\r\n                <h5>Overtime:</h5>\r\n                <h5>Regular:</h5>\r\n                <h5>Total:</h5>\r\n              </div>\r\n\r\n              <div class=\"col-2\">\r\n                  <h5>{{fieldOvrTimeCounter}}</h5>\r\n                  <h5>{{fieldRegTimeCounter}}</h5>\r\n                  <h5>{{fieldTotalHours}}</h5>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <table class=\"table table-striped table-bordered\">\r\n            <thead class=\"table-dark\">\r\n              <tr>\r\n                <th>Employee</th>\r\n                <th>Regular Time</th>\r\n                <th>Overtime</th>\r\n                <th>Total</th>\r\n               <!-- <th>Actions</th>-->\r\n              </tr>\r\n            </thead>\r\n            <tbody *ngFor=\" let time of order.time;\">\r\n                <tr  *ngIf=\"time.isField\">\r\n                <td>{{time.userName}}</td>\r\n                <td>{{time.time}}</td>\r\n                <td>{{time.overTime}}</td>\r\n                <td>{{time.time + time.overTime}}</td>\r\n              </tr>\r\n            </tbody>\r\n            </table>\r\n\r\n          <!--\r\n            <div class=\"card\">\r\n                <div class = \"row left\">\r\n                  <div class=\"col-2\">\r\n                    <h5>Total OT:</h5>\r\n                    <h5>Total RT</h5>\r\n                    <h5>Total Hours</h5>\r\n                  </div>\r\n\r\n                  <div class=\"col-2\">\r\n                      <h5>{{fieldOvrTimeCounter}}</h5>\r\n                      <h5>{{fieldRegTimeCounter}}</h5>\r\n                      <h5>{{fieldTotalHours}}</h5>\r\n                    </div>\r\n                </div>\r\n                <hr>\r\n                <div class=\"row left\">\r\n                      <div class=\"col-2\">\r\n                          <h4>Date</h4>\r\n                      </div>\r\n                      <div class=\"col-3\">\r\n                          <h4>Employee</h4>\r\n                      </div>\r\n                      <div class=\"col-3\">\r\n                          <h4>Description</h4>\r\n                      </div>\r\n                      <div class=\"col-2\">\r\n                          <h4>RT</h4>\r\n                      </div>\r\n                      <div class=\"col-2\">\r\n                          <h4>OT</h4>\r\n                      </div>\r\n                </div>\r\n                <div *ngFor=\"let time of order.time;\">\r\n\r\n                <div *ngIf=\"time.isField\" class=\"row left\">\r\n                  <div class=\"col-2\">\r\n                    <h5>{{time.date | date}}</h5>\r\n                  </div>\r\n                  <div class=\"col-3\">\r\n                      <h5>{{time.userName}}</h5>\r\n                    </div>\r\n                  <div class=\"col-3\">\r\n                    <h5>{{time.description}}</h5>\r\n                  </div>\r\n                    <div class=\"col-2\">\r\n                      <h5>{{time.time}}</h5>\r\n                  </div>\r\n                  <div class=\"col-2\">\r\n                      <h5>{{time.overTime}}</h5>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              </div>\r\n            -->\r\n      </ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n</div>\r\n");

/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-SG": "zavE",
	"./en-SG.js": "zavE",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "SSsm":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashobard/associates-dashboard/associates-dashboard.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n<mat-grid-list cols=\"3\" rowHeight=\"400px\">\r\n  <mat-grid-tile matTooltip=\"Access this area to generate tree files from tree surveys\">\r\n          <span>\r\n              <button class=\"text-accent-color\" mat-button routerLink=\"/tree-file-creator\">\r\n                  <img src=\"../assets/images/tree.jpg\" alt=\"associates\" style=\"width:300px\"></button>\r\n          </span>\r\n  </mat-grid-tile>\r\n\r\n</mat-grid-list>\r\n-->");

/***/ }),

/***/ "SW0C":
/*!******************************************************************!*\
  !*** ./src/app/components/clients/edit/client-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: ClientEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientEditComponent", function() { return ClientEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_client_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./client-edit.component.html */ "zeDu");
/* harmony import */ var _client_edit_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-edit.component.css */ "A/Sw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/client.service */ "Jmk/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









//import {MatSnackBar } from '@angular/material';
var ClientEditComponent = /** @class */ (function () {
    function ClientEditComponent(route, clientService, fb, router) {
        this.route = route;
        this.clientService = clientService;
        this.fb = fb;
        this.router = router;
        this.client = {};
        this.form = this.fb.group({
            clientName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            contact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    ClientEditComponent.prototype.editClient = function () {
        if (!this.form.valid) {
            this.form.setErrors({ invalidAddTime: true });
        }
        else {
            this.clientService.editClient(this.id, this.form.value).subscribe(function () { });
            this.router.navigate(['/clients']);
        }
    };
    ClientEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.clientService.getClientById(_this.id).subscribe(function (res) {
                _this.client = res;
                _this.form.get('clientName').setValue(_this.client.clientName);
                _this.form.get('date').setValue(new Date(_this.client.date));
                _this.form.get('address').setValue(_this.client.address);
                _this.form.get('phone').setValue(_this.client.phone);
                _this.form.get('contact').setValue(_this.client.contact);
            });
        });
    };
    ClientEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _services_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    ClientEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit',
            template: _raw_loader_client_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            providers: [{ provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDateAdapter"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDateNativeAdapter"] }, _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
            styles: [_client_edit_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ClientEditComponent);
    return ClientEditComponent;
}());



/***/ }),

/***/ "SvbY":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/time/time-weekly/time-weekly.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  time-weekly works!\r\n</p>\r\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Timelog';
    }
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "T2iZ":
/*!*******************************************************!*\
  !*** ./src/app/components/access/access.component.ts ***!
  \*******************************************************/
/*! exports provided: AccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessComponent", function() { return AccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_access_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./access.component.html */ "HOoa");
/* harmony import */ var _access_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./access.component.css */ "TQCW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AccessComponent = /** @class */ (function () {
    function AccessComponent() {
    }
    AccessComponent.prototype.ngOnInit = function () {
    };
    AccessComponent.ctorParameters = function () { return []; };
    AccessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-access',
            template: _raw_loader_access_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_access_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AccessComponent);
    return AccessComponent;
}());



/***/ }),

/***/ "TQCW":
/*!********************************************************!*\
  !*** ./src/app/components/access/access.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2Nlc3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "Te2Q":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashobard/dashboard/dashboard.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<!--\r\n<mat-grid-list cols=\"3\" rowHeight=\"400px\">\r\n    <mat-grid-tile matTooltip=\"Client's can use this area to login and get services\">\r\n            <span>\r\n\r\n                <button class=\"text-accent-color\" mat-button routerLink=\"/clients-dashboard\">\r\n                    <img src=\"../assets/images/clients2.png\" alt=\"associates\" style=\"width:300px\"></button>\r\n            </span>\r\n    </mat-grid-tile>\r\n<img src=\"../assets/images/associates.png\" alt=\"Avatar\" class=\"avatar\">\r\n    <mat-grid-tile matTooltip=\"SSA employees login area\">\r\n            <span>\r\n                    <button class=\"text-accent-color\" mat-button routerLink=\"/associates-dashboard\">\r\n                        <img src=\"../assets/images/associates.png\" alt=\"associates\" style=\"width:300px\">\r\n                    </button>\r\n                </span>\r\n\r\n    </mat-grid-tile>\r\n    <mat-grid-tile matTooltip=\"SSA system administrator's area\">\r\n            <button class=\"text-accent-color\" mat-button routerLink=\"/admin-dashboard\">\r\n                <img src=\"../assets/images/admin.png\" alt=\"admin\" style=\"width:300px\">\r\n            </button>\r\n\r\n    </mat-grid-tile>\r\n</mat-grid-list>\r\n-->\r\n\r\n");

/***/ }),

/***/ "U4tt":
/*!**************************************************************!*\
  !*** ./src/app/components/users/list/user-list.component.ts ***!
  \**************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-list.component.html */ "j9U2");
/* harmony import */ var _user_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-list.component.css */ "rcQC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var UserListComponent = /** @class */ (function () {
    function UserListComponent() {
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent.ctorParameters = function () { return []; };
    UserListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-user-list',
            template: _raw_loader_user_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_user_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "U6OC":
/*!*******************************************************************!*\
  !*** ./src/app/components/project/edit/project-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectEditComponent", function() { return ProjectEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_project_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./project-edit.component.html */ "lxnH");
/* harmony import */ var _project_edit_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-edit.component.css */ "Klm2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/project.service */ "c3AT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







//import {MatSnackBar } from '@angular/material';
var ProjectEditComponent = /** @class */ (function () {
    function ProjectEditComponent(projectService, fb, router, route) {
        this.projectService = projectService;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.project = {};
        this.form = this.fb.group({
            'projectName': [this.project.projectName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'description': [this.project.description, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'status': [this.project.status, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'client_id': [this.project.client_id],
            'clientName': [this.project.clientName],
            'date': [this.project.date],
        });
    }
    ProjectEditComponent.prototype.editProject = function () {
        if (!this.form.valid) {
            this.form.setErrors({ invalidEditProject: true });
        }
        else {
            this.projectService.editProject(this.id, this.form.value).subscribe(function () {
                /* this.snackBar.open('Order updated succesfully', 'OK', {
                  duration: 3000
                }); */
            });
            this.router.navigate(['/projects']);
        }
    };
    ProjectEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params.id; // this is the project _id
            _this.projectService.getProjectById(_this.id).subscribe(function (res) {
                _this.project = res;
                _this.form.get('projectName').setValue(_this.project.projectName);
                _this.form.get('description').setValue(_this.project.description);
                _this.form.get('status').setValue(_this.project.status);
                _this.form.get('client_id').setValue(_this.project.client_id);
                _this.form.get('clientName').setValue(_this.project.clientName);
                _this.form.get('date').setValue(_this.project.date);
            });
        });
    };
    ProjectEditComponent.ctorParameters = function () { return [
        { type: _services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    ProjectEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-project-edit',
            template: _raw_loader_project_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_project_edit_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], ProjectEditComponent);
    return ProjectEditComponent;
}());



/***/ }),

/***/ "UMzN":
/*!****************************************!*\
  !*** ./src/app/models/client.model.ts ***!
  \****************************************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
var Client = /** @class */ (function () {
    function Client() {
    }
    return Client;
}());



/***/ }),

/***/ "UTig":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/dashobard/associates-dashboard/associates-dashboard.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-card {\r\n    max-width: flex;\r\n    align-content: center;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .example-container {\r\n    width: flex;\r\n    height: flex;\r\n  }\r\n  \r\n  button{\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  img{\r\n    border-radius: 50%;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc29jaWF0ZXMtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUdBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCIiwiZmlsZSI6ImFzc29jaWF0ZXMtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiBmbGV4O1xyXG4gICAgaGVpZ2h0OiBmbGV4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBidXR0b257XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIGltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ "UZKQ":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/user-access/user-access.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserAccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccessComponent", function() { return UserAccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_access_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-access.component.html */ "QVS+");
/* harmony import */ var _user_access_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-access.component.css */ "2Zhw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service */ "qfBg");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







var UserAccessComponent = /** @class */ (function () {
    function UserAccessComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UserAccessComponent.prototype.ngOnInit = function () {
        this.fetchUsers();
    };
    UserAccessComponent.prototype.fetchUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (data) {
            _this.users = data;
            _this.filteredUsers = data;
            console.log(_this.users);
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigate(['/auth']);
                }
            }
        });
    };
    UserAccessComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    UserAccessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-user-access',
            template: _raw_loader_user_access_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_user_access_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], UserAccessComponent);
    return UserAccessComponent;
}());



/***/ }),

/***/ "VWes":
/*!***************************************************************!*\
  !*** ./src/app/components/users/edit/user-edit.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWVkaXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "Vqiz":
/*!***********************************************************************!*\
  !*** ./src/app/components/dashobard/dashboard/dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "Te2Q");
/* harmony import */ var _dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component.css */ "3L37");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.ctorParameters = function () { return []; };
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-dashboard',
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "Vto3":
/*!************************************************************************!*\
  !*** ./src/app/components/project/detail/project-detail.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Vyy7":
/*!****************************************************************!*\
  !*** ./src/app/components/order/list/order-list.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table{\r\n    width: 100%;\r\n}\r\n.mat-column-right{\r\n    text-align: center;\r\n}\r\n.box{\r\n  width: auto;\r\n  height: auto;\r\n  margin: 0 auto;\r\n  padding: 5px;\r\n  text-align: center;\r\n  border: 2px solid #2E333A\r\n}\r\n.child{\r\n  display: inline-block;\r\n  padding: 25px;\r\n  text-align: left;\r\n}\r\n.example-chip-list {\r\n  width: 100%;\r\n}\r\n.example-headers-align .mat-expansion-panel-header-title,\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  flex-basis: 0;\r\n}\r\n.example-headers-align .mat-expansion-panel-header-description {\r\n  justify-content: space-between;\r\n text-align: center;\r\n}\r\n.order-card {\r\n  max-width: auto;\r\n  padding: 15px;\r\n  margin-bottom: 5px;\r\n  margin-top: 5px;\r\n  background-color: #428bcf;\r\n border: 2px solid #2E333A;\r\n}\r\n.pointerCursor {\r\n  cursor: pointer;\r\n}\r\n.a\r\n{\r\npadding-left: 10px;\r\n}\r\n/*\r\n.card{\r\n  padding-left: 100px;\r\n  padding-right: 100px;\r\n}\r\n*/\r\n/*\r\n.card .card\r\n{\r\n  border-left-color: rgb(19, 68, 230);\r\n  border-left-width: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCO0FBQ0Y7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLDhCQUE4QjtDQUMvQixrQkFBa0I7QUFDbkI7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7Q0FDMUIseUJBQXlCO0FBQzFCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCO0FBQ0E7Ozs7O0NBS0M7QUFDRDs7Ozs7OztDQU9DIiwiZmlsZSI6Im9yZGVyLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1hdC1jb2x1bW4tcmlnaHR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3h7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzJFMzMzQVxyXG59XHJcbi5jaGlsZHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5leGFtcGxlLWNoaXAtbGlzdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxyXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAgZmxleC1iYXNpczogMDtcclxufVxyXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ub3JkZXItY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNmO1xyXG4gYm9yZGVyOiAycHggc29saWQgIzJFMzMzQTtcclxufVxyXG5cclxuLnBvaW50ZXJDdXJzb3Ige1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYVxyXG57XHJcbnBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4vKlxyXG4uY2FyZHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG59XHJcbiovXHJcbi8qXHJcbi5jYXJkIC5jYXJkXHJcbntcclxuICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDE5LCA2OCwgMjMwKTtcclxuICBib3JkZXItbGVmdC13aWR0aDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4qL1xyXG4iXX0= */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<app-toolbar></app-toolbar>\r\n<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "O5bD");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.css */ "mDuy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, fb, http, router) {
        this.authService = authService;
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.hide = true;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]);
        this.password = '';
        this.data = {};
        this.form = fb.group({
            'email': this.email,
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(16)])]
        });
    }
    LoginComponent.prototype.onLogin = function (user) {
        var _this = this;
        if (!this.form.valid) {
            this.form.setErrors({ invalidOnLogin: true });
        }
        else {
            this.authService.login(user.email, user.password).subscribe(function (data) {
                if (data) {
                    _this.data = data;
                    _this.authService.storeUserData(_this.data.token, _this.data.name, user.email, _this.data.user_id);
                    _this.router.navigate(['/home']);
                }
                else {
                    console.log('Error: Login in...');
                }
            }, function (err) { console.log(err); });
        }
    };
    LoginComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' : '';
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "XC3f":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "E8lZ");
/* harmony import */ var _register_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.css */ "woRh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, fb, http, authService) {
        this.router = router;
        this.fb = fb;
        this.http = http;
        this.authService = authService;
        this.successMessage = '';
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
        this.hide = true;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]);
        this.name = '';
        this.last = '';
        // salary: Number = null;
        // position: String = '';
        // isAdmin: Boolean = false;
        this.password = '';
        this.registerForm = fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            last: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            // 'salary': [null, Validators.required],
            // 'position': [null, Validators.required],
            email: this.email,
            password: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(16)
                ])
            ],
            password2: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(16)
                ])
            ]
            // 'isAdmin': this.isAdmin,
        });
    }
    RegisterComponent.prototype.onRegister = function (user) {
        var _this = this;
        this.authService.register(user.name, user.last, user.email, user.password)
            .subscribe(function (token) {
            _this.router.navigate(['/auth']);
        }, function (error) {
            console.log('There was an error...');
        });
    };
    RegisterComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required')
            ? 'You must enter a value'
            : this.email.hasError('email')
                ? 'Not a valid email'
                : '';
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
    ]; };
    RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-register',
            template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "Xc0+":
/*!************************************************************************!*\
  !*** ./src/app/components/billing/create/billing-create.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWxsaW5nLWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "YpU6":
/*!*******************************************************************!*\
  !*** ./src/app/components/users/create/user-create.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "Z4eV":
/*!****************************************************************************************!*\
  !*** ./src/app/components/dashobard/clients-dashboard/clients-dashboard.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n.mat-card {\r\n  background-color: #2E333A;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nform {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\n.button-row button,\r\n.button-row a {\r\n  margin-right: 8px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJjbGllbnRzLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLm1hdC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUzMzNBO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uLXJvdyBidXR0b24sXHJcbi5idXR0b24tcm93IGEge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_time_list_time_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/time/list/time-list.component */ "+DUU");
/* harmony import */ var _components_time_create_time_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/time/create/time-create.component */ "B2/F");
/* harmony import */ var _components_time_edit_time_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/time/edit/time-edit.component */ "RBR+");
/* harmony import */ var _components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/order/list/order-list.component */ "xdZg");
/* harmony import */ var _components_order_create_order_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/order/create/order-create.component */ "wemi");
/* harmony import */ var _components_order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/order/edit/order-edit.component */ "G56G");
/* harmony import */ var _components_clients_list_client_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/clients/list/client-list.component */ "mbkC");
/* harmony import */ var _components_clients_create_client_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/clients/create/client-create.component */ "1ctb");
/* harmony import */ var _components_clients_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/clients/edit/client-edit.component */ "SW0C");
/* harmony import */ var _services_time_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/time.service */ "q+Sf");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "np0s");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/token-interceptor.service */ "NxgW");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-moment */ "QUrN");
/* harmony import */ var _components_users_create_user_create_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/users/create/user-create.component */ "+IsR");
/* harmony import */ var _components_users_list_user_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/users/list/user-list.component */ "U4tt");
/* harmony import */ var _components_users_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/users/edit/user-edit.component */ "zfrA");
/* harmony import */ var _components_dashobard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/dashobard/dashboard/dashboard.component */ "Vqiz");
/* harmony import */ var _components_dashobard_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/dashobard/admin-dashboard/admin-dashboard.component */ "B7sV");
/* harmony import */ var _components_dashobard_associates_dashboard_associates_dashboard_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/dashobard/associates-dashboard/associates-dashboard.component */ "wT3S");
/* harmony import */ var _components_dashobard_clients_dashboard_clients_dashboard_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/dashobard/clients-dashboard/clients-dashboard.component */ "jqAK");
/* harmony import */ var _components_service_request_create_service_create_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/service-request/create/service-create.component */ "Deyd");
/* harmony import */ var _components_access_access_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/access/access.component */ "T2iZ");
/* harmony import */ var _components_applications_tree_file_creator_tree_file_creator_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/applications/tree-file-creator/tree-file-creator.component */ "0upW");
/* harmony import */ var _directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./directives/drag-and-drop.directive */ "KCrP");
/* harmony import */ var _components_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/order/detail/order-detail.component */ "OueA");
/* harmony import */ var _common_zippy_zippy_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./common/zippy/zippy.component */ "bVSO");
/* harmony import */ var _components_project_create_project_create_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/project/create/project-create.component */ "OTA4");
/* harmony import */ var _components_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/project/list/project-list.component */ "+CyI");
/* harmony import */ var _components_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/project/edit/project-edit.component */ "U6OC");
/* harmony import */ var _components_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/project/detail/project-detail.component */ "HA+T");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./filter.pipe */ "i6q1");
/* harmony import */ var _common_address_address_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./common/address/address.component */ "/DQW");
/* harmony import */ var _components_clients_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/clients/detail/client-detail.component */ "A9cl");
/* harmony import */ var _components_time_time_weekly_time_weekly_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/time/time-weekly/time-weekly.component */ "+pnO");
/* harmony import */ var _components_billing_list_billing_list_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/billing/list/billing-list.component */ "AFfg");
/* harmony import */ var _components_billing_create_billing_create_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/billing/create/billing-create.component */ "b+N5");
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/dialog/dialog.component */ "BTfv");
/* harmony import */ var _components_time_time_per_order_time_per_order_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/time/time-per-order/time-per-order.component */ "pLjt");
/* harmony import */ var _components_admin_user_access_user_access_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/admin/user-access/user-access.component */ "UZKQ");




//import { Router,Routes, RouterModule} from '@angular/router';

//import {ErrorStateMatcher} from '@angular/material/core';
















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_time_list_time_list_component__WEBPACK_IMPORTED_MODULE_9__["TimeListComponent"],
                _components_time_create_time_create_component__WEBPACK_IMPORTED_MODULE_10__["TimeCreateComponent"],
                _components_time_edit_time_edit_component__WEBPACK_IMPORTED_MODULE_11__["TimeEditComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_21__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"],
                _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_23__["ToolbarComponent"],
                _components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_12__["OrderListComponent"],
                _components_order_create_order_create_component__WEBPACK_IMPORTED_MODULE_13__["OrderCreateComponent"],
                _components_order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_14__["OrderEditComponent"],
                _components_clients_list_client_list_component__WEBPACK_IMPORTED_MODULE_15__["ClientListComponent"],
                _components_clients_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_17__["ClientEditComponent"],
                _components_clients_create_client_create_component__WEBPACK_IMPORTED_MODULE_16__["ClientCreateComponent"],
                _components_users_create_user_create_component__WEBPACK_IMPORTED_MODULE_27__["UserCreateComponent"],
                _components_users_list_user_list_component__WEBPACK_IMPORTED_MODULE_28__["UserListComponent"],
                _components_users_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_29__["UserEditComponent"],
                _components_dashobard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_30__["DashboardComponent"],
                _components_dashobard_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_31__["AdminDashboardComponent"],
                _components_dashobard_associates_dashboard_associates_dashboard_component__WEBPACK_IMPORTED_MODULE_32__["AssociatesDashboardComponent"],
                _components_dashobard_clients_dashboard_clients_dashboard_component__WEBPACK_IMPORTED_MODULE_33__["ClientsDashboardComponent"],
                _components_service_request_create_service_create_component__WEBPACK_IMPORTED_MODULE_34__["ServiceCreateComponent"],
                _components_access_access_component__WEBPACK_IMPORTED_MODULE_35__["AccessComponent"],
                _components_applications_tree_file_creator_tree_file_creator_component__WEBPACK_IMPORTED_MODULE_36__["TreeFileCreatorComponent"],
                _directives_drag_and_drop_directive__WEBPACK_IMPORTED_MODULE_37__["DragAndDropDirective"],
                _components_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_38__["OrderDetailComponent"],
                _common_zippy_zippy_component__WEBPACK_IMPORTED_MODULE_39__["ZippyComponent"],
                _components_project_create_project_create_component__WEBPACK_IMPORTED_MODULE_40__["ProjectCreateComponent"],
                _components_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_41__["ProjectListComponent"],
                _components_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_42__["ProjectEditComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_44__["FilterPipe"],
                _common_address_address_component__WEBPACK_IMPORTED_MODULE_45__["AddressComponent"],
                _components_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_43__["ProjectDetailComponent"],
                _components_clients_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_46__["ClientDetailComponent"],
                _components_time_time_weekly_time_weekly_component__WEBPACK_IMPORTED_MODULE_47__["TimeWeeklyComponent"],
                _components_billing_list_billing_list_component__WEBPACK_IMPORTED_MODULE_48__["BillingListComponent"],
                _components_billing_create_billing_create_component__WEBPACK_IMPORTED_MODULE_49__["BillingCreateComponent"],
                _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_50__["DialogComponent"],
                _components_time_time_per_order_time_per_order_component__WEBPACK_IMPORTED_MODULE_51__["TimePerOrderComponent"],
                _components_admin_user_access_user_access_component__WEBPACK_IMPORTED_MODULE_52__["UserAccessComponent"],
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_moment__WEBPACK_IMPORTED_MODULE_26__["MomentModule"],
            ],
            providers: [_services_time_service__WEBPACK_IMPORTED_MODULE_18__["TimeService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_25__["TokenInterceptorService"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "b+N5":
/*!***********************************************************************!*\
  !*** ./src/app/components/billing/create/billing-create.component.ts ***!
  \***********************************************************************/
/*! exports provided: BillingCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingCreateComponent", function() { return BillingCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_billing_create_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./billing-create.component.html */ "72Fy");
/* harmony import */ var _billing_create_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./billing-create.component.css */ "Xc0+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var BillingCreateComponent = /** @class */ (function () {
    function BillingCreateComponent() {
    }
    BillingCreateComponent.prototype.ngOnInit = function () {
    };
    BillingCreateComponent.ctorParameters = function () { return []; };
    BillingCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-create',
            template: _raw_loader_billing_create_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_billing_create_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BillingCreateComponent);
    return BillingCreateComponent;
}());



/***/ }),

/***/ "bAdN":
/*!***********************************************************************!*\
  !*** ./src/app/components/time/time-weekly/time-weekly.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lLXdlZWtseS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "bKeH":
/*!**************************************************************!*\
  !*** ./src/app/components/time/edit/time-edit.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\r\n.create-form{\r\n  display:flex;\r\n  flex-direction:column;\r\n  min-width: 150px;\r\n  width:auto;\r\n\r\n}\r\n.card{\r\n  padding: 100px;\r\n}\r\n.field-full-width{\r\n  width: 50%;\r\n}\r\n\r\n*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Q0FlQyIsImZpbGUiOiJ0aW1lLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbi5jcmVhdGUtZm9ybXtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgd2lkdGg6YXV0bztcclxuXHJcbn1cclxuLmNhcmR7XHJcbiAgcGFkZGluZzogMTAwcHg7XHJcbn1cclxuLmZpZWxkLWZ1bGwtd2lkdGh7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuKi9cclxuIl19 */");

/***/ }),

/***/ "bVSO":
/*!*************************************************!*\
  !*** ./src/app/common/zippy/zippy.component.ts ***!
  \*************************************************/
/*! exports provided: ZippyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZippyComponent", function() { return ZippyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_zippy_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./zippy.component.html */ "7/Tp");
/* harmony import */ var _zippy_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zippy.component.css */ "BOIe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var ZippyComponent = /** @class */ (function () {
    function ZippyComponent() {
    }
    ZippyComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    ZippyComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['title',] }],
        data1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['data1',] }],
        data2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['data2',] }],
        data3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['data3',] }],
        data4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['data4',] }]
    };
    ZippyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'zippy',
            template: _raw_loader_zippy_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_zippy_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], ZippyComponent);
    return ZippyComponent;
}());



/***/ }),

/***/ "bkKQ":
/*!**********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-fill-remaining-space {\r\n    /* This fills the remaining space, by using flexbox.\r\n       Every toolbar row uses a flexbox row layout. */\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n  .navbar {\r\n     background-color: var(--navbar-color);\r\n     color:white;\r\n  }\r\n\r\n  .navbar-toggler {\r\n   background-color: blue;\r\n }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO3FEQUNpRDtJQUNqRCxjQUFjO0VBQ2hCOztFQUVBO0tBQ0cscUNBQXFDO0tBQ3JDLFdBQVc7RUFDZDs7RUFDRDtHQUNFLHNCQUFzQjtDQUN4QiIsImZpbGUiOiJ0b29sYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guXHJcbiAgICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG5cclxuICAubmF2YmFyIHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXItY29sb3IpO1xyXG4gICAgIGNvbG9yOndoaXRlO1xyXG4gIH1cclxuIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiB9XHJcbiJdfQ== */");

/***/ }),

/***/ "c3AT":
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ "0np6");




var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        this.uri = _config_config__WEBPACK_IMPORTED_MODULE_3__["theUri"];
    }
    ProjectService.prototype.getProjects = function () {
        return this.http.get(this.uri + "/projects");
    };
    ProjectService.prototype.getProjectStats = function () {
        return this.http.get(this.uri + "/billing");
    };
    ProjectService.prototype.getProjectById = function (id) {
        return this.http.get(this.uri + "/projects/" + id);
    };
    ProjectService.prototype.getProjectByName = function (projectName) {
        return this.http.get(this.uri + "/projects/name/" + projectName);
    };
    ProjectService.prototype.addOrderToProject = function (project_id, order_id) {
        var updatedProjectOrder = {
            order_id: order_id,
        };
        return this.http.post(this.uri + "/projects/" + project_id + "/time", updatedProjectOrder);
    };
    ProjectService.prototype.addProject = function (project) {
        return this.http.post(this.uri + "/projects", project);
    };
    ProjectService.prototype.editProject = function (_id, updatedProject) {
        return this.http.put(this.uri + "/projects/" + _id, updatedProject);
    };
    ProjectService.prototype.deleteProject = function (_id) {
        return this.http.delete(this.uri + "/projects/delete/" + _id);
    };
    ProjectService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProjectService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "dyLq":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/service-request/create/service-create.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n");

/***/ }),

/***/ "ekqj":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/project/create/project-create.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"heading text-center\">\r\n    <legend>New Project</legend>\r\n  </div>\r\n  <div class=\"card borderless\">\r\n    <div class=\"card-body\">\r\n        <form [formGroup]='form'  (ngSubmit)=\"addProject()\">\r\n            <div *ngIf=\"form.errors\" class=\"alert alert-danger\">\r\n                ERROR! Some fields appear to be invalid\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"clientName\">Client Name</label>\r\n                <input formControlName=\"clientName\" type=\"text\" class=\"form-control\" placeholder=\"Client Name *\" id=\"clientName\">\r\n                <div *ngIf=\"(form.get('clientName').touched && form.get('clientName').invalid) || (form.get('clientName').invalid && form.errors)\" class=\"alert alert-danger\">Client name is required</div>\r\n              </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"col-form-label\" for=\"projectName\">Project Name</label>\r\n              <input formControlName=\"projectName\" type=\"text\" class=\"form-control\" placeholder=\"Project Name *\" id=\"projectName\">\r\n              <div *ngIf=\"(form.get('projectName').touched && form.get('projectName').invalid) || (form.get('projectName').invalid && form.errors)\" class=\"alert alert-danger\">Project name is required</div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"date\">Date</label>\r\n                <div class=\"input-group\">\r\n                <input formControlName=\"date\" type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd *\" name=\"date\"  ngbDatepicker #d=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary fas fa-calendar-alt\" (click)=\"d.toggle()\" type=\"button\"></button>\r\n                </div>\r\n                </div>\r\n                <div *ngIf=\"(form.get('date').touched && form.get('date').invalid) || (form.get('date').invalid && form.errors)\" class=\"alert alert-danger\">A date is required</div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"description\">Description</label>\r\n                <input formControlName=\"description\" type=\"text\" class=\"form-control\" placeholder=\"Description *\" id=\"description\">\r\n                <div *ngIf=\"(form.get('description').touched && form.get('description').invalid) || (form.get('description').invalid && form.errors)\" class=\"alert alert-danger\">Description is required</div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"status\">Status</label>\r\n                <input formControlName=\"status\" type=\"text\" class=\"form-control\" placeholder=\"Status *\" id=\"status\">\r\n                <div *ngIf=\"(form.get('status').touched && form.get('status').invalid) || (form.get('status').invalid && form.errors)\" class=\"alert alert-danger\">Status is required</div>\r\n              </div>\r\n          </form>\r\n          <div class=\"text-center\">\r\n              <button routerLink=\"/clients\" class=\"btn btn-primary\">Back</button>\r\n              <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!form.valid\" (click)=\"addProject()\">Submit</button>\r\n          </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "fw0U":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/address/address.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  address works!\r\n</p>\r\n");

/***/ }),

/***/ "fwvb":
/*!********************************************************************!*\
  !*** ./src/app/components/project/list/project-list.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table{\r\n  width: 100%;\r\n}\r\n.mat-column-right{\r\n  text-align: center;\r\n}\r\n.box{\r\nwidth: auto;\r\nheight: auto;\r\nmargin: 0 auto;\r\npadding: 5px;\r\ntext-align: center;\r\nborder: 2px solid #2E333A\r\n}\r\n.child{\r\ndisplay: inline-block;\r\npadding: 25px;\r\ntext-align: left;\r\n}\r\n.example-chip-list {\r\nwidth: 100%;\r\n}\r\n.example-headers-align .mat-expansion-panel-header-title,\r\n.example-headers-align .mat-expansion-panel-header-description {\r\nflex-basis: 0;\r\n}\r\n.example-headers-align .mat-expansion-panel-header-description {\r\njustify-content: space-between;\r\ntext-align: center;\r\n}\r\n.order-card {\r\nmax-width: auto;\r\npadding: 15px;\r\nmargin-bottom: 5px;\r\nmargin-top: 5px;\r\nbackground-color: #428bcf;\r\nborder: 2px solid #2E333A;\r\n}\r\n.pointerCursor {\r\ncursor: pointer;\r\n}\r\n.a\r\n{\r\npadding-left: 10px;\r\n}\r\n/*\r\n.card{\r\n  padding-left: 100px;\r\n  padding-right: 100px;\r\n}\r\n\r\n.card .card\r\n{\r\nborder-left-color: rgb(19, 68, 230);\r\nborder-left-width: 5px;\r\nmargin-bottom: 5px;\r\n}\r\n*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1osY0FBYztBQUNkLFlBQVk7QUFDWixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGFBQWE7QUFDYixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUVBOztBQUVBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLGtCQUFrQjtBQUNsQjtBQUVBO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYixrQkFBa0I7QUFDbEIsZUFBZTtBQUNmLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekI7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBOztBQUVBLGtCQUFrQjtBQUNsQjtBQUVBOzs7Ozs7Ozs7Ozs7Q0FZQyIsImZpbGUiOiJwcm9qZWN0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tYXQtY29sdW1uLXJpZ2h0e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJveHtcclxud2lkdGg6IGF1dG87XHJcbmhlaWdodDogYXV0bztcclxubWFyZ2luOiAwIGF1dG87XHJcbnBhZGRpbmc6IDVweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5ib3JkZXI6IDJweCBzb2xpZCAjMkUzMzNBXHJcbn1cclxuLmNoaWxke1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbnBhZGRpbmc6IDI1cHg7XHJcbnRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmV4YW1wbGUtY2hpcC1saXN0IHtcclxud2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxyXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbmZsZXgtYmFzaXM6IDA7XHJcbn1cclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm9yZGVyLWNhcmQge1xyXG5tYXgtd2lkdGg6IGF1dG87XHJcbnBhZGRpbmc6IDE1cHg7XHJcbm1hcmdpbi1ib3R0b206IDVweDtcclxubWFyZ2luLXRvcDogNXB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNmO1xyXG5ib3JkZXI6IDJweCBzb2xpZCAjMkUzMzNBO1xyXG59XHJcblxyXG4ucG9pbnRlckN1cnNvciB7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYVxyXG57XHJcbnBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLypcclxuLmNhcmR7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmNhcmQgLmNhcmRcclxue1xyXG5ib3JkZXItbGVmdC1jb2xvcjogcmdiKDE5LCA2OCwgMjMwKTtcclxuYm9yZGVyLWxlZnQtd2lkdGg6IDVweDtcclxubWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbiovXHJcbiJdfQ== */");

/***/ }),

/***/ "gxFp":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order/list/order-list.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n<div class=\"container\">\r\n  <div class=\"heading\">\r\n    <legend>Orders</legend>\r\n</div>\r\n<div class=\"card\" style=\"border:none\">\r\n  <div class=\"card-body\">\r\n    <h1><i class=\"fas fa-plus-circle pointerCursor\" routerLink=\"/orders/create\"></i></h1>\r\n      <form>\r\n          <div class=\"form-group form-inline\">\r\n              Orders search: <input class=\"form-control ml-2\" placeholder=\" . . . \" type=\"text\" name=\"orderSearch\" [(ngModel)]=\"searchTerm\"/>\r\n          </div>\r\n      </form>\r\n\r\n      <div *ngFor=\"let order of filteredOrders; let i = index;\" >\r\n          <div class = \"card\">\r\n              <div class = \"card-body \">\r\n                <div class=\"row\">\r\n                    <div class=\"col-2\">\r\n                        <h5><a style=\" padding-right: 10px\"><i  class=\"fas fa-eye pointerCursor\" (click) = \"detailOrder(order._id)\"></i></a></h5>\r\n                    </div>\r\n                  <div class=\"col-5\">\r\n                      <h3>{{order.orderNumber}}</h3>\r\n                      <p>{{order.projectName}}</p>\r\n                  </div>\r\n                  <div class=\"col-5 form-group form-inline\">\r\n                      <h5><a style=\" padding-right: 10px\"><i  class=\"fas fa-edit pointerCursor\" (click) = \"editOrder(order._id)\"></i></a></h5>\r\n                      <h4><a style=\"padding-right: 10px\"><i  class=\"fas fa-hourglass-half pointerCursor\" (click) = \"addTime(order._id, order.projectName, order.clientName, order.orderNumber)\"></i></a></h4>\r\n                      <h4><a style=\"padding-right: 10px\"><i  class=\"fas fa-trash-alt pointerCursor\" (click) = \"deleteOrder(order._id)\"></i></a></h4>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n            </div>\r\n          </div>\r\n  </div>\r\n</div>\r\n</div>\r\n-->\r\n\r\n<div class=\"container\">\r\n  <div class=\"heading\">\r\n    <legend>ORDERS</legend>\r\n</div>\r\n<div class=\"form-group form-inline\">\r\n  Orders search: <input class=\"form-control ml-2\" placeholder=\" . . . \" type=\"text\" name=\"orderSearch\" [(ngModel)]=\"searchTerm\"/>\r\n<div style=\"padding-left: 20px; padding-right: 10px;\">\r\n  Filter by:\r\n  <select class=\"form-control\" id=\"userTypeSelect\">\r\n    <option>All</option>\r\n    <option>Open</option>\r\n    <option>Closed</option>\r\n    <option>Void</option>\r\n    <option>Billed</option>\r\n    <option>Partially Billed</option>\r\n  </select>\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n\r\n    <table class=\"table table-striped table-hover table-bordered\">\r\n      <thead class=\"table-dark\">\r\n        <tr>\r\n          <th>Order No.</th>\r\n          <th>Client</th>\r\n          <th>Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr class=\"pointerCursor\" *ngFor=\"let order of filteredOrders; let i = index;\" (click) = \"detailOrder(order._id)\">\r\n          <td>{{order.orderNumber}}</td>\r\n          <td>{{order.clientName}}</td>\r\n          <td>\r\n            <div class=\"form-group form-inline\" >\r\n              <h5><a style=\" padding-right: 10px\"><i  class=\"fas fa-edit pointerCursor\" (click) = \"editOrder(order._id)\" ngbTooltip=\"Edit Order\"></i></a></h5>\r\n              <h4><a style=\"padding-right: 10px\"><i  class=\"fas fa-hourglass-half pointerCursor\" (click) = \"addTime(order._id, order.projectName, order.clientName, order.orderNumber)\" ngbTooltip=\"Add Time\"></i></a></h4>\r\n              <h4><a style=\"padding-right: 10px\"><i  class=\"fas fa-trash-alt pointerCursor\" (click) = \"deleteOrder(order._id)\" ngbTooltip=\"Delete Order\"></i></a></h4>\r\n            </div>\r\n          </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "i6q1":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items) {
            console.log("Returning no items................." + searchText);
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();
        return items.filter(function (it) {
            return it.toLocaleLowerCase().includes(searchText);
        });
    };
    FilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "j9U2":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/list/user-list.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  user-list works!\r\n</p>\r\n");

/***/ }),

/***/ "jqAK":
/*!***************************************************************************************!*\
  !*** ./src/app/components/dashobard/clients-dashboard/clients-dashboard.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ClientsDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsDashboardComponent", function() { return ClientsDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_clients_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./clients-dashboard.component.html */ "6fFR");
/* harmony import */ var _clients_dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clients-dashboard.component.css */ "Z4eV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





var ClientsDashboardComponent = /** @class */ (function () {
    function ClientsDashboardComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    ClientsDashboardComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    ClientsDashboardComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    ClientsDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-clients-dashboard',
            template: _raw_loader_clients_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_clients_dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ClientsDashboardComponent);
    return ClientsDashboardComponent;
}());



/***/ }),

/***/ "kVqo":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ "0np6");




var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
        this.uri = _config_config__WEBPACK_IMPORTED_MODULE_3__["theUri"];
    }
    OrderService.prototype.getOrders = function () {
        return this.http.get(this.uri + "/orders");
    };
    OrderService.prototype.getOrderById = function (id) {
        return this.http.get(this.uri + "/orders/" + id);
    };
    OrderService.prototype.getLatestOrder = function () {
        return this.http.get(this.uri + "/orders/latest/-1");
    };
    OrderService.prototype.getOrderIdByOrderNumber = function (order_number) {
        return this.http.get(this.uri + "/orders/number/" + order_number);
    };
    OrderService.prototype.addTimeToOrder = function (order_id, time_id) {
        var updatedOrderTime = {
            time_id: time_id,
        };
        return this.http.post(this.uri + "/orders/" + order_id + "/time", updatedOrderTime);
    };
    OrderService.prototype.addOrder = function (newOrder) {
        return this.http.post(this.uri + "/orders", newOrder);
    };
    OrderService.prototype.deleteTime = function (_id, time_id) {
        return this.http.delete(this.uri + "/orders/" + _id + "/time/" + time_id);
    };
    OrderService.prototype.editOrder = function (_id, updatedOrder) {
        return this.http.put(this.uri + "/orders/" + _id, updatedOrder);
    };
    OrderService.prototype.deleteOrder = function (_id) {
        return this.http.delete(this.uri + "/orders/delete/" + _id);
    };
    OrderService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config */ "0np6");





var AuthService = /** @class */ (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        this.uri = _config_config__WEBPACK_IMPORTED_MODULE_4__["theUri"];
    }
    AuthService.prototype.login = function (email, password) {
        var auth = {
            email: email,
            password: password
        };
        return this.http.post(this.uri + "/auth", auth);
    };
    AuthService.prototype.loggedIn = function () {
        return !!localStorage.getItem('x-auth-token');
    };
    AuthService.prototype.register = function (name, last, email, password) {
        var auth = {
            name: name,
            last: last,
            // salary: salary,
            // position: position,
            email: email,
            password: password,
        };
        return this.http.post(this.uri + "/users", auth);
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('x-auth-token');
    };
    AuthService.prototype.getUser = function () {
        return localStorage.getItem('user');
    };
    AuthService.prototype.storeUserData = function (token, name, user, user_id) {
        localStorage.setItem('x-auth-token', token);
        localStorage.setItem('name', name);
        localStorage.setItem('user', user);
        localStorage.setItem('user_id', user_id);
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('x-auth-token');
        localStorage.removeItem('user');
        localStorage.removeItem('name');
        this.router.navigate(['./home']);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "lL7O":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/time/edit/time-edit.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <legend>Edit Time</legend>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <form  [formGroup]=\"form\">\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"date\">Date</label>\r\n                <div class=\"input-group\">\r\n                <input formControlName=\"date\" type=\"text \" class=\"form-control\" #date placeholder=\"yyyy-mm-dd\" name=\"date\"  ngbDatepicker #d=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary fas fa-calendar-alt\" (click)=\"d.toggle()\" type=\"button\"></button>\r\n                </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"description\">Description</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"description\" #description id=\"description\" placeholder=\"description\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"time\">Time</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"time\" #time id=\"time\" placeholder=\"Regular time\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"overTime\">Over Time</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"overTime\" #time id=\"overTime\" placeholder=\"Over time\">\r\n            </div>\r\n        </form>\r\n\r\n      <button class=\"btn btn-primary\" routerLink=\"/times\">Back</button>\r\n      <button class=\"btn btn-success\" type=\"submit\" (click)=\"editTime()\" >Save</button>\r\n    </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "lQ0Z":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/clients/create/client-create.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"heading text-center\">\r\n    <legend>Client New</legend>\r\n  </div>\r\n  <div class=\"card borderless\">\r\n    <div class=\"card-body\">\r\n        <form [formGroup]='form' (ngSubmit)=\"addClient()\">\r\n            <div *ngIf=\"form.errors\" class=\"alert alert-danger\">\r\n                ERROR! Some fields appear to be invalid\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"col-form-label\" for=\"clientName\">Client Name</label>\r\n              <input formControlName=\"clientName\" type=\"text\" class=\"form-control\" placeholder=\"Client Name *\" id=\"clientName\">\r\n              <div *ngIf=\"(clientName.touched && clientName.invalid) || (form.get('clientName').invalid && form.errors)\" class=\"alert alert-danger\">Client name is required</div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"date\">Date</label>\r\n                <div class=\"input-group\">\r\n                <input formControlName=\"date\" type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd *\" name=\"date\"  id=\"date\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n\r\n                  <button class=\"btn btn-outline-secondary fas fa-calendar-alt\" (click)=\"d.toggle()\" type=\"button\"></button>\r\n                </div>\r\n                </div>\r\n                <div *ngIf=\"(form.get('date').touched && form.get('date').invalid) || (form.get('date').invalid && form.errors)\" class=\"alert alert-danger\">Date is required</div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"address\">Address</label>\r\n                <input formControlName=\"address\" type=\"text\" class=\"form-control\" placeholder=\"Address *\" id=\"address\">\r\n                <div *ngIf=\"(form.get('address').touched && form.get('address').invalid) || (form.get('address').invalid && form.errors)\" class=\"alert alert-danger\">Address is required</div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"contact\">Contact</label>\r\n                <input formControlName=\"contact\" type=\"text\" class=\"form-control\" placeholder=\"Contact *\" id=\"contact\">\r\n                <div *ngIf=\"(form.get('contact').touched && form.get('contact').invalid) || (form.get('contact').invalid && form.errors)\" class=\"alert alert-danger\">Contact is required</div>\r\n              </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"col-form-label\" for=\"phoneNumber\">Phone Number</label>\r\n              <input formControlName=\"phone\" type=\"text\" class=\"form-control\" placeholder=\"Phone Number *\" id=\"phoneNumber\">\r\n              <div *ngIf=\"(form.get('phone').touched && form.get('phone').invalid) || (form.get('phone').invalid && form.errors)\" class=\"alert alert-danger\">Phone number is required</div>\r\n            </div>\r\n          </form>\r\n          <div class=\"text-center\">\r\n            <button routerLink=\"/clients\" class=\"btn btn-primary\">Back</button>\r\n            <button type=\"submit\" class=\"btn btn-success\"   [disabled]=\"!form.valid\" (click)=\"addClient()\">Submit</button>\r\n          </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "lxnH":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/project/edit/project-edit.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"heading\">\r\n    <legend>Edit Project</legend>\r\n  </div>\r\n  <div class=\"card borderless\">\r\n    <div class=\"card-body\">\r\n        <form [formGroup]='form' (ngSubmit)=\"editProject()\">\r\n            <div *ngIf=\"form.errors\" class=\"alert alert-danger\">\r\n                ERROR! Some field(s) appear to be invalid\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"col-form-label\" for=\"projectName\">Project Name</label>\r\n              <input formControlName=\"projectName\" type=\"text\" class=\"form-control\" placeholder=\"Project *\"  id=\"projectName\">\r\n              <div *ngIf=\"(form.get('projectName').touched && form.get('projectName').invalid) || (form.get('projectName').invalid && form.errors)\" class=\"alert alert-danger\">Project name is required</div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"description\">Description</label>\r\n                <input formControlName=\"description\" type=\"text\" class=\"form-control\" placeholder=\"Description *\" id=\"description\">\r\n                <div *ngIf=\"(form.get('description').touched && form.get('description').invalid) || (form.get('description').invalid && form.errors)\" class=\"alert alert-danger\">Description is required</div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"status\">Status</label>\r\n                <input formControlName=\"status\" type=\"text\" class=\"form-control\" placeholder=\"Status *\" id=\"status\">\r\n                <div *ngIf=\"(form.get('status').touched && form.get('status').invalid) || (form.get('status').invalid && form.errors)\" class=\"alert alert-danger\">Status is required</div>\r\n            </div>\r\n\r\n          </form>\r\n          <button type=\"submit\" routerLink=\"/projects\" class=\"btn btn-primary\">Back</button>\r\n          <button type=\"submit\" class=\"btn btn-success\" (click)=\"editProject()\"  [disabled]=\"!form.valid\">Submit</button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "mDuy":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-top: 100px;\r\n  padding-bottom: 100px;\r\n}\r\n\r\nform {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\n.button-row button,\r\n.button-row a {\r\n  margin-right: 8px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uLXJvdyBidXR0b24sXHJcbi5idXR0b24tcm93IGEge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "maui":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashobard/admin-dashboard/admin-dashboard.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n<mat-grid-list cols=\"3\" rowHeight=\"400px\">\r\n    <mat-grid-tile matTooltip=\"Administrator can use this area to authorize user's registration\">\r\n            <span>\r\n                <button class=\"text-accent-color\" mat-button routerLink=\"/access-code\">\r\n                    <img src=\"../assets/images/access-code.jpg\" alt=\"associates\" style=\"width:300px\"></button>\r\n            </span>\r\n    </mat-grid-tile>\r\n\r\n    <mat-grid-tile matTooltip=\"SSA employees login area\">\r\n            <span>\r\n                    <button class=\"text-accent-color\" mat-button routerLink=\"/associates-dashboard\">\r\n                        <img src=\"../assets/images/associates.png\" alt=\"associates\" style=\"width:300px\">\r\n                    </button>\r\n                </span>\r\n\r\n    </mat-grid-tile>\r\n    <mat-grid-tile matTooltip=\"SSA system administrator's area\">\r\n            <button class=\"text-accent-color\" mat-button routerLink=\"/admin-dashboard\">\r\n                <img src=\"../assets/images/admin.png\" alt=\"admin\" style=\"width:300px\">\r\n            </button>\r\n    </mat-grid-tile>\r\n \r\n</mat-grid-list>\r\n-->");

/***/ }),

/***/ "mbkC":
/*!******************************************************************!*\
  !*** ./src/app/components/clients/list/client-list.component.ts ***!
  \******************************************************************/
/*! exports provided: ClientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientListComponent", function() { return ClientListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_client_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./client-list.component.html */ "zcEE");
/* harmony import */ var _client_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-list.component.css */ "/MKq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/client.service */ "Jmk/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







var ClientListComponent = /** @class */ (function () {
    function ClientListComponent(clientService, router) {
        this.clientService = clientService;
        this.router = router;
        this.panelOpenState = false;
    }
    ClientListComponent.prototype.ngOnInit = function () {
        this.fetchClients();
    };
    Object.defineProperty(ClientListComponent.prototype, "searchTerm", {
        get: function () {
            return this._searchTerm;
        },
        set: function (value) {
            this._searchTerm = value;
            this.filteredClients = this.filtereClients(value);
        },
        enumerable: false,
        configurable: true
    });
    ClientListComponent.prototype.filtereClients = function (searchString) {
        return this.clients.filter(function (client) {
            return client.clientName.toString().toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
        });
    };
    ClientListComponent.prototype.getOrderId = function (id) {
        //this.currentClientId = id;
    };
    ClientListComponent.prototype.fetchClients = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (data) {
            _this.clients = data;
            _this.filteredClients = data;
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigate(['/auth']);
                }
            }
        });
    };
    ClientListComponent.prototype.addProject = function (client_id, clientName) {
        this.router.navigate(["projects/create/" + client_id + "/" + clientName]);
    };
    ClientListComponent.prototype.editClient = function (id) {
        console.log('Edditing client id: ' + id);
        this.router.navigate(["clients/edit/" + id]);
    };
    ClientListComponent.prototype.detailClient = function (id) {
        this.router.navigate(["clients/detail/" + id]);
    };
    ClientListComponent.prototype.deleteClient = function (id) {
        var _this = this;
        this.clientService.deleteClient(id).subscribe(function () {
            _this.fetchClients();
        });
    };
    ClientListComponent.ctorParameters = function () { return [
        { type: _services_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    ClientListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-list',
            template: _raw_loader_client_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_client_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ClientListComponent);
    return ClientListComponent;
}());



/***/ }),

/***/ "np0s":
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_toolbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./toolbar.component.html */ "J4gB");
/* harmony import */ var _toolbar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar.component.css */ "bkKQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");






var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(authService) {
        this.authService = authService;
        this.backgroundColor = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].navBarBackgroundColor;
        this.currentUser = '';
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authService.getUser();
    };
    ToolbarComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    ToolbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-toolbar',
            template: _raw_loader_toolbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_toolbar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "pLjt":
/*!****************************************************************************!*\
  !*** ./src/app/components/time/time-per-order/time-per-order.component.ts ***!
  \****************************************************************************/
/*! exports provided: TimePerOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePerOrderComponent", function() { return TimePerOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_time_per_order_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./time-per-order.component.html */ "9zAr");
/* harmony import */ var _time_per_order_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time-per-order.component.css */ "BLgi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_time_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/time.service */ "q+Sf");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/order.service */ "kVqo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







var TimePerOrderComponent = /** @class */ (function () {
    function TimePerOrderComponent(orderService, timeService, router) {
        this.orderService = orderService;
        this.timeService = timeService;
        this.router = router;
        this.timeByOrder = [];
    }
    TimePerOrderComponent.prototype.ngOnInit = function () {
        this.timeByOrder = this.timeService.getTimeByOrder();
        console.log(this.timeByOrder);
    };
    TimePerOrderComponent.prototype.editTime = function (_id) {
        this.router.navigate(["times/edit/" + _id]);
    };
    TimePerOrderComponent.prototype.deleteTime = function (_id) {
        this.timeService.deleteTime("" + _id).subscribe(function () {
            // this.getUsersTime(localStorage.getItem('user_id'));
        });
        /*  this.orderService.deleteTime(order_id, id).subscribe((time) => {
          console.log('Order Updated' + time);
         }); */
    };
    TimePerOrderComponent.ctorParameters = function () { return [
        { type: _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] },
        { type: _services_time_service__WEBPACK_IMPORTED_MODULE_4__["TimeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    TimePerOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-time-per-order',
            template: _raw_loader_time_per_order_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_time_per_order_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"], _services_time_service__WEBPACK_IMPORTED_MODULE_4__["TimeService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], TimePerOrderComponent);
    return TimePerOrderComponent;
}());



/***/ }),

/***/ "pyLl":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/project/list/project-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n<div class=\"container\">\r\n  <div class=\"heading\">\r\n    <legend>Projects</legend>\r\n</div>\r\n<div class=\"card borderless\" >\r\n    <div class=\"card-body\">\r\n        <form>\r\n            <div class=\"form-group form-inline\">\r\n                Project search: <input class=\"form-control ml-2\" placeholder=\" . . . \" type=\"text\" name=\"orderSearch\" [(ngModel)]=\"searchTerm\"/>\r\n            </div>\r\n        </form>\r\n        <div *ngFor=\"let project of filteredProjects; let i = index;\" >\r\n            <div class = \"card\">\r\n                <div class = \"card-body \">\r\n                  <div class=\"row\">\r\n                      <div class=\"col-2\">\r\n                          <h5><a style=\" padding-right: 10px\"><i  class=\"fas fa-eye pointerCursor\" (click) = \"detailProject(project._id)\"></i></a></h5>\r\n\r\n                        </div>\r\n                    <div class=\"col-6\">\r\n                        <h4>{{project.projectName}}</h4>\r\n                        <p>{{project.status}}</p>\r\n                    </div>\r\n                    <div class=\"col-4 form-group form-inline\">\r\n                        <h5><a style=\" padding-right: 10px\"><i  class=\"fas fa-edit pointerCursor\" (click) = \"editProject(project._id)\"></i></a></h5>\r\n                        <h4><a style=\"padding-right: 10px\"><i  class=\"fas fa-newspaper pointerCursor\" (click) = \"addNewOrder(project._id, project.projectName, project.clientName)\"></i></a></h4>\r\n                        <h4><a style=\"padding-right: 10px\"><i  class=\"fas fa-trash-alt pointerCursor\" (click) = \"deleteProject(project._id)\"></i></a></h4>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n-->\r\n\r\n<div class=\"container\">\r\n  <div class=\"heading text-center\"><legend>PROJECTS</legend></div>\r\n<div class=\"form-group form-inline\">\r\n  Project search: <input class=\"form-control ml-2\" placeholder=\" . . . \" type=\"text\" name=\"orderSearch\" [(ngModel)]=\"searchTerm\"/>\r\n</div>\r\n    <table class=\"table table-striped table-hover table-sm table-bordered\">\r\n      <thead class=\"table-dark\">\r\n        <tr>\r\n          <th>Project Name</th>\r\n          <th>Status</th>\r\n          <th>Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr class=\"pointerCursor\" *ngFor=\"let project of filteredProjects;  let i = index;\" (click) = \"detailProject(project._id)\">\r\n          <td>{{project.projectName}}</td>\r\n          <td>{{project.status}}</td>\r\n          <td>\r\n            <div class=\"form-inline\">\r\n              <h5><a style=\" padding-right: 10px; font-size: 1em\"><i  class=\"fas fa-edit pointerCursor\" (click) = \"editProject(project._id)\" placement=\"top\" ngbTooltip=\"Edit Project\"></i></a></h5>\r\n              <h4><a style=\"padding-right: 10px; font-size: 1em\"><i  class=\"fas fa-newspaper pointerCursor\" (click) = \"addNewOrder(project._id, project.projectName, project.clientName)\" placement=\"top\" ngbTooltip=\"New Order\"></i></a></h4>\r\n              <h4><a style=\"padding-right: 10px; font-size: 1em\"><i  class=\"fas fa-trash-alt pointerCursor\" (click) = \"deleteProject(project._id)\" placement=\"top\" ngbTooltip=\"Delete Project\"></i></a></h4>\r\n          </div>\r\n          </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "q+Sf":
/*!******************************************!*\
  !*** ./src/app/services/time.service.ts ***!
  \******************************************/
/*! exports provided: TimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeService", function() { return TimeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ "0np6");




var TimeService = /** @class */ (function () {
    function TimeService(http) {
        this.http = http;
        this.uri = _config_config__WEBPACK_IMPORTED_MODULE_3__["theUri"];
        this.timeByOrder = [];
    }
    TimeService.prototype.getTimes = function () {
        return this.http.get(this.uri + "/times");
    };
    TimeService.prototype.getUsersTime = function (user_id) {
        return this.http.get(this.uri + "/times/user/" + user_id);
    };
    TimeService.prototype.getUsersWeeklyTime = function (user_id) {
        return this.http.get(this.uri + "/times/weekly/" + user_id);
    };
    TimeService.prototype.getUsersTimeRange = function (user_id, from, to) {
        return this.http.get(this.uri + "/times/user/" + user_id);
    };
    TimeService.prototype.getTimeById = function (id) {
        return this.http.get(this.uri + "/times/" + id);
    };
    TimeService.prototype.geTimesByOrderId = function (order_id) {
        return this.http.get(this.uri + "/times/order/" + order_id);
    };
    TimeService.prototype.addTime = function (newTime) {
        return this.http.post(this.uri + "/times", newTime);
    };
    TimeService.prototype.editTime = function (id, updatedTime) {
        return this.http.put(this.uri + "/times/update/" + id, updatedTime);
    };
    TimeService.prototype.deleteTime = function (id) {
        return this.http.delete(this.uri + "/times/delete/" + id);
    };
    TimeService.prototype.getTimeByOrder = function () {
        return this.timeByOrder;
    };
    TimeService.prototype.sendTimeByOrder = function (timeByOrder) {
        this.timeByOrder = timeByOrder;
    };
    TimeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TimeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TimeService);
    return TimeService;
}());



/***/ }),

/***/ "qHGh":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/applications/tree-file-creator/tree-file-creator.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dropzone\" appDragAndDrop (filesChangeEmiter)=\"onFilesChange($event)\" (filesInvalidEmiter)=\"onFilesInvalidEmiter($event)\" [allowed_extensions]=\"['txt']\">\r\n  <div class=\"text-wrapper\">\r\n    <div class=\"centered\">Drop your file here!</div>\r\n  </div>\r\n</div>\r\n<div class=\"dropzone-list\">\r\n  <ul class=\"invalid\">\r\n      <li *ngFor=\"let file of invalidFiles\">\r\n        {{ file.name }}\r\n      </li>\r\n    </ul>\r\n<ul>\r\n  <li *ngFor=\"let file of fileList\">\r\n    {{ file.name }}\r\n  </li>\r\n</ul>\r\n</div>\r\n");

/***/ }),

/***/ "qHRi":
/*!***************************************!*\
  !*** ./src/app/models/order.model.ts ***!
  \***************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order() {
    }
    return Order;
}());



/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ "0np6");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.uri = _config_config__WEBPACK_IMPORTED_MODULE_3__["theUri"];
    }
    UserService.prototype.addTimeToUser = function (user_id, time_id) {
        var updatedUserTime = {
            time_id: time_id,
        };
        return this.http.post(this.uri + "/users/" + user_id + "/time", updatedUserTime);
    };
    UserService.prototype.getUsers = function () {
        return this.http.get(this.uri + "/users");
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "r0g5":
/*!******************************************************!*\
  !*** ./src/app/common/address/address.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRyZXNzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "r4Ye":
/*!********************************************************************!*\
  !*** ./src/app/components/order/detail/order-detail.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\r\ntable{\r\n    width: 100%;\r\n}\r\n.mat-column-right{\r\n    text-align: center;\r\n}\r\n\r\n.order-card {\r\n    max-width: auto;\r\n    padding: 10px;\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n    background-color: #428bcf;\r\n    border: 2px solid #2E333A\r\n  }\r\n  .card{\r\n    padding-left: 100px;\r\n    padding-right: 100px;\r\n  }\r\n.box{\r\n    width: auto;\r\n    height: auto;\r\n    margin: 0 auto;\r\n    padding: 5px;\r\n    text-align: center;\r\n    border: 2px solid #2E333A\r\n  }\r\n  .child{\r\n    display: inline-block;\r\n    padding: 25px;\r\n    text-align: left;\r\n  }\r\n\r\n  .left{\r\n    text-align:left;\r\n    padding-left: 30px;\r\n  }\r\n  .right{\r\n    text-align:right;\r\n    padding-right: 30px;\r\n  }\r\n  .center{\r\n    text-align: center;\r\n  }\r\n  .top-padding {\r\n    padding-top: 40px;\r\n  }\r\n*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FnREMiLCJmaWxlIjoib3JkZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG50YWJsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tYXQtY29sdW1uLXJpZ2h0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ub3JkZXItY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzJFMzMzQVxyXG4gIH1cclxuICAuY2FyZHtcclxuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcclxuICB9XHJcbi5ib3h7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzJFMzMzQVxyXG4gIH1cclxuICAuY2hpbGR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gIC5sZWZ0e1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIH1cclxuICAucmlnaHR7XHJcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICB9XHJcbiAgLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnRvcC1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIH1cclxuKi9cclxuIl19 */");

/***/ }),

/***/ "rcQC":
/*!***************************************************************!*\
  !*** ./src/app/components/users/list/user-list.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "rdzV":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/billing/list/billing-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  list works! \r\n</p>\r\n");

/***/ }),

/***/ "sdmy":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order/create/order-create.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container\">\r\n  <div class=\"heading\">\r\n    <legend>New Order</legend>\r\n</div>\r\n  <div class=\"card borderless\">\r\n    <div class=\"card-body\">\r\n        <form [formGroup]='form' (ngSubmit)=\"addOrder()\">\r\n          <div *ngIf=\"form.errors\" class=\"alert alert-danger\">\r\n              ERROR! Some fields appear to be invalid\r\n          </div>\r\n\r\n\r\n            <h2>No. {{orderNumber}}</h2>\r\n    <hr>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"date\">DATE</label>\r\n                <div class=\"input-group\">\r\n                <input formControlName=\"date\" type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd *\" id=\"date\" name=\"date\"  ngbDatepicker #date=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary fas fa-calendar-alt\" (click)=\"date.toggle()\" type=\"button\"></button>\r\n                </div>\r\n                </div>\r\n                <div *ngIf=\"(form.get('date').touched && form.get('date').invalid) || (form.get('date').invalid && form.errors)\" class=\"alert alert-danger\">A date is required</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"clientName\">NAME OF CLIENT</label>\r\n                <input formControlName=\"clientName\" type=\"text\" class=\"form-control\" placeholder=\"Name of client *\" id=\"clientName\">\r\n                <div *ngIf=\"(form.get('clientName').touched && form.get('clientName').invalid) || (form.get('clientName').invalid && form.errors)\" class=\"alert alert-danger\">Client Name is required</div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"address\">ADDRESS</label>\r\n                <input formControlName=\"address\" type=\"text\" class=\"form-control\" placeholder=\"Address *\" id=\"address\">\r\n                <div *ngIf=\"(form.get('address').touched && form.get('address').invalid) || (form.get('address').invalid && form.errors)\" class=\"alert alert-danger\">Address is required</div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"phoneNumber\">PHONE</label>\r\n                <input formControlName=\"phoneNumber\" type=\"text\" class=\"form-control\" placeholder=\"Phone Number *\" id=\"phoneNumber\">\r\n                <div *ngIf=\"(form.get('phoneNumber').touched && form.get('phoneNumber').invalid) || (form.get('phoneNumber').invalid && form.errors)\" class=\"alert alert-danger\">Phone No. is required</div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"col-form-label\" for=\"fieldWorkPromissed\">FIELD WORK PROMISSED</label>\r\n              <div class=\"input-group\">\r\n              <input formControlName=\"fieldWorkPromissed\" type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"fieldWorkPromissed\"  ngbDatepicker #dFieldWork=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary fas fa-calendar-alt\" (click)=\"dFieldWork.toggle()\" type=\"button\"></button>\r\n              </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"col-form-label\" for=\"printsPromissed\">PRINTS PROMISSED</label>\r\n              <div class=\"input-group\">\r\n              <input formControlName=\"printsPromissed\" type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"printsPromissed\"  ngbDatepicker #d=\"ngbDatepicker\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-secondary fas fa-calendar-alt\" (click)=\"d.toggle()\" type=\"button\"></button>\r\n              </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n          <label class=\"col-form-label\" for=\"projectName\">PROJECT NAME</label>\r\n          <input formControlName=\"projectName\" type=\"text\" class=\"form-control\" placeholder=\"Project Name *\" id=\"projectName\">\r\n          <div *ngIf=\"(form.get('projectName').touched && form.get('projectName').invalid) || (form.get('projectName').invalid && form.errors)\" class=\"alert alert-danger\">Project Name is required</div>\r\n      </div>\r\n\r\n      <hr>\r\n      <div class=\"form-group\">\r\n          <label class=\"col-form-label\" for=\"legalDescription\">LEGAL DESCRIPTION</label>\r\n          <textarea formControlName=\"legalDescription\" type=\"text\" class=\"form-control\" placeholder=\"Legal Description *\" id=\"legalDescription\"></textarea>\r\n          <div *ngIf=\"(form.get('legalDescription').touched && form.get('legalDescription').invalid) || (form.get('legalDescription').invalid && form.errors)\" class=\"alert alert-danger\">Legal Description is required</div>\r\n      </div>\r\n      <hr>\r\n     <div class=\"row\">\r\n       <div class=\"col-md-6\">\r\n         <div class=\"row\">\r\n         <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"orderPlacedBy\">ORDER PLACED BY</label>\r\n                <input formControlName=\"orderPlacedBy\" type=\"text\" class=\"form-control\" placeholder=\"Order Placed By *\" id=\"orderPlacedBy\">\r\n                <div *ngIf=\"(form.get('orderPlacedBy').touched && form.get('orderPlacedBy').invalid) || (form.get('orderPlacedBy').invalid && form.errors)\" class=\"alert alert-danger\">Order Placed By is required</div>\r\n            </div>\r\n         </div>\r\n         <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"orderReceivedBy\">RECEIVED BY</label>\r\n                <input formControlName=\"orderReceivedBy\" type=\"text\" class=\"form-control\" placeholder=\"Order received by *\" id=\"orderReceivedBy\">\r\n                <div *ngIf=\"(form.get('orderReceivedBy').touched && form.get('orderReceivedBy').invalid) || (form.get('orderReceivedBy').invalid && form.errors)\" class=\"alert alert-danger\">Order received by is required</div>\r\n            </div>\r\n         </div>\r\n       </div>\r\n       <div class=\"form-group\">\r\n          <label class=\"col-form-label\" for=\"referToFileNumber\">REFER TO FILE No.</label>\r\n          <input formControlName=\"referToFileNumber\" type=\"text\" class=\"form-control\" placeholder=\"Refer to file No.\" id=\"referToFileNumber\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label class=\"col-form-label\" for=\"referToFieldBookNumber\">REFER TO FB No.</label>\r\n          <input formControlName=\"referToFieldBookNumber\" type=\"text\" class=\"form-control\" placeholder=\"Refer to FB No.\" id=\"referToFieldBookNumber\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label class=\"col-form-label\" for=\"referToOrderNumber\">REFER ORDER No.</label>\r\n          <input formControlName=\"referToOrderNumber\" type=\"text\" class=\"form-control\" placeholder=\"Refer to order No.\" id=\"referToOrderNumber\">\r\n      </div>\r\n      </div>\r\n       <div class=\"col-md-6\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-form-label\" for=\"fieldBook\">FB</label>\r\n                    <input formControlName=\"fieldBook\" type=\"text\" class=\"form-control\" placeholder=\"Field Book\" id=\"fieldBook\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-form-label\" for=\"page\">PG</label>\r\n                    <input formControlName=\"page\" type=\"text\" class=\"form-control\" placeholder=\"Page\" id=\"page\">\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-form-label\" for=\"section\">SEC</label>\r\n                    <input formControlName=\"section\" type=\"text\" class=\"form-control\" placeholder=\"Section\" id=\"section\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-form-label\" for=\"township\">TWP</label>\r\n                    <input formControlName=\"township\" type=\"text\" class=\"form-control\" placeholder=\"Township\" id=\"township\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-form-label\" for=\"range\">RGE</label>\r\n                    <input formControlName=\"range\" type=\"text\" class=\"form-control\" placeholder=\"Range\" id=\"range\">\r\n                </div>\r\n            </div>\r\n          </div>\r\n              <div class=\"form-group\">\r\n                  <label class=\"col-form-label\" for=\"partyChief\">PARTY CHIEF</label>\r\n                  <input formControlName=\"partyChief\" type=\"text\" class=\"form-control\" placeholder=\"Party Chief\" id=\"partyChief\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"dateCompleted\">DATE COMPLETED</label>\r\n                <div class=\"input-group\">\r\n                <input formControlName=\"dateCompleted\" type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dateCompleted\"  ngbDatepicker #dCompleted=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary fas fa-calendar-alt\" (click)=\"dCompleted.toggle()\" type=\"button\"></button>\r\n                </div>\r\n                </div>\r\n              </div>\r\n       </div>\r\n      </div>\r\n      <hr>\r\n      <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n           <div class=\"row\">\r\n             <div class=\"col-md-4\">\r\n                 <div class=\"form-group\">\r\n                     <label class=\"col-form-label\" for=\"mail\">MAIL</label>\r\n                     <input formControlName=\"mail\" type=\"text\" class=\"form-control\" placeholder=\"Mail\" id=\"mail\">\r\n                 </div>\r\n                 <div class=\"form-group\">\r\n                    <label class=\"col-form-label\" for=\"deliver\">DELIVER</label>\r\n                    <input formControlName=\"deliver\" type=\"text\" class=\"form-control\" placeholder=\"Deliver\" id=\"deliver\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-form-label\" for=\"pickup\">PICK UP</label>\r\n                    <input formControlName=\"pickup\" type=\"text\" class=\"form-control\" placeholder=\"Pick up\" id=\"pickup\">\r\n                </div>\r\n             </div>\r\n             <div class=\"col-md-8\">\r\n                 <div class=\"form-group\">\r\n                     <label class=\"col-form-label\" for=\"mailPrintsTo\">PRINTS TO</label>\r\n                     <input formControlName=\"mailPrintsTo\" type=\"text\" class=\"form-control\" placeholder=\"Prints To\" id=\"mailPrintsTo\">\r\n                 </div>\r\n                 <div class=\"form-group\">\r\n                    <label class=\"col-form-label\" for=\"deliverPrintsTo\">PRINTS TO</label>\r\n                    <input formControlName=\"deliverPrintsTo\" type=\"text\" class=\"form-control\" placeholder=\"Prints to\" id=\"deliverPrintsTo\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-form-label\" for=\"printsAtTime\">PRINTS AT (TIME)</label>\r\n                    <input formControlName=\"printsAtTime\" type=\"text\" class=\"form-control\" placeholder=\"Prints at time\" id=\"printsAtTime\">\r\n                </div>\r\n             </div>\r\n           </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                  <label class=\"col-form-label\" for=\"dateInvoice\">DATE INVOICE</label>\r\n                  <div class=\"input-group\">\r\n                  <input formControlName=\"dateInvoice\" type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dateInvoice\"  ngbDatepicker #dInvoice=\"ngbDatepicker\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-outline-secondary fas fa-calendar-alt\" (click)=\"dInvoice.toggle()\" type=\"button\"></button>\r\n                  </div>\r\n                  </div>\r\n                </div>\r\n             <div class=\"form-group\">\r\n                 <label class=\"col-form-label\" for=\"amountSetBy\">AMOUNT SET BY:</label>\r\n                 <input formControlName=\"amountSetBy\" type=\"text\" class=\"form-control\" placeholder=\"Amount set by\" id=\"amountSetBy\">\r\n             </div>\r\n             <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"invoiceTypedBy\">INVOICE TYPED BY:</label>\r\n                <input formControlName=\"invoiceTypedBy\" type=\"text\" class=\"form-control\" placeholder=\"Invoice typed by\" id=\"invoiceTypedBy\">\r\n            </div>\r\n           </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n             <div class=\"row\">\r\n               <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                      <label class=\"col-form-label\" for=\"courierFees\">COURIER FEES</label>\r\n                      <input formControlName=\"courierFees\" type=\"text\" class=\"form-control\" placeholder=\"Courrier Fees\" id=\"courierFees\">\r\n                  </div>\r\n               </div>\r\n               <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                      <label class=\"col-form-label\" for=\"applPermitFees\">APPLICATIONS/PERMIT FEES</label>\r\n                      <input formControlName=\"applPermitFees\" type=\"text\" class=\"form-control\" placeholder=\"Application Permit Fee\" id=\"applPermitFees\">\r\n                  </div>\r\n               </div>\r\n             </div>\r\n          </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input formControlName=\"isCOD\" class=\"form-check-input\" type=\"checkbox\" id=\"isCOD\" value = \"\">\r\n                  <label class=\"form-check-label\" for=\"COD\">COD</label>\r\n                </div>\r\n              </div>\r\n          </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                  <label class=\"col-form-label\" for=\"orderNumber\">ORDER No.</label>\r\n                  <input formControlName=\"orderNumber\" type=\"text\" class=\"form-control\" placeholder=\"Order Number *\" id=\"orderNumber\">\r\n                  <div *ngIf=\"(form.get('orderNumber').touched && form.get('orderNumber').invalid) || (form.get('orderNumber').invalid && form.errors)\" class=\"alert alert-danger\">Order Number is required</div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                  <label class=\"col-form-label\" for=\"fileNumber\">FILE NO.</label>\r\n                  <input formControlName=\"fileNumber\" type=\"text\" class=\"form-control\" placeholder=\"File Number\" id=\"fileNumber\">\r\n                  <!--<div *ngIf=\"form.get('fileNumber').touched && form.get('fileNumber').invalid\" class=\"alert alert-danger\">File Number is required</div>-->\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-form-label\" for=\"price\">PRICE $</label>\r\n                    <input formControlName=\"price\" type=\"text\" class=\"form-control\" placeholder=\"price\" id=\"price\">\r\n                    <div *ngIf=\"form.get('price').touched && form.get('price').invalid\" class=\"alert alert-danger\">The price value is required</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n          </form>\r\n          <div>\r\n            <button  class=\"btn btn-primary\" color = \"accent\" routerLink=\"/orders\">< Back to Orders</button>\r\n            <button class=\"btn btn-success\" type=\"submit\" (click)=\"addOrder()\" [disabled]=\"!form.valid\">Save</button>\r\n          </div>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/auth']);
            return false;
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "tXZI":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container\">\r\n    <div class=\"jumbotron jumbotron-fluid text-center\">\r\n      <h2 class=\"display-3\">Welcome to Timelog!</h2>\r\n      <p class=\"lead\">Shwebke-Shiskin & Associates new productivity applications package.</p>\r\n      <hr class=\"my-4\">\r\n      <p>Please follow the roadmap to see what features are already implemented and what is soon to come.</p>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"bs-component\">\r\n          <div class=\"card text-white bg-success mb-3\" style=\"max-width: 20rem;\">\r\n            <div class=\"card-header\">1 IMPLEMENTED</div>\r\n            <div class=\"card-body\">\r\n              <h4 class=\"card-title\">Work Orders</h4>\r\n              <ul>\r\n                <li>Create Work orders</li>\r\n                <li>Edit Work orders</li>\r\n                <li>Search for Work orders</li>\r\n                <li>Add employee time to Work orders</li>\r\n              </ul>\r\n              <h4 class=\"card-title\">Users</h4>\r\n              <ul>\r\n                <li>User Registration</li>\r\n                <li>User Login</li>\r\n                <li>User Logout</li>\r\n                <li>View Time ordered by date</li>\r\n                <li>Edit Time</li>\r\n                <li>Delete Time</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"card text-white bg-dark mb-3\" style=\"max-width: 20rem;\">\r\n            <div class=\"card-header\">Notes on Implementation</div>\r\n            <div class=\"card-body\">\r\n              <h4 class=\"card-title\">Work Orders</h4>\r\n              <p class=\"card-text\">More work order statistics will be available in later releases\r\n              </p>\r\n              <h4 class=\"card-title\">Users</h4>\r\n              <p class=\"card-text\">The avility to create time through the user menu, although\r\n                it is implemented, will not be available at this time.\r\n              </p>\r\n              <p class = \"card-text\">\r\n                As of this version the application access levels is implemented; however,\r\n                all users have the same access level in this release.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-4\">\r\n          <div class=\"bs-component\">\r\n              <div class=\"card text-white bg-primary mb-3\" style=\"max-width: 20rem;\">\r\n                <div class=\"card-header\">2 IN PROGRESS</div>\r\n                <div class=\"card-body\">\r\n                  <h4 class=\"card-title\">Clients</h4>\r\n                  <ul>\r\n                    <li>Create Clients</li>\r\n                    <li>Edit Clients</li>\r\n                    <li>Search for Clients</li>\r\n                    <li>Delete Clients</li>\r\n                  </ul>\r\n                  <h4 class=\"card-title\">Projects</h4>\r\n                  <ul>\r\n                    <li>Create Projects</li>\r\n                    <li>Edit Projects</li>\r\n                    <li>Search for Projects</li>\r\n                    <li>Delete Projects</li>\r\n                  </ul>\r\n                  <h4 class=\"card-title\">Users</h4>\r\n                  <ul>\r\n                    <li>Add/Remove access levels</li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"card text-white bg-dark mb-3\" style=\"max-width: 20rem;\">\r\n                <div class=\"card-header\">Notes on In Progress</div>\r\n                <div class=\"card-body\">\r\n                  <h4 class=\"card-title\">Clients</h4>\r\n                  <p class=\"card-text\">Although must of the codding is finished,\r\n                    the final decision on how this will be used, depends on how management\r\n                    wants the final product to behave.\r\n                  </p>\r\n\r\n                  <h4 class=\"card-title\">Projects</h4>\r\n                  <p class=\"card-text\">Although must of the codding is finished,\r\n                      the final decision on how this will be used, depends on how management\r\n                      wants the final product to behave.\r\n                  </p>\r\n                  <h4 class=\"card-title\">Users</h4>\r\n                  <p class=\"card-text\">Although must of the codding is finished,\r\n                      the final decision on how this will be used, depends on how management\r\n                      wants the final product to behave.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n      </div>\r\n      <div class=\"col-lg-4\">\r\n          <div class=\"bs-component\">\r\n              <div class=\"card text-white bg-warning mb-3\" style=\"max-width: 20rem;\">\r\n                <div class=\"card-header\">3 FUTURE</div>\r\n                <div class=\"card-body\">\r\n                  <h4 class=\"card-title\">REPORTING TOOLS</h4>\r\n                  <ul>\r\n                    <li>Order Statistics</li>\r\n                    <li>Project Statistics</li>\r\n                    <li>Aggregated Statistics</li>\r\n                    <li>Outlook Prediction Algorithm</li>\r\n                  </ul>\r\n                  <h4 class=\"card-title\">PRINTING/BACKUP</h4>\r\n                  <ul>\r\n                    <li>Order Printing/backup</li>\r\n                    <li>Reports Printing/backup</li>\r\n                  </ul>\r\n                  <h4 class=\"card-title\">OTHER APPS</h4>\r\n                  <ul>\r\n                    <li>Integration with project directory creator</li>\r\n                    <li>Integration with tree file creator</li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"card text-white bg-dark mb-3\" style=\"max-width: 20rem;\">\r\n                <div class=\"card-header\">Notes on Future</div>\r\n                <div class=\"card-body\">\r\n                  <h4 class=\"card-title\">Other Apps</h4>\r\n                  <p class=\"card-text\">This applications are already created,\r\n                    and will be implemented in the final product.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n");

/***/ }),

/***/ "tnBe":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/time/create/time-create.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"heading\">\r\n<legend>Time New</legend>\r\n  </div>\r\n  <div class=\"card borderless\">\r\n    <div class=\"card-body\">\r\n        <form [formGroup]='form' (ngSubmit)=\"addTime()\">\r\n            <div *ngIf=\"form.errors\" class=\"alert alert-danger\">\r\n                ERROR! Some fields appear to be invalid\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"orderNumber\">Order Number</label>\r\n                <input formControlName=\"orderNumber\" type=\"text\" class=\"form-control\" placeholder=\"Order Number *\" id=\"orderNumber\">\r\n                <div *ngIf=\"(form.get('orderNumber').touched && form.get('orderNumber').invalid) || (form.get('orderNumber').invalid && form.errors)\" class=\"alert alert-danger\">Order Number is required</div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"projectName\">Project Name</label>\r\n                <input formControlName=\"projectName\" type=\"text\" class=\"form-control\" placeholder=\"Project Name *\" id=\"projectName\">\r\n                <div *ngIf=\"(form.get('projectName').touched && form.get('projectName').invalid) || (form.get('projectName').invalid && form.errors)\" class=\"alert alert-danger\">Project Name is required</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"clientName\">Client Name</label>\r\n                <input formControlName=\"clientName\" type=\"text\" class=\"form-control\" placeholder=\"Client Name *\" id=\"clientName\">\r\n                <div *ngIf=\"(form.get('clientName').touched && form.get('clientName').invalid) || (form.get('clientName').invalid && form.errors)\" class=\"alert alert-danger\">Client Name is required</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"date\">Date</label>\r\n                <div class=\"input-group\">\r\n                <input formControlName=\"date\" type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd *\" name=\"date\"  ngbDatepicker #d=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary fas fa-calendar-alt\" (click)=\"d.toggle()\" type=\"button\"></button>\r\n                </div>\r\n                </div>\r\n                <div *ngIf=\"(form.get('date').touched && form.get('date').invalid) || (form.get('date').invalid && form.errors)\" class=\"alert alert-danger\">Client Name is required</div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"description\">Description</label>\r\n                <input formControlName=\"description\" type=\"text\" class=\"form-control\" placeholder=\"Description *\" id=\"description\">\r\n                <div *ngIf=\"(form.get('description').touched && form.get('description').invalid) || (form.get('description').invalid && form.errors)\" class=\"alert alert-danger\">Description is required</div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"time\">Regular Time</label>\r\n                <input formControlName=\"time\" type=\"text\" class=\"form-control\" placeholder=\"Time *\" id=\"time\">\r\n                <div *ngIf=\"(form.get('time').touched && form.get('time').invalid) || (form.get('time').invalid && form.errors)\" class=\"alert alert-danger\">The time is required\r\n                    if you don't have Regular Time please add a 0. This will not be required on the next version of the software\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"overTime\">Over Time</label>\r\n                <input formControlName=\"overTime\" type=\"text\" class=\"form-control\" placeholder=\"Over Time *\" id=\"overTime\">\r\n                <div *ngIf=\"(form.get('overTime').touched && form.get('overTime').invalid) || (form.get('overTime').invalid && form.errors)\" class=\"alert alert-danger\">The Overt Time is required\r\n                  if you don't have overtime please add a 0. This will not be required on the next version of the software\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <div class=\"form-check form-check-inline\">\r\n                    <input formControlName=\"isField\" class=\"form-check-input\" type=\"checkbox\" id=\"isField\" value = \"\">\r\n                    <label class=\"form-check-label\" for=\"Field\">Is Field</label>\r\n                </div>\r\n            </div>\r\n\r\n            <button  class=\"btn btn-primary\" type=\"button\" color = \"accent\" routerLink=\"/orders\">Back</button>\r\n            <button class=\"btn btn-success\"  type=\"button\" (click)=\"addTime()\" [disabled]=\"form.pristine\" >Save</button>\r\n          </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_time_list_time_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/time/list/time-list.component */ "+DUU");
/* harmony import */ var _components_time_create_time_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/time/create/time-create.component */ "B2/F");
/* harmony import */ var _components_time_edit_time_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/time/edit/time-edit.component */ "RBR+");
/* harmony import */ var _components_time_time_weekly_time_weekly_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/time/time-weekly/time-weekly.component */ "+pnO");
/* harmony import */ var _components_time_time_per_order_time_per_order_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/time/time-per-order/time-per-order.component */ "pLjt");
/* harmony import */ var _components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/order/list/order-list.component */ "xdZg");
/* harmony import */ var _components_order_create_order_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/order/create/order-create.component */ "wemi");
/* harmony import */ var _components_order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/order/edit/order-edit.component */ "G56G");
/* harmony import */ var _components_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/order/detail/order-detail.component */ "OueA");
/* harmony import */ var _components_clients_list_client_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/clients/list/client-list.component */ "mbkC");
/* harmony import */ var _components_clients_create_client_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/clients/create/client-create.component */ "1ctb");
/* harmony import */ var _components_clients_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/clients/edit/client-edit.component */ "SW0C");
/* harmony import */ var _components_clients_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/clients/detail/client-detail.component */ "A9cl");
/* harmony import */ var _components_project_create_project_create_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/project/create/project-create.component */ "OTA4");
/* harmony import */ var _components_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/project/list/project-list.component */ "+CyI");
/* harmony import */ var _components_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/project/edit/project-edit.component */ "U6OC");
/* harmony import */ var _components_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/project/detail/project-detail.component */ "HA+T");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _components_dashobard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/dashobard/dashboard/dashboard.component */ "Vqiz");
/* harmony import */ var _components_dashobard_clients_dashboard_clients_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/dashobard/clients-dashboard/clients-dashboard.component */ "jqAK");
/* harmony import */ var _components_dashobard_associates_dashboard_associates_dashboard_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/dashobard/associates-dashboard/associates-dashboard.component */ "wT3S");
/* harmony import */ var _components_dashobard_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/dashobard/admin-dashboard/admin-dashboard.component */ "B7sV");
/* harmony import */ var _components_access_access_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/access/access.component */ "T2iZ");
/* harmony import */ var _components_applications_tree_file_creator_tree_file_creator_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/applications/tree-file-creator/tree-file-creator.component */ "0upW");
/* harmony import */ var _components_billing_list_billing_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/billing/list/billing-list.component */ "AFfg");
/* harmony import */ var _components_users_list_user_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/users/list/user-list.component */ "U4tt");
/* harmony import */ var _components_admin_user_access_user_access_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/admin/user-access/user-access.component */ "UZKQ");

































var routes = [
    { path: 'create', component: _components_time_create_time_create_component__WEBPACK_IMPORTED_MODULE_7__["TimeCreateComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'users/register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'users/list', component: _components_users_list_user_list_component__WEBPACK_IMPORTED_MODULE_31__["UserListComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'orders', component: _components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_11__["OrderListComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'orders/create/:order_id/:projectName/:clientName', component: _components_order_create_order_create_component__WEBPACK_IMPORTED_MODULE_12__["OrderCreateComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'orders/create', component: _components_order_create_order_create_component__WEBPACK_IMPORTED_MODULE_12__["OrderCreateComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'orders/edit/:id', component: _components_order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_13__["OrderEditComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'orders/detail/:id', component: _components_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_14__["OrderDetailComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'clients/create', component: _components_clients_create_client_create_component__WEBPACK_IMPORTED_MODULE_16__["ClientCreateComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'clients', component: _components_clients_list_client_list_component__WEBPACK_IMPORTED_MODULE_15__["ClientListComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'clients/edit/:id', component: _components_clients_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_17__["ClientEditComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'clients/detail/:id', component: _components_clients_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_18__["ClientDetailComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'projects', component: _components_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_20__["ProjectListComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'projects/edit/:id', component: _components_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_21__["ProjectEditComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'projects/create/:client_id/:clientName', component: _components_project_create_project_create_component__WEBPACK_IMPORTED_MODULE_19__["ProjectCreateComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'projects/detail/:id', component: _components_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_22__["ProjectDetailComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'times', component: _components_time_list_time_list_component__WEBPACK_IMPORTED_MODULE_6__["TimeListComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'times/edit/:id', component: _components_time_edit_time_edit_component__WEBPACK_IMPORTED_MODULE_8__["TimeEditComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'times/time-per-order', component: _components_time_time_per_order_time_per_order_component__WEBPACK_IMPORTED_MODULE_10__["TimePerOrderComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'times/create/:order_id/:projectName/:clientName/:orderNumber', component: _components_time_create_time_create_component__WEBPACK_IMPORTED_MODULE_7__["TimeCreateComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'times/weekly', component: _components_time_time_weekly_time_weekly_component__WEBPACK_IMPORTED_MODULE_9__["TimeWeeklyComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'auth', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'dashboard', component: _components_dashobard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_24__["DashboardComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'clients-dashboard', component: _components_dashobard_clients_dashboard_clients_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["ClientsDashboardComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'associates-dashboard', component: _components_dashobard_associates_dashboard_associates_dashboard_component__WEBPACK_IMPORTED_MODULE_26__["AssociatesDashboardComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'admin-dashboard', component: _components_dashobard_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_27__["AdminDashboardComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'access-code', component: _components_access_access_component__WEBPACK_IMPORTED_MODULE_28__["AccessComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'tree-file-creator', component: _components_applications_tree_file_creator_tree_file_creator_component__WEBPACK_IMPORTED_MODULE_29__["TreeFileCreatorComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'billing', component: _components_billing_list_billing_list_component__WEBPACK_IMPORTED_MODULE_30__["BillingListComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'user-access', component: _components_admin_user_access_user_access_component__WEBPACK_IMPORTED_MODULE_32__["UserAccessComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "w+ZD":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/time/list/time-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"heading\">\r\n    <legend>Times</legend>\r\n</div>\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <!--<h1><i class=\"fas fa-plus-circle pointerCursor\" routerLink=\"/create\"></i></h1>-->\r\n    <div class=\"card\">\r\n    <div>\r\n      <ngb-datepicker #dp (select)=\"onDateSelection($event)\" [displayMonths]=\"2\" [dayTemplate]=\"t\" outsideDays=\"hidden\">\r\n      </ngb-datepicker>\r\n\r\n      <ng-template #t let-date let-focused=\"focused\">\r\n        <span class=\"custom-day\"\r\n              [class.focused]=\"focused\"\r\n              [class.range]=\"isRange(date)\"\r\n              [class.faded]=\"isHovered(date) || isInside(date)\"\r\n              (mouseenter)=\"hoveredDate = date\"\r\n              (mouseleave)=\"hoveredDate = null\">\r\n           {{ date.day }}\r\n        </span>\r\n      </ng-template>\r\n    </div>\r\n    </div>\r\n    <hr>\r\n<!--\r\n          <hr>\r\n          <div *ngIf=\"isExpanded\">\r\n            <table class=\"table table-bordered\">\r\n              <thead class=\"table-light\">\r\n                <tr>\r\n                  <th>Order No.</th>\r\n                  <th>Regular Time</th>\r\n                  <th>Overtime</th>\r\n                  <th>Total</th>\r\n                  <th>Actions</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let data of timeByOrder\">\r\n                  <td>{{data.orderNumber}}</td>\r\n                  <td>{{data.time}}</td>\r\n                  <td>{{data.overTime}}</td>\r\n                  <td>{{data.time + data.overTime}}</td>\r\n                  <td>\r\n                      <div class=\"form-group form-inline\" >\r\n                        <h5><a style=\"padding-right: 10px\"><i  class=\"fas fa-edit pointerCursor\" (click) = \"toggle(data.orderNumber)\"></i></a></h5>\r\n                          <h5><a style=\"padding-right: 10px\"><i  class=\"fas fa-edit pointerCursor\" (click) = \"editTime(data._id)\"></i></a></h5>\r\n                          <h4><a style=\"padding-right: 10px\"><i  class=\"fas fa-trash-alt pointerCursor\" (click) = \"deleteTime(data._id)\"></i></a></h4>\r\n                      </div>\r\n                  </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        -->\r\n          <hr>\r\n          <div >\r\n                <table class=\"table table-striped table-hover table-bordered\">\r\n                  <thead class=\"table-dark\">\r\n                    <tr>\r\n                      <th>Order No.</th>\r\n                      <th>Regular Time</th>\r\n                      <th>Overtime</th>\r\n                      <th>Total</th>\r\n                     <!-- <th>Actions</th>-->\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                      <tr class=\"pointerCursor\" *ngFor = \"let data of filteredOrderTotals\" (click) = \"toggle(data.orderNumber)\" >\r\n                      <td>{{data.orderNumber}}</td>\r\n                      <td>{{data.totalTime}}</td>\r\n                      <td>{{data.totalOverTime}}</td>\r\n                      <td>{{data.totalTime + data.totalOverTime}}</td>\r\n                     <!-- <td>\r\n                          <div class=\"form-group form-inline\" >\r\n                            <h5><a style=\"padding-right: 10px\"><i  class=\"fas fa-edit pointerCursor\" (click) = \"toggle(data.orderNumber)\"></i></a></h5>\r\n                              <h5><a style=\"padding-right: 10px\"><i  class=\"fas fa-edit pointerCursor\" (click) = \"editTime(data._id)\"></i></a></h5>\r\n                              <h4><a style=\"padding-right: 10px\"><i  class=\"fas fa-trash-alt pointerCursor\" (click) = \"deleteTime(data._id)\"></i></a></h4>\r\n                          </div>\r\n                      </td>-->\r\n                    </tr>\r\n                  </tbody>\r\n\r\n                  </table>\r\n            </div>\r\n  </div>\r\n</div>\r\n</div>\r\n");

/***/ }),

/***/ "wT3S":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/dashobard/associates-dashboard/associates-dashboard.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AssociatesDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociatesDashboardComponent", function() { return AssociatesDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_associates_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./associates-dashboard.component.html */ "SSsm");
/* harmony import */ var _associates_dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./associates-dashboard.component.css */ "UTig");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AssociatesDashboardComponent = /** @class */ (function () {
    function AssociatesDashboardComponent() {
    }
    AssociatesDashboardComponent.prototype.ngOnInit = function () {
    };
    AssociatesDashboardComponent.ctorParameters = function () { return []; };
    AssociatesDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-associates-dashboard',
            template: _raw_loader_associates_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_associates_dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AssociatesDashboardComponent);
    return AssociatesDashboardComponent;
}());



/***/ }),

/***/ "wemi":
/*!*******************************************************************!*\
  !*** ./src/app/components/order/create/order-create.component.ts ***!
  \*******************************************************************/
/*! exports provided: OrderCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCreateComponent", function() { return OrderCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_create_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-create.component.html */ "sdmy");
/* harmony import */ var _order_create_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-create.component.css */ "7TQ8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/order.service */ "kVqo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _models_order_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/order.model */ "qHRi");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");









var OrderCreateComponent = /** @class */ (function () {
    function OrderCreateComponent(route, orderService, fb, router) {
        this.route = route;
        this.orderService = orderService;
        this.fb = fb;
        this.router = router;
        this.order = new _models_order_model__WEBPACK_IMPORTED_MODULE_7__["Order"]();
        this.form = this.fb.group({
            'date': [this.order.date, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'clientName': [this.order.clientName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'address': [this.order.address, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'phoneNumber': [this.order.phoneNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'fieldWorkPromissed': [this.order.fieldWorkPromissed],
            'printsPromissed': [this.order.printsPromissed],
            'projectName': [this.order.projectName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'legalDescription': [this.order.legalDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'orderPlacedBy': [this.order.orderPlacedBy, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'orderReceivedBy': [this.order.orderReceivedBy, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'referToFileNumber': [this.order.referToFileNumber],
            'referToFieldBookNumber': [this.order.referToFieldBookNumber],
            'referToOrderNumber': [this.order.referToOrderNumber],
            'fieldBook': [this.order.fieldBook],
            'page': [this.order.page],
            'section': [this.order.section],
            'township': [this.order.township],
            'range': [this.order.range],
            'partyChief': [this.order.partyChief],
            'dateCompleted': [this.order.dateCompleted],
            'mail': [this.order.mail],
            'deliver': [this.order.deliver],
            'pickup': [this.order.pickup],
            'mailPrintsTo': [this.order.mailPrintsTo],
            'deliverPrintsTo': [this.order.deliverPrintsTo],
            'printsAtTime': [this.order.printsAtTime],
            'dateInvoice': [this.order.dateInvoice],
            'amountSetBy': [this.order.amountSetBy],
            'invoiceTypedBy': [this.order.invoiceTypedBy],
            'courierFees': [this.order.courierFees],
            'applPermitFees': [this.order.applPermitFees],
            'isCOD': [this.order.isCOD],
            'orderNumber': [this.order.orderNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'fileNumber': [this.order.fileNumber],
            'price': [this.order.price],
        });
    }
    OrderCreateComponent.prototype.addOrder = function () {
        if (!this.form.valid) {
            this.form.setErrors({ invalidAddOrder: true });
        }
        else {
            // Save new Order
            this.order = this.form.value;
            this.orderService.addOrder(this.order).subscribe(function (order_id) { });
            this.router.navigate(["orders/"]);
        }
    };
    OrderCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.project_id = params.project_id;
            _this.form.get('projectName').setValue(params.projectName);
            _this.form.get('clientName').setValue(params.clientName);
        });
        this.orderService.getLatestOrder().subscribe(function (order) {
            // console.log('Latest order number: ' + order[0].orderNumber);
            _this.orderNumber = (parseInt(order[0].orderNumber, 0) + 1).toString();
            _this.form.get('orderNumber').setValue(_this.orderNumber);
        });
    };
    OrderCreateComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    OrderCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-order-create',
            template: _raw_loader_order_create_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            providers: [{ provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDateAdapter"], useClass: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDateNativeAdapter"] }],
            styles: [_order_create_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], OrderCreateComponent);
    return OrderCreateComponent;
}());



/***/ }),

/***/ "woRh":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.button-row button,\r\n.button-row a {\r\n  margin-right: 8px;\r\n}\r\n\r\n\r\n.admin-section {\r\n  display: flex;\r\n  align-content: center;\r\n  align-items: center;\r\n  height: 60px;\r\n}\r\n\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-top: 100px;\r\n  padding-bottom: 100px;\r\n}\r\n\r\n\r\n.mat-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n\r\nform {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztFQUVFLGlCQUFpQjtBQUNuQjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7OztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7OztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJ1dHRvbi1yb3cgYnV0dG9uLFxyXG4uYnV0dG9uLXJvdyBhIHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuXHJcbi5hZG1pbi1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "xdZg":
/*!***************************************************************!*\
  !*** ./src/app/components/order/list/order-list.component.ts ***!
  \***************************************************************/
/*! exports provided: OrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListComponent", function() { return OrderListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-list.component.html */ "gxFp");
/* harmony import */ var _order_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-list.component.css */ "Vyy7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/order.service */ "kVqo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







var OrderListComponent = /** @class */ (function () {
    function OrderListComponent(orderService, router) {
        this.orderService = orderService;
        this.router = router;
        this.panelOpenState = false;
    }
    Object.defineProperty(OrderListComponent.prototype, "searchTerm", {
        get: function () {
            return this._searchTerm;
        },
        set: function (value) {
            this._searchTerm = value;
            this.filteredOrders = this.filtereOrders(value);
        },
        enumerable: false,
        configurable: true
    });
    OrderListComponent.prototype.filtereOrders = function (searchString) {
        return this.orders.filter(function (order) {
            return order.orderNumber.toString().toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
        });
    };
    OrderListComponent.prototype.toggle = function () {
        this.toggleAddTime = !this.toggleAddTime;
    };
    OrderListComponent.prototype.ngOnInit = function () {
        this.fetchOrders();
    };
    OrderListComponent.prototype.getOrderId = function (id) {
        this.currentOrderId = id;
    };
    OrderListComponent.prototype.fetchOrders = function () {
        var _this = this;
        this.orderService.getOrders().subscribe(function (data) {
            _this.orders = data;
            _this.filteredOrders = data;
            console.log(_this.orders);
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.router.navigate(['/auth']);
                }
            }
        });
    };
    OrderListComponent.prototype.editOrder = function (id) {
        this.router.navigate(["orders/edit/" + id]);
    };
    OrderListComponent.prototype.detailOrder = function (id) {
        this.router.navigate(["orders/detail/" + id]);
    };
    OrderListComponent.prototype.deleteOrder = function (id) {
        var _this = this;
        this.orderService.deleteOrder(id).subscribe(function () {
            _this.fetchOrders();
        });
    };
    OrderListComponent.prototype.addTime = function (order_id, projectName, clientName, orderNumber) {
        this.toggle();
        this.router.navigate(["times/create/" + order_id + "/" + projectName + "/" + clientName + "/" + orderNumber]);
    };
    OrderListComponent.ctorParameters = function () { return [
        { type: _services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    OrderListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-order-list',
            template: _raw_loader_order_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_order_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], OrderListComponent);
    return OrderListComponent;
}());



/***/ }),

/***/ "zGVB":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/applications/tree-file-creator/tree-file-creator.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropzone {\r\n    min-height: 200px;\r\n    min-width: 200px;\r\n    display: table;\r\n    width: 50%;\r\n    background-color: #66ffff;\r\n    border: dashed 1px #001a1a;\r\n  }\r\n\r\n  .text-wrapper {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n  }\r\n\r\n  .centered {\r\n    font-family: sans-serif;\r\n    font-size: 1.3em;\r\n    font-weight: bold;\r\n    text-align:center;\r\n  }\r\n\r\n  .dropzone-list > ul {\r\n    width: 30%;\r\n    list-style: none;\r\n  }\r\n\r\n  .dropzone-list > ul > li:before {\r\n    content : '+';\r\n    color: #6def9a;\r\n  }\r\n\r\n  .dropzone-list > ul > li {\r\n    border: 1px solid black;\r\n    padding-bottom: 5px;\r\n    padding-left: 10px;\r\n  }\r\n\r\n  .dropzone-list > ul.invalid > li:before {\r\n    content : '-';\r\n    color: #ef000f;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWUtZmlsZS1jcmVhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCOztFQUNBO0lBQ0UsYUFBYTtJQUNiLGNBQWM7RUFDaEI7O0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFLGFBQWE7SUFDYixjQUFjO0VBQ2hCIiwiZmlsZSI6InRyZWUtZmlsZS1jcmVhdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcHpvbmUge1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2ZmZmZjtcclxuICAgIGJvcmRlcjogZGFzaGVkIDFweCAjMDAxYTFhO1xyXG4gIH1cclxuXHJcbiAgLnRleHQtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcblxyXG4gIC5jZW50ZXJlZCB7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmRyb3B6b25lLWxpc3QgPiB1bCB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcbiAgLmRyb3B6b25lLWxpc3QgPiB1bCA+IGxpOmJlZm9yZSB7XHJcbiAgICBjb250ZW50IDogJysnO1xyXG4gICAgY29sb3I6ICM2ZGVmOWE7XHJcbiAgfVxyXG4gIC5kcm9wem9uZS1saXN0ID4gdWwgPiBsaSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5kcm9wem9uZS1saXN0ID4gdWwuaW52YWxpZCA+IGxpOmJlZm9yZSB7XHJcbiAgICBjb250ZW50IDogJy0nO1xyXG4gICAgY29sb3I6ICNlZjAwMGY7XHJcbiAgfVxyXG4iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "zcEE":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/clients/list/client-list.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n<div class=\"container\">\r\n  <div class=\"heading\">\r\n    <legend>Clients</legend>\r\n</div>\r\n<div class=\"card\" style=\"border:none\">\r\n  <div class=\"card-body\">\r\n     <h1><i class=\"fas fa-plus-circle pointerCursor\" routerLink=\"/clients/create\"></i></h1>\r\n      <form>\r\n          <div class=\"form-group form-inline\">\r\n              Client search: <input class=\"form-control ml-2\" placeholder=\" . . . \" type=\"text\" name=\"orderSearch\" [(ngModel)]=\"searchTerm\"/>\r\n          </div>\r\n      </form>\r\n\r\n      <div *ngFor=\"let client of filteredClients; let i = index;\" >\r\n          <div class = \"card\">\r\n              <div class = \"card-body \">\r\n                <div class=\"row\">\r\n                    <div class=\"col-2\">\r\n                        <h5><a style=\" padding-right: 10px\"><i  class=\"fas fa-eye pointerCursor\" (click) = \"detailClient(client._id)\"></i></a></h5>\r\n\r\n                      </div>\r\n                  <div class=\"col-6\">\r\n                      <h4>{{client.clientName}}</h4>\r\n                      <p>{{client.date | date}}</p>\r\n                      <p>{{client.phone}}</p>\r\n                  </div>\r\n                  <div class=\"form-group form-inline\">\r\n                    <h5><a style=\"padding-right: 10px\"><i  class=\"fas fa-edit pointerCursor\" (click) = \"editClient(client._id)\"></i></a></h5>\r\n                    <h4><a style=\"padding-right: 10px\"><i  class=\"fas fa-project-diagram pointerCursor\"(click) = \"addProject(client._id, client.clientName)\"></i></a></h4>\r\n                   <h4><a style=\"padding-right: 10px\"><i  class=\"fas fa-trash-alt pointerCursor\" (click) = \"deleteClient(client._id)\"></i></a></h4>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n</div>\r\n-->\r\n\r\n<div class=\"container\">\r\n  <div class=\"heading text-center\"><legend>CLIENTS</legend></div>\r\n  <div class=\"text-center\"> <h1><i class=\"fas fa-plus-circle pointerCursor\" routerLink=\"/clients/create\" ngbTooltip=\"Add New Client\"></i></h1></div>\r\n<div class=\"form-group form-inline\">\r\n  Client search: <input class=\"form-control ml-2\" placeholder=\" . . . \" type=\"text\" name=\"orderSearch\" [(ngModel)]=\"searchTerm\"/>\r\n</div>\r\n      <table class=\"table table-striped table-hover table-sm table-bordered\">\r\n      <thead class=\"table-dark\">\r\n        <tr>\r\n          <th>Client Name</th>\r\n          <th>Phone No.</th>\r\n          <th>Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr class=\"pointerCursor\" *ngFor=\"let client of filteredClients; let i = index;\"  (click) = \"detailClient(client._id)\">\r\n          <td>{{client.clientName}}</td>\r\n          <td>{{client.phone}}</td>\r\n          <td>\r\n            <div class=\"form-inline\">\r\n              <h5><a style=\"padding-right: 10px; font-size: 1em\"><i  class=\"fas fa-edit pointerCursor\" (click) = \"editClient(client._id)\" ngbTooltip=\"Edit Client\"></i></a></h5>\r\n              <h4><a style=\"padding-right: 10px; font-size: 1em\"><i  class=\"fas fa-project-diagram pointerCursor\"(click) = \"addProject(client._id, client.clientName)\" ngbTooltip=\"Add Project\"></i></a></h4>\r\n             <h4><a style=\"padding-right: 10px; font-size: 1em\"><i  class=\"fas fa-trash-alt pointerCursor\" (click) = \"deleteClient(client._id)\" ngbTooltip=\"Delete Client\"></i></a></h4>\r\n            </div>\r\n          </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n    </div>\r\n");

/***/ }),

/***/ "zeDu":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/clients/edit/client-edit.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"heading text-center\">\r\n    <legend>Edit Client</legend>\r\n  </div>\r\n  <div class=\"card borderless\">\r\n    <div class=\"card-body\">\r\n        <form [formGroup]='form'(ngSubmit)=\"editClient()\">\r\n            <div *ngIf=\"form.errors\" class=\"alert alert-danger\">\r\n                ERROR! Some field(s) appear to be invalid\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"col-form-label\" for=\"clientName\">Client Name</label>\r\n              <input formControlName=\"clientName\" type=\"text\" class=\"form-control\" placeholder=\"Client Name *\" id=\"clientName\">\r\n              <div *ngIf=\"(form.get('clientName').touched && form.get('clientName').invalid) || (form.get('clientName').invalid && form.errors)\" class=\"alert alert-danger\">Client Name is required</div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"date\">Date</label>\r\n                <div class=\"input-group\">\r\n                <input formControlName=\"date\" type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd *\" name=\"date\"  id=\"date\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary fas fa-calendar-alt\" (click)=\"d.toggle()\" type=\"button\"></button>\r\n                </div>\r\n                </div>\r\n                <div *ngIf=\"(form.get('date').touched && form.get('date').invalid) || (form.get('date').invalid && form.errors)\" class=\"alert alert-danger\">A date is required</div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"address\">Address</label>\r\n                <input formControlName=\"address\" type=\"text\" class=\"form-control\" placeholder=\"Address *\" id=\"address\">\r\n                <div *ngIf=\"(form.get('address').touched && form.get('address').invalid) || (form.get('address').invalid && form.errors)\" class=\"alert alert-danger\">Address is required</div>\r\n              </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"col-form-label\" for=\"contact\">Contact</label>\r\n                <input formControlName=\"contact\" type=\"text\" class=\"form-control\" placeholder=\"Contact *\" id=\"contact\">\r\n                <div *ngIf=\"(form.get('contact').touched && form.get('contact').invalid) || (form.get('contact').invalid && form.errors)\" class=\"alert alert-danger\">A Contact is required</div>\r\n              </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"col-form-label\" for=\"phone\">Phone Number</label>\r\n              <input formControlName=\"phone\" type=\"text\" class=\"form-control\" placeholder=\"Phone Number *\" id=\"phone\">\r\n              <div *ngIf=\"(form.get('phone').touched && form.get('phone').invalid) || (form.get('phone').invalid && form.errors)\" class=\"alert alert-danger\">Phone Number is required</div>\r\n            </div>\r\n\r\n          </form>\r\n          <div class=text-center>\r\n              <button routerLink=\"/clients\" class=\"btn btn-primary\">Back</button>\r\n              <button type=\"submit\"  class=\"btn btn-success\" [disabled]=\"!form.valid\" (click)=\"editClient()\">Submit</button>\r\n          </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "zfrA":
/*!**************************************************************!*\
  !*** ./src/app/components/users/edit/user-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-edit.component.html */ "A52Z");
/* harmony import */ var _user_edit_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-edit.component.css */ "VWes");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var UserEditComponent = /** @class */ (function () {
    function UserEditComponent() {
    }
    UserEditComponent.prototype.ngOnInit = function () {
    };
    UserEditComponent.ctorParameters = function () { return []; };
    UserEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-user-edit',
            template: _raw_loader_user_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_user_edit_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "ztte":
/*!****************************************************************!*\
  !*** ./src/app/components/order/edit/order-edit.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".create-form{\r\n    display:flex;\r\n    flex-direction:column;\r\n    min-width: 150px;\r\n    width:auto;\r\n}\r\n\r\n.field-full-width{\r\n    width: 50%;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJvcmRlci1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlLWZvcm17XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgd2lkdGg6YXV0bztcclxufVxyXG5cclxuLmZpZWxkLWZ1bGwtd2lkdGh7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4iXX0= */");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map