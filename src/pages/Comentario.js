import React, { useState, useEffect } from 'react';

const Comentarios = () => {
  const [nome, setNome] = useState('');
  const [comentario, setComentario] = useState('');
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    // Carregar comentários do localStorage quando o componente monta
    const comentariosSalvos = JSON.parse(localStorage.getItem('comentarios')) || [];
    setComentarios(comentariosSalvos);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoComentario = { nome, comentario };
    const comentariosAtualizados = [novoComentario, ...comentarios];
    setComentarios(comentariosAtualizados);
    localStorage.setItem('comentarios', JSON.stringify(comentariosAtualizados));
    setNome('');
    setComentario('');
  };

  return (
    <div>
      <h1>Comentários</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Comentário:</label>
          <textarea
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div>
        <h2>Comentários Salvos</h2>
        {Array.isArray(comentarios) && comentarios.length > 0 ? (
          comentarios.map((com, index) => (
            <div key={index}>
              <strong>{com.nome}:</strong>
              <p>{com.comentario}</p>
            </div>
          ))
        ) : (
          <p>Sem comentários ainda.</p>
        )}
      </div>
    </div>
  );
};

export default Comentarios;
