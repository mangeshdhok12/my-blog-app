import React, { useEffect, useState } from 'react'
import './styles.css'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const EditPost = () => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState()

    const { id } = useParams()


    const handleSubmit = (e) => {

        e.preventDefault()
      
     


        axios.put('http://localhost/3001/editpost/'+id,{title, description} ).then(res => {
            if (res.data === "Success") {
                window.location.href = "/"
            }
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('http://localhost:3001/getpostbyid' + id).then(result => {
            setTitle(result.data.title)
            setDescription(result.data.description)
        }).catch(err => console.log(err))
    }, [])

    return (
        <div className='post_container'>
            <div className='post_form'>
                <form  onSubmit={handleSubmit}>
                    <h2>Create Post</h2>
                    <input type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea name="desc" id="desc" cols="30" rows="10"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    >

                    </textarea>

                    <button >Post</button>
                </form>
            </div>
        </div>
    )
}

export default EditPost
