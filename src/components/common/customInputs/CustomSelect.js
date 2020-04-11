import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useTranslation } from 'react-i18next';
import InputLabel from '@material-ui/core/InputLabel';
import { FormHelperText } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 50,
    verticalAlign: 'middle',
  },
}));


const CustomSelect = ({
  label,
  value,
  onChange,
  error,
  name,
  fullWidth = true,
  options = [],
  ...rest
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleChange = e => {
    const { value: val } = e.target;
    onChange({ name, value: val });
  };

  return (
    <FormControl
      fullWidth={fullWidth}
      className={classes.formControl}
      error={!!error}
    >
      {label && <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>}
      <Select
        value={value}
        onChange={handleChange}
        {...rest}
      >
        {options.map(option => <MenuItem key={option.value} value={option.value}>{option.text}</MenuItem>)}
      </Select>
      {!!error && <FormHelperText>{t(error)}</FormHelperText>}
    </FormControl>
  );
};

export default CustomSelect;
