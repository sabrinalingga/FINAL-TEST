import React, { useState } from 'react'
import Card from './Card.js'
import * as b from 'react-bootstrap'

const HomePage = ({apiData}) => {
    const [keyword, setKeyword] = useState('');

    return (
        <div>
            <b.Container>
                <b.Row>
                    <b.Col>
                            <div style={{
                                display: "flex", 
                                flexDirection: "column",
                                height: '6rem',
                                width: '100%',
                                marginBottom: '2rem',
                                marginTop: '1rem'
                            
                            }}>
                                <div style={{width: "100%", flex: "3 0 1rem", margin: '0.25rem'}}>
                                    <b.Form.Control style={{width: '100%', height: '100%'}} type="text" placeholder="Search..." onChange={(e) => {
                                        setKeyword(e.target.value)
                                        
                                    }} value={keyword}/>
                                </div>
                                <div style={{width: "100%", flex: "1 0 1rem", margin: '0.25rem'}}>
                                    <b.Button style={{width: '100%', height: '100%', backgroundColor: "#202124" , borderColor: "#202124"}} variant="primary">Search</b.Button>
                                </div>
                            </div>
                    </b.Col>
                </b.Row>
                <b.CardColumns>
                    {
                        apiData.competitions.map((el) => {
                                if(keyword.length > 0) {
                                    return <b.Row key={el.id}>
                                        {el.name.toLowerCase().includes(keyword.toLowerCase()) ?<b.Col><Card title={el.name} subtitle={el.area.name} text='' link="Details" img='' idx={el.id}/></b.Col>: null}
                                    </b.Row>
                                } else {
                                    return <b.Row key={el.id}>
                                        <b.Col><Card title={el.name} subtitle={el.area.name} text='' link="Details" img='' idx={el.id}/></b.Col>
                                    </b.Row>
                                }
                            }
                        )
                    }
                </b.CardColumns>
            </b.Container>
        </div>
    )
}

export default HomePage