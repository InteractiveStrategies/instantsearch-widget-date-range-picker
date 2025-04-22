
import { RangeConnectorParams, RangeRenderState } from 'instantsearch.js/es/connectors/range/connectRange';
import type { WidgetRenderState } from 'instantsearch.js/es/types';

export type DateRangePickerWidgetParams = {
  /**
   * Valid CSS Selector as a string or DOMElement.
   */
  container: string | HTMLElement;
  /**
   * Name of the attribute for faceting.
   */
  attribute: string;
  /**
   * Minimal slider value, default to automatically computed from the result set.
   */
  min?: number;
  /**
   * Maximal slider value, defaults to automatically computed from the result set.
   */
  max?: number;
};

export type DateRangePickerWidgetDescription = {
  $$type: 'ais.dateRangePicker';
  renderState: RangeRenderState;
  indexRenderState: {
    dateRangePicker: {
      [attribute: string]: WidgetRenderState<RangeRenderState, RangeConnectorParams>;
    };
  };
  indexUiState: {
    dateRangePicker: {
      [attribute: string]: string;
    };
  };
};

export type DateRangePickerConnector = Connector<
  DateRangePickerWidgetDescription,
  DateRangePickerWidgetParams
>;

/*
 * Renderer type, constructed from the Renderer and Connector parameters
 */
export type DateRangePickerRenderer = (
  widgetParams: DateRangePickerWidgetParams
) => {
  render: Renderer<
    DateRangePickerWidgetDescription['renderState'],
    DateRangePickerConnector
  >;
  dispose: () => void;
};