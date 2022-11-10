import { Grid, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import { Cost } from './AddCostPage.types';

const inputStyles = {
  width: 300
};

const costInitialValue:Cost = {
  cost: '',
  product: '',
  comment: ''
};

// TODO: обработать ошибки запроса
// TODO: прикрутить лоадер
// TODO: вынести в конфиг состав формы
export const AddCostPage = () => {
  const [ pending, setPending ]= useState(false);

  const [cost, setCost] = useState(costInitialValue);

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
    setPending(true);

    axios.post(
      '/cost',
      {
        data: {
          ...cost
        }
      }
    )
      .then(response => {
        setPending(false);
        setCost(costInitialValue);

        console.log(response);
      })
      .catch(e => {
        setPending(false);
        setCost(costInitialValue);

        console.log(e);
      });
  };

  return (
    <Grid item xs={12} container spacing={3} direction={'column'} alignItems={'center'}>
      {pending && <div>Loading...</div>}
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
          value={cost['cost']}
          onChange={onFieldChange}
        />
      </Grid>
      <Grid item>
        <TextField
          name={'product'}
          size={'small'}
          sx={inputStyles}
          placeholder='На что'
          value={cost['product']}
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
          value={cost['comment']}
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