import React from "react";
import s from "./users.module.css"
import {OneUserType} from "../../redux/users-reducer";
import axios from "axios";

type PropsType = {
    items: Array<OneUserType>;
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (items: Array<OneUserType>) => void
};


export class Users extends React.Component<PropsType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users", {
            headers: {
                'API-KEY': '46af285d-668e-408c-9ee4-63a1ab3ec8c7'
            }
        })
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {


        return (
            <div>
                {this.props.items.map((user) => {
                    return <div key={user.id}>
          <span>
            <div>
                <img src={user.photos.small !== null ? user.photos.small :
                    "https://postnauka.ru/files/images/3/3/0/0/0/0/0/0/0/0/thumb/s_OsZAIqDKB_qz1omo5RFbf-W-xqzjAz.jpg"}
                     className={s.userPhoto} alt=""/>
            </div>
            <div>
              {user.followed ?
                  <button onClick={() => {
                      this.props.unFollow(user.id)
                  }}>UnFollow</button>
                  : <button onClick={() => {
                      this.props.follow(user.id)
                  }}>Follow</button>
              }

            </div>
          </span>
                        <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>
                {"user.location.country"}
              </div>
              <div>
              {"user.location.city"}
              </div>
            </span>
          </span>
                    </div>
                })}
            </div>
        );

    }
}

