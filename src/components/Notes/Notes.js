import axios from "axios";
import React, { useState, useEffect } from "react";
import { SERVER_URL } from "../../config/config";
import Loader from "../Loader/Loader";
import NewNote from "./NewNote";
import Note from "./Note";

export default function Notes(props) {
    const [notes, setNotes] = useState({ notes: [], loading: false });
    useEffect(() => {
        const getNotes = async () => {
            setNotes((st) => {
                return { notes: st.notes, loading: true };
            });
            axios.get(SERVER_URL + "/api/notes").then((res) => {
                console.log("Res.data = ", res.data);
                setNotes({ notes: res.data, loading: false });
                return res.data;
            });
        };
        getNotes();
    }, [props.refresh]);
    //   console.log(notes);
    return (
        <div>
            <NewNote refresh={props.refreshHandler} />
            {notes.loading ? (
                <Loader />
            ) : (
                notes.notes.map((val) => (
                    <Note key={val.title} title={val.title} content={val.content} />
                ))
            )}
        </div>
    );
}
