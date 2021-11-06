import React, {Component} from 'react';
//import Customers from './Customer';
//import CusDatabase from './mockdata/CusData';

class CustomerDetail extends Component {
  	callback = () => {
		window.location.assign('./customer');
  	}

    renderCustomer() { 
		let {CusDatabase, index} = this.props;
      	return (
        	<div className='container'>
            	<tr>
              		<th style={{width: '10%'}}>{CusDatabase[index].id}</th>
	              	<th style={{width: '15%'}}>Họ và tên</th>
              		<th style={{width: '10%'}}>Giới tính</th>
              		<th style={{width: '15%'}}>Ngày sinh</th>
              		<th>Số điện thoại</th>
              		<th style={{width: '15%'}}>Email</th>
              		<th style={{width: '20%'}} className="text-right">Tổng số tiền</th>
            	</tr> 
        	</div>
      	);
    }
    render() { 
      return (
          <div className='container'>
            <div className='page-header'>
              <h1>Thông tin khách hàng</h1>
              <button type='button' onClick={() => this.callback()}>Trở về</button>
            </div>
            <div className="panel panel-success">
              <table className="table table-hover">
              <thead>
                <tr>
                  <th style={{width: '10%'}}>ID</th>
                  <th style={{width: '15%'}}>Họ và tên</th>
                  <th style={{width: '10%'}}>Giới tính</th>
                  <th style={{width: '15%'}}>Ngày sinh</th>
                  <th>Số điện thoại</th>
                  <th style={{width: '15%'}} className="text-center">Email</th>
                  <th style={{width: '20%'}} className="text-center">Tổng số tiền</th>
                </tr>
              </thead>
              <tbody>
			  		<td style={{width: '10%'}}>123456</td>
                  	<td style={{width: '15%'}}>AAAAAA</td>
                  	<td style={{width: '10%'}}>Nam</td>
                  	<td style={{width: '15%'}}>01/01/2001</td>
                  	<td>0101010101</td>
                  	<td style={{width: '15%'}}>010101@gmail.com</td>
                  	<td style={{width: '20%'}} className="text-center">100000 VND</td>
                	<br></br>
              </tbody>
              </table>
			  <table className="table table-hover">
				  <thead>
					  <th style={{width: '10%'}}>STT</th>
					  <th style={{width: '15%'}}>Mã đơn hàng</th>
					  <th style={{width: '15%'}}>Ngày mua</th>
					  <th style={{width: '15%'}}>Giá trị đơn</th>
					  <th style={{width: '30%'}} className="text-center">Địa chỉ</th>
					  <th style={{width: '15%'}}>Tình trạng</th>
				  </thead>
				  <tbody>
				  	  <td style={{width: '10%'}}>1</td>
					  <td style={{width: '15%'}}>ABCDEG0123456</td>
					  <td style={{width: '15%'}}>01/09/2021</td>
					  <td style={{width: '15%'}}>100000 VND</td>
					  <td style={{width: '30%'}}>100, đường AB, phường CD, quận EF, tp. GH</td>
					  <td style={{width: '15%'}}>Đã hoàn thành</td>
					  <br></br>
				  </tbody>
			  </table>
            </div>
          </div>
        );
    }
}

export default CustomerDetail;

