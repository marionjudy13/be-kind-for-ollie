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
      name: 'paypalQR',
      title: 'Paypal QR Code',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'venmoQR',
      title: 'Venmo QR Code',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
