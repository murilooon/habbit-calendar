import React from 'react';
import type { DateObject, PeriodMarking } from 'react-native-calendars';
import { CalendarList } from 'react-native-calendars';

type HabbitCalendarProps = {
  onChange: (day: DateObject) => void;
  dates: { [date: string]: PeriodMarking };
};

export default function HabbitCalendar({
  onChange,
  dates,
}: HabbitCalendarProps) {
  return (
    <CalendarList
      markedDates={dates}
      markingType={'period'}
      onDayPress={(day) => {
        onChange(day);
      }}
      horizontal={true}
      pagingEnabled={true}
    />
  );
}
