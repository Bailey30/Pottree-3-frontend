import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
width: 100vw;
/* border: 1px solid black; */
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
z-index: 200;
position: absolute;
background: white;
`

const Wrapper = styled.div`
width: 25vw;`
const ImageCont = styled.div`
width: 100%;`
const Image = styled.img`
width: 100%;`
const RightCont = styled.div``
const Text = styled.p`
text-align:center;`
const ButtonCont = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const Button = styled.button`
width: 45%;
height: 50px;
color: ${props => props.color};
background: ${props => props.bg};
`

function UploadSuccess({ previewImage }) {
    return (
        <Container>
            <Wrapper>
                <ImageCont>
                    <Image src={previewImage}></Image>
                </ImageCont>
                <RightCont>
                    <Text>
                        You item was successfully uploaded
                    </Text>
                    <ButtonCont>

                        <Button color="black" bg="white">
                            <Link to="/productpage" style={{color: "black", "textDecoration": "none"}}>
                                SEE IT IN THE SHOP
                            </Link>
                        </Button>

                        <Button color="white" bg="black">
                            <Link to="/uploadproduct" style={{color: "white", "textDecoration": "none"}}>
                                UPLOAD ANOTHER ITEM
                            </Link>
                        </Button>

                    </ButtonCont>
                </RightCont>

            </Wrapper>
        </Container>
    )
}

export default UploadSuccess