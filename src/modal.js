import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import textlogoforsite from './textlogoforsite.png';


class AlertDialog extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        open: true,
      };
}
      handleClickOpen = () => {
        this.setState({ open: true });
      };

      handleClose = () => {
        this.setState({ open: false });
      };

      render() {
          return (
            <div>
              <img src={textlogoforsite} onClick={this.handleClickOpen} height="70" />
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title"> Instruction* </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    PLEASE SCAN BOXED IMAGE*
                  </DialogContentText>
                  <img src={require('./logo.gif')} alt="intro" height="300" />
                </DialogContent>

              </Dialog>
            </div>
          );
        }
      }


export default AlertDialog;
