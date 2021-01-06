import React from 'react';
import { CalendarList } from 'react-native-calendars';

export default function HabitCalendar() {
  return (
    <CalendarList
      markedDates={{
        '2021-01-05': {
          startingDay: true,
          color: '#94cf83',
          textColor: 'white',
        },
        '2021-01-06': { color: '#94cf83', textColor: 'white' },
        '2021-01-07': { color: '#94cf83', endingDay: true, textColor: 'white' },
        '2021-01-08': {
          startingDay: true,
          color: '#f9ca60',
          endingDay: true,
          textColor: 'white',
        },
        '2021-01-09': {
          startingDay: true,
          color: '#f06f6a',
          textColor: 'white',
        },
        '2021-01-10': { color: '#f06f6a', endingDay: true, textColor: 'white' },
      }}
      markingType={'period'}
      showScrollIndicator={true}
      pastScrollRange={1}
      futureScrollRange={2}
    />
  );
}
