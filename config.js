module.exports = {
  rabbit: {
    url: 'amqp://localhost',
    exchange: {
      name: '2017-rabbitmq-symfony',
      type: 'fanout'
    },
    queues: {
      simple: {
        name: 'simple_queue'
      },
      sorter: {
        name: 'sorter_queue'
      },
      resequencer: {
        name: 'resequencer_queue'
      }
    }
  },
  message_count: 10,
};
