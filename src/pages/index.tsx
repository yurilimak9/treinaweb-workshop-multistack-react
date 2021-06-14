import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import {Button, Typography, Container, CircularProgress} from "@material-ui/core";
import {FormElementsContainer, ProfessionalsPaper, ProfessionalsContainer} from "@styles/pages/index.style";
import useIndex from "data/hooks/pages/useIndex.page";

export default function Home() {
    const {zipcode, setZipcode, validZipcode, seekProfessionals, erro, diarist, searchDone, carrying, remainingDiarist} = useIndex();

    return (
        <div>

            <SafeEnvironment/>
            <PageTitle
                title={"Conheça os profissionais"}
                subtitle={"Preencha seu endereço e veja todos os profissionais da sua localidade"}
            />

            <Container>
                <FormElementsContainer>
                    <TextFieldMask
                        mask={"99999-999"}
                        label={"Digite seu CEP"}
                        variant={"outlined"}
                        value={zipcode}
                        onChange={(event) => setZipcode(event.target.value)}
                        fullWidth
                    />

                    {erro && <Typography color={"error"}>{erro}</Typography>}
                    <Button
                        variant={"contained"}
                        color={"secondary"}
                        sx={{width: "220px"}}
                        disabled={!validZipcode || carrying}
                        onClick={() => seekProfessionals(zipcode)}
                    >
                        {carrying ? <CircularProgress size={20}/> : "Buscar"}
                    </Button>

                </FormElementsContainer>

                {searchDone && (diarist.length > 0 ?
                        <ProfessionalsPaper>
                            <ProfessionalsContainer>

                                {diarist.map((item, index) => {
                                    return (
                                        <UserInformation key={index} name={item.nome_completo} picture={item.foto_usuario} rating={item.reputacao} description={item.cidade}/>
                                    );
                                })}

                            </ProfessionalsContainer>

                            <Container sx={{textAlign: "center"}}>
                                {remainingDiarist > 0 && (
                                    <Typography sx={{mt: 5}}>
                                        ... e mais {remainingDiarist} {remainingDiarist > 1 ? "profissionais atendem" : "profissional atende"} ao seu endereço
                                    </Typography>
                                )}

                                <Button
                                    variant={"contained"}
                                    color={"secondary"}
                                    sx={{mt: 5}}
                                >Contratar um profissional</Button>
                            </Container>

                        </ProfessionalsPaper>
                        :
                        (
                            <Typography align={"center"} color={"textPrimary"} fontSize={25}>
                                Ainda não temos nenhuma diarista disponível em sua região
                            </Typography>
                        )
                )}
            </Container>

        </div>
    )
}
