import axios from "axios";
import { useState, useEffect } from "react";

export function Welcome() {
    const [greet, setGreet] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/')
            .then((res) => {
                setGreet(res.data)
            })
    }, [])

    return (
        <h1>{greet}</h1>
    );
}