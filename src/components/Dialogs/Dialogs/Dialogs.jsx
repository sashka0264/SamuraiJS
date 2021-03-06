import React from 'react';
import {reduxForm, Field, reset } from 'redux-form';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {MessageFormControl} from '../../common/FormsControl/FormsControl';
import {required, maxLengthCreator, minLengthCreator} from '../../../helpers/validators';
import sendIcon from './img/sendIcon.svg';
import style from './Dialogs.module.less';

const maxLength = maxLengthCreator(75), 
  minLength = minLengthCreator(2);

const DialogsForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit} className={style.appDialogsForm}>
      <Field 
        validate={[required, maxLength, minLength]}
        className={style.appDialogsMessagesInput} 
        component={MessageFormControl} 
        name="newMessageBody" 
        placeholder="Write a message..."
      />
      <button className={style.appDialogsMessagesSend}><img alt="sendIcon" src={sendIcon}/></button>
    </form>
  );
};

const DialogsReduxForm = reduxForm({
  form: 'dialogs',
  onSubmitSuccess: (res, dispatch) => dispatch(reset('dialogs'))
})(DialogsForm);

const Dialogs = ({ messagesPage, sendMessageAC }) => {
  const onSubmit = ({ newMessageBody, dispatch }) => {
    sendMessageAC(newMessageBody);
  };


  return (
    <div className={style.appDialogs}>
      <div className={style.appDialogsFriendAndMessages}>
        <div className={style.users}>
          {messagesPage.dialogs.map( (item) => <DialogItem name={item.name} id={item.id} key={item.id}/>)}
        </div>

        <div className={style.dialogList}>
          {messagesPage.messages.map( (item) => <MessageItem content={item.content} key={item.id}/>)}
        </div>
      </div>

      <DialogsReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

export default Dialogs;