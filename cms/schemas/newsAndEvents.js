export default {
  name: 'newsAndEvents',
  title: 'News and Events',
  type: 'document',
  fields: [
    {
      name: 'Title',
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
  ],
}
