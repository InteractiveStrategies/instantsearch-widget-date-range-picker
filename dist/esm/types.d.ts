import type { Renderer, Connector, WidgetFactory } from 'instantsearch.js';
export type DateRangePickerWidgetParams = {
    container: Element | string;
};
export type DateRangePickerConnectorParams = {
    attribute: string;
};
export type DateRangePickerRenderState = {};
type DateRangePickerWidgetDescription = {
    $$type: 'algolia.dateRangePicker';
    renderState: DateRangePickerRenderState;
    indexRenderState: {
        dateRangePicker: {};
    };
    indexUiState: {
        dateRangePicker: {};
    };
};
export type DateRangePickerConnector = Connector<DateRangePickerWidgetDescription, DateRangePickerConnectorParams>;
export type DateRangePickerRendererCreator = (widgetParams: DateRangePickerWidgetParams) => {
    render: Renderer<DateRangePickerWidgetDescription['renderState'], DateRangePickerConnectorParams>;
    dispose: () => void;
};
export type DateRangePickerWidgetCreator = WidgetFactory<DateRangePickerWidgetDescription & {
    $$widgetType: 'algolia.dateRangePicker';
}, DateRangePickerConnectorParams, DateRangePickerWidgetParams>;
export {};
