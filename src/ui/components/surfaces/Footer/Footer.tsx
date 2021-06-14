import React from "react";
import {FooterStyled, FooterContainer, FooterTitle, AppList} from "./Footer.style";
import {Typography, Box} from "@material-ui/core";

const Footer = () => {
    return (
        <FooterStyled>
            <FooterContainer>
                <Box sx={{maxWidth: "400px"}}>
                    <FooterTitle>Quem Somos</FooterTitle>
                    <Typography variant={"body2"} sx={{mt: 2}}>
                        E-Diaristas te ajuda a encontrar um profissional
                        perfeito para realizar a limpeza da sua casa. Garantimos
                        a melhor profissional com total segurança e praticidade!
                        São milhares de clientes satisfeitos por todo o país.
                    </Typography>
                </Box>

                <div>
                    <FooterTitle>Baixe nosso aplicativo</FooterTitle>
                    <AppList>
                        <li>
                            <a href={"/"} target={"_blank"} rel={"noreferrer noopener"}>
                                <img src={"/img/logos/app-store.png"} alt={"AppStore"}/>
                            </a>
                        </li>
                        <li>
                            <a href={"/"} target={"_blank"} rel={"noreferrer noopener"}>
                                <img src={"/img/logos/google-play.png"} alt={"GooglePlay"}/>
                            </a>
                        </li>
                    </AppList>
                </div>
            </FooterContainer>
        </FooterStyled>
    );
};

export default Footer;