import React from "react";

import s from "./users.module.css"
import {OneUserType} from "../../redux/users-reducer";

type PropsType = {
    users: Array<OneUserType>;
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<OneUserType>) => void
};

export const Users = (props: PropsType) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1, photoURl: "https://ktonanovenkogo.ru/image/chelovek.jpg",
                    followed: false, fullName: "Pavel", status: "I am boss", location: {city: "Minsk", country: "Belarus"}
                },
                {
                    id: 2, photoURl: "https://ktonanovenkogo.ru/image/chelovek.jpg",
                    followed: true, fullName: "Sasha", status: "I am boss too", location: {city: "New-York", country: "USA"}
                },
                {
                    id: 3,
                    photoURl: "https://ktonanovenkogo.ru/image/chelovek.jpg",
                    followed: false,
                    fullName: "Andrew",
                    status: "I am boss too too)",
                    location: {city: "Kiev", country: "Ukrain"}
                }
            ]
        )}
    return (
        <div>
            {props.users.map((user) => {
                console.log(user.followed)
                return <div key={user.id}>
          <span>
            <div>
              <img src={user.photoURl} className={s.userPhoto} alt=""/>
            </div>
            <div>
              {user.followed ?
                  <button onClick={() => {
                      props.unFollow(user.id)
                  }}>UnFollow</button>
                  : <button onClick={() => {
                      props.follow(user.id)
                  }}>Follow</button>
              }

            </div>
          </span>
                    <span>
            <span>
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>
                {user.location.country}
              </div>
              <div>
              {user.location.city}
              </div>
            </span>
          </span>
                </div>
            })}
        </div>
    );
};

