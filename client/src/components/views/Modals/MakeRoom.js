import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import "./MakeRoom.css";
import axios from "axios";

function MakeRoom(props) {
  const [roomName, setRoomName] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setRoomName(value);
  };

  const onOk = () => {
    props.history.push({
      pathname: `/rooms/${roomName}`,
      roomName,
      user: props.user,
    });
  };

  return (
    <div>
      <Modal
        title="방 만들기"
        visible={props.visible}
        onOk={onOk}
        onCancel={props.onCancel}
      >
        <label className="roomTitle">방 제목</label>
        <input className="roomInput" type="text" value={roomName} onChange={onChange} />
      </Modal>
    </div>
  );
}

export default MakeRoom;
