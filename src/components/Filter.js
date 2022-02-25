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
        <select data-testid="rare-filter" name="filterRare" onChange={ onInputChange }>
          <option selected value="">todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
        <button type="submit">Buscar</button>
      </form>
    );
  }
}

export default Filter;
