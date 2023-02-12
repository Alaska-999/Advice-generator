import React, {FC, useEffect, useState} from 'react';
import styled from "styled-components";
import divider from '../images/pattern-divider-desktop.svg'
import diceIcon from '../images/icon-dice.svg'
import {dataAdvice, IAdvice} from "../types";
import axios from "axios";

const Advice: FC = () => {

    const [advice, setAdvice] = useState<IAdvice>({id: 0, advice: ''})

    useEffect(() => {
        getAdvice()
    }, [])

    const getAdvice = async () => {
        const res = await axios
            .get('https://api.adviceslip.com/advice')
        const data: dataAdvice = await res.data
        const adviceObject: IAdvice = data.slip
        setAdvice({id: adviceObject.id, advice: adviceObject.advice})
    }

    const getRandomAdvice = () => {
        getAdvice()
    }

    return (
        <AdviceContainer>
            <AdviceNum>ADVICE #{advice.id} </AdviceNum>
            <AdviceQuote>
                {advice.advice}
            </AdviceQuote>
            <Divider/>
            <Button onClick={getRandomAdvice}>
                <Dice/>
            </Button>
        </AdviceContainer>
    );
};

const AdviceContainer = styled.div`
  margin: 25px;
  max-width: 700px;
  padding: 50px 50px 0px;
  background-color: var(--grayish-blue-dark);
  border-radius: 10px;
`

const AdviceNum = styled.div`
  font-weight: 500;
  letter-spacing: 2px;
  text-align: center;
  color: var(--neon-green);
  padding-bottom: 20px;
  font-size: 18px;
`

const AdviceQuote = styled.div`
  text-align: center;
  font-size: var(--fz);
  color: var(--light-cyan);
  letter-spacing: 1px;
  margin-bottom: 30px;
`

const Divider = styled.div`
  background-size: auto;
  background-position: center center;
  background-image: url(${divider});
  width: 100%;
  height: 16px;
`

const Button = styled.div`
  background-color: var(--neon-green);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  position: relative;
  top: 25px;
  transition: all 0.1s ease;

  :hover {
    box-shadow: 0px 0 35px 2px var(--neon-green);
  }

  :active {
    background-color: #3be88b;
  }
`

const Dice = styled.div`
  background-image: url(${diceIcon});
  background-position: center center;
  width: 24px;
  height: 24px;
`

export default Advice;