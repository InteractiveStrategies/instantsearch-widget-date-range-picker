import type { DateRangePickerRendererCreator } from './types';

type DuetChangeListener = (params: { detail: { value: string } }) => void;
type PickerElement = Element & { value: string, localization: {}, dateAdapter: {} };

/*
 * Creates the render and dispose functions
 * This function is called once by the connector when the widget is created and is returning
 *  - the `render` function used to render the widget
 *  - the `dispose` function used to clean the changes made by the widget
 * It can also be used to keep references of objects that must be reused between renders
 */
export const createDateRangePickerRenderer: DateRangePickerRendererCreator = ({
  container,
}) => {
  const containerNode: Element =
    typeof container === 'string'
      ? document.querySelector(container)!
      : container;

  const root = document.createElement('div');
  root.className = 'date-range-picker';

  let beginListener: DuetChangeListener;
  let endListener: DuetChangeListener;

  return {
    /*
     * The render function passed to the connector
     * This function is called when we need to render the widget.
     * The render appends when:
     * - the widget is added to InstantSearch
     * - we receive new results from Algolia
     */
    render(renderOptions, isFirstRender) {
      /*
       * `renderOptions` contains all options passed by the connector to the renderer, it contains everything needed for the rendering of the component
       */
console.log(renderOptions);
      if (isFirstRender) {

        /*
         * When the widget is rendered for the first time `isFirstRender` is set to `true`
         * This is when we will create everything that must be reused between renders (containers, event listeners, etc.)
         */
        containerNode.appendChild(root);

        root.innerHTML = `
          <duet-date-picker></duet-date-picker>
          <duet-date-picker></duet-date-picker>
        `;

        const pickers = root.querySelectorAll('duet-date-picker');
        const beginPicker = pickers[0] as PickerElement;
        const endPicker = pickers[1] as PickerElement;

        const DATE_FORMAT_US = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

        const dateAdapter = {
          parse(
            value = '',
            createDate: (arg0: string, arg1: string, arg2: string) => any
          ) {
            const matches = value.match(DATE_FORMAT_US);

            if (matches) {
              return createDate(matches[3], matches[1], matches[2]);
            }
          },
          format(date: Date) {
            return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
          },
        };

        const localization = {
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
          locale: 'en-US',
        }

        beginPicker.dateAdapter = dateAdapter;
        beginPicker.localization = localization;
        endPicker.dateAdapter = dateAdapter;
        endPicker.localization = localization;


        const refine = (
          beginValue: string | undefined,
          endValue: string | undefined
        ) => {
          const min = beginValue ? new Date(beginValue).getTime() : undefined;
          const max = endValue ? new Date(endValue).getTime() : undefined;
          renderOptions.refine([min, max]);
        };

        beginListener = (event) => {
          if (
            endPicker.value &&
            new Date(event.detail.value) > new Date(endPicker.value)
          ) {
            endPicker.value = '';
            refine(event.detail.value, undefined);
          } else {
            refine(event.detail.value, endPicker.value);
          }
        };

        endListener = (event) => {
          if (
            beginPicker.value &&
            new Date(event.detail.value) < new Date(beginPicker.value)
          ) {
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
    dispose() {
      const pickers = root.querySelectorAll('duet-date-picker');
      // @ts-expect-error because removing custom listener to untyped custom element
      pickers[0].removeEventListener('duetChange', beginListener);
      // @ts-expect-error because removing custom listener to untyped custom element
      pickers[1].removeEventListener('duetChange', endListener);

      containerNode.removeChild(root);
    },
  };
};
