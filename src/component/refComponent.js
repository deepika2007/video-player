import React, { useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const VideoPlayer = () => {
    const videoRef = useRef();
    const handlePlay = () => {
        videoRef.current.play();
    }
    const handlePause = () => {
        videoRef.current.pause();
    }
    return (
        <Container fluid className='video-container d-flex align-items-center justify-content-center '>
            <Row className='w-100 d-flex justify-content-center'>
                <Col md={8} className='d-flex justify-content-between'>
                    <Button className='w-25' onClick={handlePlay} variant='success'>Play</Button>
                    <Button className='w-25' onClick={handlePause} variant='danger'>Pause</Button>
                </Col>
                <Col md={10} className='d-flex justify-content-between mt-4'>
                    <video width={1500} height={400} ref={videoRef}>
                        <source src='/video.mp4' type="video/mp4" />
                    </video>
                </Col>
            </Row>
        </Container>
    )
}

export default VideoPlayer