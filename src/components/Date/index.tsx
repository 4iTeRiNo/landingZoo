import { DatePicker, Stack } from "rsuite";

const DatePickerComponent = () => (
  <Stack direction="column" alignItems="flex-start" spacing={6}>
    <DatePicker format="yyyy-MM-dd HH:mm" editable={false} />
  </Stack>
);

export default DatePickerComponent;
