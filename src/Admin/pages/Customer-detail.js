import React, {Component} from 'react';
import OrderList from './mockdata/CusOrder';

class CustomerDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			orders: OrderList,
			stt: 0
		}
	}
	renderDetail = (id) => {
		let {orders, stt} = this.state;
		return orders.map((order) => {
			if (order.cus === id) {
				stt += 1;
				let tt;
				if (order.level === 2)		tt = "Chưa xử lí";
				else if (order.level === 1)	tt = "Đang vận chuyển";
				else if (order.level === 0)	tt = "Đã hoàn thành";
				return (
					<tr>
						<td style={{width: '10%'}}>{stt}</td>
						<td style={{width: '15%'}}>{order.code}</td>
					  	<td style={{width: '15%'}}>{order.date}</td>
					  	<td style={{width: '15%'}}>{order.price} VND</td>
					  	<td style={{width: '30%'}}>{order.address}</td>
					  	<td style={{width: '15%'}}>{tt}</td>
					</tr>
				);
			}
		});
	}
	render() { 
		let {cus} = this.props; 
		let gender;
		if (cus.sex === 0) 		gender = "Nam";
		else if (cus.sex === 1)	gender = "Nữ";
      	return (
          <div className='container'>
            <div className='page-header'>
              <h1 className="text-center">Thông tin khách hàng</h1>
              <button 
			  	type='button' 
				className="btn btn-primary marginR5"
				onClick={()=>this.props.handleBackward()}
			  >
				Trở về
			  </button>
            </div>
			<br></br>
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
			  		<td style={{width: '10%'}}>{cus.id}</td>
                  	<td style={{width: '15%'}}>{cus.name}</td>
                  	<td style={{width: '10%'}}>{gender}</td>
                  	<td style={{width: '15%'}}>{cus.bdate}</td>
                  	<td>{cus.phone}</td>
                  	<td style={{width: '15%'}}>{cus.email}</td>
                  	<td style={{width: '20%'}} className="text-center">{cus.total} VND</td>
					<br></br>
              </tbody>
              </table>
			  <h3 className="text-center">Danh sách đơn hàng</h3>
			  <br></br>
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
				  	  {this.renderDetail(cus.id)}
				  </tbody>
			  </table>
            </div>
          </div>
        );
    }
}

export default CustomerDetail;