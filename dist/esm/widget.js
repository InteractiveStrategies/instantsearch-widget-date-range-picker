function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { connectRange } from 'instantsearch.js/es/connectors';
export var dateRangePicker = function dateRangePicker(widgetParams) {
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
      var beginListener, endListener, beginPicker, endPicker;
      var toISODateString = function toISODateString(epochSeconds) {
        return new Date(epochSeconds * 1000).toISOString().slice(0, 10);
      };

      // Keep the pickers' displayed/internal value in sync with the actual
      // refinement, since anything that changes it outside our own listeners
      // (a clear-filters action, URL restoration, etc.) would otherwise leave
      // a stale value that corrupts the next refine() call.
      var syncPickersFromRefinement = function syncPickersFromRefinement(_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          min = _ref3[0],
          max = _ref3[1];
        var nextBeginValue = Number.isFinite(min) ? toISODateString(min) : '';
        var nextEndValue = Number.isFinite(max) ? toISODateString(max) : '';
        if (beginPicker.value !== nextBeginValue) {
          beginPicker.value = nextBeginValue;
        }
        if (endPicker.value !== nextEndValue) {
          endPicker.value = nextEndValue;
        }
      };
      return {
        render: function render(renderOptions, isFirstRender) {
          var refine = renderOptions.refine,
            start = renderOptions.start;
          if (!isFirstRender) {
            syncPickersFromRefinement(start);
            return;
          }
          container.appendChild(root);
          root.innerHTML = "\n          <div class=\"search-facet-date\">\n            <label for=\"date1\">From</label>\n            <duet-date-picker identifier=\"date1\"></duet-date-picker>\n          </div>\n          <div class=\"search-facet-date\">\n            <label for=\"date2\">To</label>\n            <duet-date-picker identifier=\"date2\"></duet-date-picker>\n          </div>\n        ";
          var pickers = root.querySelectorAll('duet-date-picker');
          beginPicker = pickers[0];
          endPicker = pickers[1];
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
          syncPickersFromRefinement(start);
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
  var createWidget = connectRange(render, dispose);
  return _objectSpread(_objectSpread({}, createWidget(widgetParams)), {}, {
    $$widgetType: 'ais.dateRangePicker'
  });
};
//# sourceMappingURL=widget.js.map