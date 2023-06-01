// import api from "../../../api/index";
import { useState } from "react";
import { IMaskInput } from "react-imask";

function Search() {
    const [Userdata, setUserdata] = useState({});

    //   const HandleLogin = async () => {
    //     try {
    //       const resp = await api({
    //         method: "POST",
    //         url: "/login",
    //         data: {
    //           name: String(Userdata?.name),
    //           //   senha: Userdata?.senha,
    //         },
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         json: true,
    //       });
    //       alert("Login feito com sucesso!");
    //       console.log({ Userdata });
    //     } catch (e) {
    //       alert("Error: Usuário não cadastrado!");
    //       console.error(e);
    //     }
    //   };

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
                                mask="00.000-000"
                                placeholder="Digite o seu CPF"
                                id="cep"
                                name="cep"
                                type="text"
                                onChange={(e) => {
                                    setUserdata({ ...Userdata, name: e.target.value });
                                }}
                                autoComplete="email"
                                required
                                className=" px-4 block w-full rounded-md border-0 py-1.5 text-slate-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            //   onClick={HandleLogin}
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
                </div>
            </div>
        </>
    );
}
export default Search;
