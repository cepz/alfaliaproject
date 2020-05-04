import React from 'react'
import './Home.scss'

import SlideShow from '../../component/SlideShow'
import Card from '../../component/Card'

import { Container } from "react-bootstrap";

class Home extends React.Component {

    render() {
        return (
            <Container className="mt-4">
                <SlideShow />
                {/* <Card title="Boys Clothes"/> */}
            </Container>
        )

    }
}


export default Home
