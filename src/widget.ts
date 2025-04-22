
import { connectRange } from 'instantsearch.js/es/connectors';
import { RangeRenderState } from 'instantsearch.js/es/connectors/range/connectRange';
import { DateRangePickerWidgetParams } from './date-range-picker';

type DuetChangeListener = (params: { detail: { value: string } }) => void;
type PickerElement = Element & { value: string, localization: {}, dateAdapter: {} };

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
        endListener: DuetChangeListener;

    return {
      render: (renderOptions: RangeRenderState, isFirstRender: boolean)=> {

        const { refine } = renderOptions;

        if (!isFirstRender) {
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
        const beginPicker = pickers[0] as PickerElement;
        const endPicker = pickers[1] as PickerElement;

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
