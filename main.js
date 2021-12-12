'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

    const tempClient = {
      nome: "Arlisson",
      email: "arlisson@gmail.com",
      celular: "81988456591",
      cidade: "Cabo"
    }

    const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [];
    const setLocalStorage = (dbClient) =>  localStorage.setItem('db_client', JSON.stringify(dbClient));

    const readClient = () => getLocalStorage();

    const createClient = (client) => {
      const dbClient = getLocalStorage();
      dbClient.push(client)
     setLocalStorage(dbClient);
    }

    // Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)