import React from "react";
import s from "./users.module.css"
import {OneUserType} from "../../redux/users-reducer";
import {LinearProgress} from "@mui/material";
import {NavLink} from "react-router-dom";


type PropsType = {
    items: Array<OneUserType>;
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onChangedPage: (page: number) => void
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    setIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: number[]
    followThunkCreator: (userId: number) => void
    unFollowThunkCreator: (userId: number) => void


};


export const Users = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {props.isFetching && <LinearProgress color="secondary"/>}
            <div className={s.listOfUsersPages}>
                {pages.map(m => {
                    return <span key={m.toString()} className={props.currentPage === m ? s.selectedPage : ""}
                                 onClick={() => props.onChangedPage(m)}>{m}</span>
                })}

            </div>
            {props.items.map((user) => {
                return <div key={user.id}>
          <span>
            <div>
               <NavLink to={`/profile/${user.id}`}>
                <img src={user.photos.small !== null ? user.photos.small :
                    "https://postnauka.ru/files/images/3/3/0/0/0/0/0/0/0/0/thumb/s_OsZAIqDKB_qz1omo5RFbf-W-xqzjAz.jpg"}
                     className={s.userPhoto} alt=""/>
                </NavLink>
            </div>
            <div>
              {user.followed ?
                  <button disabled={props.followingInProgress.some(id => id === user.id)}
                          onClick={() => {
                              props.toggleFollowingProgress(true, user.id)
                              props.unFollowThunkCreator(user.id)
                          }
                          }>UnFollow</button>
                  : <button disabled={props.followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                props.toggleFollowingProgress(true, user.id)
                                props.followThunkCreator(user.id)

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


