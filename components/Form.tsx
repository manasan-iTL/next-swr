import React, { useState, useRef } from "react";
import useSearchBook from "../hooks/useSearchBook";

const Form: React.FC<{}> = () => {
    type info = {
        title: string,
        description: string
    }


    type book = {
        id: string,
        volumeInfo: info
    }

    const [book, setBook] = useState<string>("")
    const [submit, setSubmit] = useState<boolean>(false)

    const { data, isLoading, isError } = useSearchBook(book, submit)

    const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setSubmit(false)
        setBook(e.target.value)
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSubmit(true)
    }

    return (
        <>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <input type="text"value={book} onChange={(e) => handleChange(e)}/>
                <button type="submit">検索</button>
            </form>
            {isLoading && <p>ローディング中・・・・</p>}
            <ul>
            { data && data.items?.map((book: book) => 
                <ul key={book.id}>
                    <li>タイトル：{book.volumeInfo.title}</li>
                    <li>概要：{book.volumeInfo.description}</li>
                </ul>)}
            </ul>
            {isError && <p>エラーメッセージ：{isError.message}</p>}
        </>
    )
}

export default Form