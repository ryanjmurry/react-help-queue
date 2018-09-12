import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

const TicketList = (props) => {
  return (
    <div>
      <hr/>
      {props.ticketList.map((ticket) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          key={ticket.id}/>
      )}
    </div>
  );
};

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;
