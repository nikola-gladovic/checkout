import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  swipeableDrawer: {
    '& .MuiDrawer-paperAnchorTop': {
      maxHeight: '80%',
      width: 500,
      maxWidth: '90%',
      top: '10%',
      margin: 'auto',
      overflow: 'auto',
      borderRadius: 10,
    },
  },
  viewer: {
    padding: '30px 15px',
    display: 'flex',
    flexDirection: 'column',
    '@media(max-width: 992px)': {
      padding: '0 0 10px',
    },
  },
  header: {
    textAlign: 'center',
    marginBottom: 10,
    '& h3': {
      margin: 0,
    }
  },
  body: {
    padding: '0 20px',
    '& .form-control': {
      display: 'flex',
      alignItems: 'center',
      margin: '10px 0',
      '& label': {
        marginRight: 5,
      },
      '& input': {
        display: 'block',
        height: 25,
        padding: '6px 12px',
        fontSize: 14,
        lineHeight: 1.4,
        marginRight: 10,
        border: '1px solid #ccc',
        borderRadius: 4,
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
        transition: 'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
      },
    }
  },
  footer: {
    textAlign: 'right',
    '& button': {
      marginRight: 10,
    },
  },
});
