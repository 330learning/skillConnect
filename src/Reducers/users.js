const initialState = 
    {
      username: '',
      first:'',
      last: '',
      age: '',
      gender: '',
      email: '',
      avatar: require('../Images/default.jpg'),
    }


export default function userReducer(state=initialState, action) {
    switch(action.type) {
        case 'LOGIN':
            return (
                {
                    username:action.username,
                    first: action.first,
                    last: action.last,
                    age: action.age,
                    gender: action.gender,
                    email: action.email,
                    avatar: action.avatar,
                }
            )
        default: 
            return state
    }
}
  