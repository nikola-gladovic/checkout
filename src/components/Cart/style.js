import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  wrapper: {
    padding: '30px 15px',
    maxWidth: 400,
  },
  header: {
    '& h2': {
      margin: 0
    }
  },
  body: {
    padding: '0 15px',
    '& .head': {
      display: 'flex',
      fontWeight: 'bold',
      '& .no': {
        paddingRight: 10,
      },
      '& .name': {
        fontSize: 15,
        flex: 1,
      },
      '& .price': {
        fontSize: 15,
      },
    }
  },
  product: {
    display: 'flex',
    alignItems: 'center',
    margin: '5px 0',
    '& .no': {
      paddingRight: 10,
      minWidth: 30,
    },
    '& .name': {
      fontSize: 15,
      flex: 1,
    },
    '& .action': {
      fontSize: 10,
      padding: '0px 5px',
    },
  },
  footer: {
    margin: '10px 0',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    '& .label': {
      marginRight: 10,
    },
    '& .price': {
      flex: 1,
      marginRight: 10,
      fontSize: 17,
      textAlign: 'right',
    },
  }
});;
