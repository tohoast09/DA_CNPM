import React, {Component} from 'react';

class CustomerDetail extends Component {
	renderDetail = (orders) => {
		return orders.map((order, index) => {
			let tt;
			if (order.level === 2){
				tt = "Chưa xử lí";
			}
			else if (order.level === 1){
				tt = "Đang vận chuyển";
			}
			else if (order.level === 0){
				tt = "Đã hoàn thành";
			}
			return (
				<tr>
					<td style={{width: '10%'}}>{index + 1}</td>
					<td style={{width: '15%'}}>{order.code}</td>
				  <td style={{width: '15%'}}>{order.date}</td>
					<td style={{width: '15%'}}>{order.price} VND</td>
					<td style={{width: '30%'}}>{order.address}</td>
			  	<td style={{width: '15%'}} className="text-center"><b>{tt}</b></td>
				</tr>
			);
		});
	}
	render() { 
		let {cus} = this.props; 
		let gender = '';
		if (cus.gender === "male")			gender = "Nam";
		else if (cus.gender === "female")	gender = "Nữ";
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
                <th style={{width: '10%'}} className="text-center">ID</th>
                <th style={{width: '15%'}}>Tên tài khoản</th>
                <th style={{width: '10%'}}>Giới tính</th>
                <th style={{width: '15%'}}>Ngày sinh</th>
                <th>Số điện thoại</th>
                <th style={{width: '15%'}} className="text-center">Email</th>
			  				<th style={{width: '15%'}} className="text-center">Số dư ví</th>
								<th style={{width: '20%'}} className="text-center">Tổng tiền đã mua</th>
              </tr>
            </thead>
            <tbody> 
			  			<td style={{width: '10%'}}>{cus.id}</td>
              <td style={{width: '15%'}}>{cus.name}</td>
            	<td style={{width: '10%'}}>{gender}</td>
            	<td style={{width: '15%'}}>{cus.bdate}</td>
            	<td>{cus.phone}</td>
              <td style={{width: '15%'}}>{cus.email}</td>
							<td style={{width: '15%'}} className="text-center">{cus.wallet} VNĐ</td>
              <td style={{width: '20%'}} className="text-center">{cus.total} VNĐ</td>
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
							<th style={{width: '15%'}} className="text-center">Tình trạng</th>
						</thead> 
				  	<tbody>
				  	  {this.renderDetail(cus.orders)}
				  	</tbody>
		  		</table>
    	  </div>
      </div>
		); 
  } 
}

export default CustomerDetail; 