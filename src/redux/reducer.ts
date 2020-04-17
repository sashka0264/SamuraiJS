import {
  SEND_MESSAGE,
  ADD_POST,
  FOLLOW,
  UNFOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  TOGGLE_IS_LOADING,
  SET_USER_PROFILE,
  TOGGLE_IS_FOLLOWING_PROGRESS,
  SET_USER_STATUS,
  DELETE_POST,
  SET_PAGE_PERIOD,
  SAVE_PHOTO_SUCCESS
} from './actions';

export const initialState = {
  profilePage: {
    posts: [ 
      { id: 1, message: 'Default', likes: 12 }
    ] as Array<{id: number, message: string, likes: number}>,
    profile: {} as {},
    status: '' as string
  },
  messagesPage: {
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
  }, 
  sidebar: {} as {},
  usersPage: {
    pageSize: 30 as number,
    pagePeriod: { usePage: 1, control: 10 } as Record<string, number>,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    users: [] as Array<{}>,
    loading: false as boolean,
    followingInProgress: [] as []
  }
};

const reducer = (state: any = initialState, action: any) => {

  switch (action.type) {
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state, 
        profilePage: {
          ...state.profilePage,
          profile: {
            ...state.profilePage.profile,
            photos: action.photos
          }
        }
      };
    case SET_PAGE_PERIOD:
      return {
        ...state, 
        usersPage: {
          ...state.usersPage,
          pagePeriod: {
            ...state.usersPage.pagePeriod,
            usePage: action.usePage
          }
        }
      }
    case SEND_MESSAGE: 
      // с id нужно поработать
      const newMessage = { id: Date.now(), content: action.content };
      return {
        ...state,
        messagesPage: {
          ...state.messagesPage,
          messages: [
            ...state.messagesPage.messages,
            newMessage
          ]
        }
      };
    case ADD_POST:
      // с id нужно поработать
      const newPost = { id: Date.now(), message: action.postMessage, likes: 0 };
      return {
        ...state,
        profilePage: {
          ...state.profilePage,
          posts: [
            newPost,
            ...state.profilePage.posts
          ]
        }
      };
    case FOLLOW:
      return {
        ...state, 
        usersPage: {
          ...state.usersPage,
          users: state.usersPage.users.map((user: { id: any; }) => {
            if (user.id === action.id) {
              return { ...user, followed: true };
            } 
            return user;
          })    
        }
      };
    case UNFOLLOW:
      return {
        ...state, 
        usersPage: {
          ...state.usersPage,
          users: state.usersPage.users.map((user: { id: any; }) => {
            if (user.id === action.id) {
              return { ...user, followed: false };
            } 
            return user;
          })    
        }
      };
    case SET_USERS:
      return {
        ...state,
        usersPage: {
          ...state.usersPage,
          users: [...action.users]
        }
      };
    case SET_CURRENT_PAGE: 
      return {
        ...state,
        usersPage: {
          ...state.usersPage,
          currentPage: action.page
        }
      };
    case SET_TOTAL_USERS_COUNT: 
      return {
        ...state,
        usersPage: {
          ...state.usersPage,
          totalUsersCount: action.count
        }
      };
    case TOGGLE_IS_LOADING:
      return {
        ...state,
        usersPage: {
          ...state.usersPage,
          loading: action.loadingStatus
        }
      };
    case SET_USER_PROFILE: 
      return {
        ...state,
        profilePage: {
          ...state.profilePage,
          profile: { ...action.profile }
        }
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS: 
      return {
        ...state,
        usersPage: {
          ...state.usersPage,
          followingInProgress: action.status 
            ? [...state.usersPage.followingInProgress, action.userId] 
            : state.usersPage.followingInProgress.filter((id: any) => id !== action.userId) 
        }
      };
    case SET_USER_STATUS:
      return {
        ...state,
        profilePage: {
          ...state.profilePage,
          status: action.status
        }
      };
    case DELETE_POST:
      return {
        ...state,
        profilePage: {
          ...state.profilePage,
          posts: state.profilePage.posts.filter((post: { id: any; }) => post.id !== action.id)
        }
      };
    default: 
      return state;
  }
};

export default reducer;