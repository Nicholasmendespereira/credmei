// import api from "../../../api/index";
import axios from 'axios';
import { useState } from "react";
import { IMaskInput } from "react-imask";

function Search() {
    const [cep, setCep] = useState('');
    const [dadosCep, setDadosCep] = useState(null);

    const consultarCep = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/consulta/${cep}`);
            setDadosCep(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="h-1/2 w-1/2 rounded-full m-auto"
                        src="https://media.licdn.com/dms/image/C4D1BAQFMZmVGtj7qFQ/company-background_10000/0/1583511371968?e=1686052800&v=beta&t=P9nLOJZsIjN3PBXkDeH2OVhjye75yB9W1s-1cD-0Vrc"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Consulte abaixo se você está em nosso raio de atendimento!
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <form className="space-y-6" action="#" method="POST"> */}
                    <div>

                        <label
                            htmlFor="cep"
                            className="block text-sm font-medium leading-6 text-slate-500"
                        >
                            CEP:
                        </label>
                        <div className="mt-2">
                            <IMaskInput
                                // mask="00.000-000"
                                placeholder="Digite o seu CPF"
                                id="cep"
                                name="cep"
                                type="text"
                                value={cep} onChange={(e) => setCep(e.target.value)}
                                autoComplete="email"
                                required
                                className=" px-4 block w-full rounded-md border-0 py-1.5 text-slate-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={consultarCep}
                            className=" mt-5 flex w-full justify-center rounded-md bg-indigo-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Pesquisar
                        </button>
                    </div>
                    {/* </form> */}

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Caso não esteja consulte nosso :{" "}
                        <a
                            href="tel:+553432545588"
                            className="font-semibold leading-6 text-green-500 hover:text-indigo-500"
                        >
                            Atendimento Credmei !
                        </a>
                    </p>
                    <div>
                        {console.log({dadosCep})}
                        {dadosCep && (
                            <div>
                                <p className='text-gray-500'>CEP: {' ' }{dadosCep.cep}</p>
                                <p className='text-gray-500'>Estado: {' ' }{dadosCep.state}</p>
                                <p className='text-gray-500'>Cidade:{ ' '}{dadosCep.city}</p>
                                <p className='text-gray-500'>Bairro: {' ' }{dadosCep.neighborhood}</p>
                                <p className='text-gray-500'>Rua:{ ' '} {dadosCep.street}</p>
                                {/* Exiba outros dados do CEP conforme necessário */}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Search;
