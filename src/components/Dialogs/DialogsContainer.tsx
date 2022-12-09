
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {DialogPropsType, MessagePropsType, sendMessageBody, updateNewMessageBodyAC} from "../../redux/dialog-reducer";
import {RootReducerType} from "../../redux/redux-store";
import {Dispatch} from "redux";

export type MapStateToPropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string
    isAuth:boolean
}
export type MapDispatchToPropsType = {
    updateNewMessageBodyAC: (body: string) => void
    sendMessageBody: () => void
}
export type  DialogsPropsType = MapDispatchToPropsType & MapStateToPropsType;

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
        isAuth:state.auth.isAuth

    }}
    const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
        return {
            updateNewMessageBodyAC: (body: string) => {
                dispatch(updateNewMessageBodyAC(body))
            },
            sendMessageBody: () => {
                dispatch(sendMessageBody())
            }
        }}

        export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);