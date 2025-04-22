"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateRangePicker = void 0;
var _connectors = require("instantsearch.js/es/connectors");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var dateRangePicker = exports.dateRangePicker = function dateRangePicker(widgetParams) {
  var _ref = function (widgetParams) {
      var container = typeof widgetParams.container === 'string' ? document.querySelector(widgetParams.container) : widgetParams.container;
      var root = document.createElement('div');
      root.className = 'date-range-picker';
      var DATE_FORMAT_US = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
      var dateAdapter = {
        parse: function parse() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var createDate = arguments.length > 1 ? arguments[1] : undefined;
          var matches = value.match(DATE_FORMAT_US);
          if (matches) {
            return createDate(matches[3], matches[1], matches[2]);
          }
        },
        format: function format(date) {
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          });
        }
      };
      var localization = {
        buttonLabel: 'Choose date',
        placeholder: 'mm/dd/yyyy',
        selectedDateMessage: 'Selected date is',
        prevMonthLabel: 'Previous month',
        nextMonthLabel: 'Next month',
        monthSelectLabel: 'Month',
        yearSelectLabel: 'Year',
        closeLabel: 'Close window',
        calendarHeading: 'Choose a date',
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        locale: 'en-US'
      };
      var beginListener, endListener;
      return {
        render: function render(renderOptions, isFirstRender) {
          var refine = renderOptions.refine;
          if (!isFirstRender) {
            return;
          }
          container.appendChild(root);
          root.innerHTML = "\n          <div class=\"search-facet-date\">\n            <label for=\"date1\">From</label>\n            <duet-date-picker identifier=\"date1\"></duet-date-picker>\n          </div>\n          <div class=\"search-facet-date\">\n            <label for=\"date2\">To</label>\n            <duet-date-picker identifier=\"date2\"></duet-date-picker>\n          </div>\n        ";
          var pickers = root.querySelectorAll('duet-date-picker');
          var beginPicker = pickers[0];
          var endPicker = pickers[1];
          beginPicker.dateAdapter = dateAdapter;
          beginPicker.localization = localization;
          endPicker.dateAdapter = dateAdapter;
          endPicker.localization = localization;
          var doRefine = function doRefine(beginValue, endValue) {
            var min = beginValue ? new Date(beginValue).getTime() / 1000 : undefined;
            var max = endValue ? new Date(endValue).getTime() / 1000 : undefined;
            refine([min, max]);
          };
          beginListener = function beginListener(event) {
            if (endPicker.value && new Date(event.detail.value) > new Date(endPicker.value)) {
              endPicker.value = '';
              doRefine(event.detail.value, undefined);
            } else {
              doRefine(event.detail.value, endPicker.value);
            }
          };
          endListener = function endListener(event) {
            if (beginPicker.value && new Date(event.detail.value) < new Date(beginPicker.value)) {
              beginPicker.value = '';
              doRefine(undefined, event.detail.value);
            } else {
              doRefine(beginPicker.value, event.detail.value);
            }
          };

          // @ts-expect-error because adding custom listener to untyped custom element
          beginPicker.addEventListener('duetChange', beginListener);
          // @ts-expect-error because adding custom listener to untyped custom element
          endPicker.addEventListener('duetChange', endListener);
        },
        dispose: function dispose() {
          var pickers = root.querySelectorAll('duet-date-picker');
          // @ts-expect-error because removing custom listener to untyped custom element
          pickers[0].removeEventListener('duetChange', beginListener);
          // @ts-expect-error because removing custom listener to untyped custom element
          pickers[1].removeEventListener('duetChange', endListener);
          container.removeChild(root);
        }
      };
    }(widgetParams),
    render = _ref.render,
    dispose = _ref.dispose;
  var createWidget = (0, _connectors.connectRange)(render, dispose);
  return _objectSpread(_objectSpread({}, createWidget(widgetParams)), {}, {
    $$widgetType: 'ais.dateRangePicker'
  });
};
//# sourceMappingURL=widget.js.map