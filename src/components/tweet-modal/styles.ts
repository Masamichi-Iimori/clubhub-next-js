import { createStyles, makeStyles } from '@material-ui/core/styles';


export const styles = makeStyles((theme) =>
  createStyles({
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1, 1, 0, 1),
        width: 200,
      },
    },
    paper: {
      margin: 'auto',
      marginTop: theme.spacing(5),
      minWidth: 340,
      width: '30%',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    fab: {
      margin: theme.spacing(2),
    },
    centerGrid: {
      display: 'flex',
      justifyContent: 'center',
    },
    vclabel: {
      fontSize: 13,
      margin: theme.spacing(1),
    },
    textField: {
      minWidth: 340,
    },
    buttonbox: {
      margin: theme.spacing(0, 1),
      display: 'flex',
      justifyContent: 'center'

    },
    tweetbutton: {
      minWidth: 120,
      margin: theme.spacing(5),
      flex: 1,
    },
    selecter: {
      display: 'flex',
      justifyContent: 'center'
    },
    cancelbutton: {
      minWidth: 120,
      margin: theme.spacing(5),
      flex: 1,
    },
    twitterShareButton: {
      width: "100%",
    },
  }));