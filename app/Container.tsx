import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import type { PeriodMarking, DateObject } from 'react-native-calendars';

import ActionButtons from './ActionButtons';
import HabbitCalendar from './HabbitCalendar';

export default function Container() {
  type DatesProps = {
    [date: string]: PeriodMarking;
  };

  const [dates, setDates] = useState<DatesProps>({});

  function handleDayPress(day: DateObject) {
    const dateSelected: string = day['dateString'];
    const isDaySelected = dates[dateSelected] ? true : false;

    if (isDaySelected) {
      delete dates[dateSelected];
    } else {
      dates[dateSelected] = {
        startingDay: true,
        color: 'blue',
        endingDay: true,
        textColor: 'white',
      };
    }

    const dateUpdated = JSON.parse(JSON.stringify(dates));

    setDates(dateUpdated);
  }

  return (
    <View style={styles.container}>
      <View style={styles.container_view}>
        <HabbitCalendar
          onChange={handleDayPress}
          dates={dates}
          setDates={setDates}
        />
        <ActionButtons />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
  },

  container_view: {
    flex: 1,
    marginTop: 50,
    width: 100,
    left: 0,
    right: 0,
  },
});
