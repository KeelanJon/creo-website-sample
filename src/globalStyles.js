import { createGlobalStyle } from "styled-components"
import MindMeridianRegular from "./assets/font/MindMeridian/MindMeridianRegular.otf"
import MindMeridianBold from "./assets/font/MindMeridian/MindMeridianBold.otf"
import MindMeridianDisplay from "./assets/font/MindMeridian/MindMeridianDisplay.otf"

const GlobalStyle = createGlobalStyle`
 

    @font-face{
        font-family: 'Mind Meridian Regular';
        src: url(${MindMeridianRegular}) format('opentype');
        font-style: normal;
    }

    @font-face{
        font-family: 'Mind Meridian Bold';
        src: url(${MindMeridianBold}) format('opentype');
        font-style: normal;
    }

    @font-face{
        font-family: 'Mind Meridian Display';
        src: url(${MindMeridianDisplay}) format('opentype');
        font-style: normal; 
    }

    
    html *{  
        margin: 0;
        padding: 0; 
        box-sizing: border-box;
    }
    
    body{
        scroll-behavior: smooth;
        background: ${props => props.theme.main.backgroundColor};
        font-family: 'Mind Meridian Regular';

        h1{
            font-family: 'Mind Meridian Display';
        }

        h2{
            font-family: ${props => props.theme.fonts.display};
            font-size: ${props => props.theme.fontSizes.large};
        
            @media screen and (max-width: ${props =>
              props.theme.screenDimensions.mobile}) {
            font-size: 1.5rem;
    }
        
        }

        a{
            text-decoration: none !important;
            font-family: ${props => props.theme.fonts.bold};
        }

        
    }

`

export default GlobalStyle
