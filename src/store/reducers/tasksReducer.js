import { FETCH_CURRENT_USER } from "../actions/actionTypes";


const initialState = {
  currentUser: {
    data: {
        "count": 2,
        "next": null,
        "previous": null,
        "results": [
          {
            "id": 8,
            "sub_tasks": [],
            "title": "Подготовить обновлённую презентацию разработанного продукта",
            "description": null,
            "status": false,
            "is_favorite": false,
            "is_primary": true,
            "created_date": "2020-11-20T15:20:44.004090Z",
            "updated_date": "2020-11-20T15:20:44.004114Z",
            "end_date": null,
            "employee_appointed": null,
            "employee": {
              "id": 15,
              "last_login": "2020-11-20T15:18:55.002496Z",
              "email": "test13@irokez.me",
              "first_name": "Тринадцатый",
              "last_name": "Пользователь",
              "middle_name": null
            },
            "task": null
          },
          {
            "id": 7,
            "sub_tasks": [],
            "title": "Подготовить обновлённую презентацию разработанного продукта",
            "description": "",
            "status": false,
            "is_favorite": false,
            "is_primary": true,
            "created_date": "2020-11-20T15:20:17.621391Z",
            "updated_date": "2020-11-20T15:20:17.621409Z",
            "end_date": null,
            "employee_appointed": null,
            "employee": {
              "id": 15,
              "last_login": "2020-11-20T15:18:55.002496Z",
              "email": "test13@irokez.me",
              "first_name": "Тринадцатый",
              "last_name": "Пользователь",
              "middle_name": null
            },
            "task": null
          }
        ]
      },
    error: null,
  },
};

export default function currentUserReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return {
        ...state,
        currentUser: {
          [action.key]: action.data,
        },
      };
    default:
      return state;
  }
}
