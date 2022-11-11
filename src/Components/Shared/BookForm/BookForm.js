import { useEffect, useState } from 'react';
import './bookForm.scss';

import AOS from 'aos';
import "aos/dist/aos.css"
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom'
import { getTotalPrice } from '../../../services/hotelsServ';

const BookForm = ({ initialValues, id, bookHotel }) => {
  const [values, setValues] = useState(initialValues);


  const [err, setErr] = useState({
    RoomCountErr: null,
    AdultCountErr: null,
    ChildErr: null,
    PeriodErr: null,
    SingleErr: null,
    DoubleErr: null,
    IsApproveErr: null,
    startDateErr: null,
    endDateErr: null,
    HotelsErr: null,
    TouristErr: null,
    GuideErr: null,
    globalErr: null


  })

  let hotelData = {
    roomCount: values.RoomCount,
    adultCount: values.AdultCount,
    child: values.Child,
    period: values.Period,
    single: values.Single,
    double: values.Double,
    isApprove: false,
    startDate: values.startDate,
    endDate: values.endDate,
    hotels: values.Hotels,
    tourist: values.Tourist,
    guide: values.Guide
  }

  // check that startDate is not past date 
  const isInTheFuture = (idate) => {
    var today = new Date().getTime()
    idate = new Date(idate).getTime()

    return (today - idate) < 0;
  }

  //check that endDate is after startDate 
  const isAfterStartDate = (startDate, endDate) => {
    startDate = new Date(startDate).getTime()
    endDate = new Date(endDate).getTime()

    return (startDate - endDate) < 0;
  }

  //check that endDate is after startDate 
  const checkPeriod = (startDate, endDate) => {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return (diffDays);
  }

  const handleValidate = (e) => {
    if (e.target.name === "RoomCount") {
      setValues({
        ...values,
        RoomCount: Number(e.target.value)
      })
      setErr({
        ...err,
        RoomCountErr: (((e.target.value <= 0) ? "should receive at least one room" : null)
          || ((Number(e.target.value) !== (values.Single + values.Double)) ?
            'invalid room count make sure that you insert right values in single and double fields' : null)),
        globalErr: (e.target.value === '') ? "This Field is Required" : null
      })
    }

    else if (e.target.name === "AdultCount") {
      setValues({
        ...values,
        AdultCount: Number(e.target.value),
      })
      setErr({
        ...err,
        globalErr: ((e.target.value === '') ? "This Field is Required" : null)
      })
    }

    else if (e.target.name === "Child") {
      setValues({
        ...values,
        Child: Number(e.target.value)
      })
      setErr({
        ...err,
        globalErr: ((e.target.value === '') ? "This Field is Required" : null)
      })
    }

    else if (e.target.name === "Single") {
      setValues({
        ...values,
        Single: Number(e.target.value)
      })
      setErr({
        ...err,
        globalErr: ((e.target.value === '') ? "This Field is Required" : null)
      })
    }

    else if (e.target.name === "Double") {
      setValues({
        ...values,
        Double: Number(e.target.value)
      })
      setErr({
        ...err,
        globalErr: ((e.target.value === '') ? "This Field is Required" : null)
      })
    }

    else if (e.target.name === "startDate") {
      setValues({
        ...values,
        startDate: e.target.value
      })
      setErr({
        ...err,
        startDateErr: (isInTheFuture(e.target.value) === false) ? "This is not a valid date" : null,
        globalErr: (e.target.value === '') ? "This Field is Required" : null
      })
    }

    else if (e.target.name === "endDate") {
      setValues({
        ...values,
        endDate: e.target.value
      })
      setErr({
        ...err,
        endDateErr: (isAfterStartDate(values.startDate, e.target.value) === false) ? "This is not a valid date end date should be after start date" : null,
        globalErr: (e.target.value === '') ? "This Field is Required" : null
      })
    }

    else if (e.target.name === "Period") {
      setValues({
        ...values,
        Period: Number(e.target.value)
      })
      setErr({
        ...err,
        PeriodErr: (Number(e.target.value) !== (checkPeriod(values.startDate, values.endDate))) ? "invalid number or invalid date" : console.log("e" + e.target.value),
        globalErr: (e.target.value === '') ? "This Field is Required" : null
      })
    }

  }

  let total= 0;
  const handleInputChange = (e) => {
    handleValidate(e)
  // total += Number(values.RoomCount) * Number(values.Period) * Number(values.Price)

  };


  const handleSubmit = (e) => {
    e.preventDefault()
    handleValidate(e)


    if (err.globalErr === null) {
      bookHotel(hotelData)
    }

    console.log(err.globalErr)
  }

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <>
      <Form onSubmit={(e) => { handleSubmit(e) }} className="my-form">
          <Form.Group className="mb-3"       data-aos="fade-up" data-aos-delay="400"  controlId="formBasicSingle">
            <Form.Label >Single Room Count</Form.Label>
            <Form.Control required type="number" min="0" name="Single"
              placeholder="Single Room Count" value={values.Single} onChange={(e) => handleInputChange(e)} />
            <Form.Text className="text-danger">
              {err.SingleErr}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3"       data-aos="fade-up" data-aos-delay="400"  controlId="formBasicDouble">
            <Form.Label >Double Room Count</Form.Label>
            <Form.Control required type="number" min="0" name="Double"
              placeholder="Double  Room Count" value={values.Double} onChange={(e) => handleInputChange(e)} />
            <Form.Text className="text-danger">
              {err.DoubleErr}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3"       data-aos="fade-up" data-aos-delay="400"  controlId="formBasicRoomCount">
          <Form.Label >Room Count </Form.Label>
          <Form.Control required type="number" min="0" placeholder="Enter Room Count" value={values.RoomCount} name="RoomCount" onChange={(e) => handleInputChange(e)} />
          <Form.Text className="text-danger">
            {err.RoomCountErr}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3"       data-aos="fade-up" data-aos-delay="400"  controlId="formBasicAdultCount">
          <Form.Label >Adult Count </Form.Label>
          <Form.Control required type="number" min="0" name="AdultCount"
            placeholder=" Enter Adult Count" value={values.AdultCount} onChange={(e) => handleInputChange(e)} />
          <Form.Text className="text-danger">
            {err.AdultCountErr}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3"       data-aos="fade-up" data-aos-delay="400"  controlId="formBasicRoomCount">
          <Form.Label >Child Count </Form.Label>
          <Form.Control required type="number" min="0" name="Child"
            placeholder="Enter Child Count" value={values.Child} onChange={(e) => handleInputChange(e)} />
          <Form.Text className="text-danger">
            {err.ChildErr}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3"       data-aos="fade-up" data-aos-delay="400"  controlId="formBasicStart">
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

        <Form.Group className="mb-3"       data-aos="fade-up" data-aos-delay="400"  controlId="formBasicEnd">
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

        <Form.Group className="mb-3"       data-aos="fade-up" data-aos-delay="400"  controlId="formBasicPeriod">
          <Form.Label >Days Number</Form.Label>
          <Form.Control required type="Number" min="0" name="Period"
            placeholder="Enter Days Number" value={values.Period} onChange={(e) => handleInputChange(e)} />
          <Form.Text className="text-danger">
            {err.PeriodErr}
          </Form.Text>
        </Form.Group>

        <Form.Text className="text-danger">
          {err.globalErr}
        </Form.Text>

        
{/* <h2>{total}</h2> */}
        <button className="primaryBtn bton" type="submit"> Book</button>
       

      </Form>

    </>
  );
};

export default BookForm;