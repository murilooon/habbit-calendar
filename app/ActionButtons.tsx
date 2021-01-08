import React from 'react';
import { View } from 'react-native';
import type { PeriodMarking } from 'react-native-calendars';

import ActionButton from './ActionButton';

type DatesProps = {
  [date: string]: PeriodMarking;
};

type ActionButtonsProps = {
  dates: { [date: string]: PeriodMarking };
  setDates: (prevState: DatesProps) => void;
  isOnYes: boolean;
  isOnNo: boolean;
  isOnPart: boolean;
  setToggles: (
    yesStatus?: boolean,
    noStatus?: boolean,
    partStatus?: boolean,
  ) => void;
};

export default function ActionButtons({
  dates,
  setDates,
  isOnYes,
  isOnNo,
  isOnPart,
  setToggles,
}: ActionButtonsProps) {
  function removeDay(day: string) {
    delete dates[day];
  }

  function markDay(day: string, color: string) {
    dates[day] = {
      startingDay: true,
      color,
      endingDay: true,
      textColor: 'white',
    };
  }

  function updateDates(toggleStatus: boolean, color: string) {
    const days = Object.keys(dates);

    for (let i = 0; i < days.length; i++) {
      const day = days[i];
      const date = dates[day];

      if (date['selected']) {
        if (toggleStatus) {
          markDay(day, color);
        } else {
          removeDay(day);
        }
      }
    }

    const dateUpdated = JSON.parse(JSON.stringify(dates));

    setDates(dateUpdated);
  }

  function handleYesChange(value: boolean) {
    updateDates(value, GREEN_COLOR);
    setToggles(value);
  }

  function handleNoChange(value: boolean) {
    updateDates(value, RED_COLOR);
    setToggles(false, value);
  }

  function handlePartChange(value: boolean) {
    updateDates(value, YELLOW_COLOR);
    setToggles(false, false, value);
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ flexDirection: 'row' }}>
        <ActionButton
          label="YES"
          color={GREEN_COLOR}
          isOn={isOnYes}
          onChange={handleYesChange}
        />
        <ActionButton
          label="NO"
          color={RED_COLOR}
          isOn={isOnNo}
          onChange={handleNoChange}
        />
      </View>
      <View style={{ marginTop: 15 }}>
        <ActionButton
          label="PART"
          color={YELLOW_COLOR}
          isOn={isOnPart}
          onChange={handlePartChange}
        />
      </View>
    </View>
  );
}
