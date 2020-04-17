const SEND_MESSAGE = 'SEND-MESSAGE';
  
export const sendMessageAC = (text: any) => ({ type: SEND_MESSAGE, content: text });

const initialState = {
  dialogs: [ 
    { id: 1, name: 'Уля' }, 
    { id: 2, name: 'Анна' }, 
    { id: 3, name: 'Влад' }, 
    { id: 4, name: 'Тимур' }, 
    { id: 5, name: 'Андрей' }
  ] as Array<{id: number, name: string}>,
  messages: [ 
    { id: 1, content: 'Привет' }, 
    { id: 2, content: 'Как дела?' }, 
    { id: 3, content: ':3' }
  ] as Array<{id: number, content: string}>
};

const dialogsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SEND_MESSAGE: 
      // с id нужно поработать
      const newMessage = { id: Date.now(), content: action.content };
      return {
        ...state,
        messages: [
          ...state.messages,
          newMessage
        ]
      };
    default: 
      return state;
  }
};

export default dialogsReducer;