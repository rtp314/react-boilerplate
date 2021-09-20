import { Done } from '@material-ui/icons';
import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import useClasses from '@/components/layout/hooks/useClasses';

const styles = theme => ({
  icon: {
    color: 'green',
    margin: 15,
    fontSize: '4rem',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const SuccessBox = ({ text, button }) => {
  const classes = useClasses(styles);
  const { t } = useTranslation();
  return (
    <Container maxWidth="md">
      <div className={classes.paper}>
        <Done className={classes.icon} />
        <Typography align="center" variant="h5">{t(text)}</Typography>
        {button || ''}
      </div>
    </Container>
  );
};

export default SuccessBox;
