export type Ticket = { source: string , destination: string }

export type TRANSFORMED_DATA_SET = {
    destination: Record<string, Ticket | boolean>,
    source: Record<string, Ticket | boolean>,
    origin: string
}

export interface EXPECTED_RESULT_TYPE  {
    [key: string]: string | number;
}
export type ERROR_TYPE = {
    EMPTY_LIST: string,
    INVALID_INPUT: string,
    GENERIC_ERROR: string,
    INVALID_TICKET_SOURCE: string,
    INVALID_TICKET_DESTINATION: string,
}