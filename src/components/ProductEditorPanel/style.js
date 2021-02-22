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
      margin: '10px 0',
      '& .name': {
        marginTop: 3,
        display: 'block',
      },
      '& .offer': {
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        flexWrap: 'wrap',
        '& input': {
          flex: 1,
          minWidth: 50,
        },
        '& span': {
          marginRight: 10,
        },
        '& .alert': {
          width: '100%',
          color: 'red',
        }
      },
      '& label': {
        marginRight: 5,
        marginTop: 3,
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
