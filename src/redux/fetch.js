import { configureStore } from '@reduxjs/toolkit';

const ADDDATA = 'ADDDATA';
const URL = 'http://localhost:3000/api/v1/greetings';

export function Data(payload) {
  return {
    type: ADDDATA,
    payload,
  };
}

export default function Greett(state = [], action = {}) {
  switch (action.type) {
    case ADDDATA:
      return [
        action.payload,
      ];
    default:
      return state;
  }
}

export const fetchData = () => async (dispatch) => {
  let greeting = [];
  await fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      greeting = data.greeting;
    });
  dispatch(Data(greeting));
};

export const store = configureStore({ reducer: { greeting: Greett } });
