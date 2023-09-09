import axios from "axios";
import React from "react";
import { SERVER_URL } from "../../config/config";

import styles from "./NewNote.module.css";

export default function NewNote(props) {
    const addNote = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        axios
            .post(SERVER_URL + "/api/notes", {
                title: e.target[0].value,
                content: e.target[1].value,
            })
            .then((res) => {
                e.target[0].value = "";
                e.target[1].value = "";
                props.refreshHandler();
            });
    };
    return (
        <div>
            <form onSubmit={addNote} className={styles["form"]}>
                <input type="text" name="title" id="" placeholder="Title" />
                <textarea
                    name="content"
                    id=""
                    rows="3"
                    placeholder="Take a note..."
                ></textarea>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}
