import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

interface TimeRangeSelectorProps {
  timeRange: string;
  onTimeRangeChange: (event: SelectChangeEvent) => void;
  options: { value: string; label: string }[];
}

const TimeRangeSelector: React.FC<TimeRangeSelectorProps> = ({ timeRange, onTimeRangeChange, options }) => {
  return (
    <FormControl sx={{ marginBottom: 2, minWidth: 120 }}>
      <InputLabel>Time Range</InputLabel>
      <Select value={timeRange} onChange={onTimeRangeChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TimeRangeSelector;
