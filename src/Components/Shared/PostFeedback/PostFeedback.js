import './postFeedback.scss';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { postFeedback } from '../../../services/hotelsServ';

const PostFeedback = ({ hotelId, userId }) => {

    const initial = {
        description: '',
        Hotels: `${hotelId}`,
        Tourist: `${userId}`,
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
        console.log(data);
        if (data.description.length > 3) {
            postFeedback(data)

        } else {
            serErr('too short feedback')
        }

    }

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

<br />
            </Form>
        </div>
    );
};

export default PostFeedback;