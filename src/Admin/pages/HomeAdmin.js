import React, {Component} from 'react';
import ReportData from './mockdata/MockReport';

class HomeAdmin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reports: ReportData
		}
	}
	renderReport = () => {
		let {reports} = this.state;
		return reports.map((report, index) => {
			return (
			  	<tr>
					<td style={{width: '10%'}} className="text-center">{index+1}</td>
					<td style={{width: '50%'}} className="text-left">{report.title}</td>
					<td style={{width: '20%'}} className="text-center">{report.update}</td>
                	<th style={{width: '20%'}} className="text-center"><a href="https://drive.google.com/file/d/17_saZOXJPa-9GyriqJ-t69eLvzSSOiqZ/view?usp=sharing">Tải về</a></th>
				</tr>
			);
		});
	}
	render() {
  		return (
			<div className="container">
				<div className="page-header">
					<h1>Doanh thu</h1>
				</div>
				<br></br>
				<table className="table table-hover">
					<thead>
						<th style={{width: '10%'}} className="text-center">#</th>
						<th style={{width: '50%'}} className="text-center">Nội dung</th>
						<th style={{width: '20%'}} className="text-center">Ngày cập nhật</th>
						<th style={{width: '20%'}} className="text-center">Tải về</th>
					</thead>
					<tbody>
						{this.renderReport()}
					</tbody>
				</table>
			</div>
		);
	}
}

export default HomeAdmin;