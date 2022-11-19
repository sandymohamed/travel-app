import './postFeedback.scss';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { postFeedback } from '../../../services/hotelsServ';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const PostFeedback = ({ hotelId, userId }) => {

    const initial = {
        description: '',
        hotels: `${hotelId}`,
        tourist: `${userId}`,
    }

    const [data, setData] = useState(initial)
    const [err, serErr] = useState(null)

    const handleInputChange = (e) => {
     
            setData({
                ...data,
                description: e.target.value
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //  user hotel desc
        if (data.description.length > 3) {
            postFeedback(data)
            toast("post successfully !");


        } else {
            serErr('too short feedback')
        }

    }

    useEffect(()=> {

    },[])
    return (
        <div>
            <Form
                onSubmit={(e) => { handleSubmit(e) }}
                className="my-form">
                <Form.Group className="mb-3" data-aos="fade-up" data-aos-delay="400" controlId="formBasicDescription">
                    <Form.Label >give us feedback</Form.Label>
                    <Form.Control required type="text" name="description"
                        placeholder="give us feedback"
                        value={data.description}
                        onChange={(e) => handleInputChange(e)}
                    />
                    <Form.Text className="text-danger">
                        {err}
                    </Form.Text>
                </Form.Group>

                <button className="primaryBtn bton" type="submit"> Send</button>
                <ToastContainer />

<br />
            </Form>
        </div>
    );
};

export default PostFeedback;