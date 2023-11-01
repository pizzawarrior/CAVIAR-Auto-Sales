import axios from "axios";

export const handleGet = (endpoint, stateFunction, name, trigger) => {
    axios
        .get(endpoint)
        .then(({ data }) => {
            stateFunction(data[name]);
            trigger(false);
        })
        .catch((err) => console.log(err));
};
