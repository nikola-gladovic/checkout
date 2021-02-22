import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  wrapper: {
    padding: '30px 20px',
    backgroundColor: '#fafafa',
  },
  header: {
    '& h2': {
      margin: 0
    }
  },
  body: {
    padding: '0 15px',
  },
  product: {
    padding: '10px 15px',
    margin: '10px 0',
    border: '1px solid #c2b9b9',
    borderRadius: 10,
    '& .row': {
      display: 'flex',
    },
    '& .name': {
      flex: 1,
      margin: '10px 0',
      '& h3': {
        margin: 0,
      },
    },
    '& .price': {

    },
    '& .actions': {
      flex: 1,
      textAlign: 'right',
      '& button': {
        fontSize: 9,
        padding: '3px 10px',
        marginLeft: 5,
      }
    }
  }
});;
