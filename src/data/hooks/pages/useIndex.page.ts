import {useState, useMemo} from "react";
import {UserShortInterface} from "data/@types/UserInterface";
import {ValidationService} from "data/services/ValidationService";
import {ApiService} from "data/services/ApiService";

export default function useIndex() {
    const [zipcode, setZipcode] = useState(""),
        validZipcode = useMemo(() => {
            return ValidationService.zipcode(zipcode);
        }, [zipcode]),
        [erro, setErro] = useState(""),
        [searchDone, setSearchDone] = useState(false),
        [carrying, setCarrying] = useState(false),
        [diarist, setDiarist] = useState([] as UserShortInterface[]),
        [remainingDiarist, setRemainingDiarist] = useState(0);

    async function seekProfessionals(zipcode: string) {
        setSearchDone(false);
        setCarrying(true);
        setErro("");

        try {

            const {data} = await ApiService.get<{
                diaristas: UserShortInterface[],
                quantidade_diaristas: number
            }>("/api/diaristas-cidade?cep=" + zipcode.replace(/\D/g, "")).then();
            setDiarist(data.diaristas)
            setRemainingDiarist(data.quantidade_diaristas);

            setSearchDone(true);
            setCarrying(false);

        } catch (error) {
            setErro("CEP não encontrado!");
            setCarrying(false);
        }
    }

    return {zipcode, setZipcode, validZipcode, seekProfessionals, erro, diarist, searchDone, carrying, remainingDiarist};
}