// import api from "../../../api/index";
import axios from "axios";
import { IMaskInput } from "react-imask";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckBadgeIcon  } from "@heroicons/react/24/outline";


function Search() {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  const [cep, setCep] = useState("");
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
                value={cep}
                onChange={(e) => setCep(e.target.value)}
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
            {console.log({ dadosCep })}
            {dadosCep && (
              <div>
                <p className="text-gray-500">CEP: {dadosCep.cep}</p>
                <p className="text-gray-500">Estado: {dadosCep.state}</p>
                <p className="text-gray-500">Cidade: {dadosCep.city}</p>
                <p className="text-gray-500">Bairro: {dadosCep.neighborhood}</p>
                <p className="text-gray-500">Rua: {dadosCep.street}</p>
                {/* Exiba outros dados do CEP conforme necessário */}
              </div>
            )}
          </div>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                        <CheckBadgeIcon 
                          className="h-6 w-6 text-green-500"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Seu CEP está em nosso raio!
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                          Conheça melhor sobre-nós, será rapidinho
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <a
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-green-500 hover:bg-indigo-950 px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto"
                      href="https://credmei.com.br/"
                    >
                      Vamos-lá
                    </a>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Não quero mudar de vida
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
export default Search;
