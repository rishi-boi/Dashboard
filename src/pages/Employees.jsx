import React from 'react';
import { GridComponent, ColumnsDirective, Page, Search, Edit, Inject, ColumnDirective, Toolbar } from '@syncfusion/ej2-react-grids';

import { employeesData, contextMenuItems, employeesGrid } from '../data/dummy';
import { Header } from '../components';


const Employees = () => {
  return (
    <div className='m-2 md:m-10 md:p-10 bg-white rounded-xl'>
      <Header title='Employees' category='Page'></Header>
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Search,Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees