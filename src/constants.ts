import {EXPECTED_RESULT_TYPE, Ticket, ERROR_TYPE} from "./type";


// Sample Inputs
export const TICKETS_V1: Ticket[] = [
    {source: 'Paris', destination: 'London'},
    {source: 'London', destination: 'Amsterdam'},
    {source: 'Amsterdam', destination: 'Berlin'},
];

export const TICKETS_V2: Ticket[] = [
    {source: 'New York', destination: 'Los Angeles'},
    {source: 'Los Angeles', destination: 'San Francisco'},
    {source: 'San Francisco', destination: 'Seattle'},
];
export const TICKETS_V3: Ticket[] = [
    {source: 'Tokyo', destination: 'Kyoto'},
    {source: 'Kyoto', destination: 'Osaka'},
    {source: 'Osaka', destination: 'Hiroshima'},
    {source: 'Hiroshima', destination: 'Nara'},
];

export const EXPECTED_RESULT: EXPECTED_RESULT_TYPE = {
    V1: 'Paris,London,Amsterdam,Berlin',
    V2: 'New York,Los Angeles,San Francisco,Seattle',
    V3: 'Tokyo,Kyoto,Osaka,Hiroshima,Nara',
}


// Error Messages
export const ERROR: ERROR_TYPE = {
    EMPTY_LIST: "Tickets array should not be empty and should be",
    INVALID_INPUT: "Invalid Input",
    GENERIC_ERROR: "Something went wrong!",
    INVALID_TICKET_SOURCE: "Invalid ticket source",
    INVALID_TICKET_DESTINATION: "Invalid ticket destination"
}
