import { RangeBoundaries, RangeRenderState } from 'instantsearch.js/es/connectors/range/connectRange';
import { DateRangePickerWidgetParams } from './date-range-picker';
export declare const dateRangePicker: (widgetParams: DateRangePickerWidgetParams) => {
    $$widgetType: string;
    $$type: "ais.range";
    init?: ((options: import("instantsearch.js/es/types").InitOptions) => void) | undefined;
    shouldRender?: ((options: import("instantsearch.js/es/types").ShouldRenderOptions) => boolean) | undefined;
    render?: ((options: import("instantsearch.js/es/types").RenderOptions) => void) | undefined;
    dispose?: ((options: import("instantsearch.js/es/types").DisposeOptions) => import("algoliasearch-helper").SearchParameters | import("algoliasearch-helper").RecommendParameters | void) | undefined;
    getWidgetUiState: (uiState: {
        range?: {
            [attribute: string]: string;
        } | undefined;
        query?: string | undefined;
        configure?: import("algoliasearch-helper").PlainSearchParameters | undefined;
        geoSearch?: {
            boundingBox: string;
        } | undefined;
        hierarchicalMenu?: {
            [rootAttribute: string]: string[];
        } | undefined;
        hitsPerPage?: number | undefined;
        page?: number | undefined;
        menu?: {
            [attribute: string]: string;
        } | undefined;
        numericMenu?: {
            [attribute: string]: string;
        } | undefined;
        ratingMenu?: {
            [attribute: string]: number | undefined;
        } | undefined;
        refinementList?: {
            [attribute: string]: string[];
        } | undefined;
        relevantSort?: number | undefined;
        sortBy?: string | undefined;
        toggle?: {
            [attribute: string]: boolean;
        } | undefined;
        places?: {
            query: string;
            position: string;
        } | undefined;
    }, widgetUiStateOptions: {
        searchParameters: import("algoliasearch-helper").SearchParameters;
        helper: import("algoliasearch-helper").AlgoliaSearchHelper;
    }) => Partial<Partial<{
        query: string;
    } & {
        configure: import("algoliasearch-helper").PlainSearchParameters;
    } & {
        geoSearch: {
            boundingBox: string;
        };
    } & {
        hierarchicalMenu: {
            [rootAttribute: string]: string[];
        };
    } & {
        hitsPerPage: number;
    } & {
        page: number;
    } & {
        menu: {
            [attribute: string]: string;
        };
    } & {
        numericMenu: {
            [attribute: string]: string;
        };
    } & {
        page: number;
    } & {
        range: {
            [attribute: string]: string;
        };
    } & {
        ratingMenu: {
            [attribute: string]: number | undefined;
        };
    } & {
        refinementList: {
            [attribute: string]: string[];
        };
    } & {
        relevantSort: number;
    } & {
        query: string;
    } & {
        sortBy: string;
    } & {
        toggle: {
            [attribute: string]: boolean;
        };
    } & {
        query: string;
    } & {
        places: {
            query: string;
            position: string;
        };
    }> & {
        range: {
            [attribute: string]: string;
        };
    }>;
    getWidgetState?: ((uiState: {
        range?: {
            [attribute: string]: string;
        } | undefined;
        query?: string | undefined;
        configure?: import("algoliasearch-helper").PlainSearchParameters | undefined;
        geoSearch?: {
            boundingBox: string;
        } | undefined;
        hierarchicalMenu?: {
            [rootAttribute: string]: string[];
        } | undefined;
        hitsPerPage?: number | undefined;
        page?: number | undefined;
        menu?: {
            [attribute: string]: string;
        } | undefined;
        numericMenu?: {
            [attribute: string]: string;
        } | undefined;
        ratingMenu?: {
            [attribute: string]: number | undefined;
        } | undefined;
        refinementList?: {
            [attribute: string]: string[];
        } | undefined;
        relevantSort?: number | undefined;
        sortBy?: string | undefined;
        toggle?: {
            [attribute: string]: boolean;
        } | undefined;
        places?: {
            query: string;
            position: string;
        } | undefined;
    }, widgetUiStateOptions: {
        searchParameters: import("algoliasearch-helper").SearchParameters;
        helper: import("algoliasearch-helper").AlgoliaSearchHelper;
    }) => Partial<Partial<{
        query: string;
    } & {
        configure: import("algoliasearch-helper").PlainSearchParameters;
    } & {
        geoSearch: {
            boundingBox: string;
        };
    } & {
        hierarchicalMenu: {
            [rootAttribute: string]: string[];
        };
    } & {
        hitsPerPage: number;
    } & {
        page: number;
    } & {
        menu: {
            [attribute: string]: string;
        };
    } & {
        numericMenu: {
            [attribute: string]: string;
        };
    } & {
        page: number;
    } & {
        range: {
            [attribute: string]: string;
        };
    } & {
        ratingMenu: {
            [attribute: string]: number | undefined;
        };
    } & {
        refinementList: {
            [attribute: string]: string[];
        };
    } & {
        relevantSort: number;
    } & {
        query: string;
    } & {
        sortBy: string;
    } & {
        toggle: {
            [attribute: string]: boolean;
        };
    } & {
        query: string;
    } & {
        places: {
            query: string;
            position: string;
        };
    }> & {
        range: {
            [attribute: string]: string;
        };
    }>) | undefined;
    getWidgetSearchParameters: (state: import("algoliasearch-helper").SearchParameters, widgetSearchParametersOptions: {
        uiState: {
            range?: {
                [attribute: string]: string;
            } | undefined;
            query?: string | undefined;
            configure?: import("algoliasearch-helper").PlainSearchParameters | undefined;
            geoSearch?: {
                boundingBox: string;
            } | undefined;
            hierarchicalMenu?: {
                [rootAttribute: string]: string[];
            } | undefined;
            hitsPerPage?: number | undefined;
            page?: number | undefined;
            menu?: {
                [attribute: string]: string;
            } | undefined;
            numericMenu?: {
                [attribute: string]: string;
            } | undefined;
            ratingMenu?: {
                [attribute: string]: number | undefined;
            } | undefined;
            refinementList?: {
                [attribute: string]: string[];
            } | undefined;
            relevantSort?: number | undefined;
            sortBy?: string | undefined;
            toggle?: {
                [attribute: string]: boolean;
            } | undefined;
            places?: {
                query: string;
                position: string;
            } | undefined;
        };
    }) => import("algoliasearch-helper").SearchParameters;
    getWidgetRenderState: (renderOptions: import("instantsearch.js/es/types").InitOptions | import("instantsearch.js/es/types").RenderOptions) => {
        refine: (rangeValue: RangeBoundaries) => void;
        canRefine: boolean;
        sendEvent: import("instantsearch.js/es/lib/utils").SendEventForFacet;
        range: import("instantsearch.js/es/connectors/range/connectRange").Range;
        start: RangeBoundaries;
        format: {
            from: (fromValue: number) => string;
            to: (toValue: number) => string;
        };
        widgetParams: import("instantsearch.js/es/connectors/range/connectRange").RangeConnectorParams & object;
    };
    getRenderState: (renderState: {
        answers?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/answers/connectAnswers").AnswersRenderState, import("instantsearch.js/es/connectors/answers/connectAnswers").AnswersConnectorParams> | undefined;
        autocomplete?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/autocomplete/connectAutocomplete").AutocompleteRenderState, import("instantsearch.js/es/connectors/autocomplete/connectAutocomplete").AutocompleteConnectorParams> | undefined;
        breadcrumb?: {
            [rootAttribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/breadcrumb/connectBreadcrumb").BreadcrumbRenderState, import("instantsearch.js/es/connectors/breadcrumb/connectBreadcrumb").BreadcrumbConnectorParams>;
        } | undefined;
        clearRefinements?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/clear-refinements/connectClearRefinements").ClearRefinementsRenderState, import("instantsearch.js/es/connectors/clear-refinements/connectClearRefinements").ClearRefinementsConnectorParams> | undefined;
        configure?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/configure/connectConfigure").ConfigureRenderState, import("instantsearch.js/es/connectors/configure/connectConfigure").ConfigureConnectorParams> | undefined;
        currentRefinements?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsRenderState, import("instantsearch.js/es/connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsConnectorParams> | undefined;
        geoSearch?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/geo-search/connectGeoSearch").GeoSearchRenderState<import("instantsearch.js/es/types").GeoHit>, import("instantsearch.js/es/connectors/geo-search/connectGeoSearch").GeoSearchConnectorParams<import("instantsearch.js/es/types").GeoHit>> | undefined;
        hierarchicalMenu?: {
            [rootAttribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuRenderState, import("instantsearch.js/es/connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuConnectorParams>;
        } | undefined;
        hits?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/hits/connectHits").HitsRenderState<import("instantsearch.js/es/types").BaseHit>, import("instantsearch.js/es/connectors/hits/connectHits").HitsConnectorParams<import("instantsearch.js/es/types").BaseHit>> | undefined;
        hitsPerPage?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/hits-per-page/connectHitsPerPage").HitsPerPageRenderState, import("instantsearch.js/es/connectors/hits-per-page/connectHitsPerPage").HitsPerPageConnectorParams> | undefined;
        infiniteHits?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/infinite-hits/connectInfiniteHits").InfiniteHitsRenderState<import("instantsearch.js/es/types").BaseHit>, import("instantsearch.js/es/connectors/infinite-hits/connectInfiniteHits").InfiniteHitsConnectorParams<import("instantsearch.js/es/types").BaseHit>> | undefined;
        menu?: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/menu/connectMenu").MenuRenderState, import("instantsearch.js/es/connectors/menu/connectMenu").MenuConnectorParams>;
        } | undefined;
        numericMenu?: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/numeric-menu/connectNumericMenu").NumericMenuRenderState, import("instantsearch.js/es/connectors/numeric-menu/connectNumericMenu").NumericMenuConnectorParams>;
        } | undefined;
        pagination?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/pagination/connectPagination").PaginationRenderState, import("instantsearch.js/es/connectors/pagination/connectPagination").PaginationConnectorParams> | undefined;
        poweredBy?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/powered-by/connectPoweredBy").PoweredByRenderState, import("instantsearch.js/es/connectors/powered-by/connectPoweredBy").PoweredByConnectorParams> | undefined;
        queryRules?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/query-rules/connectQueryRules").QueryRulesRenderState, import("instantsearch.js/es/connectors/query-rules/connectQueryRules").QueryRulesConnectorParams> | undefined;
        range?: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<RangeRenderState, import("instantsearch.js/es/connectors/range/connectRange").RangeConnectorParams>;
        } | undefined;
        ratingMenu?: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/rating-menu/connectRatingMenu").RatingMenuRenderState, import("instantsearch.js/es/connectors/rating-menu/connectRatingMenu").RatingMenuConnectorParams>;
        } | undefined;
        refinementList?: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/refinement-list/connectRefinementList").RefinementListRenderState, import("instantsearch.js/es/connectors/refinement-list/connectRefinementList").RefinementListConnectorParams>;
        } | undefined;
        relevantSort?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/relevant-sort/connectRelevantSort").RelevantSortRenderState, import("instantsearch.js/es/connectors/relevant-sort/connectRelevantSort").RelevantSortConnectorParams> | undefined;
        searchBox?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/search-box/connectSearchBox").SearchBoxRenderState, import("instantsearch.js/es/connectors/search-box/connectSearchBox").SearchBoxConnectorParams> | undefined;
        sortBy?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/sort-by/connectSortBy").SortByRenderState, import("instantsearch.js/es/connectors/sort-by/connectSortBy").SortByConnectorParams> | undefined;
        stats?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/stats/connectStats").StatsRenderState, import("instantsearch.js/es/connectors/stats/connectStats").StatsConnectorParams> | undefined;
        toggleRefinement?: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementRenderState, import("instantsearch.js/es/connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementConnectorParams>;
        } | undefined;
        voiceSearch?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/voice-search/connectVoiceSearch").VoiceSearchRenderState, import("instantsearch.js/es/connectors/voice-search/connectVoiceSearch").VoiceSearchConnectorParams> | undefined;
        analytics?: import("instantsearch.js/es/types").WidgetRenderState<Record<string, unknown>, import("instantsearch.js/es/widgets/analytics/analytics").AnalyticsWidgetParams> | undefined;
        places?: import("instantsearch.js/es/types").WidgetRenderState<Record<string, unknown>, any> | undefined;
    }, renderOptions: import("instantsearch.js/es/types").InitOptions | import("instantsearch.js/es/types").RenderOptions) => Partial<{
        answers: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/answers/connectAnswers").AnswersRenderState, import("instantsearch.js/es/connectors/answers/connectAnswers").AnswersConnectorParams>;
    } & {
        autocomplete: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/autocomplete/connectAutocomplete").AutocompleteRenderState, import("instantsearch.js/es/connectors/autocomplete/connectAutocomplete").AutocompleteConnectorParams>;
    } & {
        breadcrumb: {
            [rootAttribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/breadcrumb/connectBreadcrumb").BreadcrumbRenderState, import("instantsearch.js/es/connectors/breadcrumb/connectBreadcrumb").BreadcrumbConnectorParams>;
        };
    } & {
        clearRefinements: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/clear-refinements/connectClearRefinements").ClearRefinementsRenderState, import("instantsearch.js/es/connectors/clear-refinements/connectClearRefinements").ClearRefinementsConnectorParams>;
    } & {
        configure: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/configure/connectConfigure").ConfigureRenderState, import("instantsearch.js/es/connectors/configure/connectConfigure").ConfigureConnectorParams>;
    } & {
        currentRefinements: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsRenderState, import("instantsearch.js/es/connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsConnectorParams>;
    } & {
        geoSearch: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/geo-search/connectGeoSearch").GeoSearchRenderState<import("instantsearch.js/es/types").GeoHit>, import("instantsearch.js/es/connectors/geo-search/connectGeoSearch").GeoSearchConnectorParams<import("instantsearch.js/es/types").GeoHit>>;
    } & {
        hierarchicalMenu: {
            [rootAttribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuRenderState, import("instantsearch.js/es/connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuConnectorParams>;
        };
    } & {
        hits: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/hits/connectHits").HitsRenderState<import("instantsearch.js/es/types").BaseHit>, import("instantsearch.js/es/connectors/hits/connectHits").HitsConnectorParams<import("instantsearch.js/es/types").BaseHit>>;
    } & {
        hitsPerPage: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/hits-per-page/connectHitsPerPage").HitsPerPageRenderState, import("instantsearch.js/es/connectors/hits-per-page/connectHitsPerPage").HitsPerPageConnectorParams>;
    } & {
        infiniteHits: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/infinite-hits/connectInfiniteHits").InfiniteHitsRenderState<import("instantsearch.js/es/types").BaseHit>, import("instantsearch.js/es/connectors/infinite-hits/connectInfiniteHits").InfiniteHitsConnectorParams<import("instantsearch.js/es/types").BaseHit>>;
    } & {
        menu: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/menu/connectMenu").MenuRenderState, import("instantsearch.js/es/connectors/menu/connectMenu").MenuConnectorParams>;
        };
    } & {
        numericMenu: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/numeric-menu/connectNumericMenu").NumericMenuRenderState, import("instantsearch.js/es/connectors/numeric-menu/connectNumericMenu").NumericMenuConnectorParams>;
        };
    } & {
        pagination: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/pagination/connectPagination").PaginationRenderState, import("instantsearch.js/es/connectors/pagination/connectPagination").PaginationConnectorParams>;
    } & {
        poweredBy: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/powered-by/connectPoweredBy").PoweredByRenderState, import("instantsearch.js/es/connectors/powered-by/connectPoweredBy").PoweredByConnectorParams>;
    } & {
        queryRules: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/query-rules/connectQueryRules").QueryRulesRenderState, import("instantsearch.js/es/connectors/query-rules/connectQueryRules").QueryRulesConnectorParams>;
    } & {
        range: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<RangeRenderState, import("instantsearch.js/es/connectors/range/connectRange").RangeConnectorParams>;
        };
    } & {
        ratingMenu: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/rating-menu/connectRatingMenu").RatingMenuRenderState, import("instantsearch.js/es/connectors/rating-menu/connectRatingMenu").RatingMenuConnectorParams>;
        };
    } & {
        refinementList: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/refinement-list/connectRefinementList").RefinementListRenderState, import("instantsearch.js/es/connectors/refinement-list/connectRefinementList").RefinementListConnectorParams>;
        };
    } & {
        relevantSort: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/relevant-sort/connectRelevantSort").RelevantSortRenderState, import("instantsearch.js/es/connectors/relevant-sort/connectRelevantSort").RelevantSortConnectorParams>;
    } & {
        searchBox: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/search-box/connectSearchBox").SearchBoxRenderState, import("instantsearch.js/es/connectors/search-box/connectSearchBox").SearchBoxConnectorParams>;
    } & {
        sortBy: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/sort-by/connectSortBy").SortByRenderState, import("instantsearch.js/es/connectors/sort-by/connectSortBy").SortByConnectorParams>;
    } & {
        stats: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/stats/connectStats").StatsRenderState, import("instantsearch.js/es/connectors/stats/connectStats").StatsConnectorParams>;
    } & {
        toggleRefinement: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementRenderState, import("instantsearch.js/es/connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementConnectorParams>;
        };
    } & {
        voiceSearch: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/voice-search/connectVoiceSearch").VoiceSearchRenderState, import("instantsearch.js/es/connectors/voice-search/connectVoiceSearch").VoiceSearchConnectorParams>;
    } & {
        analytics: import("instantsearch.js/es/types").WidgetRenderState<Record<string, unknown>, import("instantsearch.js/es/widgets/analytics/analytics").AnalyticsWidgetParams>;
    } & {
        places: import("instantsearch.js/es/types").WidgetRenderState<Record<string, unknown>, import("instantsearch.js/es/widgets/places/places").PlacesWidgetParams>;
    }> & {
        range: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<RangeRenderState, import("instantsearch.js/es/connectors/range/connectRange").RangeConnectorParams>;
        };
    };
    dependsOn?: "search";
    getWidgetParameters?: ((state: import("algoliasearch-helper").SearchParameters, widgetParametersOptions: {
        uiState: {
            range?: {
                [attribute: string]: string;
            } | undefined;
            query?: string | undefined;
            configure?: import("algoliasearch-helper").PlainSearchParameters | undefined;
            geoSearch?: {
                boundingBox: string;
            } | undefined;
            hierarchicalMenu?: {
                [rootAttribute: string]: string[];
            } | undefined;
            hitsPerPage?: number | undefined;
            page?: number | undefined;
            menu?: {
                [attribute: string]: string;
            } | undefined;
            numericMenu?: {
                [attribute: string]: string;
            } | undefined;
            ratingMenu?: {
                [attribute: string]: number | undefined;
            } | undefined;
            refinementList?: {
                [attribute: string]: string[];
            } | undefined;
            relevantSort?: number | undefined;
            sortBy?: string | undefined;
            toggle?: {
                [attribute: string]: boolean;
            } | undefined;
            places?: {
                query: string;
                position: string;
            } | undefined;
        };
    }) => import("algoliasearch-helper").SearchParameters) | undefined;
} | {
    $$widgetType: string;
    $$type: "ais.range";
    init?: ((options: import("instantsearch.js/es/types").InitOptions) => void) | undefined;
    shouldRender?: ((options: import("instantsearch.js/es/types").ShouldRenderOptions) => boolean) | undefined;
    render?: ((options: import("instantsearch.js/es/types").RenderOptions) => void) | undefined;
    dispose?: ((options: import("instantsearch.js/es/types").DisposeOptions) => import("algoliasearch-helper").SearchParameters | import("algoliasearch-helper").RecommendParameters | void) | undefined;
    getWidgetUiState: (uiState: {
        range?: {
            [attribute: string]: string;
        } | undefined;
        query?: string | undefined;
        configure?: import("algoliasearch-helper").PlainSearchParameters | undefined;
        geoSearch?: {
            boundingBox: string;
        } | undefined;
        hierarchicalMenu?: {
            [rootAttribute: string]: string[];
        } | undefined;
        hitsPerPage?: number | undefined;
        page?: number | undefined;
        menu?: {
            [attribute: string]: string;
        } | undefined;
        numericMenu?: {
            [attribute: string]: string;
        } | undefined;
        ratingMenu?: {
            [attribute: string]: number | undefined;
        } | undefined;
        refinementList?: {
            [attribute: string]: string[];
        } | undefined;
        relevantSort?: number | undefined;
        sortBy?: string | undefined;
        toggle?: {
            [attribute: string]: boolean;
        } | undefined;
        places?: {
            query: string;
            position: string;
        } | undefined;
    }, widgetUiStateOptions: {
        searchParameters: import("algoliasearch-helper").SearchParameters;
        helper: import("algoliasearch-helper").AlgoliaSearchHelper;
    }) => Partial<Partial<{
        query: string;
    } & {
        configure: import("algoliasearch-helper").PlainSearchParameters;
    } & {
        geoSearch: {
            boundingBox: string;
        };
    } & {
        hierarchicalMenu: {
            [rootAttribute: string]: string[];
        };
    } & {
        hitsPerPage: number;
    } & {
        page: number;
    } & {
        menu: {
            [attribute: string]: string;
        };
    } & {
        numericMenu: {
            [attribute: string]: string;
        };
    } & {
        page: number;
    } & {
        range: {
            [attribute: string]: string;
        };
    } & {
        ratingMenu: {
            [attribute: string]: number | undefined;
        };
    } & {
        refinementList: {
            [attribute: string]: string[];
        };
    } & {
        relevantSort: number;
    } & {
        query: string;
    } & {
        sortBy: string;
    } & {
        toggle: {
            [attribute: string]: boolean;
        };
    } & {
        query: string;
    } & {
        places: {
            query: string;
            position: string;
        };
    }> & {
        range: {
            [attribute: string]: string;
        };
    }>;
    getWidgetState?: ((uiState: {
        range?: {
            [attribute: string]: string;
        } | undefined;
        query?: string | undefined;
        configure?: import("algoliasearch-helper").PlainSearchParameters | undefined;
        geoSearch?: {
            boundingBox: string;
        } | undefined;
        hierarchicalMenu?: {
            [rootAttribute: string]: string[];
        } | undefined;
        hitsPerPage?: number | undefined;
        page?: number | undefined;
        menu?: {
            [attribute: string]: string;
        } | undefined;
        numericMenu?: {
            [attribute: string]: string;
        } | undefined;
        ratingMenu?: {
            [attribute: string]: number | undefined;
        } | undefined;
        refinementList?: {
            [attribute: string]: string[];
        } | undefined;
        relevantSort?: number | undefined;
        sortBy?: string | undefined;
        toggle?: {
            [attribute: string]: boolean;
        } | undefined;
        places?: {
            query: string;
            position: string;
        } | undefined;
    }, widgetUiStateOptions: {
        searchParameters: import("algoliasearch-helper").SearchParameters;
        helper: import("algoliasearch-helper").AlgoliaSearchHelper;
    }) => Partial<Partial<{
        query: string;
    } & {
        configure: import("algoliasearch-helper").PlainSearchParameters;
    } & {
        geoSearch: {
            boundingBox: string;
        };
    } & {
        hierarchicalMenu: {
            [rootAttribute: string]: string[];
        };
    } & {
        hitsPerPage: number;
    } & {
        page: number;
    } & {
        menu: {
            [attribute: string]: string;
        };
    } & {
        numericMenu: {
            [attribute: string]: string;
        };
    } & {
        page: number;
    } & {
        range: {
            [attribute: string]: string;
        };
    } & {
        ratingMenu: {
            [attribute: string]: number | undefined;
        };
    } & {
        refinementList: {
            [attribute: string]: string[];
        };
    } & {
        relevantSort: number;
    } & {
        query: string;
    } & {
        sortBy: string;
    } & {
        toggle: {
            [attribute: string]: boolean;
        };
    } & {
        query: string;
    } & {
        places: {
            query: string;
            position: string;
        };
    }> & {
        range: {
            [attribute: string]: string;
        };
    }>) | undefined;
    getWidgetSearchParameters: (state: import("algoliasearch-helper").SearchParameters, widgetSearchParametersOptions: {
        uiState: {
            range?: {
                [attribute: string]: string;
            } | undefined;
            query?: string | undefined;
            configure?: import("algoliasearch-helper").PlainSearchParameters | undefined;
            geoSearch?: {
                boundingBox: string;
            } | undefined;
            hierarchicalMenu?: {
                [rootAttribute: string]: string[];
            } | undefined;
            hitsPerPage?: number | undefined;
            page?: number | undefined;
            menu?: {
                [attribute: string]: string;
            } | undefined;
            numericMenu?: {
                [attribute: string]: string;
            } | undefined;
            ratingMenu?: {
                [attribute: string]: number | undefined;
            } | undefined;
            refinementList?: {
                [attribute: string]: string[];
            } | undefined;
            relevantSort?: number | undefined;
            sortBy?: string | undefined;
            toggle?: {
                [attribute: string]: boolean;
            } | undefined;
            places?: {
                query: string;
                position: string;
            } | undefined;
        };
    }) => import("algoliasearch-helper").SearchParameters;
    getWidgetRenderState: ((renderOptions: import("instantsearch.js/es/types").InitOptions | import("instantsearch.js/es/types").RenderOptions) => {
        refine: (rangeValue: RangeBoundaries) => void;
        canRefine: boolean;
        sendEvent: import("instantsearch.js/es/lib/utils").SendEventForFacet;
        range: import("instantsearch.js/es/connectors/range/connectRange").Range;
        start: RangeBoundaries;
        format: {
            from: (fromValue: number) => string;
            to: (toValue: number) => string;
        };
        widgetParams: import("instantsearch.js/es/connectors/range/connectRange").RangeConnectorParams & object;
    }) & ((renderOptions: import("instantsearch.js/es/types").InitOptions | ({
        instantSearchInstance: import("instantsearch.js/es/types").InstantSearch;
        parent: import("instantsearch.js/es/widgets").IndexWidget;
        templatesConfig: Record<string, unknown>;
        scopedResults: import("instantsearch.js/es/types").ScopedResult[];
        state: import("algoliasearch-helper").SearchParameters;
        renderState: Partial<{
            answers: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/answers/connectAnswers").AnswersRenderState, import("instantsearch.js/es/connectors/answers/connectAnswers").AnswersConnectorParams>;
        } & {
            autocomplete: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/autocomplete/connectAutocomplete").AutocompleteRenderState, import("instantsearch.js/es/connectors/autocomplete/connectAutocomplete").AutocompleteConnectorParams>;
        } & {
            breadcrumb: {
                [rootAttribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/breadcrumb/connectBreadcrumb").BreadcrumbRenderState, import("instantsearch.js/es/connectors/breadcrumb/connectBreadcrumb").BreadcrumbConnectorParams>;
            };
        } & {
            clearRefinements: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/clear-refinements/connectClearRefinements").ClearRefinementsRenderState, import("instantsearch.js/es/connectors/clear-refinements/connectClearRefinements").ClearRefinementsConnectorParams>;
        } & {
            configure: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/configure/connectConfigure").ConfigureRenderState, import("instantsearch.js/es/connectors/configure/connectConfigure").ConfigureConnectorParams>;
        } & {
            currentRefinements: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsRenderState, import("instantsearch.js/es/connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsConnectorParams>;
        } & {
            geoSearch: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/geo-search/connectGeoSearch").GeoSearchRenderState<import("instantsearch.js/es/types").GeoHit>, import("instantsearch.js/es/connectors/geo-search/connectGeoSearch").GeoSearchConnectorParams<import("instantsearch.js/es/types").GeoHit>>;
        } & {
            hierarchicalMenu: {
                [rootAttribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuRenderState, import("instantsearch.js/es/connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuConnectorParams>;
            };
        } & {
            hits: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/hits/connectHits").HitsRenderState<import("instantsearch.js/es/types").BaseHit>, import("instantsearch.js/es/connectors/hits/connectHits").HitsConnectorParams<import("instantsearch.js/es/types").BaseHit>>;
        } & {
            hitsPerPage: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/hits-per-page/connectHitsPerPage").HitsPerPageRenderState, import("instantsearch.js/es/connectors/hits-per-page/connectHitsPerPage").HitsPerPageConnectorParams>;
        } & {
            infiniteHits: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/infinite-hits/connectInfiniteHits").InfiniteHitsRenderState<import("instantsearch.js/es/types").BaseHit>, import("instantsearch.js/es/connectors/infinite-hits/connectInfiniteHits").InfiniteHitsConnectorParams<import("instantsearch.js/es/types").BaseHit>>;
        } & {
            menu: {
                [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/menu/connectMenu").MenuRenderState, import("instantsearch.js/es/connectors/menu/connectMenu").MenuConnectorParams>;
            };
        } & {
            numericMenu: {
                [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/numeric-menu/connectNumericMenu").NumericMenuRenderState, import("instantsearch.js/es/connectors/numeric-menu/connectNumericMenu").NumericMenuConnectorParams>;
            };
        } & {
            pagination: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/pagination/connectPagination").PaginationRenderState, import("instantsearch.js/es/connectors/pagination/connectPagination").PaginationConnectorParams>;
        } & {
            poweredBy: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/powered-by/connectPoweredBy").PoweredByRenderState, import("instantsearch.js/es/connectors/powered-by/connectPoweredBy").PoweredByConnectorParams>;
        } & {
            queryRules: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/query-rules/connectQueryRules").QueryRulesRenderState, import("instantsearch.js/es/connectors/query-rules/connectQueryRules").QueryRulesConnectorParams>;
        } & {
            range: {
                [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<RangeRenderState, import("instantsearch.js/es/connectors/range/connectRange").RangeConnectorParams>;
            };
        } & {
            ratingMenu: {
                [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/rating-menu/connectRatingMenu").RatingMenuRenderState, import("instantsearch.js/es/connectors/rating-menu/connectRatingMenu").RatingMenuConnectorParams>;
            };
        } & {
            refinementList: {
                [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/refinement-list/connectRefinementList").RefinementListRenderState, import("instantsearch.js/es/connectors/refinement-list/connectRefinementList").RefinementListConnectorParams>;
            };
        } & {
            relevantSort: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/relevant-sort/connectRelevantSort").RelevantSortRenderState, import("instantsearch.js/es/connectors/relevant-sort/connectRelevantSort").RelevantSortConnectorParams>;
        } & {
            searchBox: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/search-box/connectSearchBox").SearchBoxRenderState, import("instantsearch.js/es/connectors/search-box/connectSearchBox").SearchBoxConnectorParams>;
        } & {
            sortBy: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/sort-by/connectSortBy").SortByRenderState, import("instantsearch.js/es/connectors/sort-by/connectSortBy").SortByConnectorParams>;
        } & {
            stats: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/stats/connectStats").StatsRenderState, import("instantsearch.js/es/connectors/stats/connectStats").StatsConnectorParams>;
        } & {
            toggleRefinement: {
                [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementRenderState, import("instantsearch.js/es/connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementConnectorParams>;
            };
        } & {
            voiceSearch: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/voice-search/connectVoiceSearch").VoiceSearchRenderState, import("instantsearch.js/es/connectors/voice-search/connectVoiceSearch").VoiceSearchConnectorParams>;
        } & {
            analytics: import("instantsearch.js/es/types").WidgetRenderState<Record<string, unknown>, import("instantsearch.js/es/widgets/analytics/analytics").AnalyticsWidgetParams>;
        } & {
            places: import("instantsearch.js/es/types").WidgetRenderState<Record<string, unknown>, import("instantsearch.js/es/widgets/places/places").PlacesWidgetParams>;
        }>;
        helper: import("algoliasearch-helper").AlgoliaSearchHelper;
        searchMetadata: {
            isSearchStalled: boolean;
        };
        status: import("instantsearch.js/es/types").InstantSearch["status"];
        error: import("instantsearch.js/es/types").InstantSearch["error"];
        createURL: (nextState: import("algoliasearch-helper").SearchParameters | ((state: Partial<{
            query: string;
        } & {
            configure: import("algoliasearch-helper").PlainSearchParameters;
        } & {
            geoSearch: {
                boundingBox: string;
            };
        } & {
            hierarchicalMenu: {
                [rootAttribute: string]: string[];
            };
        } & {
            hitsPerPage: number;
        } & {
            page: number;
        } & {
            menu: {
                [attribute: string]: string;
            };
        } & {
            numericMenu: {
                [attribute: string]: string;
            };
        } & {
            page: number;
        } & {
            range: {
                [attribute: string]: string;
            };
        } & {
            ratingMenu: {
                [attribute: string]: number | undefined;
            };
        } & {
            refinementList: {
                [attribute: string]: string[];
            };
        } & {
            relevantSort: number;
        } & {
            query: string;
        } & {
            sortBy: string;
        } & {
            toggle: {
                [attribute: string]: boolean;
            };
        } & {
            query: string;
        } & {
            places: {
                query: string;
                position: string;
            };
        }>) => Partial<{
            query: string;
        } & {
            configure: import("algoliasearch-helper").PlainSearchParameters;
        } & {
            geoSearch: {
                boundingBox: string;
            };
        } & {
            hierarchicalMenu: {
                [rootAttribute: string]: string[];
            };
        } & {
            hitsPerPage: number;
        } & {
            page: number;
        } & {
            menu: {
                [attribute: string]: string;
            };
        } & {
            numericMenu: {
                [attribute: string]: string;
            };
        } & {
            page: number;
        } & {
            range: {
                [attribute: string]: string;
            };
        } & {
            ratingMenu: {
                [attribute: string]: number | undefined;
            };
        } & {
            refinementList: {
                [attribute: string]: string[];
            };
        } & {
            relevantSort: number;
        } & {
            query: string;
        } & {
            sortBy: string;
        } & {
            toggle: {
                [attribute: string]: boolean;
            };
        } & {
            query: string;
        } & {
            places: {
                query: string;
                position: string;
            };
        }>)) => string;
    } & {
        results: import("algoliasearch-helper/types/algoliasearch").RecommendResponse<any>;
    })) => {
        refine: (rangeValue: RangeBoundaries) => void;
        canRefine: boolean;
        sendEvent: import("instantsearch.js/es/lib/utils").SendEventForFacet;
        range: import("instantsearch.js/es/connectors/range/connectRange").Range;
        start: RangeBoundaries;
        format: {
            from: (fromValue: number) => string;
            to: (toValue: number) => string;
        };
        widgetParams: import("instantsearch.js/es/connectors/range/connectRange").RangeConnectorParams & object;
    });
    getRenderState: ((renderState: {
        answers?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/answers/connectAnswers").AnswersRenderState, import("instantsearch.js/es/connectors/answers/connectAnswers").AnswersConnectorParams> | undefined;
        autocomplete?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/autocomplete/connectAutocomplete").AutocompleteRenderState, import("instantsearch.js/es/connectors/autocomplete/connectAutocomplete").AutocompleteConnectorParams> | undefined;
        breadcrumb?: {
            [rootAttribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/breadcrumb/connectBreadcrumb").BreadcrumbRenderState, import("instantsearch.js/es/connectors/breadcrumb/connectBreadcrumb").BreadcrumbConnectorParams>;
        } | undefined;
        clearRefinements?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/clear-refinements/connectClearRefinements").ClearRefinementsRenderState, import("instantsearch.js/es/connectors/clear-refinements/connectClearRefinements").ClearRefinementsConnectorParams> | undefined;
        configure?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/configure/connectConfigure").ConfigureRenderState, import("instantsearch.js/es/connectors/configure/connectConfigure").ConfigureConnectorParams> | undefined;
        currentRefinements?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsRenderState, import("instantsearch.js/es/connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsConnectorParams> | undefined;
        geoSearch?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/geo-search/connectGeoSearch").GeoSearchRenderState<import("instantsearch.js/es/types").GeoHit>, import("instantsearch.js/es/connectors/geo-search/connectGeoSearch").GeoSearchConnectorParams<import("instantsearch.js/es/types").GeoHit>> | undefined;
        hierarchicalMenu?: {
            [rootAttribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuRenderState, import("instantsearch.js/es/connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuConnectorParams>;
        } | undefined;
        hits?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/hits/connectHits").HitsRenderState<import("instantsearch.js/es/types").BaseHit>, import("instantsearch.js/es/connectors/hits/connectHits").HitsConnectorParams<import("instantsearch.js/es/types").BaseHit>> | undefined;
        hitsPerPage?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/hits-per-page/connectHitsPerPage").HitsPerPageRenderState, import("instantsearch.js/es/connectors/hits-per-page/connectHitsPerPage").HitsPerPageConnectorParams> | undefined;
        infiniteHits?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/infinite-hits/connectInfiniteHits").InfiniteHitsRenderState<import("instantsearch.js/es/types").BaseHit>, import("instantsearch.js/es/connectors/infinite-hits/connectInfiniteHits").InfiniteHitsConnectorParams<import("instantsearch.js/es/types").BaseHit>> | undefined;
        menu?: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/menu/connectMenu").MenuRenderState, import("instantsearch.js/es/connectors/menu/connectMenu").MenuConnectorParams>;
        } | undefined;
        numericMenu?: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/numeric-menu/connectNumericMenu").NumericMenuRenderState, import("instantsearch.js/es/connectors/numeric-menu/connectNumericMenu").NumericMenuConnectorParams>;
        } | undefined;
        pagination?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/pagination/connectPagination").PaginationRenderState, import("instantsearch.js/es/connectors/pagination/connectPagination").PaginationConnectorParams> | undefined;
        poweredBy?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/powered-by/connectPoweredBy").PoweredByRenderState, import("instantsearch.js/es/connectors/powered-by/connectPoweredBy").PoweredByConnectorParams> | undefined;
        queryRules?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/query-rules/connectQueryRules").QueryRulesRenderState, import("instantsearch.js/es/connectors/query-rules/connectQueryRules").QueryRulesConnectorParams> | undefined;
        range?: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<RangeRenderState, import("instantsearch.js/es/connectors/range/connectRange").RangeConnectorParams>;
        } | undefined;
        ratingMenu?: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/rating-menu/connectRatingMenu").RatingMenuRenderState, import("instantsearch.js/es/connectors/rating-menu/connectRatingMenu").RatingMenuConnectorParams>;
        } | undefined;
        refinementList?: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/refinement-list/connectRefinementList").RefinementListRenderState, import("instantsearch.js/es/connectors/refinement-list/connectRefinementList").RefinementListConnectorParams>;
        } | undefined;
        relevantSort?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/relevant-sort/connectRelevantSort").RelevantSortRenderState, import("instantsearch.js/es/connectors/relevant-sort/connectRelevantSort").RelevantSortConnectorParams> | undefined;
        searchBox?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/search-box/connectSearchBox").SearchBoxRenderState, import("instantsearch.js/es/connectors/search-box/connectSearchBox").SearchBoxConnectorParams> | undefined;
        sortBy?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/sort-by/connectSortBy").SortByRenderState, import("instantsearch.js/es/connectors/sort-by/connectSortBy").SortByConnectorParams> | undefined;
        stats?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/stats/connectStats").StatsRenderState, import("instantsearch.js/es/connectors/stats/connectStats").StatsConnectorParams> | undefined;
        toggleRefinement?: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementRenderState, import("instantsearch.js/es/connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementConnectorParams>;
        } | undefined;
        voiceSearch?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/voice-search/connectVoiceSearch").VoiceSearchRenderState, import("instantsearch.js/es/connectors/voice-search/connectVoiceSearch").VoiceSearchConnectorParams> | undefined;
        analytics?: import("instantsearch.js/es/types").WidgetRenderState<Record<string, unknown>, import("instantsearch.js/es/widgets/analytics/analytics").AnalyticsWidgetParams> | undefined;
        places?: import("instantsearch.js/es/types").WidgetRenderState<Record<string, unknown>, any> | undefined;
    }, renderOptions: import("instantsearch.js/es/types").InitOptions | import("instantsearch.js/es/types").RenderOptions) => Partial<{
        answers: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/answers/connectAnswers").AnswersRenderState, import("instantsearch.js/es/connectors/answers/connectAnswers").AnswersConnectorParams>;
    } & {
        autocomplete: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/autocomplete/connectAutocomplete").AutocompleteRenderState, import("instantsearch.js/es/connectors/autocomplete/connectAutocomplete").AutocompleteConnectorParams>;
    } & {
        breadcrumb: {
            [rootAttribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/breadcrumb/connectBreadcrumb").BreadcrumbRenderState, import("instantsearch.js/es/connectors/breadcrumb/connectBreadcrumb").BreadcrumbConnectorParams>;
        };
    } & {
        clearRefinements: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/clear-refinements/connectClearRefinements").ClearRefinementsRenderState, import("instantsearch.js/es/connectors/clear-refinements/connectClearRefinements").ClearRefinementsConnectorParams>;
    } & {
        configure: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/configure/connectConfigure").ConfigureRenderState, import("instantsearch.js/es/connectors/configure/connectConfigure").ConfigureConnectorParams>;
    } & {
        currentRefinements: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsRenderState, import("instantsearch.js/es/connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsConnectorParams>;
    } & {
        geoSearch: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/geo-search/connectGeoSearch").GeoSearchRenderState<import("instantsearch.js/es/types").GeoHit>, import("instantsearch.js/es/connectors/geo-search/connectGeoSearch").GeoSearchConnectorParams<import("instantsearch.js/es/types").GeoHit>>;
    } & {
        hierarchicalMenu: {
            [rootAttribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuRenderState, import("instantsearch.js/es/connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuConnectorParams>;
        };
    } & {
        hits: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/hits/connectHits").HitsRenderState<import("instantsearch.js/es/types").BaseHit>, import("instantsearch.js/es/connectors/hits/connectHits").HitsConnectorParams<import("instantsearch.js/es/types").BaseHit>>;
    } & {
        hitsPerPage: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/hits-per-page/connectHitsPerPage").HitsPerPageRenderState, import("instantsearch.js/es/connectors/hits-per-page/connectHitsPerPage").HitsPerPageConnectorParams>;
    } & {
        infiniteHits: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/infinite-hits/connectInfiniteHits").InfiniteHitsRenderState<import("instantsearch.js/es/types").BaseHit>, import("instantsearch.js/es/connectors/infinite-hits/connectInfiniteHits").InfiniteHitsConnectorParams<import("instantsearch.js/es/types").BaseHit>>;
    } & {
        menu: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/menu/connectMenu").MenuRenderState, import("instantsearch.js/es/connectors/menu/connectMenu").MenuConnectorParams>;
        };
    } & {
        numericMenu: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/numeric-menu/connectNumericMenu").NumericMenuRenderState, import("instantsearch.js/es/connectors/numeric-menu/connectNumericMenu").NumericMenuConnectorParams>;
        };
    } & {
        pagination: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/pagination/connectPagination").PaginationRenderState, import("instantsearch.js/es/connectors/pagination/connectPagination").PaginationConnectorParams>;
    } & {
        poweredBy: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/powered-by/connectPoweredBy").PoweredByRenderState, import("instantsearch.js/es/connectors/powered-by/connectPoweredBy").PoweredByConnectorParams>;
    } & {
        queryRules: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/query-rules/connectQueryRules").QueryRulesRenderState, import("instantsearch.js/es/connectors/query-rules/connectQueryRules").QueryRulesConnectorParams>;
    } & {
        range: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<RangeRenderState, import("instantsearch.js/es/connectors/range/connectRange").RangeConnectorParams>;
        };
    } & {
        ratingMenu: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/rating-menu/connectRatingMenu").RatingMenuRenderState, import("instantsearch.js/es/connectors/rating-menu/connectRatingMenu").RatingMenuConnectorParams>;
        };
    } & {
        refinementList: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/refinement-list/connectRefinementList").RefinementListRenderState, import("instantsearch.js/es/connectors/refinement-list/connectRefinementList").RefinementListConnectorParams>;
        };
    } & {
        relevantSort: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/relevant-sort/connectRelevantSort").RelevantSortRenderState, import("instantsearch.js/es/connectors/relevant-sort/connectRelevantSort").RelevantSortConnectorParams>;
    } & {
        searchBox: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/search-box/connectSearchBox").SearchBoxRenderState, import("instantsearch.js/es/connectors/search-box/connectSearchBox").SearchBoxConnectorParams>;
    } & {
        sortBy: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/sort-by/connectSortBy").SortByRenderState, import("instantsearch.js/es/connectors/sort-by/connectSortBy").SortByConnectorParams>;
    } & {
        stats: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/stats/connectStats").StatsRenderState, import("instantsearch.js/es/connectors/stats/connectStats").StatsConnectorParams>;
    } & {
        toggleRefinement: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementRenderState, import("instantsearch.js/es/connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementConnectorParams>;
        };
    } & {
        voiceSearch: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/voice-search/connectVoiceSearch").VoiceSearchRenderState, import("instantsearch.js/es/connectors/voice-search/connectVoiceSearch").VoiceSearchConnectorParams>;
    } & {
        analytics: import("instantsearch.js/es/types").WidgetRenderState<Record<string, unknown>, import("instantsearch.js/es/widgets/analytics/analytics").AnalyticsWidgetParams>;
    } & {
        places: import("instantsearch.js/es/types").WidgetRenderState<Record<string, unknown>, import("instantsearch.js/es/widgets/places/places").PlacesWidgetParams>;
    }> & {
        range: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<RangeRenderState, import("instantsearch.js/es/connectors/range/connectRange").RangeConnectorParams>;
        };
    }) & ((renderState: {
        answers?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/answers/connectAnswers").AnswersRenderState, import("instantsearch.js/es/connectors/answers/connectAnswers").AnswersConnectorParams> | undefined;
        autocomplete?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/autocomplete/connectAutocomplete").AutocompleteRenderState, import("instantsearch.js/es/connectors/autocomplete/connectAutocomplete").AutocompleteConnectorParams> | undefined;
        breadcrumb?: {
            [rootAttribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/breadcrumb/connectBreadcrumb").BreadcrumbRenderState, import("instantsearch.js/es/connectors/breadcrumb/connectBreadcrumb").BreadcrumbConnectorParams>;
        } | undefined;
        clearRefinements?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/clear-refinements/connectClearRefinements").ClearRefinementsRenderState, import("instantsearch.js/es/connectors/clear-refinements/connectClearRefinements").ClearRefinementsConnectorParams> | undefined;
        configure?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/configure/connectConfigure").ConfigureRenderState, import("instantsearch.js/es/connectors/configure/connectConfigure").ConfigureConnectorParams> | undefined;
        currentRefinements?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsRenderState, import("instantsearch.js/es/connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsConnectorParams> | undefined;
        geoSearch?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/geo-search/connectGeoSearch").GeoSearchRenderState<import("instantsearch.js/es/types").GeoHit>, import("instantsearch.js/es/connectors/geo-search/connectGeoSearch").GeoSearchConnectorParams<import("instantsearch.js/es/types").GeoHit>> | undefined;
        hierarchicalMenu?: {
            [rootAttribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuRenderState, import("instantsearch.js/es/connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuConnectorParams>;
        } | undefined;
        hits?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/hits/connectHits").HitsRenderState<import("instantsearch.js/es/types").BaseHit>, import("instantsearch.js/es/connectors/hits/connectHits").HitsConnectorParams<import("instantsearch.js/es/types").BaseHit>> | undefined;
        hitsPerPage?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/hits-per-page/connectHitsPerPage").HitsPerPageRenderState, import("instantsearch.js/es/connectors/hits-per-page/connectHitsPerPage").HitsPerPageConnectorParams> | undefined;
        infiniteHits?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/infinite-hits/connectInfiniteHits").InfiniteHitsRenderState<import("instantsearch.js/es/types").BaseHit>, import("instantsearch.js/es/connectors/infinite-hits/connectInfiniteHits").InfiniteHitsConnectorParams<import("instantsearch.js/es/types").BaseHit>> | undefined;
        menu?: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/menu/connectMenu").MenuRenderState, import("instantsearch.js/es/connectors/menu/connectMenu").MenuConnectorParams>;
        } | undefined;
        numericMenu?: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/numeric-menu/connectNumericMenu").NumericMenuRenderState, import("instantsearch.js/es/connectors/numeric-menu/connectNumericMenu").NumericMenuConnectorParams>;
        } | undefined;
        pagination?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/pagination/connectPagination").PaginationRenderState, import("instantsearch.js/es/connectors/pagination/connectPagination").PaginationConnectorParams> | undefined;
        poweredBy?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/powered-by/connectPoweredBy").PoweredByRenderState, import("instantsearch.js/es/connectors/powered-by/connectPoweredBy").PoweredByConnectorParams> | undefined;
        queryRules?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/query-rules/connectQueryRules").QueryRulesRenderState, import("instantsearch.js/es/connectors/query-rules/connectQueryRules").QueryRulesConnectorParams> | undefined;
        range?: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<RangeRenderState, import("instantsearch.js/es/connectors/range/connectRange").RangeConnectorParams>;
        } | undefined;
        ratingMenu?: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/rating-menu/connectRatingMenu").RatingMenuRenderState, import("instantsearch.js/es/connectors/rating-menu/connectRatingMenu").RatingMenuConnectorParams>;
        } | undefined;
        refinementList?: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/refinement-list/connectRefinementList").RefinementListRenderState, import("instantsearch.js/es/connectors/refinement-list/connectRefinementList").RefinementListConnectorParams>;
        } | undefined;
        relevantSort?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/relevant-sort/connectRelevantSort").RelevantSortRenderState, import("instantsearch.js/es/connectors/relevant-sort/connectRelevantSort").RelevantSortConnectorParams> | undefined;
        searchBox?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/search-box/connectSearchBox").SearchBoxRenderState, import("instantsearch.js/es/connectors/search-box/connectSearchBox").SearchBoxConnectorParams> | undefined;
        sortBy?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/sort-by/connectSortBy").SortByRenderState, import("instantsearch.js/es/connectors/sort-by/connectSortBy").SortByConnectorParams> | undefined;
        stats?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/stats/connectStats").StatsRenderState, import("instantsearch.js/es/connectors/stats/connectStats").StatsConnectorParams> | undefined;
        toggleRefinement?: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementRenderState, import("instantsearch.js/es/connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementConnectorParams>;
        } | undefined;
        voiceSearch?: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/voice-search/connectVoiceSearch").VoiceSearchRenderState, import("instantsearch.js/es/connectors/voice-search/connectVoiceSearch").VoiceSearchConnectorParams> | undefined;
        analytics?: import("instantsearch.js/es/types").WidgetRenderState<Record<string, unknown>, import("instantsearch.js/es/widgets/analytics/analytics").AnalyticsWidgetParams> | undefined;
        places?: import("instantsearch.js/es/types").WidgetRenderState<Record<string, unknown>, any> | undefined;
    }, renderOptions: import("instantsearch.js/es/types").InitOptions | ({
        instantSearchInstance: import("instantsearch.js/es/types").InstantSearch;
        parent: import("instantsearch.js/es/widgets").IndexWidget;
        templatesConfig: Record<string, unknown>;
        scopedResults: import("instantsearch.js/es/types").ScopedResult[];
        state: import("algoliasearch-helper").SearchParameters;
        renderState: Partial<{
            answers: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/answers/connectAnswers").AnswersRenderState, import("instantsearch.js/es/connectors/answers/connectAnswers").AnswersConnectorParams>;
        } & {
            autocomplete: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/autocomplete/connectAutocomplete").AutocompleteRenderState, import("instantsearch.js/es/connectors/autocomplete/connectAutocomplete").AutocompleteConnectorParams>;
        } & {
            breadcrumb: {
                [rootAttribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/breadcrumb/connectBreadcrumb").BreadcrumbRenderState, import("instantsearch.js/es/connectors/breadcrumb/connectBreadcrumb").BreadcrumbConnectorParams>;
            };
        } & {
            clearRefinements: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/clear-refinements/connectClearRefinements").ClearRefinementsRenderState, import("instantsearch.js/es/connectors/clear-refinements/connectClearRefinements").ClearRefinementsConnectorParams>;
        } & {
            configure: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/configure/connectConfigure").ConfigureRenderState, import("instantsearch.js/es/connectors/configure/connectConfigure").ConfigureConnectorParams>;
        } & {
            currentRefinements: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsRenderState, import("instantsearch.js/es/connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsConnectorParams>;
        } & {
            geoSearch: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/geo-search/connectGeoSearch").GeoSearchRenderState<import("instantsearch.js/es/types").GeoHit>, import("instantsearch.js/es/connectors/geo-search/connectGeoSearch").GeoSearchConnectorParams<import("instantsearch.js/es/types").GeoHit>>;
        } & {
            hierarchicalMenu: {
                [rootAttribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuRenderState, import("instantsearch.js/es/connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuConnectorParams>;
            };
        } & {
            hits: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/hits/connectHits").HitsRenderState<import("instantsearch.js/es/types").BaseHit>, import("instantsearch.js/es/connectors/hits/connectHits").HitsConnectorParams<import("instantsearch.js/es/types").BaseHit>>;
        } & {
            hitsPerPage: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/hits-per-page/connectHitsPerPage").HitsPerPageRenderState, import("instantsearch.js/es/connectors/hits-per-page/connectHitsPerPage").HitsPerPageConnectorParams>;
        } & {
            infiniteHits: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/infinite-hits/connectInfiniteHits").InfiniteHitsRenderState<import("instantsearch.js/es/types").BaseHit>, import("instantsearch.js/es/connectors/infinite-hits/connectInfiniteHits").InfiniteHitsConnectorParams<import("instantsearch.js/es/types").BaseHit>>;
        } & {
            menu: {
                [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/menu/connectMenu").MenuRenderState, import("instantsearch.js/es/connectors/menu/connectMenu").MenuConnectorParams>;
            };
        } & {
            numericMenu: {
                [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/numeric-menu/connectNumericMenu").NumericMenuRenderState, import("instantsearch.js/es/connectors/numeric-menu/connectNumericMenu").NumericMenuConnectorParams>;
            };
        } & {
            pagination: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/pagination/connectPagination").PaginationRenderState, import("instantsearch.js/es/connectors/pagination/connectPagination").PaginationConnectorParams>;
        } & {
            poweredBy: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/powered-by/connectPoweredBy").PoweredByRenderState, import("instantsearch.js/es/connectors/powered-by/connectPoweredBy").PoweredByConnectorParams>;
        } & {
            queryRules: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/query-rules/connectQueryRules").QueryRulesRenderState, import("instantsearch.js/es/connectors/query-rules/connectQueryRules").QueryRulesConnectorParams>;
        } & {
            range: {
                [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<RangeRenderState, import("instantsearch.js/es/connectors/range/connectRange").RangeConnectorParams>;
            };
        } & {
            ratingMenu: {
                [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/rating-menu/connectRatingMenu").RatingMenuRenderState, import("instantsearch.js/es/connectors/rating-menu/connectRatingMenu").RatingMenuConnectorParams>;
            };
        } & {
            refinementList: {
                [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/refinement-list/connectRefinementList").RefinementListRenderState, import("instantsearch.js/es/connectors/refinement-list/connectRefinementList").RefinementListConnectorParams>;
            };
        } & {
            relevantSort: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/relevant-sort/connectRelevantSort").RelevantSortRenderState, import("instantsearch.js/es/connectors/relevant-sort/connectRelevantSort").RelevantSortConnectorParams>;
        } & {
            searchBox: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/search-box/connectSearchBox").SearchBoxRenderState, import("instantsearch.js/es/connectors/search-box/connectSearchBox").SearchBoxConnectorParams>;
        } & {
            sortBy: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/sort-by/connectSortBy").SortByRenderState, import("instantsearch.js/es/connectors/sort-by/connectSortBy").SortByConnectorParams>;
        } & {
            stats: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/stats/connectStats").StatsRenderState, import("instantsearch.js/es/connectors/stats/connectStats").StatsConnectorParams>;
        } & {
            toggleRefinement: {
                [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementRenderState, import("instantsearch.js/es/connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementConnectorParams>;
            };
        } & {
            voiceSearch: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/voice-search/connectVoiceSearch").VoiceSearchRenderState, import("instantsearch.js/es/connectors/voice-search/connectVoiceSearch").VoiceSearchConnectorParams>;
        } & {
            analytics: import("instantsearch.js/es/types").WidgetRenderState<Record<string, unknown>, import("instantsearch.js/es/widgets/analytics/analytics").AnalyticsWidgetParams>;
        } & {
            places: import("instantsearch.js/es/types").WidgetRenderState<Record<string, unknown>, import("instantsearch.js/es/widgets/places/places").PlacesWidgetParams>;
        }>;
        helper: import("algoliasearch-helper").AlgoliaSearchHelper;
        searchMetadata: {
            isSearchStalled: boolean;
        };
        status: import("instantsearch.js/es/types").InstantSearch["status"];
        error: import("instantsearch.js/es/types").InstantSearch["error"];
        createURL: (nextState: import("algoliasearch-helper").SearchParameters | ((state: Partial<{
            query: string;
        } & {
            configure: import("algoliasearch-helper").PlainSearchParameters;
        } & {
            geoSearch: {
                boundingBox: string;
            };
        } & {
            hierarchicalMenu: {
                [rootAttribute: string]: string[];
            };
        } & {
            hitsPerPage: number;
        } & {
            page: number;
        } & {
            menu: {
                [attribute: string]: string;
            };
        } & {
            numericMenu: {
                [attribute: string]: string;
            };
        } & {
            page: number;
        } & {
            range: {
                [attribute: string]: string;
            };
        } & {
            ratingMenu: {
                [attribute: string]: number | undefined;
            };
        } & {
            refinementList: {
                [attribute: string]: string[];
            };
        } & {
            relevantSort: number;
        } & {
            query: string;
        } & {
            sortBy: string;
        } & {
            toggle: {
                [attribute: string]: boolean;
            };
        } & {
            query: string;
        } & {
            places: {
                query: string;
                position: string;
            };
        }>) => Partial<{
            query: string;
        } & {
            configure: import("algoliasearch-helper").PlainSearchParameters;
        } & {
            geoSearch: {
                boundingBox: string;
            };
        } & {
            hierarchicalMenu: {
                [rootAttribute: string]: string[];
            };
        } & {
            hitsPerPage: number;
        } & {
            page: number;
        } & {
            menu: {
                [attribute: string]: string;
            };
        } & {
            numericMenu: {
                [attribute: string]: string;
            };
        } & {
            page: number;
        } & {
            range: {
                [attribute: string]: string;
            };
        } & {
            ratingMenu: {
                [attribute: string]: number | undefined;
            };
        } & {
            refinementList: {
                [attribute: string]: string[];
            };
        } & {
            relevantSort: number;
        } & {
            query: string;
        } & {
            sortBy: string;
        } & {
            toggle: {
                [attribute: string]: boolean;
            };
        } & {
            query: string;
        } & {
            places: {
                query: string;
                position: string;
            };
        }>)) => string;
    } & {
        results: import("algoliasearch-helper/types/algoliasearch").RecommendResponse<any>;
    })) => Partial<{
        answers: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/answers/connectAnswers").AnswersRenderState, import("instantsearch.js/es/connectors/answers/connectAnswers").AnswersConnectorParams>;
    } & {
        autocomplete: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/autocomplete/connectAutocomplete").AutocompleteRenderState, import("instantsearch.js/es/connectors/autocomplete/connectAutocomplete").AutocompleteConnectorParams>;
    } & {
        breadcrumb: {
            [rootAttribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/breadcrumb/connectBreadcrumb").BreadcrumbRenderState, import("instantsearch.js/es/connectors/breadcrumb/connectBreadcrumb").BreadcrumbConnectorParams>;
        };
    } & {
        clearRefinements: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/clear-refinements/connectClearRefinements").ClearRefinementsRenderState, import("instantsearch.js/es/connectors/clear-refinements/connectClearRefinements").ClearRefinementsConnectorParams>;
    } & {
        configure: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/configure/connectConfigure").ConfigureRenderState, import("instantsearch.js/es/connectors/configure/connectConfigure").ConfigureConnectorParams>;
    } & {
        currentRefinements: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsRenderState, import("instantsearch.js/es/connectors/current-refinements/connectCurrentRefinements").CurrentRefinementsConnectorParams>;
    } & {
        geoSearch: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/geo-search/connectGeoSearch").GeoSearchRenderState<import("instantsearch.js/es/types").GeoHit>, import("instantsearch.js/es/connectors/geo-search/connectGeoSearch").GeoSearchConnectorParams<import("instantsearch.js/es/types").GeoHit>>;
    } & {
        hierarchicalMenu: {
            [rootAttribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuRenderState, import("instantsearch.js/es/connectors/hierarchical-menu/connectHierarchicalMenu").HierarchicalMenuConnectorParams>;
        };
    } & {
        hits: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/hits/connectHits").HitsRenderState<import("instantsearch.js/es/types").BaseHit>, import("instantsearch.js/es/connectors/hits/connectHits").HitsConnectorParams<import("instantsearch.js/es/types").BaseHit>>;
    } & {
        hitsPerPage: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/hits-per-page/connectHitsPerPage").HitsPerPageRenderState, import("instantsearch.js/es/connectors/hits-per-page/connectHitsPerPage").HitsPerPageConnectorParams>;
    } & {
        infiniteHits: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/infinite-hits/connectInfiniteHits").InfiniteHitsRenderState<import("instantsearch.js/es/types").BaseHit>, import("instantsearch.js/es/connectors/infinite-hits/connectInfiniteHits").InfiniteHitsConnectorParams<import("instantsearch.js/es/types").BaseHit>>;
    } & {
        menu: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/menu/connectMenu").MenuRenderState, import("instantsearch.js/es/connectors/menu/connectMenu").MenuConnectorParams>;
        };
    } & {
        numericMenu: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/numeric-menu/connectNumericMenu").NumericMenuRenderState, import("instantsearch.js/es/connectors/numeric-menu/connectNumericMenu").NumericMenuConnectorParams>;
        };
    } & {
        pagination: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/pagination/connectPagination").PaginationRenderState, import("instantsearch.js/es/connectors/pagination/connectPagination").PaginationConnectorParams>;
    } & {
        poweredBy: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/powered-by/connectPoweredBy").PoweredByRenderState, import("instantsearch.js/es/connectors/powered-by/connectPoweredBy").PoweredByConnectorParams>;
    } & {
        queryRules: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/query-rules/connectQueryRules").QueryRulesRenderState, import("instantsearch.js/es/connectors/query-rules/connectQueryRules").QueryRulesConnectorParams>;
    } & {
        range: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<RangeRenderState, import("instantsearch.js/es/connectors/range/connectRange").RangeConnectorParams>;
        };
    } & {
        ratingMenu: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/rating-menu/connectRatingMenu").RatingMenuRenderState, import("instantsearch.js/es/connectors/rating-menu/connectRatingMenu").RatingMenuConnectorParams>;
        };
    } & {
        refinementList: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/refinement-list/connectRefinementList").RefinementListRenderState, import("instantsearch.js/es/connectors/refinement-list/connectRefinementList").RefinementListConnectorParams>;
        };
    } & {
        relevantSort: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/relevant-sort/connectRelevantSort").RelevantSortRenderState, import("instantsearch.js/es/connectors/relevant-sort/connectRelevantSort").RelevantSortConnectorParams>;
    } & {
        searchBox: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/search-box/connectSearchBox").SearchBoxRenderState, import("instantsearch.js/es/connectors/search-box/connectSearchBox").SearchBoxConnectorParams>;
    } & {
        sortBy: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/sort-by/connectSortBy").SortByRenderState, import("instantsearch.js/es/connectors/sort-by/connectSortBy").SortByConnectorParams>;
    } & {
        stats: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/stats/connectStats").StatsRenderState, import("instantsearch.js/es/connectors/stats/connectStats").StatsConnectorParams>;
    } & {
        toggleRefinement: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementRenderState, import("instantsearch.js/es/connectors/toggle-refinement/connectToggleRefinement").ToggleRefinementConnectorParams>;
        };
    } & {
        voiceSearch: import("instantsearch.js/es/types").WidgetRenderState<import("instantsearch.js/es/connectors/voice-search/connectVoiceSearch").VoiceSearchRenderState, import("instantsearch.js/es/connectors/voice-search/connectVoiceSearch").VoiceSearchConnectorParams>;
    } & {
        analytics: import("instantsearch.js/es/types").WidgetRenderState<Record<string, unknown>, import("instantsearch.js/es/widgets/analytics/analytics").AnalyticsWidgetParams>;
    } & {
        places: import("instantsearch.js/es/types").WidgetRenderState<Record<string, unknown>, import("instantsearch.js/es/widgets/places/places").PlacesWidgetParams>;
    }> & {
        range: {
            [attribute: string]: import("instantsearch.js/es/types").WidgetRenderState<RangeRenderState, import("instantsearch.js/es/connectors/range/connectRange").RangeConnectorParams>;
        };
    });
    dependsOn: "recommend";
    $$id?: number;
    getWidgetParameters: (state: import("algoliasearch-helper").RecommendParameters, widgetParametersOptions: {
        uiState: {
            range?: {
                [attribute: string]: string;
            } | undefined;
            query?: string | undefined;
            configure?: import("algoliasearch-helper").PlainSearchParameters | undefined;
            geoSearch?: {
                boundingBox: string;
            } | undefined;
            hierarchicalMenu?: {
                [rootAttribute: string]: string[];
            } | undefined;
            hitsPerPage?: number | undefined;
            page?: number | undefined;
            menu?: {
                [attribute: string]: string;
            } | undefined;
            numericMenu?: {
                [attribute: string]: string;
            } | undefined;
            ratingMenu?: {
                [attribute: string]: number | undefined;
            } | undefined;
            refinementList?: {
                [attribute: string]: string[];
            } | undefined;
            relevantSort?: number | undefined;
            sortBy?: string | undefined;
            toggle?: {
                [attribute: string]: boolean;
            } | undefined;
            places?: {
                query: string;
                position: string;
            } | undefined;
        };
    }) => import("algoliasearch-helper").RecommendParameters;
};
