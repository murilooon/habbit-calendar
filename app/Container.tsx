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
  const [isOnYes, setIsOnYes] = useState(false);
  const [isOnNo, setIsOnNo] = useState(false);
  const [isOnPart, setIsOnPart] = useState(false);

  function markDay(date: string) {
    dates[date] = {
      startingDay: true,
      color: SELECTED_COLOR,
      endingDay: true,
      textColor: 'white',
      selected: true,
    };

    setIsOnYes(false);
    setIsOnNo(false);
    setIsOnPart(false);
  }

  function updateMarkedDay(date: string) {
    let dayColor = dates[date]['color'];

    switch (dayColor) {
      case GREEN_COLOR:
        dayColor = SELECTED_GREEN_COLOR;
        setIsOnYes(true);
        setIsOnNo(false);
        setIsOnPart(false);
        break;
      case RED_COLOR:
        dayColor = SELECTED_RED_COLOR;
        setIsOnYes(false);
        setIsOnNo(true);
        setIsOnPart(false);
        break;
      case YELLOW_COLOR:
        dayColor = SELECTED_YELLOW_COLOR;
        setIsOnYes(false);
        setIsOnNo(false);
        setIsOnPart(true);
        break;
      case SELECTED_GREEN_COLOR:
        dayColor = GREEN_COLOR;
        setIsOnYes(false);
        break;
      case SELECTED_RED_COLOR:
        dayColor = RED_COLOR;
        setIsOnNo(false);
        break;
      case SELECTED_YELLOW_COLOR:
        dayColor = YELLOW_COLOR;
        setIsOnPart(false);
        break;
      default:
        dayColor = SELECTED_COLOR;
    }

    dates[date] = {
      startingDay: true,
      color: dayColor,
      endingDay: true,
      textColor: 'white',
      selected: true,
    };
  }

  function removeMarkedDay(date: string) {
    delete dates[date];
  }

  function handleDayPress(day: DateObject) {
    const daySelected: string = day['dateString'];
    const isMarkedDay = dates[daySelected] ? true : false;
    const isPressedDay = isMarkedDay
      ? dates[daySelected]['color'] == SELECTED_COLOR
      : false;

    // Loop para desativar toggles se tivar mais de um selecionado

    if (isMarkedDay) {
      if (!isPressedDay) {
        updateMarkedDay(daySelected);
      } else {
        removeMarkedDay(daySelected);
      }
    } else {
      markDay(daySelected);
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
        <ActionButtons
          dates={dates}
          setDates={setDates}
          isOnYes={isOnYes}
          setIsOnYes={setIsOnYes}
          isOnNo={isOnNo}
          setIsOnNo={setIsOnNo}
          isOnPart={isOnPart}
          setIsOnPart={setIsOnPart}
        />
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
