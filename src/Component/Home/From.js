import React, { Fragment, useReducer } from "react";
import "../Style/from.css";

const From = () => {
  const initialState = {
    name: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: "",
  };

  const reducer = (state, action) => {
    if (action.type === "input") {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const submit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <Fragment>
      <div className="container">
        <div className="title">Registration</div>
        <div className="content">
          <form onSubmit={submit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  onBlur={(e) =>
                    dispatch({
                      type: "input",
                      payload: {
                        name: e.target.name,
                        value: e.target.value,
                      },
                    })
                  }
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Username</span>
                <input
                  onBlur={(e) =>
                    dispatch({
                      type: "input",
                      payload: {
                        name: e.target.name,
                        value: e.target.value,
                      },
                    })
                  }
                  name="userName"
                  type="text"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  onBlur={(e) =>
                    dispatch({
                      type: "input",
                      payload: {
                        name: e.target.name,
                        value: e.target.value,
                      },
                    })
                  }
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input
                  onBlur={(e) =>
                    dispatch({
                      type: "input",
                      payload: {
                        name: e.target.name,
                        value: e.target.value,
                      },
                    })
                  }
                  name="phone"
                  type="text"
                  placeholder="Enter your number"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input
                  onBlur={(e) =>
                    dispatch({
                      type: "input",
                      payload: {
                        name: e.target.name,
                        value: e.target.value,
                      },
                    })
                  }
                  name="password"
                  type="text"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input
                  onBlur={(e) =>
                    dispatch({
                      type: "input",
                      payload: {
                        name: e.target.name,
                        value: e.target.value,
                      },
                    })
                  }
                  type="text"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>
            <div className="gender-details">
              <input
                type="radio"
                onClick={(e) =>
                  dispatch({
                    type: "input",
                    payload: {
                      name: e.target.name,
                      value: e.target.value,
                    },
                  })
                }
                name="gender"
                value="male"
                id="dot-1"
              />
              <input
                type="radio"
                onClick={(e) =>
                  dispatch({
                    type: "input",
                    payload: {
                      name: e.target.name,
                      value: e.target.value,
                    },
                  })
                }
                name="gender"
                value="female"
                id="dot-2"
              />
              <input
                onClick={(e) =>
                  dispatch({
                    type: "input",
                    payload: {
                      name: e.target.name,
                      value: e.target.value,
                    },
                  })
                }
                type="radio"
                name="gender"
                value="Prefer not to say"
                id="dot-3"
              />
              <span className="gender-title">Gender</span>
              <div className="category">
                <label for="dot-1">
                  <span className="dot one"></span>
                  <span className="gender">Male</span>
                </label>
                <label for="dot-2">
                  <span className="dot two"></span>
                  <span className="gender">Female</span>
                </label>
                <label for="dot-3">
                  <span className="dot three"></span>
                  <span className="gender">Prefer not to say</span>
                </label>
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default From;
