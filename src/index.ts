import {Ticket, TRANSFORMED_DATA_SET} from "./type";
import {ERROR, TICKETS_V1} from './constants';

export const originallyPlannedTrip = (tickets: Ticket[]): string => {
    try {
        // Input validation
        if (!Array.isArray(tickets)) {
            return ERROR.INVALID_INPUT;
        }
        if (tickets.length === 0) {
            return ERROR.EMPTY_LIST;
        }
        // Validate ticket objects
        for (const ticket of tickets) {
            if (!ticket.source) {
                return ERROR.INVALID_TICKET_SOURCE
            }
            if (!ticket.destination) {
                return ERROR.INVALID_TICKET_DESTINATION
            }
        }

        const transformedDataset: TRANSFORMED_DATA_SET = tickets.reduce(
            (previousValue: TRANSFORMED_DATA_SET, currentValue: Ticket) => {
                // Build the table.
                previousValue.source[currentValue.source] = currentValue;
                previousValue.destination[currentValue.destination] = currentValue;

                // Destination find start and end.
                if (!previousValue.source[currentValue.destination]) {
                    previousValue.source[currentValue.destination] = false;
                }
                if (!previousValue.destination[currentValue.source]) {
                    previousValue.destination[currentValue.source] = false;
                    previousValue.origin = currentValue.source;
                }

                return previousValue;
            },
            {destination: {}, source: {}, origin: ''}
        );

        const nodes = transformedDataset.source;
        let origin = transformedDataset.origin;
        const sorted: string[] = [origin || ''];

        while (origin) {
            const node = nodes[origin];
            if (node && typeof node !== 'boolean') {
                const destination = node.destination;
                if (destination) {
                    sorted.push(destination);
                    origin = destination;
                } else {
                    origin = '';
                }
            } else {
                origin = '';
            }
        }

        return sorted.join(',');
    } catch (error) {
        // Error handling
        console.error(error);
        return ERROR.GENERIC_ERROR;
    }
};

const result = originallyPlannedTrip(TICKETS_V1);
console.log(result);