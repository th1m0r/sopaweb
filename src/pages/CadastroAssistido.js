import React, { useState } from 'react';


export default function CadastroAssistido() {

    const [assistido, setAssistido] = useState({
        nome: '',
        dataNascimento: '',
        ponto: '',
        status: '',
    });

    async function handleSubmit(e) {
        e.preventDefault();
        //const response = await api.post("/login", {usuario, senha});
        console.log(assistido);
        //history.push('/main');
    }


    return (
        <div className="container-fluid">
            <h2>Cadastro de Assistidos</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Digite o nome do assistido"
                    value={assistido.nome}
                    onChange={e => setAssistido({ ...assistido, nome: e.target.value })} />
                <input
                    type="date"
                    placeholder="Informe data de nascimento"
                    value={assistido.dataNascimento}
                    onChange={e => setAssistido({ ...assistido, dataNascimento: e.target.value })} />

                <select
                    value={assistido.ponto}
                    onChange={e => setAssistido({ ...assistido, ponto: e.target.value })} >
                    <option value="CATEDRAL">CATEDRAL</option>
                    <option value="PRAÇA DA MÃO">PRAÇA DA MÃO</option>
                    <option value="ALECRIM">ALECRIM</option>
                </select>

                <select
                    value={assistido.status}
                    onChange={e => setAssistido({ ...assistido, status: e.target.value })}>
                    <option value="INCLUIDO">INCLUIDO</option>
                    <option value="APTO">APTO</option>
                    <option value="CADASTRADO">CADASTRADO</option>
                </select>

                <button type="submit">Salvar</button>

            </form>
        </div>
    )


}