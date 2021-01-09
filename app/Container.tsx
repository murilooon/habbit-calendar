import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import type { PeriodMarking, DateObject } from 'react-native-calendars';

import ActionButtons from './ActionButtons';
import HabbitCalendar from './HabbitCalendar';

type DatesProps = {
  [date: string]: PeriodMarking;
};

export default function Container() {
  const [dates, setDates] = useState<DatesProps>({});
  const [isOnYes, setIsOnYes] = useState(false);
  const [isOnNo, setIsOnNo] = useState(false);
  const [isOnPart, setIsOnPart] = useState(false);

  useEffect(() => {
    const loadDates = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@Dates');

        setDates(jsonValue != null ? JSON.parse(jsonValue) : null);
      } catch (e) {
        console.log(e);
      }
    };

    loadDates();
  }, [setDates]);

  const saveDates = async (value: unknown) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@Dates', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  function setToggles(yesStatus = false, noStatus = false, partStatus = false) {
    setIsOnYes(yesStatus);
    setIsOnNo(noStatus);
    setIsOnPart(partStatus);

    saveDates(dates);
  }

  function removeMarkedDay(day: string) {
    delete dates[day];
  }

  function markDay(date: string, color: string, selected: boolean) {
    dates[date] = {
      startingDay: true,
      color,
      endingDay: true,
      textColor: 'white',
      selected,
    };
  }

  function updateMarkedDay(date: string) {
    let dayColor = dates[date]['color'];
    let isDaySelected = false;

    switch (dayColor) {
      case GREEN_COLOR:
        dayColor = SELECTED_GREEN_COLOR;
        isDaySelected = true;
        setToggles(true);
        break;
      case RED_COLOR:
        dayColor = SELECTED_RED_COLOR;
        isDaySelected = true;
        setToggles(false, true);
        break;
      case YELLOW_COLOR:
        dayColor = SELECTED_YELLOW_COLOR;
        isDaySelected = true;
        setToggles(false, false, true);
        break;
      case SELECTED_GREEN_COLOR:
        dayColor = GREEN_COLOR;
        setToggles();
        break;
      case SELECTED_RED_COLOR:
        dayColor = RED_COLOR;
        setToggles();
        break;
      case SELECTED_YELLOW_COLOR:
        dayColor = YELLOW_COLOR;
        setToggles();
        break;
      default:
        dayColor = SELECTED_COLOR;
    }

    markDay(date, dayColor, isDaySelected);
  }

  function numberOfSelectedDays() {
    const days = Object.keys(dates);
    let daysSelected = 0;

    for (let i = 0; i < days.length; i++) {
      const day = days[i];
      const date = dates[day];

      if (date['selected']) daysSelected++;

      if (daysSelected >= 2) break;
    }

    return daysSelected;
  }

  function handleDayPress(day: DateObject) {
    const daySelected: string = day['dateString'];
    const isMarkedDay = dates[daySelected] ? true : false;
    const isPressedDay = isMarkedDay
      ? dates[daySelected]['color'] == SELECTED_COLOR
      : false;

    if (isMarkedDay) {
      if (!isPressedDay) {
        updateMarkedDay(daySelected);
      } else {
        removeMarkedDay(daySelected);
      }
    } else {
      markDay(daySelected, SELECTED_COLOR, true);
      setToggles();
    }

    if (numberOfSelectedDays() > 1) setToggles();

    const dateUpdated = JSON.parse(JSON.stringify(dates));

    setDates(dateUpdated);
  }

  function updateDatesByToggle(toggleStatus: boolean, color: string) {
    const days = Object.keys(dates);

    for (let i = 0; i < days.length; i++) {
      const day = days[i];
      const date = dates[day];

      if (date['selected']) {
        if (toggleStatus) {
          markDay(day, color, false);
        } else {
          removeMarkedDay(day);
        }
      }
    }

    const dateUpdated = JSON.parse(JSON.stringify(dates));

    setDates(dateUpdated);
  }

  return (
    <View style={styles.container}>
      <View style={styles.container_view}>
        <HabbitCalendar onChange={handleDayPress} dates={dates} />
        <ActionButtons
          isOnYes={isOnYes}
          isOnNo={isOnNo}
          isOnPart={isOnPart}
          setToggles={setToggles}
          updateDatesByToggle={updateDatesByToggle}
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
