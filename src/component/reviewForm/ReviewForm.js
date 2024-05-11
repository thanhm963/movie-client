import {Form,Button} from 'react-bootstrap';

const ReviewForm = () => {
  return (
    <Form>
        <Form.Group className='mb-3' controlId="exampleForm.ControlTextareal">
                <Form.Label></Form.Label>
                <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
    </Form>
  )
}

export default ReviewForm
