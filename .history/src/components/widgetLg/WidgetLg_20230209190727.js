import React from 'react'
import './widgetLg.scss'

function WidgetLg() {
  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle' >
        Latest Transactions
      </h3>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTh'>Customer</th>
          <th className='widgetLgTh'>Date</th>
          <th className='widgetLgTh'>Amount</th>
          <th className='widgetLgTh'>Status</th>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src='https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' className='widgetLgImg' />
            <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'>
            <button className='widgetLgButton'>Approved</button>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg

//!1:10