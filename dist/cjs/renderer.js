"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDateRangePickerRenderer = void 0;
/*
 * Creates the render and dispose functions
 * This function is called once by the connector when the widget is created and is returning
 *  - the `render` function used to render the widget
 *  - the `dispose` function used to clean the changes made by the widget
 * It can also be used to keep references of objects that must be reused between renders
 */
var createDateRangePickerRenderer = exports.createDateRangePickerRenderer = function createDateRangePickerRenderer(_ref) {
  var container = _ref.container;
  var containerNode = typeof container === 'string' ? document.querySelector(container) : container;
  var root = document.createElement('div');
  root.className = 'date-range-picker';
  var beginListener;
  var endListener;
  return {
    /*
     * The render function passed to the connector
     * This function is called when we need to render the widget.
     * The render appends when:
     * - the widget is added to InstantSearch
     * - we receive new results from Algolia
     */
    render: function render(renderOptions, isFirstRender) {
      /*
       * `renderOptions` contains all options passed by the connector to the renderer, it contains everything needed for the rendering of the component
       */

      if (isFirstRender) {
        /*
         * When the widget is rendered for the first time `isFirstRender` is set to `true`
         * This is when we will create everything that must be reused between renders (containers, event listeners, etc.)
         */
        containerNode.appendChild(root);
        root.innerHTML = "\n          <div class=\"search-facet-date\">\n            <label for=\"date\">From</label>\n            <duet-date-picker></duet-date-picker>\n          </div>\n          <div class=\"search-facet-date\">\n            <label for=\"date\">To</label>\n            <duet-date-picker></duet-date-picker>\n          </div>\n        ";
        var pickers = root.querySelectorAll('duet-date-picker');
        var beginPicker = pickers[0];
        var endPicker = pickers[1];
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
        beginPicker.dateAdapter = dateAdapter;
        beginPicker.localization = localization;
        endPicker.dateAdapter = dateAdapter;
        endPicker.localization = localization;
        var refine = function refine(beginValue, endValue) {
          var min = beginValue ? new Date(beginValue).getTime() : undefined;
          var max = endValue ? new Date(endValue).getTime() : undefined;
          renderOptions.refine([min, max]);
        };
        beginListener = function beginListener(event) {
          if (endPicker.value && new Date(event.detail.value) > new Date(endPicker.value)) {
            endPicker.value = '';
            refine(event.detail.value, undefined);
          } else {
            refine(event.detail.value, endPicker.value);
          }
        };
        endListener = function endListener(event) {
          if (beginPicker.value && new Date(event.detail.value) < new Date(beginPicker.value)) {
            beginPicker.value = '';
            refine(undefined, event.detail.value);
          } else {
            refine(beginPicker.value, event.detail.value);
          }
        };

        // @ts-expect-error because adding custom listener to untyped custom element
        beginPicker.addEventListener('duetChange', beginListener);
        // @ts-expect-error because adding custom listener to untyped custom element
        endPicker.addEventListener('duetChange', endListener);
      }
    },
    /*
     * The dispose function passed to the connector
     * This function is called when the widget is removed from InstantSearch.
     * It must be used to remove any changes made by the render function (DOM changes, global event listeners, etc.)
     */
    dispose: function dispose() {
      var pickers = root.querySelectorAll('duet-date-picker');
      // @ts-expect-error because removing custom listener to untyped custom element
      pickers[0].removeEventListener('duetChange', beginListener);
      // @ts-expect-error because removing custom listener to untyped custom element
      pickers[1].removeEventListener('duetChange', endListener);
      containerNode.removeChild(root);
    }
  };
};
//# sourceMappingURL=renderer.js.map