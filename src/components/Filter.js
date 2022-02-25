import React from 'react';

class Filter extends React.Component {
  render() {
    const { filterCard, onInputChange } = this.props;
    return (
      <form id="filter">
        <h2>Todas as Cartas</h2>
        <p>Filtros de busca</p>
        <input
          name="filterName"
          type="text"
          data-testid="name-filter"
          placeholder="Nome da carta"
          onChange={ onInputChange }
        />
        <button type="submit">Buscar</button>
      </form>
    );
  }
}

export default Filter;
