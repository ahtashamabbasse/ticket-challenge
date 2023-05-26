import {originallyPlannedTrip} from "./index";
import {ERROR, EXPECTED_RESULT, TICKETS_V1, TICKETS_V2, TICKETS_V3} from "./constants";


describe('Trip Route Test Cases', () => {
    it('Return error message if array is empty', () => {
        expect(originallyPlannedTrip([])).toBe(ERROR.EMPTY_LIST);
    });
    it('Return error message for Invalid source', () => {
        expect(originallyPlannedTrip([{source: '', destination: 'Canada'}])).toBe(ERROR.INVALID_TICKET_SOURCE);
    });
    it('Return error message for invalid destination', () => {
        expect(originallyPlannedTrip([{source: 'USA', destination: ''}])).toBe(ERROR.INVALID_TICKET_DESTINATION);
    });
    it('Test with Sample Payload v1', () => {
        expect(originallyPlannedTrip(TICKETS_V1)).toBe(EXPECTED_RESULT.V1);
    });
    it('Test with Sample Payload v2', () => {
        expect(originallyPlannedTrip(TICKETS_V2)).toBe(EXPECTED_RESULT.V2);
    });
    it('Test with Sample Payload v3', () => {
        expect(originallyPlannedTrip(TICKETS_V3)).toBe(EXPECTED_RESULT.V3);
    });
});
