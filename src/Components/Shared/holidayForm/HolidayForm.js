import { useEffect, useState } from 'react';

import AOS from 'aos';
import "aos/dist/aos.css"
import Form from 'react-bootstrap/Form';
import './holidayForm.scss';
import { handleValidate } from '../../../services/handleForm';
import { bookHoliday } from '../../../services/holidaysServ';

const HolidayForm = ({ initialValues }) => {

    const [values, setValues] = useState(initialValues);


    const [err, setErr] = useState({
        RoomCountErr: null,
        AdultCountErr: null,
        ChildErr: null,
        PeriodErr: null,
        TransportErr: null,
        IsApproveErr: null,
        startDateErr: null,
        endDateErr: null,
        HotelsErr: null,
        TouristErr: null,
        GuideErr: null,
        globalErr: null


    })

    let holidayData = {
        roomCount: values.RoomCount,
        adultCount: values.AdultCount,
        child: values.Child,
        period: values.Period,
        transport: values.Transport,
        isApprove: false,
        startDate: values.startDate,
        endDate: values.endDate,
        holidays:values.Holidays,
        tourist: values.Tourist,
        guide: values.Guide
    }


    const handleInputChange = (e) => {
        handleValidate(e, values, setValues, err, setErr)

    };


    const handleSubmit = (e) => {
        e.preventDefault()
        handleValidate(e)


        if (err.globalErr === null) {
            bookHoliday(holidayData)
        }

        console.log(err.globalErr)
    }

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <>
            <Form onSubmit={(e) => { handleSubmit(e) }} className="my-form">
            <Form.Group className="mb-3"       data-aos="fade-up" data-aos-delay="400"  controlId="formBasicRoomCount">
          <Form.Label >Room Count </Form.Label>
          <Form.Control required type="number" min="0" placeholder="Enter Room Count" value={values.RoomCount} name="HRoomCount" onChange={(e) => handleInputChange(e)} />
          <Form.Text className="text-danger">
            {err.RoomCountErr}
          </Form.Text>
        </Form.Group>

                <Form.Group className="mb-3" data-aos="fade-up" data-aos-delay="400" controlId="formBasicAdultCount">
                    <Form.Label >Adult Count </Form.Label>
                    <Form.Control required type="number" min="0" name="AdultCount"
                        placeholder=" Enter Adult Count" value={values.AdultCount} onChange={(e) => handleInputChange(e)} />
                    <Form.Text className="text-danger">
                        {err.AdultCountErr}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" data-aos="fade-up" data-aos-delay="400" controlId="formBasicRoomCount">
                    <Form.Label >Child Count </Form.Label>
                    <Form.Control required type="number" min="0" name="Child"
                        placeholder="Enter Child Count" value={values.Child} onChange={(e) => handleInputChange(e)} />
                    <Form.Text className="text-danger">
                        {err.ChildErr}
                    </Form.Text>
                </Form.Group>


                <Form.Group className="mb-3" data-aos="fade-up" data-aos-delay="400" controlId="formBasicStart">
                    <Form.Label >Start date</Form.Label>
                    <Form.Control required type="date"
                        value={values.startDate}
                        name="startDate"
                        placeholder="Start Date"
                        onChange={(e) => handleInputChange(e)} />
                    <Form.Text className="text-danger">
                        {err.startDateErr}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" data-aos="fade-up" data-aos-delay="400" controlId="formBasicEnd">
                    <Form.Label >End date</Form.Label>
                    <Form.Control required type="date"
                        value={values.endDate}
                        name="endDate"
                        placeholder="Enter End Date"
                        onChange={(e) => handleInputChange(e)} />
                    <Form.Text className="text-danger">
                        {err.endDateErr}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" data-aos="fade-up" data-aos-delay="400" controlId="formBasicPeriod">
                    <Form.Label >Days Number</Form.Label>
                    <Form.Control required type="Number" min="0" name="Period"
                        placeholder="Enter Days Number" value={values.Period} onChange={(e) => handleInputChange(e)} />
                    <Form.Text className="text-danger">
                        {err.PeriodErr}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" data-aos="fade-up" data-aos-delay="400" controlId="formBasicSingle">
                    <Form.Label >Transport: </Form.Label>
                    <Form.Check name="Transport"
                    value='Flight'
                        type='radio'
                        id='Flight'
                        label='Flight '
                        onChange={(e) => {handleInputChange(e)} }
                    />
                    <Form.Check name="Transport"
                    value='Bus'
                        type='radio'
                        id='Bus'
                        label='Bus'
                        onChange={(e) => {handleInputChange(e) }}
                    />
                    <Form.Check name="Transport"
                    value='Car'
                        type='radio'
                        id='Car'
                        label='Car'
                        onChange={(e) => {handleInputChange(e) }}
                    />
                </Form.Group>

                <Form.Text className="text-danger">
                    {err.globalErr}
                </Form.Text>




                {/* <h2>{total}</h2> */}
                <button className="primaryBtn bton" type="submit"> Book</button>

                <br />

            </Form>
        </>
    );
};

export default HolidayForm;