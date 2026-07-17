
import { connectRange } from 'instantsearch.js/es/connectors';
import { RangeBoundaries, RangeRenderState } from 'instantsearch.js/es/connectors/range/connectRange';
import { DateRangePickerWidgetParams } from './date-range-picker';

type DuetChangeListener = (params: { detail: { value: string } }) => void;
type PickerElement = Element & { value: string, localization: {}, dateAdapter: {} };

/**
 * Formats a refinement value (epoch seconds, as stored by this widget's
 * numeric range refinement) as a human-readable `MM/DD/YYYY` date, using the
 * UTC calendar date rather than the browser's local timezone — since the
 * epoch value represents UTC midnight of the picked date. Exposed so
 * consumers (e.g. a `currentRefinements` widget rendering this attribute's
 * active-filter pills) don't need to reimplement this conversion.
 */
export const formatEpochSecondsAsDate = (epochSeconds: number): string =>
  new Date(epochSeconds * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'UTC',
  });

export const dateRangePicker = (
  widgetParams: DateRangePickerWidgetParams,
) => {

  const { render, dispose } = ((widgetParams: DateRangePickerWidgetParams)=> {

    const container: Element =
      typeof widgetParams.container === 'string'
        ? document.querySelector(widgetParams.container)!
        : widgetParams.container;

    const root = document.createElement('div');
    root.className = 'date-range-picker';

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
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        });
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
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',],
      monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',],
      locale: 'en-US',
    };

    let beginListener: DuetChangeListener,
        endListener: DuetChangeListener,
        beginPicker: PickerElement,
        endPicker: PickerElement;

    const toISODateString = (epochSeconds: number): string =>
      new Date(epochSeconds * 1000).toISOString().slice(0, 10);

    // Keep the pickers' displayed/internal value in sync with the actual
    // refinement, since anything that changes it outside our own listeners
    // (a clear-filters action, URL restoration, etc.) would otherwise leave
    // a stale value that corrupts the next refine() call.
    const syncPickersFromRefinement = ([min, max]: RangeBoundaries) => {
      const nextBeginValue = Number.isFinite(min) ? toISODateString(min as number) : '';
      const nextEndValue = Number.isFinite(max) ? toISODateString(max as number) : '';

      if (beginPicker.value !== nextBeginValue) {
        beginPicker.value = nextBeginValue;
      }
      if (endPicker.value !== nextEndValue) {
        endPicker.value = nextEndValue;
      }
    };

    return {
      render: (renderOptions: RangeRenderState, isFirstRender: boolean)=> {

        const { refine, start } = renderOptions;

        if (!isFirstRender) {
          syncPickersFromRefinement(start);
          return;
        }

        container.appendChild(root);

        root.innerHTML = `
          <div class="search-facet-date">
            <label for="date1">From</label>
            <duet-date-picker identifier="date1"></duet-date-picker>
          </div>
          <div class="search-facet-date">
            <label for="date2">To</label>
            <duet-date-picker identifier="date2"></duet-date-picker>
          </div>
        `;

        const pickers = root.querySelectorAll('duet-date-picker');
        beginPicker = pickers[0] as PickerElement;
        endPicker = pickers[1] as PickerElement;

        beginPicker.dateAdapter = dateAdapter;
        beginPicker.localization = localization;
        endPicker.dateAdapter = dateAdapter;
        endPicker.localization = localization;

        const doRefine = (
          beginValue: string | undefined,
          endValue: string | undefined
        ) => {
          const min = beginValue ? new Date(beginValue).getTime() / 1000 : undefined;
          const max = endValue ? new Date(endValue).getTime() / 1000 : undefined;

          refine([min, max]);
        };

        beginListener = (event) => {
          if (endPicker.value && new Date(event.detail.value) > new Date(endPicker.value)) {
            endPicker.value = '';
            doRefine(event.detail.value, undefined);
          } else {
            doRefine(event.detail.value, endPicker.value);
          }
        };

        endListener = (event) => {
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
      dispose: () => {

        const pickers = root.querySelectorAll('duet-date-picker');
        // @ts-expect-error because removing custom listener to untyped custom element
        pickers[0].removeEventListener('duetChange', beginListener);
        // @ts-expect-error because removing custom listener to untyped custom element
        pickers[1].removeEventListener('duetChange', endListener);

        container.removeChild(root);

      },
    };

  })(widgetParams);

  const createWidget = connectRange(render, dispose);

  return {
    ...createWidget(widgetParams),
    $$widgetType: 'ais.dateRangePicker',
  };
};
