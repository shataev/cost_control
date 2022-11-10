import { Grid, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { ChangeEvent, useState } from 'react';

const inputStyles = {
  width: 300
};

export const AddCostPage = () => {
  const [cost, setCost] = useState({
    cost: 0,
    product: '',
    comment: ''
  });

  const onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCost(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const onSubmit = () => {
    console.log(cost);
  };

  return (
    <Grid item xs={12} container spacing={3} direction={'column'} alignItems={'center'}>
      <Grid item>
        <Typography variant={'h4'} fontWeight={700}>Потрачено</Typography>
      </Grid>
      <Grid item>
        <TextField
          name={'cost'}
          size={'small'}
          placeholder='Сумма'
          sx={inputStyles}
          type='number'
          onChange={onFieldChange}
        />
      </Grid>
      <Grid item>
        <TextField
          name={'product'}
          size={'small'}
          sx={inputStyles}
          placeholder='На что'
          onChange={onFieldChange}
        />
      </Grid>
      <Grid item>
        <TextField
          name={'comment'}
          size={'small'}
          placeholder='Комментарий'
          sx={inputStyles}
          multiline
          onChange={onFieldChange}
        />
      </Grid>
      <Grid item>
        <Button
          type={'button'}
          variant={'contained'}
          onClick={onSubmit}
        >Сохранить</Button>
      </Grid>
    </Grid>
  );
};