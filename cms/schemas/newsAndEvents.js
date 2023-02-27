export default {
  name: 'newsAndEvents',
  title: 'News and Events',
  type: 'document',
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'What order do you want the event to show on the page?',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
    },
    {
      name: 'time',
      title: 'Time',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'url',
      title: 'Event URL',
      type: 'url',
    },
    {
      name: 'isNews',
      title: 'Event Type',
      type: 'boolean',
      description: 'Toggle if news.',
    },
  ],
}
