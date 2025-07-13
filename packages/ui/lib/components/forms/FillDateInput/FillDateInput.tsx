import { Box } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/he';
import { FillDateInputProps } from '@/components/forms/FillDateInput/FillDateInput.interface';
import {
  StyledLabel,
  StyledTextField,
} from '@/components/forms/FillDateInput/FillDateInput.styles';

dayjs.locale('he');

export const FillDateInput = ({
  label,
  date,
  onChange,
}: FillDateInputProps) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Box>
      <StyledLabel>{label}</StyledLabel>
      <DatePicker
        value={dayjs(date)}
        onChange={date => onChange(date ? date.toDate() : null)}
        format="DD/MM/YYYY"
        enableAccessibleFieldDOMStructure={false}
        slots={{
          textField: StyledTextField,
        }}
        slotProps={{
          textField: {
            placeholder: '/      /      /',
          },
        }}
      />
    </Box>
  </LocalizationProvider>
);
