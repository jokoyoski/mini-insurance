import React, { Component } from 'react';
import './pagination.styles.scss';
import Pagination from './pagination';
import CountryCard from './CountryCard';
import Countries from 'countries-api';
import JsonData from '../pagination/MOCK_DATA.json'


class TestComponent extends Component {
  state = { allRecords: [], currentRecords: [], currentPage: null, totalPages: null }

  componentDidMount() {
    const allRecords = JsonData;
    console.log(allRecords)
    this.setState({ allRecords });
  }

  onPageChanged = data => {
    const { allRecords } = this.state;
    const { currentPage, totalPages, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentRecords = allRecords.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentRecords, totalPages });
  }
  render() {
    const { allRecords, currentRecords, currentPage, totalPages } = this.state;
    const totalRecords = allRecords.length;

    if (totalRecords === 0) return null;

    
    return (
      <div className="container mb-5">
        <div className="row d-flex flex-row py-5">
          <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
            <div className="d-flex flex-row py-4 align-items-center">
              <Pagination totalRecords={totalRecords} pageLimit={9} pageNeighbours={1} onPageChanged={this.onPageChanged} />
            </div>
          </div>
          {console.log(currentRecords)}
          { currentRecords.map(record => <CountryCard key={record.id} record={record} />) }
        </div>
      </div>
    );
  }
}

export default TestComponent;