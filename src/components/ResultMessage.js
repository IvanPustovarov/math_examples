import React from "react";

const ResultMessage = ({result, all, name}) => {
    return <div>{name ? name : `Пользователь`}, твой результат: {result}/{all}. Молодец! </div>
}

export default ResultMessage;