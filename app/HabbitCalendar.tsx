import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import type { DateObject, PeriodMarking } from 'react-native-calendars';
import { CalendarList } from 'react-native-calendars';

type DatesProps = {
  [date: string]: PeriodMarking;
};

type HabbitCalendarProps = {
  onChange: (day: DateObject) => void;
  dates: { [date: string]: PeriodMarking };
  setDates: (prevState: DatesProps) => void;
};

export default function HabbitCalendar({
  onChange,
  dates,
  setDates,
}: HabbitCalendarProps) {
  const save = async (value: unknown) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@Dates', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const load = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@Dates');

        setDates(jsonValue != null ? JSON.parse(jsonValue) : null);
      } catch (e) {
        console.log(e);
      }
    };

    load();
  }, [setDates]);

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
