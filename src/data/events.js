export const events = [
  {
    id: 'ev1',
    title: 'Rice Processing Best Practices Workshop',
    date: '2026-03-10',
    time: '09:30 AM - 01:00 PM',
    location: 'Conference Hall A, New Delhi',
    organizer: 'Milling & Millers',
    image: 'https://meetingtomorrow.com/wp-content/uploads/2019/08/What-Size-Projector-Screen-For-Events.jpg',
    description: 'A practical workshop covering modern rice processing techniques, quality control and fortification best practices for mill operators.',
    link: '#',
    seq: 1
  },
  {
    id: 'ev2',
    title: 'Parboiling Efficiency Seminar',
    date: '2026-04-05',
    time: '11:00 AM - 03:00 PM',
    location: 'Industrial Training Center, Kolkata',
    organizer: 'Industry Experts',
    image: 'https://meetingtomorrow.com/wp-content/uploads/2019/08/What-Size-Projector-Screen-For-Events.jpg',
    description: 'Seminar focused on parboiling equipment optimisation, energy savings and yield improvements for medium and large mills.',
    link: '#',
    seq: 2
  }
];

// Helper: return events with latest-first by default
export function getEvents(latestFirst = true) {
  const copy = events.slice(); // shallow copy
  return latestFirst ? copy.reverse() : copy;
}
