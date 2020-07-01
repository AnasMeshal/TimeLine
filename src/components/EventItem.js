//React
import React from "react";

//Styles
import { CardWrapper1, H2Wrapper, Image, CardWrapper, EventText, ListWrapper } from "../styles";

const EventItem = (props) => {
    console.log({props});   
    return (
        
        <ListWrapper>
            {props.event.right === "yes" ? <CardWrapper1>
            <H2Wrapper>
                <h2>{props.event.year}</h2>
            </H2Wrapper>
            <EventText>
                {props.event.whatHappen}
            </EventText>
            <Image src={props.event.img} alt={props.event.whatHappen}/>
        </CardWrapper1> : <CardWrapper>
            <Image src={props.event.img} alt={props.event.whatHappen} />
            <EventText>
                {props.event.whatHappen}    
            </EventText>
            <H2Wrapper>
                <h2>{props.event.year}</h2>
            </H2Wrapper>
        </CardWrapper>  }
        </ListWrapper>
    );
};




export default EventItem;

