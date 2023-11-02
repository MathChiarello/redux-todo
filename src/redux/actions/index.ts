// ACTIONS TYPES
export const ADD_EMAIL = 'ADD_EMAIL';

// ACTION CREATORS

export const addEmail = (email: string) => ({
  type: ADD_EMAIL,
  email,
});