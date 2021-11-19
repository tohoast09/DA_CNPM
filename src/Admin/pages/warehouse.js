import React, {Component} from 'react';
import WHData from './mockdata/MockWarehouse';

class Warehouse extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reports: WHData
		}
	}
	renderReport = () => {
		let {reports} = this.state;
		return reports.map((data, index) => {
			return (
				<tr>
          <td style={{width: '10%'}} className="text-center">{index+1}</td>
					<td style={{width: '50%'}} className="text-center">{data.name}</td>
					<td style={{width: '20%'}} className="text-center">{data.code}</td>
					<td style={{width: '20%'}} className="text-center">{data.quantity}</td>
        </tr>
			);
		});
	}
	render() {
  		return (
			<div className="container">
				<div className="page-header">
					<h1>Quản lí kho</h1>
				</div>
				<br></br>
				<table className="table table-hover">
					<thead>
						<th style={{width: '10%'}} className="text-center">STT</th>
						<th style={{width: '50%'}} className="text-center">Tựa sách</th>
						<th style={{width: '20%'}} className="text-center">Mã sách</th>
						<th style={{width: '20%'}} className="text-center">Còn lại trong kho (quyển)</th>
					</thead>
					<tbody>
						{this.renderReport()}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Warehouse;