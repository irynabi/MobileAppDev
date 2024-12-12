import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const postReducer = (state, action) => {
  switch (action.type) {
    case 'get_posts':
      return action.payload
    case 'delete_post':
      return state.filter((post) => post.id !== action.payload)
    case 'edit_post':
      return state.map((post) => {
        return post.id === action.payload.id ? action.payload : post
      })
    default:
      return state
  }
}

const getDiaryPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('posts')
    dispatch({type: 'get_posts', payload: response.data})
  }
}

// action helpers, now bound with dispatch
const addDiaryPost = (dispatch) => {
  return async (title, content, targetLang, callback) => {
    try {
      const response = await jsonServer.post('/posts', { title, content, targetLang });
      dispatch({ type: 'add_post', payload: response.data }); // Ensure state is updated with the new post
      if (callback) callback(); // Call the callback after the post is added
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };
};


const deleteDiaryPost = (dispatch) => {
  return async (id) => {
    const response = await jsonServer.delete(`/posts/${id}`)
    dispatch({type: 'delete_post', payload: id})
  }
}

const editDiaryPost = (dispatch) => {
  return async (id, title, content, targetLang, callback) => {
    await jsonServer.put(`/posts/${id}`, {title, content, targetLang})

    dispatch({type: 'edit_post', payload: {id, title, content, targetLang}})
    if (callback) {
      callback()
    }
  }
}

export const {Context, Provider} = createDataContext(
  postReducer,
  {
    getDiaryPosts,
    addDiaryPost,
    deleteDiaryPost,
    editDiaryPost,
  },
  []
)
