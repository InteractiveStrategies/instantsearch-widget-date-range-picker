/**
 * @jest-environment jsdom
 */

import algoliasearchHelper, { AlgoliaSearchHelper } from 'algoliasearch-helper';
import { dateRangePicker, formatEpochSecondsAsDate } from '../widget';

const ATTRIBUTE = 'date';

function createHelper(): AlgoliaSearchHelper {
  const searchClient = {
    search: jest.fn().mockResolvedValue({ results: [{}] }),
  };

  return algoliasearchHelper(searchClient as any, 'test_index', {});
}

function createWidget(container: HTMLElement) {
  return dateRangePicker({ container, attribute: ATTRIBUTE }) as any;
}

function getPickers(container: HTMLElement) {
  const pickers = container.querySelectorAll('duet-date-picker');
  return [pickers[0] as any, pickers[1] as any];
}

function fireDuetChange(picker: any, isoDate: string) {
  picker.value = isoDate;
  picker.dispatchEvent(new CustomEvent('duetChange', { detail: { value: isoDate } }));
}

function toEpochSeconds(isoDate: string): number {
  return new Date(isoDate).getTime() / 1000;
}

describe('dateRangePicker', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('combines a begin and end date selection into a single [min, max] range refinement', () => {
    const helper = createHelper();
    const widget = createWidget(container);

    widget.init({ helper, results: undefined, instantSearchInstance: {} });

    const [beginPicker, endPicker] = getPickers(container);
    fireDuetChange(beginPicker, '2018-01-01');
    fireDuetChange(endPicker, '2018-12-31');

    expect(helper.getNumericRefinement(ATTRIBUTE, '>=')).toEqual([toEpochSeconds('2018-01-01')]);
    expect(helper.getNumericRefinement(ATTRIBUTE, '<=')).toEqual([toEpochSeconds('2018-12-31')]);
  });

  it('re-syncs both pickers from the actual refinement on every render, self-healing an external DOM wipe', () => {
    const helper = createHelper();
    const widget = createWidget(container);

    widget.init({ helper, results: undefined, instantSearchInstance: {} });

    const [beginPicker, endPicker] = getPickers(container);
    fireDuetChange(beginPicker, '2018-01-01');
    fireDuetChange(endPicker, '2018-12-31');

    // Simulate something external (e.g. is_meilisearch.js's clearRefinements
    // hack) blanking the picker DOM values without touching helper state.
    beginPicker.value = '';
    endPicker.value = '';

    widget.render({ results: { disjunctiveFacets: [] }, helper, instantSearchInstance: {} });

    expect(beginPicker.value).toBe('2018-01-01');
    expect(endPicker.value).toBe('2018-12-31');
  });

  it('blanks both pickers when the refinement is cleared externally', () => {
    const helper = createHelper();
    const widget = createWidget(container);

    widget.init({ helper, results: undefined, instantSearchInstance: {} });

    const [beginPicker, endPicker] = getPickers(container);
    fireDuetChange(beginPicker, '2018-01-01');
    fireDuetChange(endPicker, '2018-12-31');

    helper.setState(helper.state.removeNumericRefinement(ATTRIBUTE));

    widget.render({ results: { disjunctiveFacets: [] }, helper, instantSearchInstance: {} });

    expect(beginPicker.value).toBe('');
    expect(endPicker.value).toBe('');
  });

  it('picking an end date before an already-picked begin date clears the begin date instead of producing an inverted range', () => {
    const helper = createHelper();
    const widget = createWidget(container);

    widget.init({ helper, results: undefined, instantSearchInstance: {} });

    const [beginPicker, endPicker] = getPickers(container);
    fireDuetChange(beginPicker, '2018-06-15');
    fireDuetChange(endPicker, '2018-01-01');

    expect(helper.getNumericRefinement(ATTRIBUTE, '>=')).toEqual([]);
    expect(helper.getNumericRefinement(ATTRIBUTE, '<=')).toEqual([toEpochSeconds('2018-01-01')]);
    expect(beginPicker.value).toBe('');
  });

  describe('formatEpochSecondsAsDate', () => {
    it('formats the UTC calendar date regardless of the refinement value stored, matching what the picker round-trips', () => {
      expect(formatEpochSecondsAsDate(toEpochSeconds('2018-01-01'))).toBe('01/01/2018');
      expect(formatEpochSecondsAsDate(toEpochSeconds('2018-12-31'))).toBe('12/31/2018');
    });
  });
});
